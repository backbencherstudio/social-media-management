import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ConfirmIcon from "@/public/incons/confirm";
import { CiCreditCard1 } from "react-icons/ci";

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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<PayoutFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PayoutFormData>({
    defaultValues: {
      reseller: "",
      paymentMethod: "",
      accountInfo: "",
      amount: 0,
    },
  });

  const onSubmit = (data: PayoutFormData) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (formData) {
      console.log("Form Data:", formData);
      // Handle form submission here
      reset(); // Reset form after submission
      setShowConfirmation(false);
      onClose(); // Close modal after submission
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setFormData(null);
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
              {...register("reseller", {
                required: "Please select a reseller",
              })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            >
              <option value="">Select a reseller</option>
              <option value="darrell">Darrell Steward</option>
            </select>
            {errors.reseller && (
              <p className="text-red-500 text-sm mt-1">
                {errors.reseller.message}
              </p>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              {...register("paymentMethod", {
                required: "Please select a payment method",
              })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            >
              <option value="">Select payment method</option>
              <option value="paypal">PayPal</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm mt-1">
                {errors.paymentMethod.message}
              </p>
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
                minLength: { value: 5, message: "Account info is too short" },
              })}
              placeholder="Enter account number or email"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            {errors.accountInfo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountInfo.message}
              </p>
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
                  min: {
                    value: 0.01,
                    message: "Amount must be greater than 0",
                  },
                })}
                placeholder="0.00"
                step="0.01"
                className="w-full border border-gray-200 rounded-lg px-7 py-2"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-3 w-full bg-blue-700 text-white rounded-lg py-2 mt-6 hover:bg-blue-800"
          >
            <CiCreditCard1 className="w-5 h-5" /> Release Payment
          </button>
        </form>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <div className="flex justify-end items-center mb-4">
                <button
                  onClick={handleCancel}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-5 py-10 space-y-4">
                <div className="bg-red-50 rounded-full p-4 mb-5">
                  <ConfirmIcon />
                </div>
                <h3 className="text-2xl font-semibold">
                  Confirm Payment Release
                </h3>
                <p className="text-gray-500">
                  Once released, the payment cannot be reversed. Are you sure
                  you want to proceed?
                </p>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleConfirm}
                  className="flex items-center justify-center gap-3 w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 cursor-pointer"
                >
                 <CiCreditCard1 className="w-5 h-5" />  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
