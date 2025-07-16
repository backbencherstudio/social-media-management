"use client";

import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { usePaymentServiceMutation } from "@/src/redux/features/user/payment/payment";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const [createPayment] = usePaymentServiceMutation();
  const services = useSelector((state: any) => state.payment.services);
  const lastService = services[services.length - 1];

  const orderItems = lastService?.map((service: any) => ({
    service_id: service.serviceId,
    service_tier_id: service.serviceTierId,
  }));

  useEffect(() => {
    const createPaymentIntentAsync = async () => {
      if (orderItems && orderItems.length > 0) {
        const order = {
          pakage_name: "Pro Package",
          order_items: orderItems,
        };
        try {
          if (order) {
            console.log(order);
            const res = await createPayment(order);
            setClientSecret(res?.data?.clientSecret);
          }
          // If your backend returns clientSecret, set it here:
          // setClientSecret(res.data?.clientSecret || res.clientSecret);
        } catch (err) {
          console.error("Error creating payment intent:", err);
        }
      }
    };
    createPaymentIntentAsync();
  }, []);

  const totalAmount = lastService?.reduce(
    (total: any, item: any) => total + item.price,
    0
  );
  const [loading, setLoading] = useState(false);

  // React Hook Form setup
  const { handleSubmit, control } = useForm();

  // Create the payment intent using RTK Query when the component loads
  const [createPaymentIntent, { data, error }] = usePaymentServiceMutation();

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        // Uncomment and implement this with your backend
        // const response = await createPaymentIntent(services).unwrap();
        // setClientSecret(response.clientSecret);
      } catch (err) {
        console.error("Error creating payment intent:", err);
      }
    };
    if (services.length > 0) {
      fetchPaymentIntent();
    }
  }, [services]);

  const onSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error.message);
    } else {
      // toast.success("Payment Done", paymentMethod?.id)
      console.log(paymentMethod);
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });
    if (confirmError) {
      toast.error("Payment failed:");
      // console.log("Payment failed:", confirmError.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      toast.success("Payment successful!");
      // console.log("", paymentIntent.id);
      router.push("/dashboard/user-dashboard/payment-invoices");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="card-element">
        <Controller
          name="card"
          control={control}
          render={({ field }) => (
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
              onBlur={field.onBlur}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <p className="mt-4">Total Price: ${totalAmount || 0}</p>
      <Button
        type="submit"
        className="mt-8 bg-black text-white cursor-pointer"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};

export default CheckoutForm;
