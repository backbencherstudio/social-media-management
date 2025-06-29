import { useUpdatePaymentAndTransactionsMutation } from "@/src/redux/features/admin/settings/payment-and-transactions";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface PaymentFormData {
  minimumWithdrawalAmount: number;
  withdrawalProcessingFee: number;
  withdrawalProcessingTime: string;
  isFlatCommission: boolean;
  flatCommissionValue: number | null;
  percentageCommissionValue: number | null;
  paymentMethods: string[];
}

export default function PaymentAndTransactions() {
  const [updatePaymentAndTransactions, { isError, isLoading }] =
    useUpdatePaymentAndTransactionsMutation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PaymentFormData>();

  const onSubmit = async (data: PaymentFormData) => {
    // Transform the data to match the required format
    const formattedData = {
      minimum_withdrawal_amount: Number(data?.minimumWithdrawalAmount),
      withdrawal_processing_fee: Number(data?.withdrawalProcessingFee),
      withdrawal_processing_time:
        data.withdrawalProcessingTime === "48"
          ? "2-3 Business Days"
          : data.withdrawalProcessingTime === "24"
          ? "1-2 Business Days"
          : data.withdrawalProcessingTime === "72"
          ? "3-5 Business Days"
          : data.withdrawalProcessingTime === "168"
          ? "5-7 Business Days"
          : "Instant",
      is_flat_commission: Boolean(data?.isFlatCommission),
      flat_commission_value: data?.isFlatCommission
        ? Number(data?.flatCommissionValue)
        : null,
      percentage_commission_value: !data?.isFlatCommission
        ? Number(data?.percentageCommissionValue)
        : null,
      payment_methods: data?.paymentMethods || [],
    };

    await updatePaymentAndTransactions(formattedData);
    toast.success("Payment and transaction update successfully");
  };

  // Watch the commission type to handle value changes
  const isFlat = watch("isFlatCommission");

  // Handle commission type change
  React.useEffect(() => {
    if (isFlat) {
      setValue("percentageCommissionValue", null);
    } else {
      setValue("flatCommissionValue", null);
    }
  }, [isFlat, setValue]);

  return (
    <div className="space-y-6 p-4 md:p-6 bg-white rounded-lg">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Payment & Transactions
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:gap-6">
        {/* Minimum Withdrawal Amount */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Minimum Withdrawal Amount
          </label>
          <select
            {...register("minimumWithdrawalAmount", {
              required: "This field is required",
            })}
            className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none text-sm md:text-base"
          >
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="150">$150</option>
            <option value="200">$200</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
          </select>
        </div>

        {/* Withdrawal Processing Fee */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Withdrawal Processing Fee (%)
          </label>
          <input
            type="number"
            {...register("withdrawalProcessingFee", {
              required: "This field is required",
              min: { value: 0, message: "Must be greater than or equal to 0" },
              max: { value: 100, message: "Must be less than or equal to 100" },
            })}
            className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm md:text-base"
          />
        </div>

        {/* Commission Type and Value */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
          <div className="w-full lg:flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                {...register("isFlatCommission")}
                value="true"
                className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">Flat Rate ($)</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                {...register("isFlatCommission")}
                value="false"
                className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">Percentage (%)</label>
            </div>
          </div>
          <div className="w-full lg:flex-1 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Value
            </label>
            <input
              type="number"
              {...register(
                isFlat ? "flatCommissionValue" : "percentageCommissionValue",
                {
                  required: "This field is required",
                  min: { value: 0, message: "Must be greater than 0" },
                }
              )}
              placeholder={isFlat ? "Enter flat rate" : "Enter percentage"}
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm md:text-base"
            />
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Payment Methods
          </label>
          <div className="grid grid-cols-1 gap-2">
            {["PayPal", "Visa/MasterCard", "Bank Transfer"].map((method) => (
              <div key={method} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("paymentMethods")}
                  value={method}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600">{method}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="sm:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
