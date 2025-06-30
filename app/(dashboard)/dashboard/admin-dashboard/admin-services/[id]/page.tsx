"use client";
import {
  useAllCategoriesQuery,
  useEditServiceMutation,
  useGetSingleServiceQuery,
} from "@/src/redux/features/admin/services";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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

export default function EditService() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceFormData>();
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const { data } = useGetSingleServiceQuery(id);
  const [editService, { isLoading }] = useEditServiceMutation();
  const { data: categories } = useAllCategoriesQuery();

  // Set default values
  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        description: data.description,
        category_id: data.category_id,
        features: data.service_features
          .map((f: any) => f.feature.name)
          .join("\n"),
        tiers: data.service_tiers
          .map((tier: any) => ({
            max_post: tier.max_post,
            price: tier.price,
          }))
          .concat(
            Array(7 - data.service_tiers.length).fill({ max_post: 0, price: 0 })
          ),
        primary_platform: data.primary_platform || "Instagram",
        extra_platforms: data.addons?.map((addon: any) => addon.name) || [],
        extra_platform_Price: data.addons?.[0]?.price || 0,
      });
    }
  }, [data, reset]);

  const onSubmit = async (formData: ServiceFormData) => {
    const validTiers = formData.tiers.filter(
      (tier) => tier.max_post > 0 && tier.price > 0
    );

    const payload = {
      ...formData,
      features: formData.features.split("\n"),
      category_id: "cmb1tnepk000rre8gwm131h93",
      tiers: validTiers,
    };

    try {
      await editService({ id, data: payload });
      // console.log("Updated successfully:", result);
      toast.success("Service updated!");
    } catch (err) {
      // console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-6">
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
              Edit service / {id}
            </span>
          </p>
        </button>
      </p>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-semibold mb-6">Edit Service</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
              {...register("features", {
                required: "Includes field is required",
              })}
              rows={3}
              placeholder="Enter what's included in the service"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.features && (
              <p className="text-red-500 text-sm mt-1">
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
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select a category</option>
              {categories?.map((cat: any) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category_id.message}
              </p>
            )}
          </div>

          <div className="space-y-4 mt-10">
            <h1 className="font-semibold text-gray-700">
              Set Quantity & Price
            </h1>

            {/* Packages */}
            {[1, 2, 3, 4, 5, 6, 7].map((packageNum, index) => (
              <div key={packageNum} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Package {packageNum}
                </label>
                <div className="grid grid-cols-12 gap-4">
                  <input
                    {...register(`tiers.${index}.max_post`, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    type="number"
                    placeholder={`Enter quantity posts`}
                    className="col-span-8 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    {...register(`tiers.${index}.price`, {
                      valueAsNumber: true,
                      required: true,
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
              <p className="text-red-500 text-sm mt-1">
                {errors.primary_platform.message}
              </p>
            )}
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
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.extra_platform_Price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.extra_platform_Price.message}
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
