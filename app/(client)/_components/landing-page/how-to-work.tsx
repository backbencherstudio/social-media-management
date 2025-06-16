"use client"

import React, { useRef, useState } from 'react';
import Heading from '../heading-text';
import ParagraphText from '../paragraph-text';
import { Play } from 'lucide-react';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import { IoMdAddCircle } from 'react-icons/io';
import { BsArrowUpRightCircle } from "react-icons/bs";

const HowToWork = ({ heading }: { heading: string }) => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [buttonHide, setButtonHide] = useState(false);




  // Play video handler
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setButtonHide(true)
    }
  };

  return (
    <div className='max-w-[996px] mx-auto lg:my-25 md:my-20 my-16 px-5 2xl:px-0'>
      <div className=" text-center ">
        <Heading text={heading} className="text-2xl sm:text-3xl md:text-[42px]" />
        <ParagraphText
          paraText="Watch our 4-min demo video, then sign up or book a call to learn more."
          className="max-w-[335px] sm:max-w-[500px] md:max-w-[644px] text-center mx-auto mt-3 sm:mt-4 mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base"
        />
      </div>

      <div className='relative aspect-video max-h-[494px] w-full rounded-[12px] overflow-hidden'>
        <video
          //need to add the control depends on buttonHide
          controls={buttonHide}
          ref={videoRef}
          className="w-full  h-full object-cover "
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={` ${buttonHide ? "hidden" : ""} absolute inset-0 flex items-center justify-center`}>
          <button
            className="h-[64px] w-[64px] cursor-pointer bg-white bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
            onClick={() => playVideo()}
          >
            <Play className="w-8 h-8 text-black fill-black" />
          </button>
        </div>
      </div>

      {/* button part  */}

      <div className='border mt-8 py-[40px] md:py-[50px] lg:py-[62px] border-[#DFE1E7] rounded-[12px] px-1 md:px-0'>
        <h1 className='text-center text-[#1D1D1F] text-[32px] font-semibold leading-[160%]'>Get Started with TagGrowth Today</h1>
        <ParagraphText
          paraText="Get your creative & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises."
          className="max-w-[335px] sm:max-w-[500px] md:max-w-[644px] text-center mx-auto mt-2 md:mt-[14px] mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base  "
        />

        <div className="md:mt-12 mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link href="">
            <div className=" leading-[150%] text-[#070707] border px-9 py-4 flex cursor-pointer items-center rounded-[8px] gap-2 font-semibold hover:bg-black hover:text-white">
              <span className=" font-serotiva text-sm md:text-base"> Schedule a free demo call</span>
              <IoMdAddCircle className="ml-2 w-5 h-5" />
            </div>
          </Link>
          <Link href="">
            <div className=" leading-[150%] text-[#070707] border px-6 py-4 flex cursor-pointer items-center rounded-[8px] gap-2 font-semibold hover:bg-black hover:text-white">
              <span className="font-serotiva text-sm md:text-base"> Start Using TagGrowth Now</span>
                <BsArrowUpRightCircle className="ml-2 w-5 h-5 "/>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default HowToWork;