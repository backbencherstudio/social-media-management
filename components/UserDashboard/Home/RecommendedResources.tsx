import RecommendedResourcesCard from '@/components/reusable/RecommendedResourcesCard';
import { User } from 'lucide-react';
import React from 'react'
import video from '@/public/video.png'

export default function RecommendedResources() {
    const data = [
        {
            title: "Understanding the next steps",
            description: "Get familiar with the process and next steps, by watching this 3-min onboarding video.",
            buttonText: "Watch video",
            videoUrl: "/path/to/video.mp4",
            thumbnailUrl: "/path/to/thumbnail.jpg",
        },
        {
            title: "Understanding the next steps",
            description: "Get familiar with the process and next steps, by watching this 3-min onboarding video.",
            buttonText: "Watch video",
            videoUrl: "/path/to/video.mp4",
            thumbnailUrl: "/path/to/thumbnail.jpg",
        }
    ]
    const handleVideoPlay = () => {
        console.log("Video played");
    }
    return (

        <div className='flex flex-col md:flex-row w-full gap-4 py-10'>
            <div className="grid grid-cols-1 md:w-6/12 w-full gap-4">
                {data.map((item, index) => (
                    <RecommendedResourcesCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        buttonText={item.buttonText}
                        videoUrl={item.videoUrl}
                        thumbnailUrl={video.src}
                        handleVideoPlay={handleVideoPlay}
                    />
                ))}



            </div>

            {/* Support Helpdesk Card */}
            <div className='flex flex-col gap-4 md:w-6/12 w-full'>
                <div className="bg-white rounded-lg px-6 py-2">
                    <div className="flex flex-col items-center md:flex-row justify-between w-full gap-4" >
                        <div className='md:w-5/12 w-full'>
                            <h2 className="text-2xl font-semibold">Support Helpdesk</h2>
                            <p className="text-gray-600 mt-2">
                                Access our comprehensive help articles for quick solutions to common issues and questions
                            </p>
                            <button className="mt-4 flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2">
                                Open helpdesk
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-5 md:w-7/12 w-full flex flex-col gap-4">
                            <div className="w-full z-30 ">
                                <div className=" bg-gray-100 rounded-lg p-6 shadow-lg border border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                            <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-10/12 mx-auto -mt-12 z-20">
                                <div className=" bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                            <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-8/12 mx-auto -mt-12 z-10">
                                <div className=" bg-gray-100 rounded-lg p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                            <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
