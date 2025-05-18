import React from "react";
import { useForm } from "react-hook-form";

interface PayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PayoutFormData {
  reseller: string;
  paymentMethod: string;
  accountInfo: string;
  amount: number;
}

export default function PayoutModal({ isOpen, onClose }: PayoutModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PayoutFormData>({
    defaultValues: {
      reseller: "",
      paymentMethod: "",
      accountInfo: "",
      amount: 0
    }
  });

  const onSubmit = (data: PayoutFormData) => {
    console.log("Form Data:", data);
    // Handle form submission here
    reset(); // Reset form after submission
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Process Payout</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Select Reseller */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Reseller
            </label>
            <select 
              {...register("reseller", { required: "Please select a reseller" })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            >
              <option value="">Select a reseller</option>
              <option value="darrell">Darrell Steward</option>
            </select>
            {errors.reseller && (
              <p className="text-red-500 text-sm mt-1">{errors.reseller.message}</p>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select 
              {...register("paymentMethod", { required: "Please select a payment method" })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            >
              <option value="">Select payment method</option>
              <option value="paypal">PayPal</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
            )}
          </div>

          {/* Account Number/Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Info
            </label>
            <input
              type="text"
              {...register("accountInfo", { 
                required: "Account information is required",
                minLength: { value: 5, message: "Account info is too short" }
              })}
              placeholder="Enter account number or email"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            {errors.accountInfo && (
              <p className="text-red-500 text-sm mt-1">{errors.accountInfo.message}</p>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount to Pay
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2">$</span>
              <input
                type="number"
                {...register("amount", { 
                  required: "Amount is required",
                  min: { value: 0.01, message: "Amount must be greater than 0" }
                })}
                placeholder="0.00"
                step="0.01"
                className="w-full border border-gray-200 rounded-lg px-7 py-2"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-blue-700 text-white rounded-lg py-2 mt-6 hover:bg-blue-800"
          >
            Process Payment
          </button>
        </form>
      </div>
    </div>
  );
}
