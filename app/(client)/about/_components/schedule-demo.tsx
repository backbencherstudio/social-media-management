"use client";

import React from "react";
import scheduleImg from "@/public/about-page/Frame 187.png";
import CustomImage from "@/components/reusable/CustomImage";
import ScheduleButton from "../../_components/schedule-button";

export default function ScheduleDemo() {
  return (
    <div className="container bg-[#070707] my-[100px] rounded-xl">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 text-white px-9">
          <h2 className="text-3xl">
            Drive Growth with High-Quality, Scalable Content
          </h2>
          <p>
            Boost engagement, increase organic traffic, and improve search
            rankings with data-driven blog posts tailored to your business. No
            one-size-fits-all strategies—just the right tools to dominate SERPs.
          </p>

          <ScheduleButton
            text="Schedule a Demo"
            className="bg-white hover:bg-gray-300 ease-in duration-300 text-black w-[168px] py-7"
          />
        </div>
        <div>
          <CustomImage
            src={scheduleImg.src}  
            width={400}
            height={400}
            alt="schedule img"
            style={{ borderRadius: "0 10px 10px 0" }}
          />
        </div>
      </div>
    </div>
  );
}
