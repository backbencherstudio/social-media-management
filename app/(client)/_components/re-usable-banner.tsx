"use client";

import CustomImage from "@/components/reusable/CustomImage";
import RightTopIcon from "@/public/incons/right-top-icon";
import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import ScheduleButton from "./schedule-button";

interface ReUsableBannerProps {
  heading: ReactNode;
  description: ReactNode;
  image: StaticImageData;
}

export default function ReUsableBanner({
  heading,
  description,
  image,
}: ReUsableBannerProps) {
  return (
    <div className="bg-[#F7F7F9]">
      <div className="container px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-4">{heading}</div>
            <div className="mb-8">{description}</div>
            <div className="flex gap-4">
              <button className="bg-[#070707] text-white h-10 sm:h-12 px-6 sm:px-8  rounded-xl inline-flex items-center gap-2 hover:bg-[#1f1e1e] ease-in duration-300  transition-colors cursor-pointer">
                <span className="text-sm sm:text-base">Get Started</span>
                <RightTopIcon className="w-4 sm:w-[18px] h-4 sm:h-[18px] " />
              </button>

              <ScheduleButton
                text="Schedule a Demo"
                className="bg-white hover:bg-gray-300 ease-in duration-300 text-black w-full sm:w-[168px] py-6"
              />
            </div>
          </div>
          <div className="relative">
            <CustomImage
              src={image.src}
              alt="Banner Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
