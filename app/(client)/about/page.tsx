import React from "react";
import HeadingText from "../_components/heading-text";
import ParagraphText from "../_components/paragraph-text";
import { IoMdAddCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import BusinessTrust from "../_components/business-trust";
import Creating from "./_components/creating";
import OurTeam from "./_components/our-team";
import SocialMediaManagement from "./_components/social-media-management";
import ScheduleDemo from "./_components/schedule-demo";
// Remove the video import
// import video from "@/public/video/about-video.mp4";

export default function About() {
  return (
    <div className="px-5 2xl:px-0">
      <div className="max-w-[776px] mx-auto mt-20 flex flex-col gap-6">
        {/* heading */}
        <HeadingText
          text={
            <>
              Professional and Cost-Effective Social Media Management Solutions
            </>
          }
          className="text-[24px] md:text-[36px] lg:text-[42px] text-center"
        />
        {/* paragraph */}
        <ParagraphText
          paraText="Small businesses often struggle with time and resources for effective marketing. Our all-in-one solution combines advanced technology, data-driven strategies, and expert support—all for just $99/month."
          className="text-center px-5"
        />

        {/* button */}
        <div className="mx-auto mt-7">
          <Button className="w-[234px] bg-black leading-[150%] flex cursor-pointer items-center rounded-[8px] gap-2 font-semibold hover:bg-gray-800 text-white">
            <span className="font-serotiva"> Start Using TagGrowth Now</span>{" "}
            <IoMdAddCircle className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* video */}
        <div className="pt-16 rounded-2xl overflow-hidden ">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/video-thumbnail.jpg"
          >
            <source src="/video/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* business trust grow */}
      <div className=" mt-20 md:mt-[300px]">
      <BusinessTrust />

      </div>
      
      {/* creating */}
      <Creating />
      
      {/* our team */}
      <OurTeam />
      
      {/* social media management */}
      <SocialMediaManagement />
      
      {/* schedule demo */}
      <ScheduleDemo />
    </div>
  );
}
