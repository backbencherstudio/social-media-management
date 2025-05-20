import React from "react";

export default function AudienceDemographics() {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Audience Demographics
      </h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* progress-1 */}
        <div className="space-y-4 md:space-y-6 flex-1 border border-gray-100 p-3 md:p-5 rounded-lg">
          <h1 className="text-gray-500">Age Distribution</h1>
          {/* Age Groups */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs md:text-sm text-gray-600">
                18-24 years
              </span>
              <span className="text-xs md:text-sm font-medium">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
              <div
                className="bg-black h-1.5 md:h-2 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          {/* Gender */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">25-34 years</span>
              <span className="text-sm font-medium">30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">35-44 years</span>
              <span className="text-sm font-medium">25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          {/* Device Usage */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">45+ years</span>
              <span className="text-sm font-medium">15%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* progress-2 */}
        <div className="space-y-4 md:space-y-6 flex-1 border border-gray-100 p-3 md:p-5 rounded-lg">
          <h1 className="text-gray-500">Geographic Distribution</h1>
          {/* Age Groups */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs md:text-sm text-gray-600">USA</span>
              <span className="text-xs md:text-sm font-medium">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
              <div
                className="bg-black h-1.5 md:h-2 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          {/* Gender */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">UK</span>
              <span className="text-sm font-medium">30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">AUS</span>
              <span className="text-sm font-medium">25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          {/* Device Usage */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">NED</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
