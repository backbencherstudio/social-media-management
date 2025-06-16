import React from "react";

export default function Media() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h1 className="text-xl font-semibold mb-4">Media</h1>
      <div className="w-full">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            id="media-upload"
            className="hidden"
            accept="image/*,video/*"
          />
          <label
            htmlFor="media-upload"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <p className="text-base text-gray-600 mb-1">
              Drag and drop files here or click to upload
            </p>
            <p className="text-sm text-gray-500">
              Support JPG, PNG, MP4 (max 10MB)
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}
