import AnalyticsIcon from "@/public/incons/analytics";
import ContentCalendarIcon from "@/public/incons/content-calendar";
import SchedulePostsIcon from "@/public/incons/schedule-posts";
import React from "react";
import {
  FaCalendarAlt,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaChevronRight,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TextCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <SchedulePostsIcon className="text-2xl" />
            <h3 className="text-xl font-semibold text-gray-800">
              Schedule Posts
            </h3>
          </div>
          <FaArrowRightLong className="text-gray-500 hover:text-gray-600 transition-colors" />
        </div>
        <p className="mt-6">
          Plan and schedule your content across all platforms
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Next post in 2 hours</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <AnalyticsIcon className="text-4xl" />
            <h3 className="text-xl font-semibold text-gray-800">Actives</h3>
          </div>
          <FaArrowRightLong className="text-gray-500 hover:text-gray-600 transition-colors" />
        </div>
        <p className="mt-6">
          Track performance metrics and insights
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Next post in 2 hours</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <ContentCalendarIcon className="text-2xl" />
            <h3 className="text-xl font-semibold text-gray-800">Revenue</h3>
          </div>
          <FaArrowRightLong className="text-gray-500 hover:text-gray-600 transition-colors" />
        </div>
        <p className=" mt-6">
          View and manage your content schedule
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Next post in 2 hours</span>
        </div>
      </div>
    </div>
  );
}
