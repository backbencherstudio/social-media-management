import React from "react";

export default function PaymentMethod() {
  return (
    <div className="max-w-[741px] mx-auto bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Add payment method
      </h1>
      <form className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Payment</h2>
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 border border-gray-100 p-4 rounded-lg">
          {/* Card Number */}
          <div className="xl:col-span-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>

          {/* Expiration Date */}
          <div className="xl:col-span-1">
            <label
              htmlFor="expirationDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>

          {/* Security Code */}
          <div className="xl:col-span-1">
            <label
              htmlFor="securityCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Security Code
            </label>
            <input
              type="password"
              id="securityCode"
              name="securityCode"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="CVC"
              maxLength={4}
            />
          </div>
        </div>
        <div className="space-y-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="IT">Italy</option>
            <option value="ES">Spain</option>
            <option value="NL">Netherlands</option>
            <option value="BE">Belgium</option>
            <option value="IN">India</option>
            <option value="BD">Bangladesh</option>
          </select>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          By providing your card information, you allow TagGrowth to charge your
          card for future payments in accordance with their terms.
        </p>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-black text-white py-3 md:py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Add payment method
          </button>
        </div>
      </form>
    </div>
  );
}
