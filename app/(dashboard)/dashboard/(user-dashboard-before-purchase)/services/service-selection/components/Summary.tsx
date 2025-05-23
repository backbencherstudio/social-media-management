import { PhoneCall } from "lucide-react";
import React from "react";

export default function SummaryCard() {
  return (
    <div className="w-full rounded-xl bg-white p-2 space-y-5 ">
      <h3 className="text-lg font-semibold text-gray-900">Summary</h3>

      {/* selected services */}
      <div className="border-b border-gray-300 pb-1.5">
        <div className="flex justify-between items-center font-semibold text-gray-800">
          <p>Social Media Post</p>
          <p>$99.00</p>
        </div>
        <p className="text-gray-800 text-xs  ml-4">Qty 1</p>
      </div>

      {/* Promo code */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter promo code"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black "
        />
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900">
          Apply
        </button>
      </div>

      {/* Total */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-lg font-bold text-black">$0.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">USD</p>
          <p className="text-xs text-gray-500">$1,346.00 month</p>
        </div>
      </div>

      {/* Promo Info */}
      <div className="rounded-md border border-gray-200 px-3 py-3 text-sm text-gray-700 flex items-start gap-2 bg-gray-50 flex ">
        <p>
          <PhoneCall className="w-5 h-5" />
        </p>
        <p>
          Orders over <strong>$149+</strong> qualify for monthly content review
          calls
        </p>
      </div>
    </div>
  );
}
