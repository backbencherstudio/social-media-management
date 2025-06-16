import Heading from "@/app/(client)/_components/heading-text";
import ParagraphText from "@/app/(client)/_components/paragraph-text";
import React from "react";
import HowItWorkCord from "./how-it-work-cord";

export default function HowItWork() {
  return (
    <div className="container mb-14">
      <div className="container mx-auto text-center  pb-14">
        <Heading text="How it works" className="text-[42px] mb-4" />
        <ParagraphText
          paraText="TagGrowth is a creative subscription service, trusted by 12,000+ businesses to get exceptional creative services faster, more reliably and at the lowest cost."
          className="text-[1D1F2C] "
        />
      </div>
      <HowItWorkCord />
    </div>
  );
}
