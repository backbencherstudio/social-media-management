"use client";

import React, { useCallback, useEffect, useState } from "react";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";
import ServiceCard from "../../_components/service-card";
import MediaIcon from "@/public/incons/media-icon";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetAllServicesQuery } from "@/src/redux/features/admin/services";

const serviceCardsData = [
  {
    icon: <MediaIcon />,
    tag: "Social Media",
    title: "Social Media Posts",
    description:
      "Branded social media content created & posted monthly to your channels.",
    price: 99,
    defaultPlan: "10 posts - $99/mo",
    plans: ["10 posts - $99/mo", "20 posts - $189/mo", "30 posts - $279/mo"],
    learnMoreLink: "/services/social-media-posts",
  },
  {
    icon: <MediaIcon />,
    tag: "Content Creation",
    title: "Blog Writing",
    description: "SEO-optimized blog posts to drive traffic and engagement.",
    price: 149,
    defaultPlan: "4 posts - $149/mo",
    plans: ["4 posts - $149/mo", "8 posts - $279/mo", "12 posts - $399/mo"],
    learnMoreLink: "/services/blog-writing",
  },
  {
    icon: <MediaIcon />,
    tag: "Video",
    title: "Video Production",
    description: "Professional video content for your marketing needs.",
    price: 299,
    defaultPlan: "2 videos - $299/mo",
    plans: ["2 videos - $299/mo", "4 videos - $549/mo", "6 videos - $799/mo"],
    learnMoreLink: "/services/video-production",
  },
  {
    icon: <MediaIcon />,
    tag: "Design",
    title: "Graphic Design",
    description: "Custom graphics for social media and marketing materials.",
    price: 199,
    defaultPlan: "5 designs - $199/mo",
    plans: [
      "5 designs - $199/mo",
      "10 designs - $349/mo",
      "15 designs - $499/mo",
    ],
    learnMoreLink: "/services/graphic-design",
  },
  {
    icon: <MediaIcon />,
    tag: "Email",
    title: "Email Marketing",
    description: "Engaging email campaigns to nurture your audience.",
    price: 179,
    defaultPlan: "4 emails - $179/mo",
    plans: ["4 emails - $179/mo", "8 emails - $329/mo", "12 emails - $469/mo"],
    learnMoreLink: "/services/email-marketing",
  },
  {
    icon: <MediaIcon />,
    tag: "SEO",
    title: "SEO Services",
    description: "Optimize your online presence for better visibility.",
    price: 249,
    defaultPlan: "Basic - $249/mo",
    plans: ["Basic - $249/mo", "Standard - $449/mo", "Premium - $649/mo"],
    learnMoreLink: "/services/seo",
  },
  {
    icon: <MediaIcon />,
    tag: "Ads",
    title: "Social Ads",
    description: "Targeted advertising campaigns across social platforms.",
    price: 399,
    defaultPlan: "Starter - $399/mo",
    plans: ["Starter - $399/mo", "Growth - $699/mo", "Scale - $999/mo"],
    learnMoreLink: "/services/social-ads",
  },
  {
    icon: <MediaIcon />,
    tag: "Strategy",
    title: "Content Strategy",
    description: "Strategic content planning and calendar management.",
    price: 299,
    defaultPlan: "Monthly - $299",
    plans: ["Monthly - $299", "Quarterly - $799", "Yearly - $2899"],
    learnMoreLink: "/services/content-strategy",
  },
  {
    icon: <MediaIcon />,
    tag: "Analytics",
    title: "Performance Analytics",
    description: "Detailed reporting and analytics for your campaigns.",
    price: 149,
    defaultPlan: "Basic - $149/mo",
    plans: ["Basic - $149/mo", "Pro - $249/mo", "Enterprise - $449/mo"],
    learnMoreLink: "/services/analytics",
  },
  {
    icon: <MediaIcon />,
    tag: "Branding",
    title: "Brand Identity",
    description: "Comprehensive brand development and guidelines.",
    price: 499,
    defaultPlan: "Essential - $499/mo",
    plans: ["Essential - $499/mo", "Premium - $799/mo", "Complete - $1299/mo"],
    learnMoreLink: "/services/brand-identity",
  },
  {
    icon: <MediaIcon />,
    tag: "Web",
    title: "Website Content",
    description: "Engaging website copy and content creation.",
    price: 199,
    defaultPlan: "5 pages - $199/mo",
    plans: ["5 pages - $199/mo", "10 pages - $379/mo", "15 pages - $549/mo"],
    learnMoreLink: "/services/website-content",
  },
  {
    icon: <MediaIcon />,
    tag: "Support",
    title: "Social Management",
    description: "Complete social media account management.",
    price: 349,
    defaultPlan: "Basic - $349/mo",
    plans: ["Basic - $349/mo", "Standard - $599/mo", "Premium - $849/mo"],
    learnMoreLink: "/services/social-management",
  },
];

interface PackagesProps {
  scrollable: boolean; // Use boolean type instead of string for "false"
}

export default function Packages({ scrollable }: PackagesProps) {
  const { data } = useGetAllServicesQuery();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className="container px-5 2xl:px-0">
      <div className="mx-auto text-center mt-20 md:mt-0">
        <Heading
          text="All Service Packages"
          className="text-2xl sm:text-3xl md:text-[42px]"
        />
        <ParagraphText
          paraText="Get your creative & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises."
          className="max-w-[335px] sm:max-w-[500px] md:max-w-[644px] text-center mx-auto mt-3 sm:mt-4 mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base"
        />
      </div>

      {scrollable ? (
        <div className="overflow-hidden  " ref={emblaRef}>
          <div className="flex  gap-4 sm:gap-6 ">
            {data?.map((service, index) => (
              <div
                key={index}
                className="shrink-0 w-full sm:w-[50%] md:w-[48%] lg:w-[32%]"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 gap-5">
            <button
              className={`cursor-pointer  w-[48px] h-[48px]  border border-[#DFE1E7] flex items-center justify-center rounded-full bg-white hover:bg-[#000] hover:text-white`}
              onClick={scrollPrev}
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
            <button
              className={`cursor-pointer   w-[48px] h-[48px] flex items-center justify-center rounded-full border border-[#DFE1E7]  hover:bg-[#000] hover:text-white`}
              onClick={scrollNext}
            >
              <IoIosArrowForward className="text-2xl" />
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {data?.map((service, index) => (
            <div key={index} className="flex justify-center">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
