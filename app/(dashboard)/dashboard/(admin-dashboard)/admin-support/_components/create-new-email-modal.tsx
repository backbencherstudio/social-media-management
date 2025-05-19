import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineEmojiEmotions, MdOutlineAttachFile } from "react-icons/md";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EmailFormData {
  emailType: string;
  recipients: string[];
  subject: string;
  message: string;
}

export default function CreateNewEmailModal({
  isOpen,
  onClose,
}: EmailModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    defaultValues: {
      emailType: "",
      recipients: [],
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: EmailFormData) => {
    console.log("Form Data:", data);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Create New Email</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Type
            </label>
            <input
              type="text"
              {...register("subject", {
                required: "Subject is required",
                minLength: { value: 5, message: "Subject is too short" },
              })}
              placeholder="Enter email subject"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Recipients */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipients
            </label>
            <select
              {...register("emailType", {
                required: "Please select an email type",
              })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            >
              <option value="">Select email type</option>
              <option value="notification">Notification</option>
              <option value="newsletter">Newsletter</option>
              <option value="promotion">Promotion</option>
              <option value="support">Support</option>
            </select>
            {errors.emailType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.emailType.message}
              </p>
            )}
            {errors.recipients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.recipients.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              {...register("subject", {
                required: "Subject is required",
                minLength: { value: 5, message: "Subject is too short" },
              })}
              placeholder="Enter email subject"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "Message is too short" },
              })}
              placeholder="Enter your message"
              rows={6}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <MdOutlineEmojiEmotions className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="bg-black text-white rounded-lg px-4 py-3"
              >
                Send Email
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
