"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

const EmailDetailsPage = () => {
  const params = useParams();
  const emailId = params.id;
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Email Details</h1>
      </div>

      <div className="space-y-6">
        {/* Email Header Information */}
        <div className="border-b pb-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                MS
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-gray-900">
                  Marketing System
                </h2>
                <p className="text-sm text-gray-500">marketing@system.com</p>
              </div>
            </div>
            <div className="pl-11">
              <p className="text-sm text-gray-600">
                To: all-subscribers@system.com
              </p>
              <p className="text-sm text-gray-600">
                Cc: marketing-team@system.com
              </p>
            </div>
            <div className="pl-11">
              <h3 className="text-xl font-semibold text-gray-900">
                New Product Launch Announcement
              </h3>
            </div>
          </div>
        </div>

        {/* Email Content */}
        <div className="pl-11 space-y-4">
          <div className="prose max-w-none">
            <p>Dear Valued Customer,</p>
            <p>
              We are excited to announce the launch of our new product line that
              will revolutionize how you manage your social media presence. Our
              team has been working tirelessly to bring you features that will
              enhance your digital marketing capabilities.
            </p>
            <p>Key highlights of our new offering include:</p>
            <ul>
              <li>Advanced analytics dashboard</li>
              <li>Automated posting scheduler</li>
              <li>AI-powered content suggestions</li>
              <li>Integrated team collaboration tools</li>
            </ul>
            <p>
              We look forward to helping you achieve your social media goals
              with these new tools.
            </p>
            <p>
              Best regards,
              <br />
              The Marketing Team
            </p>
          </div>
        </div>

        {/* Reply Section */}
        <div className="pl-11 pt-4 border-t">
          <div className="flex gap-5 items-center">
            <button 
              onClick={() => setShowReply(!showReply)}
              className="px-4 py-2 text-sm bg-black text-white rounded-lg flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
              Reply
            </button>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Back
            </button>
          </div>

          {/* Reply Textbox */}
          {showReply && (
            <div className="mt-4 space-y-4">
              <textarea
                placeholder="Write your reply..."
                rows={6}
                className="w-full border rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => setShowReply(false)}
                  className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 text-sm bg-black text-white rounded-lg"
                >
                  Send Reply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailDetailsPage;
