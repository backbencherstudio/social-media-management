"use client";

import React, { useState } from "react";
import Heading from "../../_components/heading-text";
import VideosContent from "../../_components/landing-page/_work_components/videos-content";

const categories = [
  { id: "1", name: "All" },
  { id: "2", name: "Beauty Services" },
  { id: "3", name: "Food & Beverages" },
  { id: "4", name: "Health & Wellness" },
  { id: "5", name: "Home Services" },
  { id: "6", name: "Professional Services" },
  { id: "7", name: "Real Estate" },
  { id: "8", name: "Shopping" },
  { id: "9", name: "Shopping2" },
  { id: "10", name: "Shopping3" },
  { id: "11", name: "Shopping4" },
  { id: "12", name: "Shopping5" },
  { id: "13", name: "Shopping6" },
  { id: "14", name: "Shopping7" },
];

const videoItems = [
  {
    id: "v1",
    title: "Woman Working on Crafts",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "9:56",
    views: "1.2K",
    category: "All",
  },
  {
    id: "v2",
    title: "Elephants Dream",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "10:53",
    views: "856",
    category: "All",
  },
  {
    id: "v3",
    title: "For Bigger Blazes",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "0:15",
    views: "3.4K",
    category: "All",
  },
  {
    id: "v4",
    title: "For Bigger Escapes",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "0:15",
    views: "2.1K",
    category: "All",
  },
  {
    id: "v5",
    title: "For Bigger Fun",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "0:15",
    views: "945",
    category: "Featured",
  },
  {
    id: "v6",
    title: "For Bigger Fun",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "0:15",
    views: "945",
    category: "Beauty Services",
  },
  {
    id: "v7",
    title: "For Bigger Joyrides",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "0:15",
    views: "5.2K",
    category: "Beauty Services",
  },
];

const ShortVideoExample = () => {
  const initialCategory = "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  return (
    <div className="max-w-[1200px] mx-auto lg:py-[100px] md:py-[80px] py-[60px]  px-5 2xl:px-0">
      <Heading
        text="Short-Form Video Content"
        className="text-center text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
      />
      <div className="md:mt-12 mt-8">
        <VideosContent
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          videoItems={videoItems}
        />
      </div>
    </div>
  );
};

export default ShortVideoExample;
