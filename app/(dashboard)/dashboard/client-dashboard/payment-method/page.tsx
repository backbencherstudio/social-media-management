"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./_components/checkoutForm";

export default function PaymentMethod() {

  const stripePromise =  loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  return (
    <div className="max-w-[940px] mx-auto bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Add payment method
      </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Payment</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
    </div>
  );
}
