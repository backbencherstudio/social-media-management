import React from "react";

export default function Platforms() {
  return (
      <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h1 className="text-xl font-semibold mb-4">Select Platforms</h1>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer border px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300  text-black focus:ring-black"
            />
            <p className="text-gray-700">Facebook</p>
          </label>
          <label className="flex items-center gap-2 cursor-pointer border px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
            />
            <p className="text-gray-700">Instagram</p>
          </label>
          <label className="flex items-center gap-2 cursor-pointer border px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
            />
            <p className="text-gray-700">Twitter</p>
          </label>
          <label className="flex items-center gap-2 cursor-pointer border px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
            />
            <p className="text-gray-700">LinkedIn</p>
          </label>
        </div>
      </div>
  );
}
