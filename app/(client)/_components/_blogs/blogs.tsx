"use client";

import React from "react";
import MediaIcon from "@/public/incons/media-icon";
import BlogCard from "./blog-card";

const blogData = [
  {
    icon: <MediaIcon className="w-6 h-6" />,
    title: "Home Services",
    description: "Luxurious Bathroom Design Ideas For Small Spaces",
    wordCount: "1500 word",
    learnMoreLink: "/blogs/home-services",
  },
  {
    icon: <MediaIcon className="w-6 h-6" />,
    title: "Mental Health",
    description: "Luxurious Bathroom Design Ideas For Small Spaces",
    wordCount: "1500 word",
    learnMoreLink: "/blogs/mental-health",
  },
  {
    icon: <MediaIcon className="w-6 h-6" />,
    title: "Agriculture",
    description: "Luxurious Bathroom Design Ideas For Small Spaces",
    wordCount: "1500 word",
    learnMoreLink: "/blogs/agriculture",
  },
  {
    icon: <MediaIcon className="w-6 h-6" />,
    title: "Tourism",
    description: "Luxurious Bathroom Design Ideas For Small Spaces",
    wordCount: "1500 word",
    learnMoreLink: "/blogs/tourism",
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}
