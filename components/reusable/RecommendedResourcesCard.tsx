import React from 'react';
import Image from 'next/image';

interface ResourceCardProps {
    title: string;
    description: string;
    buttonText: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    handleVideoPlay: () => void;
}

export default function RecommendedResourcesCard({
    title,
    description,
    buttonText,
    videoUrl,
    thumbnailUrl,
    handleVideoPlay
}: ResourceCardProps) {
    return (
        <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <button className="flex items-center gap-2 text-primary hover:text-primary-dark">
                    {buttonText}
                    <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
            {thumbnailUrl && (
                <div className="relative w-96 h-[235px]">
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        fill
                        className="rounded-lg object-cover h-full w-full"
                    />
                    {videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white cursor-pointer p-2 rounded-full" onClick={handleVideoPlay}>
                                <svg
                                    className="w-6 h-6 text-primary"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
