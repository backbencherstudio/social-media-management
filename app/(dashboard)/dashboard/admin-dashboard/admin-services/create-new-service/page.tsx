"use client";
import { useGetAllCategoriesQuery } from "@/src/redux/features/admin/blog/categorys";
import { useCreateServiceMutation } from "@/src/redux/features/admin/services";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface ServiceFormData {
  name: string;
  description: string;
  category_id: string;
  features: string;
  tiers: {
    max_post: number;
    price: number;
  }[];
  primary_platform: string;
  extra_platforms: string[];
  extra_platform_Price: number;
}

export default function CreateNewService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceFormData>();
  const router = useRouter();
  const [createService, { isLoading, error, isSuccess }] =
    useCreateServiceMutation();
  const { data } = useGetAllCategoriesQuery();

  // Handle form submission
  const onSubmit = async (data: ServiceFormData) => {
    const validTiers = [
      {
        max_post: data.tiers[0]?.max_post || 0,
        price: data.tiers[0]?.price || 0,
      },
      {
        max_post: data.tiers[1]?.max_post || 0,
        price: data.tiers[1]?.price || 0,
      },
      {
        max_post: data.tiers[2]?.max_post || 0,
        price: data.tiers[2]?.price || 0,
      },
      {
        max_post: data.tiers[3]?.max_post || 0,
        price: data.tiers[3]?.price || 0,
      },
      {
        max_post: data.tiers[4]?.max_post || 0,
        price: data.tiers[4]?.price || 0,
      },
      {
        max_post: data.tiers[5]?.max_post || 0,
        price: data.tiers[5]?.price || 0,
      },
      {
        max_post: data.tiers[6]?.max_post || 0,
        price: data.tiers[6]?.price || 0,
      },
    ].filter((tier) => tier.max_post > 0 && tier.price > 0);

    const allServices = {
      ...data,
      features: data.features.split("\n"),
      tiers: validTiers,
    };
    await createService(allServices);
  };

  return (
    <div className="p-4 md:p-6">
      {/*  */}
      <p
        className="text-sm text-gray-500 flex items-center gap-1 font-medium 
      mb-6"
      >
        <button
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
              fill="#1D1F2C"
            />
          </svg>
          <p>
            <span className="text-gray-500">Services / </span>
            <span className="text-gray-900 font-medium">
              Create new service
            </span>
          </p>
        </button>
      </p>
      {/*  */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          Create New Service
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
        >
          {/* Service Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Name
            </label>
            <input
              {...register("name", {
                required: "Service name is required",
              })}
              type="text"
              placeholder="Enter service name"
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />
            {errors.name && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.name.message}
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
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />
            {errors.description && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
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
              {...register("features", {
                required: "Includes field is required",
              })}
              rows={3}
              placeholder="Enter what's included in the service"
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />
            {errors.features && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.features.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              {...register("category_id", {
                required: "Please select a category",
              })}
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            >
              {data?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.category_id.message}
              </p>
            )}
          </div>

          <div className="space-y-4 mt-6 md:mt-10">
            <h1 className="font-semibold text-gray-700 text-base md:text-lg">
              Set Quantity & Price
            </h1>

            {/* Packages */}
            {[1, 2, 3, 4, 5, 6, 7].map((packageNum, index) => (
              <div key={packageNum} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Package {packageNum}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <input
                    {...register(`tiers.${index}.max_post`, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    type="number"
                    placeholder={`Enter quantity posts`}
                    className="sm:col-span-8 px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                  />
                  <input
                    {...register(`tiers.${index}.price`, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    type="number"
                    placeholder="Price"
                    className="sm:col-span-4 px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Selection */}
          <div>
            <h1 className="font-semibold text-gray-700 text-base md:text-lg">
              Select Social Media
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-5">
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
                  className="flex items-center gap-2 md:gap-3 border border-gray-200 px-3 md:px-4 py-2 rounded-md"
                >
                  <input
                    {...register("primary_platform", {
                      required: "Please select a primary platform",
                    })}
                    type="radio"
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
            {errors.primary_platform && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.primary_platform.message}
              </p>
            )}
          </div>

          {/* Select Additional Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8">
              <h1 className="font-semibold text-gray-700 text-base md:text-lg">
                Select Additional Platforms
              </h1>
              <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-5">
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
                    className="flex items-center gap-2 md:gap-3 border border-gray-200 px-3 md:px-4 py-2 rounded-md"
                  >
                    <input
                      {...register("extra_platforms")}
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
                {...register("extra_platform_Price", {
                  valueAsNumber: true,
                  required: "Price is required for additional platforms",
                })}
                type="number"
                placeholder="Enter price"
                className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
              />
              {errors.extra_platform_Price && (
                <p className="text-red-500 text-xs md:text-sm mt-1">
                  {errors.extra_platform_Price.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
              Create Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
