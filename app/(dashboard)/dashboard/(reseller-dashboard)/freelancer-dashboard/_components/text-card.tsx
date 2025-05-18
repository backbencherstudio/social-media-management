import React from "react";
import {
  FaCalendarAlt,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaChevronRight,
} from "react-icons/fa";

export default function TextCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-2xl text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              Schedule Posts
            </h3>
          </div>
          <FaChevronRight className="text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
        <p className="text-gray-600 mt-6">
          Track your overall order performance
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Next post in 2 hours</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <FaProjectDiagram className="text-2xl text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              Active Projects
            </h3>
          </div>
          <FaChevronRight className="text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
        <p className="text-gray-600 mt-6">
          Track your overall order performance
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Next post in 2 hours</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <FaMoneyBillWave className="text-2xl text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-800">Revenue</h3>
          </div>
          <FaChevronRight className="text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
        <p className="text-gray-600 mt-6">
          Track your overall order performance
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Next post in 2 hours</span>
        </div>
      </div>
    </div>
  );
}
