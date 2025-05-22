import React from "react";
import GalleryIcon from "@/public/incons/gallery";
import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import image from "@/public/img/social-media-posts/boat.png";

export default function HowItWorkCord() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {/* card 1 */}
      <div className="relative w-full max-w-[384px] mx-auto h-[450px] md:h-[518px] bg-[#F7F7F9] rounded-xl overflow-hidden">
        <div className="px-3 md:px-4 pt-24 md:pt-36">
          <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
            Select services
          </h1>
          <p className="text-sm md:text-base">
            Choose services, add-ons, and social platforms that fit your needs.
          </p>
          <div className="pt-4 md:pt-6 space-y-2 md:space-y-3">
            <div className="flex items-center gap-3 md:gap-4 py-2 md:py-3 px-3 md:px-4 bg-[#1D1D1F] text-white rounded-lg">
              <GalleryIcon />
              <p className="text-sm md:text-base">Social Media Management</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4 py-2 md:py-3 px-3 md:px-4 bg-white rounded-lg">
              <GalleryIcon />
              <p className="text-sm md:text-base">Social Media Management</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4 py-2 md:py-3 px-3 md:px-4 bg-white rounded-lg">
              <GalleryIcon />
              <p className="text-sm md:text-base">Social Media Management</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4 py-2 md:py-3 px-3 md:px-4 bg-white rounded-lg">
              <GalleryIcon />
              <p className="text-sm md:text-base">Social Media Management</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-10px] left-[-20px] flex items-center justify-center bg-[#1D1D1F] w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full text-white text-2xl md:text-3xl">
          1
        </div>
      </div>

      {/* card 2 */}
      <div className="relative w-full max-w-[384px] mx-auto h-[450px] md:h-[518px] bg-[#F7F7F9] rounded-xl overflow-hidden">
        <div className="px-3 md:px-4 pt-24 md:pt-36">
          <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
            Submit questionnaire
          </h1>
          <p className="text-sm md:text-base">
            Tell us about your branding, preferences, and target audience.
          </p>
          <div className="pt-4 md:pt-6 space-y-2 md:space-y-3">
            <div className="flex items-center justify-between gap-3 md:gap-4 py-2 md:py-3 px-3 md:px-4 bg-white font-semibold rounded-lg">
              <p className="text-sm md:text-base">Onboarding Questionnaire</p>
              <HiDotsHorizontal />
            </div>
            <div className="py-2 px-3 bg-white rounded-lg space-y-2 md:space-y-3">
              <p className="text-sm md:text-base">
                <span className="font-semibold">Questions</span> (1/10)
              </p>
              <p className="text-sm md:text-base">
                What are your brand colors?
              </p>

              <div className="flex flex-wrap gap-1 md:gap-2">
                <div className="flex gap-2 px-2 md:px-3 py-1 md:py-2 bg-[#F7F7F9] rounded-xl items-center">
                  <p className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] bg-[#FFAA55] rounded-full"></p>
                  <p className="text-xs md:text-sm">#FFAA55</p>
                </div>
                <div className="flex gap-2 px-2 md:px-3 py-1 md:py-2 bg-[#F7F7F9] rounded-xl items-center">
                  <p className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] bg-[#078C00] rounded-full"></p>
                  <p className="text-xs md:text-sm">#078C00</p>
                </div>
                <div className="flex gap-2 px-2 md:px-3 py-1 md:py-2 bg-[#F7F7F9] rounded-xl items-center">
                  <p className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] bg-[#556CFF] rounded-full"></p>
                  <p className="text-xs md:text-sm">#556CFF</p>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <Button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 text-sm md:text-base">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-10px] left-[-20px] flex items-center justify-center bg-[#1D1D1F] w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full text-white text-2xl md:text-3xl">
          2
        </div>
      </div>

      {/* card 3 */}
      <div className="relative w-full max-w-[384px] mx-auto h-[450px] md:h-[518px] bg-[#F7F7F9] rounded-xl overflow-hidden">
        <div className="px-3 md:px-4 pt-24 md:pt-36">
          <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
            Receive content
          </h1>
          <p className="text-sm md:text-base">
            Get content for a full month within 10 working days. Easily review &
            approve.
          </p>
        </div>
        <div className="px-3 pt-4 md:pt-6">
          <img
            src={image.src}
            alt="Content preview"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="absolute top-[-10px] left-[-20px] flex items-center justify-center bg-[#1D1D1F] w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full text-white text-2xl md:text-3xl">
          3
        </div>
      </div>
    </div>
  );
}
