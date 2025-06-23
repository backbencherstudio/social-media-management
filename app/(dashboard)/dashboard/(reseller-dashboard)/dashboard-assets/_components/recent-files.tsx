"use client";

import BlackGalleryIcon from "@/public/incons/black-gallery";
import PdfFileIcon from "@/public/incons/pdf-file";
import VideoPlayIcon from "@/public/incons/video-play";
import { useGetFilesQuery } from "@/src/redux/features/reseller/assets/assets";
import React from "react";
import { DateHelper } from "@/helper/date.helper";
import { FileHelper } from "@/helper/file.helper";

export default function RecentFiles() {
  const { data: files } = useGetFilesQuery();

  return (
    <div>
      <h1 className="px-4 mb-4">Recent Files</h1>
      <hr className="text-gray-200" />
      <div className="px-4 py-6">
        <div className="flex gap-6 overflow-x-auto">
          {files?.map((file: any) => {
            if (!file) return null;

            const commonProps = {
              key: file.id,
              name: file.name,
              size: file.size,
              updated_at: file.updated_at,
            };

            if (file.type.includes("image")) {
              return <ImageFile {...commonProps} />;
            }
            if (file.type.includes("video")) {
              return <VideoFile {...commonProps} />;
            }
            if (file.type.includes("pdf")) {
              return <PdfFile {...commonProps} />;
            }
            return null;
          })}
        </div>
      </div>

      {/* <div className="text-center mt-8">
        <button className="bg-white border border-gray-200 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
          See more
        </button>
      </div> */}
    </div>
  );
}

const FileWrapper = ({ children, name, size, updated_at }: any) => (
  <div className="w-full flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
    {children}
    <div className="pl-3">
      <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
      <p className="text-xs text-gray-500">
        {FileHelper.formatBytes(size)} • Modified{" "}
        {DateHelper.fromNow(updated_at)}
      </p>
    </div>
  </div>
);

const ImageFile = ({ name, ...props }: any) => (
  <FileWrapper name={name} {...props}>
    <div
      className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg 
    bg-gray-100 flex items-center justify-center"
    >
      <BlackGalleryIcon />
    </div>
  </FileWrapper>
);

const VideoFile = (props: any) => (
  <FileWrapper {...props}>
    <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
      <VideoPlayIcon />
    </div>
  </FileWrapper>
);

const PdfFile = (props: any) => (
  <FileWrapper {...props}>
    <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
      <PdfFileIcon />
    </div>
  </FileWrapper>
);
