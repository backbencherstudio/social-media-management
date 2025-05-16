import React from "react";

export default function ActiveAutomations() {
  return (
    <div className="bg-white py-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <div>
        <div className="flex gap-3 px-4 mb-4">
          <h1 className="text-xl text-gray-900">Active Automations</h1>

          <div className="text-sm text-black flex items-center justify-center px-4 py-1 rounded-full bg-[#EBFBF5] gap-1">
            <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">15</span>&nbsp;Active
          </div>
        </div>
        <hr className="text-gray-200" />
        <div className="px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* div-1 */}
            <div className=" border border-gray-200 p-5 hover:bg-gray-50 rounded-lg space-y-6">
              <div className="flex justify-between">
                <div className="flex items-start space-x-3 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Campaign-banner.jpg
                    </p>
                    <p className="text-xs text-gray-500">
                      2.4 MB • Modified 2 days ago
                    </p>
                  </div>
                </div>
                <div className="text-sm text-black flex items-center justify-center h-8 px-4 rounded-full bg-[#EBFBF5] gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
                  <span className="font-medium text-gray-900">15</span>
                  &nbsp;Active
                </div>
              </div>
              {/* div-2 */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Last run: <span className="font-semibold">2h ago</span>
                </p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600">gg</div>
                </label>
              </div>
            </div>

            <div className="flex items-start space-x-3 border border-gray-200 p-5 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
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
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Product-promo.mp4
                </p>
                <p className="text-xs text-gray-500">
                  8.7 MB • Modified 3 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
