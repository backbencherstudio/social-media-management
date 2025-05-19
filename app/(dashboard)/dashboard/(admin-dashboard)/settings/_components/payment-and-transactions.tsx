import React from "react";
import { useForm } from "react-hook-form";

interface PaymentFormData {
  minimumWithdrawal: string;
  processingFee: number;
  processingTime: string;
  flatRate: boolean;
  percentage: boolean;
  value: string;
  paymentMethods: {
    paypal: boolean;
    payoneer: boolean;
    card: boolean;
    bank: boolean;
  };
}

export default function PaymentAndTransactions() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PaymentFormData>({
    defaultValues: {
      minimumWithdrawal: "",
      processingFee: 0,
      processingTime: "",
      flatRate: false,
      percentage: false,
      value: "",
      paymentMethods: {
        paypal: false,
        payoneer: false,
        card: false,
        bank: false,
      },
    },
  });

  const onSubmit = (data: PaymentFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg">
      <div>
        <h2 className="text-xl font-semibold mb-4">Payment & Transactions</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        {/* Minimum Withdrawal Amount */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Minimum Withdrawal Amount
          </label>
          <select
            {...register("minimumWithdrawal", { required: "This field is required" })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select minimum amount</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
          </select>
          {errors.minimumWithdrawal && (
            <p className="text-red-500 text-sm">{errors.minimumWithdrawal.message}</p>
          )}
        </div>

        {/* Withdrawal Processing Fee */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Withdrawal Processing Fee (%)
          </label>
          <input
            type="number"
            {...register("processingFee", {
              required: "This field is required",
              min: { value: 0, message: "Must be greater than or equal to 0" },
              max: { value: 100, message: "Must be less than or equal to 100" },
            })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter processing fee percentage"
          />
          {errors.processingFee && (
            <p className="text-red-500 text-sm">{errors.processingFee.message}</p>
          )}
        </div>

        {/* Withdrawal Processing Time */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Withdrawal Processing Time
          </label>
          <select
            {...register("processingTime", { required: "This field is required" })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select processing time</option>
            <option value="instant">Instant (within 24 hours)</option>
            <option value="24">1-2 Business Days</option>
            <option value="48">2-3 Business Days</option>
            <option value="72">3-5 Business Days</option>
            <option value="168">5-7 Business Days</option>
          </select>
          {errors.processingTime && (
            <p className="text-red-500 text-sm">{errors.processingTime.message}</p>
          )}
        </div>

        <div className="flex justify-between">
          {/* checkbox */}
          <div className="flex-1 flex items-center pt-6 gap-16">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("flatRate")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">
                Flat Rate ($)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("percentage")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">
                Percentage (%)
              </label>
            </div>
          </div>
          {/* input */}
          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Value
            </label>
            <input
              type="text"
              {...register("value", {
                required: "This field is required",
              })}
              placeholder="Value"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.value && (
              <p className="text-red-500 text-sm">{errors.value.message}</p>
            )}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Payment Methods
          </label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("paymentMethods.paypal")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">PayPal</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("paymentMethods.payoneer")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">Payoneer</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("paymentMethods.card")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">Visa/MasterCard</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("paymentMethods.bank")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">Bank Transfer</label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
