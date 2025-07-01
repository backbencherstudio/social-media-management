import React from "react";

export default function BlogHeader() {
  return (
    <div className="px-6 py-10 sm:px-8 md:px-10 md:py-15 bg-[#ECEFF3]/50 rounded-lg mt-8 md:mt-12 mb-12 md:mb-16 border border-[#ECEFF3] mx-1 md:mx-0">
      <h2 className="text-center text-3xl sm:text-4xl md:text-[42px] font-bold mb-3 md:mb-4">
        Blog
      </h2>
      <p className="text-center text-[#1D1F2C] text-base sm:text-lg">
        Great content with your branding at very affordable rates. We handle the
        visuals, captions, and hashtags.
      </p>
    </div>
  );
}
