import React from "react";

export default function SeoCard() {
  return (
    <div className="max-w-lg mx-auto bg-white border border-[#E9E9EA] rounded-lg py-6 px-4 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-5">
        <div className="bg-gray-100 p-3 rounded-lg inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="14" height="14" rx="2" ry="2"></rect>
            <rect x="8" y="8" width="14" height="14" rx="2" ry="2"></rect>
          </svg>
        </div>
      </div>
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
        Make content that's actually helpful
      </h3>

      {/* Description */}
      <p className="text-[#4A4C56] text-sm">
        We provide long-form content on your blog in response to queries Google
        users pose about your goods or services. By doing this, you can be found
        on Google for any queries relating to your company.
      </p>
    </div>
  );
}
