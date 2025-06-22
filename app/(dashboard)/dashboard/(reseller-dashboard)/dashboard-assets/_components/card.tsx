"use client";

import DocumentIcon from "@/public/incons/document";
import GalleryIcon from "@/public/incons/gallery";
import { useGetAssetsStatsQuery } from "@/src/redux/features/reseller/assets/assets";
import React from "react";
import { FiVideo } from "react-icons/fi";

export default function Card() {
  const { data: assetsStats } = useGetAssetsStatsQuery();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-8 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Videos</p>
            <h3 className="text-2xl font-semibold">
              {assetsStats?.videos || 0}
            </h3>
          </div>
          <div className="p-3 bg-red-100 rounded-full">
            <FiVideo className="text-red-500" />
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Images</p>
            <h3 className="text-2xl font-semibold">
              {assetsStats?.images || 0}
            </h3>
          </div>
          <div className="p-3 bg-[#F1F1FF] rounded-full">
            <GalleryIcon className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white  p-8 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Others</p>
            <h3 className="text-2xl font-semibold">
              {assetsStats?.others || 0}
            </h3>
          </div>
          <div className="p-3 bg-[#FFF9F1] rounded-full">
            <DocumentIcon className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
