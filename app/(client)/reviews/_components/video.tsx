"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    name: "John Doe",
    position: "Marketing Manager",
    video: "/video/about-video.mp4"
  },
  {
    id: 2,
    name: "Sarah Smith",
    position: "Content Creator",
    video: "/video/about-video.mp4"
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Social Media Expert",
    video: "/video/about-video.mp4"
  },
  {
    id: 4,
    name: "Emily Wilson",
    position: "Digital Marketer",
    video: "/video/about-video.mp4"
  },
  {
    id: 5,
    name: "Emily Wilson",
    position: "Digital Marketer",
    video: "/video/about-video.mp4"
  },
  {
    id: 6,
    name: "Emily Wilson",
    position: "Digital Marketer",
    video: "/video/about-video.mp4"
  },
  {
    id: 7,
    name: "Emily Wilson",
    position: "Digital Marketer",
    video: "/video/about-video.mp4"
  },
];

export default function Video() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    }, 
    [AutoPlay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="container py-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {videos.map((video) => (
            <div 
              className="flex-none w-[280px]" 
              key={video.id}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? "bg-[#1D1D1F] w-8" 
                : "bg-[#D4D4D8]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const VideoCard = ({ video, name, position }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden">
      {!isPlaying ? (
        <div 
          className="relative w-full h-full cursor-pointer group bg-[#F7F7F9]"
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-8 h-8 text-[#1D1D1F]" />
            </div>
          </div>
          {/* <div className="absolute bottom-6 left-6">
            <h4 className="font-medium text-lg text-[#1D1D1F]">{name}</h4>
            <p className="text-sm text-[#777980]">{position}</p>
          </div> */}
        </div>
      ) : (
        <video
          src={video}
          controls
          autoPlay
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
