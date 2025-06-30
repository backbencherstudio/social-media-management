import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function WithdrawModal() {
  return (
    <Dialog>
      <DialogTrigger className="bg-black text-white px-4 py-2 rounded-lg">
        Withdraw Earnings
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Withdraw Earnings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="flex justify-between">
            {/* Available Amount */}
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Total Available Amount
              </p>
              <p className="text-xl text-gray-900">$1,500.00</p>
            </div>

            {/* Withdraw Date */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Withdraw Date</p>
              <p className="text-xl  text-gray-900">
                January 30, 2024
              </p>
            </div>
          </div>

          {/* Withdraw Amount */}
          <div>
            <label className="text-sm text-gray-500 mb-1 block">
              Withdraw Amount ($)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Select Bank */}
          <div>
            <label className="text-sm text-gray-500 mb-1 block">
              Select Bank
            </label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Select a bank</option>
              <option value="bank1">Bank of America</option>
              <option value="bank2">Chase Bank</option>
              <option value="bank3">Wells Fargo</option>
            </select>
          </div>

          {/* Withdraw Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg font-medium">
            Withdraw Earnings
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
