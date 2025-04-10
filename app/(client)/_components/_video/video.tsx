"use client";

import React from 'react';

const videoData = {
  videos: [
    {
      id: 1,
      src: "/video/about-video.mp4",
      poster: "/video-thumbnail.jpg",
      title: 'Brand Story Creation'
    },
    {
      id: 2,
      src: "/video/about-video.mp4",
      poster: "/video-thumbnail.jpg",
      title: 'Product Showcase'
    },
    {
      id: 3,
      src: "/video/about-video.mp4",
      poster: "/video-thumbnail.jpg",
      title: 'Social Media Content'
    },
    {
      id: 4,
      src: "/video/about-video.mp4",
      poster: "/video-thumbnail.jpg",
      title: 'Promotional Video'
    },
    {
      id: 5,
      src: "/video/about-video.mp4",
      poster: "/video-thumbnail.jpg",
      title: 'Promotional Video'
    },
    {
      id: 6,
      src: "/video/about-video.mp4",
      poster: "/video-thumbnail.jpg",
      title: 'Promotional Video'
    },
  ]
};

export default function Video() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoData.videos.map((video) => (
          <div key={video.id} className="rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster={video.poster}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}