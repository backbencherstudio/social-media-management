import React from 'react'
import { useForm } from 'react-hook-form'

interface SecuritySettingsForm {
  dataExportBackup: string;
  sessionTimeout: number;
  failedLoginAttempts: string;
  passwordExpiry: number;
}

export default function SecuritySettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecuritySettingsForm>()

  const onSubmit = (data: SecuritySettingsForm) => {
    console.log('Security Settings Data:', data)
    // Handle form submission here
  }

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
              required: "Please select backup frequency"
            })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select backup frequency</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
          {errors.dataExportBackup && (
            <p className="text-red-500 text-sm">{errors.dataExportBackup.message}</p>
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
              max: { value: 1440, message: "Maximum timeout is 1440 minutes (24 hours)" }
            })}
            placeholder="Enter timeout duration"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.sessionTimeout && (
            <p className="text-red-500 text-sm">{errors.sessionTimeout.message}</p>
          )}
        </div>

        {/* Failed Login Attempts */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Failed Login Attempts
          </label>
          <select
            {...register("failedLoginAttempts", {
              required: "Please select maximum attempts"
            })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select maximum attempts</option>
            <option value="3">3 attempts</option>
            <option value="5">5 attempts</option>
            <option value="7">7 attempts</option>
            <option value="10">10 attempts</option>
          </select>
          {errors.failedLoginAttempts && (
            <p className="text-red-500 text-sm">{errors.failedLoginAttempts.message}</p>
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
              max: { value: 365, message: "Maximum expiry is 365 days" }
            })}
            placeholder="Enter password expiry days"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.passwordExpiry && (
            <p className="text-red-500 text-sm">{errors.passwordExpiry.message}</p>
          )}
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
