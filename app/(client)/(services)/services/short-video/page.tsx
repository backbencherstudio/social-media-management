import ReuseableHero from "@/app/(client)/_components/reuseable-hero";
import React from "react";
import img from "@/public/img/short-video/banner.png";
import BusinessTrust from "@/app/(client)/_components/business-trust";
import Pricing from "@/app/(client)/pricing-and-package/_components/pricing";
import FrequentlyAsked from "@/app/(client)/_components/landing-page/frequently-asked";
import SubscriptionBenefits from "../_components/subscription-benefits";
import ShortVideoExample from "@/app/(client)/examples/_components/short-video";
import ProcessSteps from "../seo-backlinks/_components/process-step";
import RawVideos from "./_components/raw-videos";

export default function ShortVideo() {
  return (
    <div className="container">
      <ReuseableHero
        header={"Short-form video content from only $99/mo"}
        para={[
          "Take your email marketing to the next level with stunning emails that convert. Made by our team of copywriters, designers, and email experts.",
        ]}
        img={img}
      />
      <BusinessTrust />
      <Pricing />
      <ShortVideoExample />
      <RawVideos />
      <SubscriptionBenefits />
      <FrequentlyAsked />
    </div>
  );
}
