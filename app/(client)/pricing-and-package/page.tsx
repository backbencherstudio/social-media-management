import React from "react";
import Banner from "./_components/banner";
import Pricing from "./_components/pricing";
import BusinessTrust from "../_components/business-trust";
import Packages from "./_components/packages";
import AddOns from "./_components/add-ons";
import SocialChannel from "./_components/socical-channel";
import ApplyReseller from "./_components/apply-reseller";

export default function PricingAndPackage() {
  return (
    <div className="min-h-screen w-full px-4">
      <div className="bg-[#F7F7F9]">
        <Banner />
        <div className="sm:px-6 lg:px-8 mb-20">
          <Pricing />
        </div>
      </div>
      <div className="pt-[100px]">
        <BusinessTrust />
      </div>
      <Packages />
      <AddOns/>
      <SocialChannel/>
      <ApplyReseller/>
    </div>
  );
}
