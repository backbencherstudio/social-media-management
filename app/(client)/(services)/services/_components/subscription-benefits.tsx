"use client";
import React from "react";

import {
  User,
  BarChart3,
  Target,
  TrendingUp,
  Pencil,
  Shield,
  Settings,
  LineChart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/app/(client)/_components/heading-text";
import ParagraphText from "@/app/(client)/_components/paragraph-text";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from "next/link";

const features = [
  {
    icon: User,
    title: "Unlimited revisions",
    description:
      "Make as many revisions as needed - as long as it's within the original scope.",
  },
  {
    icon: BarChart3,
    title: "Lightning fast delivery",
    description:
      "Get a full month's worth of videos done in less than 10 business days.",
  },
  {
    icon: Target,
    title: "Fixed monthly rate",
    description: "No surprises here! Pay the same fixed price each month.",
  },
  {
    icon: TrendingUp,
    title: "Top-notch quality",
    description:
      "Great video quality at your fingertips whenever you need it.Great video quality at your fingertips whenever you need it.",
  },
  {
    icon: Pencil,
    title: "Flexible and scalable",
    description: "Scale up or down as needed, and pause or cancel at anytime.",
  },
  {
    icon: Shield,
    title: "Unique and all yours",
    description:
      "Each of your videos is made especially for you and is 100% yours.",
  },
];

const SubscriptionBenefits = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto  py-[60px] md:py-[80px] lg:py-[100px] px-5 2xl:px-0">
      <div className="text-center max-w-[694px] mx-auto  mb-8 md:mb-12 px-5 2xl:px-[0px]">
        <Heading
          text="Subscription Benefits"
          className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
        />
        <ParagraphText
          paraText="perks so good you'll never need to go anywhere else for your videos."
          className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
        />
      </div>
      <div className="lg:mt-9 md:mt-6 mt-4 flex justify gap-4">
        <Link href="">
          <div className="border leading-[150%] lg:px-9 md:px-4 px-2 lg:py-4 md:py-3 py-2 flex md:text-base text-sm cursor-pointer items-center justify-start   rounded-[8px] gap-2 font-semibold  duration-500 hover:bg-[#070707] hover:text-white">
            <span className="font-serotiva text-sm lg:text-base ">
              Get Started
            </span>
            <BsArrowUpRightCircle className="ml-2 w-5 h-5 " />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 ">
        {features?.map((feature, index:number) => (
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

export default SubscriptionBenefits;
