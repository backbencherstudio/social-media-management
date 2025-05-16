import React from "react";
import { FiImage, FiVideo, FiFileText, FiMusic } from "react-icons/fi";

export default function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Total Images</p>
            <h3 className="text-2xl font-semibold">1,234</h3>
            <p className="text-gray-600 mt-3">35.5 GB available</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <FiImage className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Total Videos</p>
            <h3 className="text-2xl font-semibold">567</h3>
          </div>
          <div className="p-3 bg-red-100 rounded-full">
            <FiVideo className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Total Documents</p>
            <h3 className="text-2xl font-semibold">890</h3>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <FiFileText className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Total Audio</p>
            <h3 className="text-2xl font-semibold">123</h3>
          </div>
          <div className="p-3 bg-purple-100 rounded-full">
            <FiMusic className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
