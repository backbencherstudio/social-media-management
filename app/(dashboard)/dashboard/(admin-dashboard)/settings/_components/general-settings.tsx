import React from 'react';
import { useForm } from 'react-hook-form';


interface GeneralSettingsFormData {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  timezone: string;
}

export default function GeneralSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GeneralSettingsFormData>();

  const onSubmit = (data: GeneralSettingsFormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg">
      <div>
        <h3 className="text-lg font-semibold">General Settings</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Site Name */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Site Name
          </label>
          <input
            {...register("siteName", {
              required: "Site name is required",
              minLength: { value: 2, message: "Site name is too short" }
            })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter site name"
          />
          {errors.siteName && (
            <p className="text-sm text-red-500">{errors.siteName.message}</p>
          )}
        </div>

        {/* Site Description */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Site Description
          </label>
          <textarea
            {...register("siteDescription", {
              required: "Site description is required",
              minLength: { value: 10, message: "Description is too short" }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={3}
            placeholder="Enter site description"
          />
          {errors.siteDescription && (
            <p className="text-sm text-red-500">{errors.siteDescription.message}</p>
          )}
        </div>

        {/* Contact Email */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Contact Email
          </label>
          <input
            {...register("contactEmail", {
              required: "Contact email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter contact email"
          />
          {errors.contactEmail && (
            <p className="text-sm text-red-500">{errors.contactEmail.message}</p>
          )}
        </div>

        {/* Contact Phone */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Contact Phone
          </label>
          <input
            {...register("contactPhone", {
              required: "Contact phone is required",
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: "Invalid phone number"
              }
            })}
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter contact phone"
          />
          {errors.contactPhone && (
            <p className="text-sm text-red-500">{errors.contactPhone.message}</p>
          )}
        </div>

        {/* Timezone */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Timezone
          </label>
          <select
            {...register("timezone", {
              required: "Timezone is required"
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
          {errors.timezone && (
            <p className="text-sm text-red-500">{errors.timezone.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
