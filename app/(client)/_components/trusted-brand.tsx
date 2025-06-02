"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

import profile from "@/public/img/pricing/profileOne.png";
import CustomImage from "@/components/reusable/CustomImage";
import { Play } from "lucide-react";
import Heading from "./heading-text";


const testimonials = [
  {
    id: 1,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 2,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 3,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 4,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 5,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 6,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 7,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 8,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 9,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
  {
    id: 10,
    image: profile.src,
    name: "Stephen K.",
    position: "Founder & CEO",
    quote: "The process of reviewing and requesting revisions was streamlined to perfection a feature that saved me an invaluable amount of time!",
    video: "/video/about-video.mp4"
  },
];

interface TrustedProps {
  bgcolor: boolean; // Use boolean type instead of string for "false"
}


export default function TrustedBrand({bgcolor = false}:TrustedProps) {
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [AutoPlay({ delay: 3000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className={`${bgcolor ? "bg-[#F7F7F9]" : ""}`}>
      <div className="lg:py-25 md:py-20 py-16">
        <div className="max-w-[694px] mx-auto text-center ">
          <Heading text="Trusted by Brands for Seamless Social Media Management" className="text-2xl sm:text-3xl md:text-[42px]" />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 md:mt-12 mt-8">
            {testimonials.map((testimonial) => (
              <div className="flex-none  w-[282px] last:mr-4 md:last:mr-6" key={testimonial.id}>
                <TestimonialCard {...testimonial }  bgcolor={bgcolor} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex
                ? "bg-[#1D1D1F] w-8"
                : "bg-[#D4D4D8]"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({ image, name, position, quote, video, bgcolor }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` ${bgcolor ? "bg-white " :"bg-[#F7F7F9] "} border border-[#DFE1E7]  rounded-xl w-[282px] h-[400px] hover:bg-[#F0F0F3] transition-colors relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isPlaying ? (
        <>
          <div className={`transition-opacity duration-300 h-full p-5 ${isHovered ? "opacity-0" : "opacity-100"
            }`}>
            <div className="flex  h-full   flex-col items-start gap-5">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <CustomImage
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#1D1D1F] text-base leading-[160%] mb-6">
                  "{quote}"
                </p>
              </div>
              <div className="flex flex-col   h-full justify-end">
                <h4 className="text-[#1D1D1F] font-medium text-lg">{name}</h4>
                <p className="text-[#777980] text-base">{position}</p>
              </div>
            </div>
          </div>

          <div
            className={`absolute inset-0 rounded-xl overflow-hidden cursor-pointer transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
            onClick={() => setIsPlaying(true)}
          >
            <video
              className="w-full h-full object-cover"
              poster="/video-thumbnail.jpg"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play className="w-16 h-16 text-white" />
            </div>
          </div>
        </>
      ) : (
        <div className="h-full w-full">
          <video
            src={video}
            controls
            autoPlay
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>

  );
};
