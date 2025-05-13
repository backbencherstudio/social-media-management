"use client";

import { ImageIcon } from "lucide-react";

interface SocialMediaDesignCardProps {
  title: string;
  type: string;
  submittedDate: string;
  onApprove: () => void;
  onReject: () => void;
  onViewDetails: () => void;
}

export function SocialMediaDesignCard({
  title,
  type,
  submittedDate,
  onApprove,
  onReject,
  onViewDetails,
}: SocialMediaDesignCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-sm min-w-[420px] ">
      {/* Card Header with Badges */}
      <div className="flex items-center gap-2 p-4">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
          Social Media Design
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          Pending Review
        </span>
      </div>

      {/* Card Title */}
      <h3 className="px-4 text-lg font-medium text-gray-900">{title}</h3>

      {/* Card Details */}
      <div className="mt-2 space-y-2 px-4">
        <div className="flex flex-col text-sm text-gray-600">
          <span className="font-medium">Type:</span>
          <span>{type}</span>
        </div>

        <div className="flex flex-col text-sm text-gray-600">
          <span className="font-medium">Submitted:</span>
          <span>{submittedDate}</span>
        </div>
      </div>

      {/* Image Preview */}
      <div className="mx-4 mt-4 flex h-40 items-center justify-center rounded-md bg-gray-100">
        <ImageIcon className="h-10 w-10 text-gray-400" />
      </div>

      {/* Card Actions */}
      <div className="mt-auto flex items-center justify-between p-4">
        <button
          onClick={onViewDetails}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 underline underline-offset-[3px]"
        >
          View Details
        </button>
        <div className="flex gap-2">
          <button
            onClick={onApprove}
            className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M4.25 9.75L6.89482 11.8659C7.5153 12.3622 8.41524 12.2886 8.9468 11.698L14.75 5.25"
                stroke="#119B70"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Approve
          </button>
          <button
            onClick={onReject}
            className="flex items-center gap-1 rounded-full bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M12.6823 5.8184L6.31836 12.1824M12.6823 12.1823L6.31836 5.81836"
                stroke="#DC2C2C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
