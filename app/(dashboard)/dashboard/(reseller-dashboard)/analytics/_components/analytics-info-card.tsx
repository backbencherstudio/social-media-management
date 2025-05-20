import DiagramIcon from "@/public/incons/diagram";
import GalleryIcon from "@/public/incons/gallery";
import PeoplesIcon from "@/public/incons/peoples";
import { ClockIcon } from "lucide-react";
import React from "react";
import { FaUsers, FaChartLine, FaShareAlt } from "react-icons/fa";

export default function AnalyticsInfoCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-semibold text-gray-800">Total Posts</h3>
          <GalleryIcon />
        </div>
        <p className="text-3xl font-semibold mt-2">124</p>
      </div>
      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-semibold text-gray-800">Total Reach</h3>
          <PeoplesIcon />
        </div>
        <p className="text-3xl font-semibold mt-2">52.4K</p>
      </div>
      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-semibold text-gray-800">
            Engagement Rate
          </h3>
          <DiagramIcon />
        </div>
        <p className="text-3xl font-semibold mt-2">4.8%</p>
      </div>
      {/* Card 4 */}
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-semibold text-gray-800">Avg. Response</h3>
          <ClockIcon />
        </div>
        <p className="text-3xl font-semibold mt-2">2.5h</p>
      </div>
    </div>
  );
}
