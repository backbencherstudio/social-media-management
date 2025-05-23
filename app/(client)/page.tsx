'use client';
import React, { use } from "react";
import Hero from "./_components/landing-page/hero";
import ExampleOfWork from "./_components/landing-page/ExampleOfWork";
import AllServices from "./_components/landing-page/all-services";
import TrustedBrand from "./_components/trusted-brand";
import HowToWork from "./_components/landing-page/how-to-work";
import MarketingService from "./_components/landing-page/marketing-service";
import SeamlessExperience from "./_components/landing-page/seamless-experience";
import FrequentlyAsked from "./_components/landing-page/frequently-asked";
import ClientsProject from "./_components/landing-page/clients-project";
import { useGetDataQuery } from "@/src/redux/features/data/data";

export default function HomePage() {

  const { data, isLoading, error } = useGetDataQuery()
  console.log(data)

  return (
    <div>
      <Hero />
      <ExampleOfWork />
      <AllServices />
      <TrustedBrand bgcolor={true} />
      <HowToWork heading="How to Work TagGrowth" />
      <MarketingService />
      <SeamlessExperience />
      <FrequentlyAsked />
      <ClientsProject />
      {/* <SupportChatBoart /> */}
    </div>
  );
}
