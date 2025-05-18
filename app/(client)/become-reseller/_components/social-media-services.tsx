"use client";
import React from "react";

import { User, BarChart3, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/app/(client)/_components/heading-text";
import ParagraphText from "@/app/(client)/_components/paragraph-text";
import HomeIcon from "@/public/incons/home";
import UserSettingIcon from "@/public/incons/user-setting";
import CancelAnytimeIcon from "@/public/incons/cancel-anytime";

const features = [
  {
    icon: HomeIcon,
    title: "Resell social media services",
    description:
      "If you're looking to resell our social media packages to your agency clients, we've got you covered. We can become your social media management department for just $99/mo.D",
  },
  {
    icon: UserSettingIcon,
    title: "Lightning fast delivery",
    description:
      "Get a full month's worth of videos done in less than 10 business days.",
  },
  {
    icon: CancelAnytimeIcon,
    title: "Fixed monthly rate",
    description: "No surprises here! Pay the same fixed price each month.",
  },
];

const SocialMediaServices = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto  py-[60px] md:py-[80px] lg:py-[100px] px-5 2xl:px-0">
      <div className="text-center max-w-[694px] mx-auto  mb-8 md:mb-12 px-5 2xl:px-[0px]">
        <Heading
          text="Social Media Services"
          className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
        />
        <ParagraphText
          paraText="Resell our social media management services under your own agency name."
          className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 ">
        {features?.map((feature, index: number) => (
          <Card key={index} className="bg-gray-50 border-0 p-4">
            <CardContent className="  p-0">
              <div className="md:mb-6 mb-4 flex items-start justify-start">
                <span className=" bg-white  p-2 rounded-md">
                  <feature.icon className="lg:h-8 lg:w-8 w-6 h-6 text-gray-900" />
                </span>
              </div>
              <h3 className="md:text-xl text-base font-semibold mb-3 text-[#1D1D1F]">
                {feature.title}
              </h3>
              <p className="md:text-base text-sm text-[#4A4C56] leading-[150%] tracking-[.16px]">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaServices;
