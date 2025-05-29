import BlackGalleryIcon from "@/public/incons/black-gallery";
import GalleryIcon from "@/public/incons/gallery";
import PdfFileIcon from "@/public/incons/pdf-file";
import VideoPlayIcon from "@/public/incons/video-play";
import React from "react";

export default function RecentFiles() {
  return (
    <div>
      <h1 className="px-4 mb-4">Recent Files</h1>
      <hr className="text-gray-200" />
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
              <BlackGalleryIcon />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-900">
                Campaign-banner.jpg
              </p>
              <p className="text-xs text-gray-500">
                2.4 MB • Modified 2 days ago
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
              <VideoPlayIcon />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-900">
                Product-demo.mp4
              </p>
              <p className="text-xs text-gray-500">
                2.4 MB • Modified 2 days ago
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
              <PdfFileIcon />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-900">
                Brand-guidelines.pdf
              </p>
              <p className="text-xs text-gray-500">
                8.7 MB • Modified 3 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
