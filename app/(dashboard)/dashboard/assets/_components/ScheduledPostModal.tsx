"use client";

import { useState } from "react";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";

interface ScheduledPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    scheduledFor: string;
    platforms: string[];
    content: string;
    hashtags: string[];
    timezone: string;
    autoScheduled: boolean;
  };
  onApprove: () => void;
  onReject: () => void;
}

export function ScheduledPostModal({
  isOpen,
  onClose,
  data,
  onApprove,
  onReject,
}: ScheduledPostModalProps) {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Content Details
            </h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Scheduled Post
            </span>
          </div>
          {/* <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button> */}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-4 text-sm font-medium text-gray-700">Preview</h3>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Instagram Preview */}
            <div className="rounded-md border border-gray-200 bg-white p-3">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200">
                  <Image
                    src={
                      "https://img.freepik.com/premium-photo/medium-shot-woman-posing-commercial_23-2150559882.jpg"
                    }
                    alt="User Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">your_account</p>
                  <p className="text-xs text-gray-500">Instagram</p>
                </div>
              </div>

              <div className="mb-3 flex h-40 items-center justify-center rounded-md bg-gray-100">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382889.jpg"
                  }
                  alt="User Logo"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-800">{data.content}</p>
              <p className="text-xs text-gray-500 my-2 flex flex-wrap gap-1">
                {data.hashtags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </p>
            </div>

            {/* Facebook Preview */}
            <div className="rounded-md border border-gray-200 bg-white p-3">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200">
                  <Image
                    src={
                      "https://img.freepik.com/premium-photo/medium-shot-woman-posing-commercial_23-2150559882.jpg"
                    }
                    alt="User Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">your_account</p>
                  <p className="text-xs text-gray-500">Instagram</p>
                </div>
              </div>
              <p className="mb-3 text-sm text-gray-800">{data.content}</p>
              <p className="text-xs text-gray-500 my-2 flex flex-wrap gap-1">
                {data.hashtags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </p>
              <div className="flex h-40 items-center justify-center rounded-md bg-gray-100">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/close-up-woman-front-clothing-pile_23-2150951085.jpg"
                  }
                  alt="User Logo"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Posting Schedule */}
          <div className="mb-6 border p-2 rounded-md border-gray-200 ">
            <h3 className="mb-2 pb-2 border-b border-gray-200 font-medium text-[#4A4C56]">
              Posting Schedule
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="12"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M2 7H14" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M6 11H10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5.5 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.5 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Dec 25, 2023 · 10:00 AM
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="12"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M2 7H14" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M6 11H10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5.5 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.5 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Dec 25, 2023 · 10:00 AM
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500"
                  >
                    <path
                      d="M13.3334 4L6.00002 11.3333L2.66669 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Auto-scheduled</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 4.5V8H11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Time Zone: {data.timezone}
                  </span>
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
            Approve & Post
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
  );
}
