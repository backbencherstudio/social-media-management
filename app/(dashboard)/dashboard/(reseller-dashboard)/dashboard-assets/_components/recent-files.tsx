import React from "react";

export default function RecentFiles() {
  return (
    <div>
      <h1 className="px-4 mb-4">Recent Files</h1>
      <hr className="text-gray-200" />
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-900">
                Campaign-banner.jpg
              </p>
              <p className="text-xs text-gray-500">
                2.4 MB • Modified 2 days ago
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-900">
                Campaign-banner.jpg
              </p>
              <p className="text-xs text-gray-500">
                2.4 MB • Modified 2 days ago
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-900">
                Product-promo.mp4
              </p>
              <p className="text-xs text-gray-500">
                8.7 MB • Modified 3 days ago
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-900">
                Social-cover.jpg
              </p>
              <p className="text-xs text-gray-500">
                1.8 MB • Modified 4 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
