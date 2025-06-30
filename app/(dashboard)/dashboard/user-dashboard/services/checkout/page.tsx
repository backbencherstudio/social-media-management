"use client";

import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Define form data type
type CheckoutFormData = {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingCountry: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  isCompanyPurchase: boolean;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  termsAccepted: boolean;
  referralSource: string;
  learningSource: string;
};

export default function Checkout() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black transition-colors"
        >
          <IoArrowBack className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>
      <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Billing & Payment</h1>
        <p className="text-gray-600 text-sm md:text-base mb-8">Affordable marketing services from $99/mo. Cancel anytime.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Company Name */}
            <div className="col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                {...register("company", {
                  required: "Company name is required",
                })}
                type="text"
                id="company"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your company name"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                id="firstName"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                id="lastName"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Sign in text */}
            <p className="col-span-1 md:col-span-2 text-sm md:text-base">
              Already have an account? <span className="font-semibold cursor-pointer hover:text-gray-800">Sign in here.</span>
            </p>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone
              </label>
              <input
                {...register("phone", { required: "Phone number is required" })}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Country Select */}
            <div>
              <label
                htmlFor="billingCountry"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Country
              </label>
              <select
                {...register("billingCountry", {
                  required: "Country is required",
                })}
                id="billingCountry"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
              </select>
              {errors.billingCountry && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.billingCountry.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your street address"
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your city"
              />
            </div>

            <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Country */}
              <div>
                <label
                  htmlFor="billingCountry"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country
                </label>
                <select
                  id="billingCountry"
                  name="billingCountry"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                </select>
              </div>

              {/* State/Province/Region */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  State / Province / Region
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your state"
                />
              </div>

              {/* Postal/Zip Code */}
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Postal / Zip Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter postal code"
                />
              </div>
              {/* checkbox */}
              <div className="col-span-2 mt-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="isCompanyPurchase"
                    name="isCompanyPurchase"
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="text-sm text-gray-700">
                    I'm purchasing for a company
                  </span>
                </label>
              </div>
            </div>
            {/* Payment Section */}
            <h1 className="col-span-1 md:col-span-2 text-xl md:text-2xl font-bold mt-8">Payment</h1>
            
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {/* Card Number */}
                <div className="md:col-span-4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    {...register("cardNumber", {
                      required: "Card number is required",
                      pattern: {
                        value: /^[0-9]{16}$/,
                        message: "Please enter a valid card number",
                      },
                    })}
                    type="text"
                    id="cardNumber"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                  {errors.cardNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.cardNumber.message}
                    </p>
                  )}
                </div>

                {/* Expiration Date */}
                <div className="md:col-span-1">
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
                <div className="md:col-span-1">
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
            </div>

            <div className="col-span-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  {...register("termsAccepted", {
                    required: "You must accept the terms and conditions",
                  })}
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-sm text-gray-700">
                  By signing up I accept the{" "}
                  <a href="/terms" className="font-semibold hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/refund-policy"
                    className="font-semibold hover:underline"
                  >
                    Refund Policy
                  </a>
                  .{" "}
                  <a
                    href="/terms"
                    className="block font-semibold hover:underline"
                  >
                    View Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/refund-policy"
                    className="font-semibold hover:underline"
                  >
                    Refund Policy
                  </a>
                </span>
              </label>
            </div>
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* How did you hear about TagGrowth? */}
              <div className="col-span-2">
                <label
                  htmlFor="referralSource"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  How did you hear about TagGrowth?
                </label>
                <select
                  id="referralSource"
                  name="referralSource"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select an option</option>
                  <option value="search">
                    Search Engine (Google, Bing, etc.)
                  </option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Colleague</option>
                  <option value="blog">Blog or Article</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* How did you learn how TagGrowth works? */}
              <div className="col-span-2">
                <label
                  htmlFor="learningSource"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  How did you learn how TagGrowth works?
                </label>
                <select
                  id="learningSource"
                  name="learningSource"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select an option</option>
                  <option value="website">Website Content</option>
                  <option value="demo">Product Demo</option>
                  <option value="tutorial">Tutorial Videos</option>
                  <option value="documentation">Documentation</option>
                  <option value="customer_support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-8">
            {/* Complete Purchase Button */}
            <div className="col-span-1 md:col-span-2 mt-8">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-sm md:text-base"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
