import React from "react";

export default function NoDataAvailable() {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center mt-6 md:mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gray-500 mb-4"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
          />
        </svg>
        <p className="text-center text-lg font-medium text-gray-700">
          No data available
        </p>
        <p className="text-center text-sm text-gray-500 mt-2">
          Try refreshing the page or check back later.
        </p>
      </div>
    </div>
  );
}
