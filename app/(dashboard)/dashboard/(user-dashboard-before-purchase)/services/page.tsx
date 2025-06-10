import Heading from "@/app/(client)/_components/heading-text";
import ParagraphText from "@/app/(client)/_components/paragraph-text";
import ReuseablePricing from "@/app/(client)/pricing-and-package/_components/reuseable-pricing";
import React from "react";

export default function Services() {
  return (
    <div>
      <div className="bg-[#F7F7F9] mt-4">
        <div className="max-w-[1200px] ">
          <div className="   mb-8 md:mb-12 ">
            <Heading
              text="Which services are you interested in?"
              className="text-2xl  capitalize font-semibold text-[#1D1D1F]"
            />
            <ParagraphText
              paraText="Elite Creative Talent | 80% More Cost-Effective than Agencies | Work with Real Experts, Not AI"
              className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
            />
          </div>
          <ReuseablePricing />
        </div>
      </div>
    </div>
  );
}
