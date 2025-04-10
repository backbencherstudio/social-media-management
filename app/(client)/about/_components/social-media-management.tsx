"use client";

import React from "react";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";
import teamTwo from "@/public/about-page/teamTwo.png";
import CustomImage from "@/components/reusable/CustomImage";

export default function SocialMediaManagement() {
  return (
    <div className="container px-4 2xl:px-0 my-16 lg:my-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <CustomImage
            src={teamTwo.src}
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto"
            alt="team image"
          />
        </div>

        <div className="text-center lg:text-left">
          <Heading
            text="Outsource your social media management"
            className="text-3xl md:text-4xl lg:text-5xl capitalize"
          />
          <ParagraphText
            paraText="Our one-of-a-kind technology is the backbone of our effective approach, and one of the key reasons we're able to achieve get results for our customers that outperform industry averages."
            className="my-4"
          />

          <ParagraphText paraText="Our product was built with one thing in mind —to help small businesses thrive. With that focus, we do amazing things for our customers." />
        </div>
      </div>
    </div>
  );
}
