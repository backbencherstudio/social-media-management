import React from "react";
import Banner from "./_components/_banner";
import Pricing from "./_components/pricing";
import BusinessTrust from "../_components/business-trust";
import Packages from "./_components/packages";
import AddOns from "./_components/add-ons";
import SocialChannel from "./_components/socical-channel";
import ApplyReseller from "./_components/apply-reseller";
import TrustedBrand from "../_components/trusted-brand";

export default function PricingAndPackage() {
  return (
    <div className="min-h-screen w-full px-4">
      <div className="bg-[#F7F7F9]">
        {/* <Banner /> */}
        <div className="sm:px-6 lg:px-8 mb-20">
          <Pricing />
        </div>
      </div>
      <div className="mb-20">
        <BusinessTrust />
      </div>
      <Packages scrollable={false} />
      <AddOns/>
      <SocialChannel/>
      <ApplyReseller/>
      <TrustedBrand/>
    </div>
  );
}
