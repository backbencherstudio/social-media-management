"use client";

import React from "react";
import {
  FaChevronDown,
  FaCloudUploadAlt,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";
import { useForm } from "react-hook-form";

interface ProfileFormData {
  photo: FileList | null;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  state: string;
  postalCode: string;
  phoneNumber: string;
  timezone: string;
  confirmPassword: string;
}

export default function PersonalInformation() {
  const { register, handleSubmit } = useForm<ProfileFormData>();

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form data:", data);
  };

  return (
    <div className="w-full ">
      <div className="rounded-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium font-semibold">
          Personal Information
        </h1>

        <form
          className="space-y-6 sm:space-y-8 md:space-y-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Upload and Delete */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg bg-gray-50">
            <div className="relative mb-4 sm:mb-0 mr-5">
              <div className="rounded-full bg-gray-200 flex items-center justify-center relative p-2 sm:p-3">
                <FaUserCircle className="w-10 h-10" />
                <FaChevronDown className="absolute -right-3 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 w-full sm:w-auto">
              <label
                htmlFor="uploadPhoto"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#F5F5F7] border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base hover:bg-gray-50 transition-colors"
              >
                <FaCloudUploadAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                Upload Photo
                <input
                  type="file"
                  id="uploadPhoto"
                  accept="image/*"
                  className="hidden"
                  {...register("photo")}
                />
              </label>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#F5F5F7] border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base hover:bg-gray-50 transition-colors"
              >
                <FaTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                Delete Photo
              </button>
            </div>
          </div>
          {/* First Name And Last Name */}
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
          </div>
          {/* Email and Password */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* Password And Confirm Password */}
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="..................."
                />
              </div>
              {/* Confirm Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="..................."
                />
              </div>
            </div>
          </div>
          {/* Billing Address Section */}
          <div className="pt-4 sm:pt-6 md:pt-8">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium font-semibold mb-4 sm:mb-6">
              Billing address
            </h1>
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("address", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register("city", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    {...register("country", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select a country</option>
                    <option value="BD">Bangladesh</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province / Region
                  </label>
                  <select
                    id="state"
                    {...register("state", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select a state</option>
                    <option value="DH">Dhaka</option>
                    <option value="CH">Chittagong</option>
                    <option value="RJ">Rajshahi</option>
                    <option value="KH">Khulna</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal / Zip Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    {...register("postalCode", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  Phone Number */}
          <div>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
          {/* Timezone */}
          <div>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label
                  htmlFor="timezone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Timezone
                </label>
                <select
                  id="timezone"
                  {...register("timezone", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select your timezone</option>
                  <option value="UTC+6">
                    Bangladesh Standard Time (UTC+6)
                  </option>
                  <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                  <option value="UTC+1">Central European Time (UTC+1)</option>
                  <option value="UTC+5:30">
                    India Standard Time (UTC+5:30)
                  </option>
                  <option value="UTC+8">China Standard Time (UTC+8)</option>
                  <option value="UTC+9">Japan Standard Time (UTC+9)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="w-full py-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 pl-2">
              Payment Method
            </h2>

            <div className="bg-white rounded-lg  p-4 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-3">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                        alt="Visa"
                        className="h-4"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiration date
                  </label>
                  <input
                    type="text"
                    placeholder="MM YY"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Security code
                  </label>
                  <input
                    type="text"
                    placeholder="cvc"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="BD">Bangladesh</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                </select>
              </div>

              <p className="text-sm text-gray-500 pt-2">
                By providing your card information, you allow Feedbird to charge
                your card for future payments in accordance with their terms.
              </p>
            </div>
          </div>
          {/* Submit Button */}
          <div className="pt-4 sm:pt-6">
            <button
              type="submit"
              className="w-full sm:w-auto  px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base font-medium"
            >
              Updated
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
