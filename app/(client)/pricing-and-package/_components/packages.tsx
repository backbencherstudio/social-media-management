"use client";

import React, { useCallback } from "react";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";
import ServiceCard from "../../_components/service-card";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetAllServicesQuery } from "@/src/redux/features/admin/services";


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
