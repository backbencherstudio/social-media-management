import { useUpdateGeneralSettingsMutation } from "@/src/redux/features/admin/settings/general-settings";
import React from "react";
import { useForm } from "react-hook-form";

interface GeneralSettingsFormData {
  site_name: string;
  site_description: string;
  email: string;
  phone_number: string;
  time_zone: string;
}

export default function GeneralSettings() {
  const [updateGeneralSetting, { isError, isLoading }] =
    useUpdateGeneralSettingsMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GeneralSettingsFormData>();

  const onSubmit = async (data: GeneralSettingsFormData) => {
    // Handle form submission here
    const response = await updateGeneralSetting(data);
    console.log(response);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div>
        <h3 className="text-lg font-semibold">General Settings</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Site Name */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Site Name</label>
          <input
            {...register("site_name", {
              required: "Site name is required",
              minLength: { value: 2, message: "Site name is too short" },
            })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter site name"
          />
          {errors.site_name && (
            <p className="text-sm text-red-500">{errors.site_name.message}</p>
          )}
        </div>

        {/* Site Description */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Site Description</label>
          <textarea
            {...register("site_description", {
              required: "Site description is required",
              minLength: { value: 10, message: "Description is too short" },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            rows={3}
            placeholder="Enter site description"
          />
          {errors.site_description && (
            <p className="text-sm text-red-500">
              {errors.site_description.message}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
          {/* Email */}
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-xs md:text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">Phone Number</label>
            <input
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: "Invalid phone number",
                },
              })}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter phone number"
            />
            {errors.phone_number && (
              <p className="text-xs md:text-sm text-red-500">
                {errors.phone_number.message}
              </p>
            )}
          </div>
        </div>

        {/* Timezone */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Timezone</label>
          <select
            {...register("time_zone", {
              required: "Timezone is required",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select timezone</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
            <option value="Asia/Dubai">Dubai</option>
            <option value="Asia/Dhaka">Dhaka</option>
          </select>
          {errors.time_zone && (
            <p className="text-sm text-red-500">{errors.time_zone.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded-md cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
