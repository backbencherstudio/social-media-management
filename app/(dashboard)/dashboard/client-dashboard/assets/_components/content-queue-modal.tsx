"use client";

import { useState } from "react";
import { X, Check, FileText } from "lucide-react";

interface ContentQueueDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  onApprove: () => void;
  onReject: () => void;
}

export function ContentQueueDetailsModal({
  isOpen,
  onClose,
  data,
  onApprove,
  onReject,
}: ContentQueueDetailsModalProps) {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;
  console.log("content modal data", data);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] transition-opacity ">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-xl transition-transform transform">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Content Details
            </h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Content Queue Item
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
          <h3 className="mb-4 text-sm font-medium text-gray-700">Preview</h3>

          <div className="mb-6 flex items-center justify-center rounded-md bg-gray-100 p-4">
            <FileText className="h-16 w-16 text-gray-400" />
          </div>

          {/* Content Information */}
          <div className="mb-6 border border-gray-200 p-3 rounded-md">
            <h3 className="mb-3 font-medium text-gray-700 border-b border-gray-200 pb-2">
              Content Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-500">Type:</span>
                  <span className="text-sm font-medium text-[#1D1F2C]">
                    {data?.title}
                  </span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-500">Scheduled For:</span>
                  <span className="text-sm font-medium text-[#1D1F2C]">
                    {data?.scheduledFor}
                  </span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-500">Platform:</span>
                  <span className="text-sm font-medium text-[#1D1F2C]">
                    {data?.platforms?.join(", ")}
                  </span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-500">File Format:</span>
                  <span className="text-sm font-medium text-[#1D1F2C]">
                    {data?.fileFormat}
                  </span>
                </div>
              </div>

              {/* Usage Guidelines */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-800">
                  Usage Guidelines
                </h3>
                <div className="space-y-1.5">
                  {data?.usageGuidelines?.map(
                    (guideline: any, index: number) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">
                          {guideline}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

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
          <div
            className={`flex items-center justify-center gap-2 ${
              data?.status !== 0 && "hidden"
            }`}
          >
            <button
              onClick={onApprove}
              className="flex items-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              <Check className="h-5 w-5 text-white" />
              Approve & Proceed
            </button>
            <button
              onClick={onReject}
              className="flex items-center gap-1 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <X className="h-5 w-5 text-white" />
              Reject & Revise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
