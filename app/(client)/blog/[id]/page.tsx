"use client";

import { useParams } from "next/navigation";
import React from "react";
import Heading from "../../_components/heading-text";
import Image from "next/image";
import BlogBody from "./_components/blog-body";

export default function BlogDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Breadcrumb */}
      <div className="flex items-center my-12 md:my-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
            fill="#1D1F2C"
          />
        </svg>
        <p className="text-sm font-medium ml-2">
          <span className="text-[#A5A5AB]">Blogs</span>{" "}
          <span className="text-[#1D1F2C]">/ Blog Post</span>
        </p>
      </div>

      {/* Main Content */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-[70px]">
        {/* Text Info */}
        <div className="w-full md:w-1/2 px-0 md:px-12">
          <Heading
            text="Discover 12+ Creative Contest Ideas and Examples"
            className="text-[32px] md:text-[42px] mb-4"
          />
          <p className="mb-8 md:mb-12 text-base text-gray-700">
            Check out the 12 best social media management agencies offering
            tailored services to boost engagement and business growth across
            platforms.
          </p>

          <div className="flex gap-2.5 items-center text-sm text-gray-600">
            <h5>January 27, 2025</h5>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="4" fill="#D9D9D9" />
              </svg>
            </span>
            <p>5 min read</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 aspect-[3/2] rounded-md overflow-hidden relative">
          <Image
            src="https://img.freepik.com/free-photo/empty-classroom-with-desks-chairs-brick-floor_91128-3754.jpg?ga=GA1.1.1363655190.1746773733&semt=ais_hybrid&w=740"
            alt="Empty classroom with desks and chairs"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <BlogBody/>
    </div>
  );
}
