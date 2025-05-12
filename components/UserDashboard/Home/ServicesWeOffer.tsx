import IdeationIcon from "@/public/incons/landin-page/ideation";
import OnboardingIcon from "@/public/incons/landin-page/onboarding";
import PublishIcon from "@/public/incons/landin-page/publishIcon";
import WritingIcon from "@/public/incons/landin-page/writingIcon";
import React from "react";
import ServiceCard from "../Components/service-card";

export default function ServicesWeOffer() {
  const services = [
    {
      id: 1,
      icon: <OnboardingIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
    {
      id: 2,
      icon: <IdeationIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
    {
      id: 3,
      icon: <WritingIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
    {
      id: 4,
      icon: <PublishIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
  ];

  return (
    <section>
      <h3 className="text-[24px] font-bold mb-4">Services we offer</h3>

      <div className="text-center px-20">
        <h2 className="text-[42px] font-bold capitalize bg-gradient-to-b from-[rgba(0,0,0)] via-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent mb-2">
          How our process works
        </h2>

        <p className="text-center text-[#1D1F2C] max-w-[650px] mx-auto">
          We have a four-step process that helps us drive results
        </p>

        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-6 mt-12">
          {/* <ProcessCard /> */}
          {services.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
