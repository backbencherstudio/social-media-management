 "use client";

import { useState } from "react";
import { ImageIcon, X, Check } from "lucide-react";

interface SocialMediaDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    type: string;
    platform: string;
    submittedDate: string;
    fileFormat: string;
    usageGuidelines: string[];
  };
  onApprove: () => void;
  onReject: () => void;
}

export function SocialMediaDesignModal({
  isOpen,
  onClose,
  data,
  onApprove,
  onReject,
}: any) {
  const [comment, setComment] = useState("");
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  if (!isOpen) return null;

  // Generate 10 thumbnails for the example
  const thumbnails = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-xl overflow-hidden"
        style={{ scrollbarGutter: "stable" }}
      >
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-gray-900">
                Content Details
              </h2>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                Social Media Design
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="mb-4  font-medium text-[#4A4C56]">Preview</h3>

            {/* Main Preview */}
            <div className="mb-4 flex h-[350px] items-center justify-center rounded-md bg-gray-100">
              <ImageIcon className="h-16 w-16 text-gray-400" />
            </div>

            {/* Thumbnails */}
            <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
              {thumbnails.map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedThumbnail(index)}
                  className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-md border-2 ${
                    selectedThumbnail === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  } bg-gray-100`}
                >
                  <ImageIcon className="h-6 w-6 text-gray-400" />
                </button>
              ))}
            </div>

            {/* Content Information */}
            <div className="mb-6 border border-gray-200 p-3 rounded-md">
              <h3 className="mb-3.5  font-medium text-gray-700 border-b border-gray-200 pb-2">
                Content Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm text-gray-500">Type:</span>
                    <span className="text-sm font-medium text-[#1D1F2C]">
                      {data.type}
                    </span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm text-gray-500">Platform:</span>
                    <span className="text-sm font-medium text-[#1D1F2C]">
                      {data.platform}
                    </span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm text-gray-500">
                      Submission Date:
                    </span>
                    <span className="text-sm font-medium text-[#1D1F2C]">
                      {data.submittedDate}
                    </span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm text-gray-500">File Format:</span>
                    <span className="text-sm font-medium text-[#1D1F2C]">
                      {data.fileFormat}
                    </span>
                  </div>
                </div>
                {/* Usages Guidelines */}
                <div className="flex items-center justify-center">
                  <div className="w-1/2"></div>
                  <div className="">
                    <h3 className="mb-3 text-sm font-medium text-gray-800">
                      Usage Guidelines
                    </h3>
                    <div className="space-y-1.5">
                      {data.usageGuidelines.map((guideline: any, index:number ) => (
                        <div key={index} className="flex items-center gap-1.5">
                          <Check className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">
                            {guideline}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}

            {/* Review Comments */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                Review Comments
              </h3>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add your comments or feedback here..."
                className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 border-t border-gray-200 p-4">
            <button
              onClick={onClose}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={onApprove}
              className="flex items-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M13.3334 4L6.00002 11.3333L2.66669 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Approve & Download
            </button>
            <button
              onClick={onReject}
              className="flex items-center gap-1 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Reject & Revision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
