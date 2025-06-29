"use client";

import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Video as background */}
      <div className="w-full h-full absolute top-0 left-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/resellerHero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Social media management <br /> reseller program
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Get your design & marketing work done without the hassle of unreliable
          freelancers, costly agencies. Pay a fixed, monthly, and predictable
          rate, with no contracts or surprises.
        </p>
        <Link href={'/become-reseller/application-from'} className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition flex items-center gap-2 group">
          Become a Reseller 
          <HiArrowUpRight className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
