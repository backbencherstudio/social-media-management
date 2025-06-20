import { useUpdateSecuritySettingsMutation } from "@/src/redux/features/admin/settings/security-settings";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface SecuritySettingsForm {
  dataExportBackup: number;
  sessionTimeout: number;
  failedLoginAttempts: number;
  passwordExpiry: number;
}

export default function SecuritySettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecuritySettingsForm>();

  const [updateSecuritySettings] = useUpdateSecuritySettingsMutation();

  const onSubmit = async (data: SecuritySettingsForm) => {
    const formattedData = {
      dataExportBackup: Number(data.dataExportBackup),
      sessionTimeout: Number(data.sessionTimeout),
      failedLoginAttempts: Number(data.failedLoginAttempts),
      passwordExpiry: Number(data.passwordExpiry),
    };

    await updateSecuritySettings(formattedData);
    toast.success("Security settings updated successfully");
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg">
      <div>
        <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 ">
        {/* Data Export & Backup */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Data Export & Backup
          </label>
          <select
            {...register("dataExportBackup", {
              required: "Please select backup frequency",
            })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
          >
            <option value="1">Every 1 day</option>
            <option value="7">Every 7 days</option>
            <option value="30">Every 30 days</option>
            <option value="90">Every 90 days</option>
          </select>
          {errors.dataExportBackup && (
            <p className="text-red-500 text-sm">
              {errors.dataExportBackup.message}
            </p>
          )}
        </div>

        {/* Session Timeout */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            {...register("sessionTimeout", {
              required: "Session timeout is required",
              min: { value: 1, message: "Minimum timeout is 1 minute" },
              max: {
                value: 1440,
                message: "Maximum timeout is 1440 minutes (24 hours)",
              },
            })}
            placeholder="Enter timeout duration"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
          />
          {errors.sessionTimeout && (
            <p className="text-red-500 text-sm">
              {errors.sessionTimeout.message}
            </p>
          )}
        </div>

        {/* Failed Login Attempts */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Failed Login Attempts
          </label>
          <select
            {...register("failedLoginAttempts", {
              required: "Please select maximum attempts",
            })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
          </select>
          {errors.failedLoginAttempts && (
            <p className="text-red-500 text-sm">
              {errors.failedLoginAttempts.message}
            </p>
          )}
        </div>

        {/* Password Expiry */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password Expiry (days)
          </label>
          <input
            type="number"
            {...register("passwordExpiry", {
              required: "Password expiry is required",
              min: { value: 30, message: "Minimum expiry is 30 days" },
              max: { value: 365, message: "Maximum expiry is 365 days" },
            })}
            placeholder="Enter password expiry days"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none "
          />
          {errors.passwordExpiry && (
            <p className="text-red-500 text-sm">
              {errors.passwordExpiry.message}
            </p>
          )}
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
