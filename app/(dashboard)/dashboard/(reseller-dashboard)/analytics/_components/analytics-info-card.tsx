import React from "react";
import { FaUsers, FaChartLine, FaShareAlt } from "react-icons/fa";

export default function AnalyticsInfoCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      {/* Card 1 - Total Followers */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Total Followers
            </h3>
            <p className="text-3xl font-bold mt-2">25.7K</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-full">
            <FaUsers className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Card 2 - Engagement Rate */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Engagement Rate
            </h3>
            <p className="text-3xl font-bold mt-2">4.5%</p>
          </div>
          <div className="bg-green-100 p-4 rounded-full">
            <FaChartLine className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Card 3 - Total Shares */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Total Shares
            </h3>
            <p className="text-3xl font-bold mt-2">1.2K</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-full">
            <FaShareAlt className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Card 3 - Total Shares */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Total Posts</h3>
            <p className="text-3xl font-bold mt-2">1.2K</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-full">
            <FaShareAlt className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
