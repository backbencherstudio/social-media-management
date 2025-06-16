"use client";

import React from "react";
import scheduleImg from "@/public/about-page/Frame 187.png";
import CustomImage from "@/components/reusable/CustomImage";
import ScheduleButton from "../../_components/schedule-button";

export default function ScheduleDemo() {
  return (
    <div className="container px-4 2xl:px-0 bg-[#070707] my-16 lg:my-[100px] rounded-xl overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 text-white p-6 lg:px-9 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Drive Growth with High-Quality, Scalable Content
          </h2>
          <p className="text-base md:text-lg">
            Boost engagement, increase organic traffic, and improve search
            rankings with data-driven blog posts tailored to your business. No
            one-size-fits-all strategies—just the right tools to dominate SERPs.
          </p>

          <ScheduleButton
            text="Schedule a Demo"
            className="bg-white hover:bg-gray-300 ease-in duration-300 text-black w-full sm:w-[168px] py-7"
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <CustomImage
            src={scheduleImg.src}
            width={400}
            height={400}
            alt="schedule img"
            className="w-full h-full object-cover"
            style={{ borderRadius: "0 10px 10px 0" }}
          />
        </div>
      </div>
    </div>
  );
}
