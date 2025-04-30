"use client";

import React from "react";

import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";
import ReuseablePricing from "./reuseable-pricing";


// interface PricingProps {
//   bgColor?: string;
// }

export default function Pricing() {


  return (
    <div className={`bg-[#F7F7F9] py-[100px]`}>
      <div className='container mx-auto text-center  pb-14'>
        <Heading text="Affordable Marketing Services" className='text-[42px] mb-4' />
        <ParagraphText paraText="Elite Creative Talent | 80% More Cost-Effective than Agencies | Work with Real Experts, Not AI" className='text-[1D1F2C] ' />
      </div>

      <div className="container mx-auto py-6 md:py-12">
        <ReuseablePricing />
      </div>
      
    </div>
  );
}
