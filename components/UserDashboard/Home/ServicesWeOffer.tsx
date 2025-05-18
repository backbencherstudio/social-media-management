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
      icon: <IdeationIcon />, // Replace with your actual icon component
      title: "Social Media Posts",
      description:
        "High-quality social media management at an unbeatable low cost.",
      price: "$99/mo",
      badge: "BEST SELLER",
    },
    {
      id: 2,
      icon: <IdeationIcon />, // Replace with your actual icon component
      title: "Short-Form Videos",
      description:
        "Boost your site's visibility and rankings with expert SEO strategies.",
      price: "$149/mo",
      badge: null,
    },
    {
      id: 3,
      icon: <IdeationIcon />, // Replace with your actual icon component
      title: "Email Design",
      description:
        "Engaging blog posts and articles tailored to your brand's voice.",
      price: "$120/mo",
      badge: null,
    },
    {
      id: 4,
      icon: <IdeationIcon />, // Replace with your actual icon component
      title: "Blog Post",
      description:
        "Professional email campaigns to nurture leads and increase conversions.",
      price: "$130/mo",
      badge: "POPULAR",
    },
  ];

  return (
    <section>
      <h3 className="text-[24px] font-bold mb-4">Services we offer</h3>

      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-6 mt-12">
        {/* <ProcessCard /> */}
        {services.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </section>
  );
}
