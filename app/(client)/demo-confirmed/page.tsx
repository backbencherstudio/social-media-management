"use client"

import React, { useEffect, useRef, useState } from 'react';

import { Play } from 'lucide-react';
import Heading from '../_components/heading-text';
import ParagraphText from '../_components/paragraph-text';
import { useRouter } from 'next/navigation';

const DemoConfirmpage = () => {


    const videoRef = useRef<HTMLVideoElement>(null);
    const [buttonHide, setButtonHide] = useState(false);

    
    useEffect(() => {
        // Reset scroll when navigating between pages
        return () => {
            document.body.style.overflow = 'auto'; // Reset scroll behavior on route change
        };
    }, []);

    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/'); // Redirect to the homepage or desired route
    };


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
                <Heading text="Your demo is confirmed!" className="text-2xl sm:text-3xl md:text-[42px]" />
                <ParagraphText
                    paraText="Please watch the 4-minute video below to be fully prepared for your scheduled demo.
"
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
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                {/* Confirmation Title and Description */}
                {/* <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedbird Demo Confirmed</h2>
                    <p className="text-gray-600 mb-4">
                        You are scheduled for a call with <strong>Jane Smith</strong> at <strong>10:00 AM - 10:20 AM</strong>
                    </p>
                </div> */}

                {/* Checklist Section */}
                <div className="space-y-4">
                    {/* <div className="flex items-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-green-500 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Click 'Yes' in the email calendar invite</h3>
                            <p className="text-gray-600 text-sm">
                                Based on your settings, the event may not show in your calendar until you respond 'Yes' to the event email confirmation.
                            </p>
                        </div>
                    </div> */}

                    <div className="flex items-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-green-500 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Join the Google Meet from a desktop/laptop, not phone</h3>
                            <p className="text-gray-600 text-sm">
                                You will receive further information on your email and a link to join the call. Please join it from desktop/laptop, not phone.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-green-500 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">The length of the call is 20 minutes</h3>
                            <p className="text-gray-600 text-sm">
                                We will be learning more about your business and needs to see if we can help – and then us telling you a lot more about how Feedbird works and what you can expect from working with us.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={handleBackToHome}
                        className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DemoConfirmpage;