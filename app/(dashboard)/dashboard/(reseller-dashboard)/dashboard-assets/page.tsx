import React from "react";
import Card from "./_components/card";
import RecentFiles from "./_components/recent-files";
import Folders from "./_components/folders";

export default function Assets() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="">
            <input
              type="search"
              placeholder="Search assets..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black cursor-pointer">
              <option value="all">All Types</option>
              <option value="images">Images</option>
              <option value="videos">Videos</option>
              <option value="documents">Documents</option>
              <option value="audio">Audio</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black cursor-pointer">
              <option value="all">All Folders</option>
              <option value="social-media">Social Media</option>
              <option value="marketing">Marketing</option>
              <option value="branding">Branding</option>
              <option value="campaigns">Campaigns</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
      <div className="bg-white py-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <RecentFiles />
      </div>
      <div className="bg-white py-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <Folders />
      </div>
    </div>
  );
}
