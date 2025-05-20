"use client";
import React from "react";
import { useForm } from "react-hook-form";

interface ServiceFormData {
  serviceName: string;
  description: string;
  includes: string;
  category: string;
  packages: {
    quantity: string;
    price: number;
  }[];
  socialMedia: string[];
  additionalPlatforms: {
    platforms: string[];
    price: number;
  };
}

export default function EditService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceFormData>();

  const onSubmit = (data: ServiceFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-semibold mb-6">Edit Service</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Service Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Name
            </label>
            <input
              {...register("serviceName", {
                required: "Service name is required",
              })}
              type="text"
              placeholder="Enter service name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.serviceName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.serviceName.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              placeholder="Enter service description"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Includes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Includes
            </label>
            <textarea
              {...register("includes", {
                required: "Includes field is required",
              })}
              rows={3}
              placeholder="Enter what's included in the service"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.includes && (
              <p className="text-red-500 text-sm mt-1">
                {errors.includes.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              {...register("category", {
                required: "Please select a category",
              })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select a category</option>
              <option value="marketing">Marketing</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="content">Content Creation</option>
              <option value="analytics">Analytics</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="space-y-4 mt-10">
            <h1 className="font-semibold text-gray-700">
              Set Quantity & Price
            </h1>

            {/* Packages */}
            {[1, 2, 3, 4, 5, 6, 7].map((packageNum) => (
              <div key={packageNum} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Package {packageNum}
                </label>
                <div className="grid grid-cols-12 gap-4">
                  <input
                    {...register(`packages.${packageNum - 1}.quantity`)}
                    type="text"
                    placeholder={`Enter quantity (e.g., ${
                      packageNum * 5
                    } posts)`}
                    className="col-span-8 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    {...register(`packages.${packageNum - 1}.price`, {
                      valueAsNumber: true,
                    })}
                    type="number"
                    placeholder="Price"
                    className="col-span-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Selection */}
          <div>
            <h1 className="font-semibold text-gray-700">Select Social Media</h1>
            <div className="flex flex-wrap gap-4 mt-5">
              {[
                "Instagram",
                "Twitter",
                "Facebook",
                "LinkedIn",
                "Pinterest",
                "Meta",
              ].map((platform) => (
                <div
                  key={platform}
                  className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md"
                >
                  <input
                    {...register("socialMedia")}
                    type="checkbox"
                    id={platform.toLowerCase()}
                    value={platform}
                    className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                  />
                  <label
                    htmlFor={platform.toLowerCase()}
                    className="text-sm text-gray-700"
                  >
                    {platform}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Select Additional Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <h1 className="font-semibold text-gray-700">
                Select Additional Platforms
              </h1>
              <div className="flex flex-wrap gap-4 mt-5">
                {[
                  "Instagram",
                  "Twitter",
                  "Facebook",
                  "LinkedIn",
                  "Pinterest",
                  "Meta",
                ].map((platform) => (
                  <div
                    key={platform}
                    className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md"
                  >
                    <input
                      {...register("additionalPlatforms.platforms")}
                      type="checkbox"
                      id={`additional-${platform.toLowerCase()}`}
                      value={platform}
                      className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                    />
                    <label
                      htmlFor={`additional-${platform.toLowerCase()}`}
                      className="text-sm text-gray-700"
                    >
                      {platform}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Set Price
              </label>
              <input
                {...register("additionalPlatforms.price", {
                  valueAsNumber: true,
                  required: "Price is required for additional platforms",
                })}
                type="number"
                placeholder="Enter price"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.additionalPlatforms?.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.additionalPlatforms.price.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Create Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
