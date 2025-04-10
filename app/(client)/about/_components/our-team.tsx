"use client";

import React from "react";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";
import teamOne from "@/public/about-page/teamOne.png";
import CustomImage from "@/components/reusable/CustomImage";

export default function OurTeam() {
  return (
    <div className="container px-4 2xl:px-0 my-16 lg:my-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="text-center lg:text-left">
          <Heading
            text="Our team always gets the best results"
            className="text-3xl md:text-4xl lg:text-5xl capitalize"
          />
          <ParagraphText
            paraText="With over 12,000 satisfied clients, TagGrowth is revolutionizing content strategy by combining cutting-edge ContentOps technology with top content experts and a seamless, fully-managed process."
            className="my-4"
          />

          <ParagraphText 
            paraText="We are dedicated to providing high-quality services at an affordable cost, starting at just $99/month."
            className="text-base"
          />

          <ParagraphText
            paraText="Plus, you can cancel anytime, giving you the flexibility you need."
            className="my-4"
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <CustomImage
            src={teamOne.src}
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto"
            alt="team image"
          />
        </div>
      </div>
    </div>
  );
}
