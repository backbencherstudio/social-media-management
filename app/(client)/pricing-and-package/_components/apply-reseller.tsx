"use client";

import React from "react";
import resellLeftImg from "@/public/img/pricing/resellerLeft.png";
import resellRightImg from "@/public/img/pricing/resellerRight.png";
import CustomImage from "@/components/reusable/CustomImage";
import RightTopIcon from "@/public/incons/right-top-icon";

export default function ApplyReseller() {
  return (
    <div className="container overflow-hidden bg-[#070707] rounded-xl lg:mt-[78px] md:mt-[60px] mt-[40px] lg:mb-[48px] md:mb-[30px] mb-[10px] ">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 p-6 md:p-0">
        <div className="hidden md:block">
          <CustomImage 
            src={resellLeftImg.src} 
            alt="resellLeftImg"
            className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col items-center text-center px-4 md:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-white font-semibold">
            Looking to resell our services to <br className="hidden sm:block" /> your clients?
          </h2>
          <p className="text-[#F5F5F7] text-sm sm:text-base mt-3 md:mt-4 max-w-md">
            Apply to join the TagGrowth reseller program
          </p>

          <button className="bg-[#F5F5F7] text-[#070707] h-10 sm:h-12 px-6 sm:px-8 mt-6 sm:mt-8 rounded-full inline-flex items-center gap-2 hover:bg-white transition-colors">
            <span className="text-sm sm:text-base">Apply to become a reseller</span>
            <RightTopIcon className="w-4 sm:w-[18px] h-4 sm:h-[18px]" />
          </button>
        </div>
        <div className="hidden md:block">
          <CustomImage 
            src={resellRightImg.src} 
            alt="resellRightImg"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}
