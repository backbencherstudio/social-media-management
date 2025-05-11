import React from "react";
import HowToWork from "../_components/landing-page/how-to-work";
import SocialMediaServices from "./_components/social-media-services";
import PostExample from "../examples/_components/post-content";
import TrustedBrand from "../_components/trusted-brand";
import FrequentlyAsked from "../_components/landing-page/frequently-asked";
import ApplyReseller from "../pricing-and-package/_components/apply-reseller";

const BecomeResellerPage = () => {
  return (
    <div>
      <HowToWork heading="How to Work TagGrowth" />
      <SocialMediaServices />
      <PostExample
        header="Examples of our work"
        para="Get your design & marketing work done without the hassle of unreliable freelancers, costly
       agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises."
      />
      <TrustedBrand bgcolor={false} />
      <ApplyReseller />
      <FrequentlyAsked />
    </div>
  );
};

export default BecomeResellerPage;
