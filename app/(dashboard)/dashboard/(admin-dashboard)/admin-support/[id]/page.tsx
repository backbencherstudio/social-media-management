"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FiArrowLeft, FiSend } from "react-icons/fi";

const EmailDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const emailId = params.id;
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState("");

  return (
    <div className="">
      {/*  */}
      <p
        className="text-sm text-gray-500 flex items-center gap-1 font-medium 
      mb-6"
      >
        <button
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
              fill="#1D1F2C"
            />
          </svg>
          <p>
            <span className="text-gray-500">Support / </span>
            <span className="text-gray-900 font-medium">
              Mail Details / {emailId}
            </span>
          </p>
        </button>
      </p>
      {/* Email Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🎉</span>
          <h1 className="text-xl font-semibold">
            Exclusive Offer – Just for You!
          </h1>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          From : Adam Fard &lt;adam@uxpilot.ai&gt;
        </div>
        <hr className="mb-4" />

        {/* Email Content */}
        <div className="space-y-4 mb-6">
          <p className="font-medium">Your Exclusive Deal Awaits!</p>
          <p>
            We appreciate you and want to offer something special! As a valued
            customer, you're receiving an exclusive [discount/offer] just for
            you.
          </p>
          <p>
            For a limited time, enjoy [X% off / free trial / bonus service] on
            [product/service]—crafted to elevate your experience.
          </p>
          <p>🚀 Claim Your Offer Now – only available until [date]!</p>
          <p>[Redeem Your Offer]</p>
          <p>Looking forward to making your experience even better!</p>
          <p>
            Md. Mansur
            <br />x company
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowReply(true)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg"
          >
            <FiSend className="w-4 h-4" />
            Reply
          </button>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Reply Section */}
      {showReply && (
        <div className="bg-white rounded-lg p-6">
          <div className="mb-2 text-sm text-gray-600">
            Reply | To: Adam Fard &lt;adam@uxpilot.ai&gt;
          </div>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your message..."
            rows={5}
            className="w-full border rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
          />
          <div className="flex justify-end">
            <button
              onClick={() => setShowReply(false)}
              className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 mr-2"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-sm bg-black text-white rounded-lg"
              onClick={() => {
                // handle send
                setShowReply(false);
                setReply("");
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailDetailsPage;
