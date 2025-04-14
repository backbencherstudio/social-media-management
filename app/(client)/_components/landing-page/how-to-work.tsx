"use client"

import React, { useRef, useState } from 'react';
import Heading from '../heading-text';
import ParagraphText from '../paragraph-text';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';


const HowToWork = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [buttonHide, setButtonHide] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Toggle mute handler
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Stop video handler
    const stopVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video to the beginning
            setButtonHide(false);
        }
    };

      // Play video handler
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setButtonHide(true)
    }
  };

    return (
        <div className='max-w-[996px] mx-auto lg:my-25 md:my-20 my-16'>
            <div className="mx-auto text-center ">
                <Heading text="How to Work TagGrowth" className="text-2xl sm:text-3xl md:text-[42px]" />
                <ParagraphText
                    paraText="Watch our 4-min demo video, then sign up or book a call to learn more."
                    className="max-w-[335px] sm:max-w-[500px] md:max-w-[644px] text-center mx-auto mt-3 sm:mt-4 mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base"
                />
            </div>

            <div className='relative aspect-video max-h-[494px] w-full rounded-[12px] overflow-hidden'>
                <video
                    //need to add the control depends on buttonHide
                    ref={videoRef}  // Fixed height
                    className="w-full  h-full object-cover " // Ensures width scales responsively
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

                {/* <div className={` ${buttonHide ? "":"hidden"} absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex justify-between items-center `}>
                  <button
                    className="w-8 h-8 cursor-pointer bg-black/50  rounded-full flex items-center justify-center hover:bg-black/70"
                    onClick={() => stopVideo()}
                  >
                    <Pause className="h-4 w-4 text-white" />
                  </button>

                  <button
                    className="w-8 h-8 cursor-pointer bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
                  </button>
                </div> */}
            </div>

        </div>
    );
};

export default HowToWork;