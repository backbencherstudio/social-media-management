import ScheduleButton from "@/app/(client)/_components/schedule-button";
import LogoIcon from "@/public/incons/logo";
import Image from "next/image";
import React from "react";

export default function BlogBody() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-6 my-25">
      <div className="col-span-1">
        {/* Column 1 content */}

        <div className="px-[27px] py-[36px] flex flex-col items-center gap-8 bg-[#ECEFF3]/80 rounded-xl">
          <LogoIcon className="mx-auto text-black" />
          <p className="text-center text-[#1D1F2C]">
            Looking for an affordable social media management company to handle
            your social media presence for only $99/mo? Feedbird is the leading
            choice trusted by 7200+ small businesses.
          </p>

          <ScheduleButton
            text="Schedule a Call"
            className="bg-black text-white"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2">
        {/* Column 2 content that spans 2 columns on md and up */}

        <section className="max-w-5xl mx-auto px-4 ">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Spark engagement and grow your brand with these proven contest
            formats.
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 mb-4">
            Social media is no longer just a broadcasting tool — it’s a two-way
            street that thrives on interaction, storytelling, and community. And
            what better way to ignite that connection than through a creative
            contest?
          </p>
          <p className="text-gray-700 mb-8">
            Whether you're aiming to increase brand awareness, generate user
            content, or simply reward your community, contests offer a low-cost,
            high-impact way to boost your digital presence. In this article,
            we’ll explore 12+ social media contest ideas that are not only easy
            to implement but also come with real-world examples and expert tips
            — so you can confidently launch your next campaign.
          </p>

          {/* Image */}
          <div className="rounded-lg overflow-hidden h-[322px]">
            <Image
              src="https://img.freepik.com/premium-photo/teacher-asking-her-students-question_13339-162960.jpg?w=996"
              alt="blog img"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
