import {
  useGetEmailAndNotificationSettingsQuery,
  useUpdateEmailAndNotificationSettingsMutation,
} from "@/src/redux/features/admin/settings/email-and-notification-settings";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

interface EmailSettingsFormData {
  smtpHost: string;
  smtpPort: string;
  smtpUsername: string;
  smtpPassword: string;
  smtpFrom: string;

  // Email Templates
  orderConfirmation: boolean;
  paymentReceipt: boolean;
  marketing: boolean;
  withdrawConfirmation: boolean;

  // Email Notifications
  newOrder: boolean;
  paymentReceived: boolean;
  withdrawalRequests: boolean;
  reportedReviews: boolean;

  // Push Notifications
  newMessages: boolean;
  systemUpdates: boolean;
  securityAlerts: boolean;
}

export default function EmailAndNotificationSettings() {
  const { data: emailAndNotificationSettings } =
    useGetEmailAndNotificationSettingsQuery();
  const [updateEmailAndNotificationSettings] =
    useUpdateEmailAndNotificationSettingsMutation(
      emailAndNotificationSettings?.id
    );
  const [resellerVerification, setResellerVerification] = useState(true);
  const [userSupportRequests, setUserSupportRequests] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailSettingsFormData>();

  // {
  //   defaultValues: {
  //     smtpHost: "",
  //     smtpPort: "",
  //     smtpUsername: "",
  //     smtpPassword: "",
  //     smtpFrom: "",
  //   },
  // }

  useEffect(() => {
    if (emailAndNotificationSettings) {
      reset({
        smtpHost: emailAndNotificationSettings.smtpHost,
        smtpPort: emailAndNotificationSettings.smtpPort,
        smtpUsername: emailAndNotificationSettings.smtpUsername,
        smtpPassword: emailAndNotificationSettings.smtpPassword,
        smtpFrom: emailAndNotificationSettings.smtpFrom,
        // Add other fields as needed
      });
    }
  }, [emailAndNotificationSettings, reset]);

  const onSubmit = async (formData: any) => {
    const formattedData = {
      smtpHost: formData.smtpHost,
      smtpPort: Number(formData.smtpPort),
      smtpUsername: formData.smtpUsername,
      smtpPassword: formData.smtpPassword,
      smtpFrom: formData.smtpFrom,
    };
    await updateEmailAndNotificationSettings({
      data: formattedData,
      id: emailAndNotificationSettings?.id,
    });
    toast.success("Email and notification settings updated successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6 p-4 md:p-6 bg-white rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Email Settings
        </h2>

        <div className="grid gap-4 md:gap-6">
          {/* SMTP Host */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              SMTP Host
            </label>
            <input
              type="text"
              {...register("smtpHost", { required: "SMTP Host is required" })}
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm md:text-base"
            />
            {errors.smtpHost && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.smtpHost.message}
              </p>
            )}
          </div>

          {/* SMTP Port */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              SMTP Port
            </label>
            <input
              type="number"
              {...register("smtpPort", {
                required: "SMTP Port is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid port number",
                },
              })}
              placeholder="Enter SMTP port"
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm md:text-base"
            />
            {errors.smtpPort && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.smtpPort.message}
              </p>
            )}
          </div>

          {/* SMTP Username */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              SMTP Username
            </label>
            <input
              type="text"
              {...register("smtpUsername", {
                required: "SMTP Username is required",
              })}
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm md:text-base"
            />
            {errors.smtpUsername && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.smtpUsername.message}
              </p>
            )}
          </div>

          {/* SMTP Password */}
          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              SMTP Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("smtpPassword", {
                required: "SMTP Password is required",
              })}
              placeholder="Enter SMTP password"
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm md:text-base pr-10"
            />
            <span
              className="absolute right-3 bottom-10 cursor-pointer text-gray-400 hover:text-gray-700"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
            {errors.smtpPassword && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.smtpPassword.message}
              </p>
            )}
          </div>

          {/* SMTP From */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              SMTP From
            </label>
            <input
              type="text"
              {...register("smtpFrom", { required: "SMTP From is required" })}
              className="w-full px-3 md:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm md:text-base"
            />
            {errors.smtpFrom && (
              <p className="text-red-500 text-xs md:text-sm">
                {errors.smtpFrom.message}
              </p>
            )}
          </div>

          {/* Email Templates */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Email Templates
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="orderConfirmation"
                  {...register("orderConfirmation")}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="orderConfirmation"
                  className="text-sm text-gray-600"
                >
                  Order Confirmation
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="paymentReceipt"
                  {...register("paymentReceipt")}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="paymentReceipt"
                  className="text-sm text-gray-600"
                >
                  Payment Receipt
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="marketing"
                  {...register("marketing")}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="marketing" className="text-sm text-gray-600">
                  Marketing
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="withdrawConfirmation"
                  {...register("withdrawConfirmation")}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="withdrawConfirmation"
                  className="text-sm text-gray-600"
                >
                  Withdraw Confirmation
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="space-y-6 p-4 md:p-6 bg-white rounded-lg mt-4 md:mt-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Notification Settings
        </h2>

        {/* Email Notifications */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Email Notifications
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="newOrder"
                {...register("newOrder")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="newOrder" className="text-sm text-gray-600">
                New Order
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="paymentReceived"
                {...register("paymentReceived")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="paymentReceived"
                className="text-sm text-gray-600"
              >
                Payment Received
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="withdrawalRequests"
                {...register("withdrawalRequests")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="withdrawalRequests"
                className="text-sm text-gray-600"
              >
                Withdrawal Requests
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="reportedReviews"
                {...register("reportedReviews")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="reportedReviews"
                className="text-sm text-gray-600"
              >
                Reported Reviews
              </label>
            </div>
          </div>
        </div>

        {/* Reseller Verification Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
          <div>
            <h1 className="text-sm md:text-base font-medium">
              Reseller Verification Requests
            </h1>
            <p className="text-xs md:text-sm text-gray-600">
              All admin receive email about reseller verification requests
            </p>
          </div>
          <div
            onClick={() => setResellerVerification(!resellerVerification)}
            className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors ${
              resellerVerification ? "bg-black" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg m-0.5 ${
                resellerVerification ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* User Support Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
          <div>
            <h1 className="text-sm md:text-base font-medium">
              User Support Requests
            </h1>
            <p className="text-xs md:text-sm text-gray-600">
              All admin receive email about support requests
            </p>
          </div>
          <div
            onClick={() => setUserSupportRequests(!userSupportRequests)}
            className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors ${
              userSupportRequests ? "bg-black" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg m-0.5 ${
                userSupportRequests ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Push Notifications */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Push Notifications
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="newMessages"
                {...register("newMessages")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="newMessages" className="text-sm text-gray-600">
                New Messages
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="systemUpdates"
                {...register("systemUpdates")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="systemUpdates" className="text-sm text-gray-600">
                System Updates
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="securityAlerts"
                {...register("securityAlerts")}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="securityAlerts" className="text-sm text-gray-600">
                Security Alerts
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="sm:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
