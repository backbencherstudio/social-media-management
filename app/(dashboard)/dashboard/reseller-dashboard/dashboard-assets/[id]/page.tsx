"use client";

import BlackGalleryIcon from "@/public/incons/black-gallery";
import PdfFileIcon from "@/public/incons/pdf-file";
import VideoPlayIcon from "@/public/incons/video-play";
import { useGetFilesByFolderQuery } from "@/src/redux/features/reseller/assets/assets";
import React from "react";
import { DateHelper } from "@/helper/date.helper";
import { FileHelper } from "@/helper/file.helper";
import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function Folders() {
  const {id} = useParams();
  const clientId = useSelector((state: RootState) => state.clientId.id);
  const data = {
    folder: id,
    id: clientId,
  };
  const { data: files } = useGetFilesByFolderQuery(data as any);

  return (
    <div className="bg-white py-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h1 className="px-4 mb-4"> {id}</h1>
      <hr className="text-gray-200" />
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {files?.data?.map((file: any) => {
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
  <div className="w-[350px] flex flex-col justify-center border border-gray-100 space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors space-y-3">
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
    <div className="w-[300px] mx-auto h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
      <BlackGalleryIcon />
    </div>
  </FileWrapper>
);

const VideoFile = (props: any) => (
  <FileWrapper {...props}>
    <div className="w-[300px] mx-auto h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
      <VideoPlayIcon />
    </div>
  </FileWrapper>
);

const PdfFile = (props: any) => (
  <FileWrapper {...props}>
    <div className="w-[300px] mx-auto h-[250px] sm:h-[280px] md:h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
      <PdfFileIcon />
    </div>
  </FileWrapper>
);
