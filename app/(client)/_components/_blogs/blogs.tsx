"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import TimelineModal from "../timeline-modal";
import Link from "next/link";
import { useGetSingleServiceQuery } from "@/src/redux/features/admin/services";
import { Service, ServiceTier } from "@/types/services";

// const socialPlatforms = [
//   <FacebookIcon />,
//   <TwitterIcon />,
//   <InstaIcon />,
//   <LinkdinIcon />,
//   <YoutubeIcon />,
//   <TiktokIcon />,
// ];

export default function Blogs({ service }: any) {
  const { data } = useGetSingleServiceQuery(service?.id);
  console.log(data);

  // Extract max_post values from service_tiers
  const posts = data?.service_tiers?.map(
    (tier: ServiceTier) => tier.max_post
  ) || [10, 15, 20, 25, 30, 35, 40];
  const [selectedPosts, setSelectedPosts] = useState(posts[2] || 20); // Default to third option or 20

  // Calculate base price based on selected posts
  const basePrice = data?.service_tiers?.find(
    (tier: ServiceTier) => tier.max_post === selectedPosts
  )?.price;

  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {/* Left Side */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border border-[#D2D2D5]">
        <div className="flex items-start gap-4 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-[26px] text-[#1D1D1F] font-serotiva-semibold font-semibold">
            {data?.name}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#4A4C56] mb-4 sm:mb-6">
          {data?.description}
        </p>

        <div className="">
          <FeatureList features={service?.features || []} />
        </div>

        <div className="overflow-x-auto">
          <ActionButtons handleModal={handleModal} />
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
          Orders over $149+ qualify for monthly content review calls
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border border-[#D2D2D5]">
        <PricingHeader selectedPosts={selectedPosts} basePrice={basePrice} />
        <PostSelector
          posts={posts}
          selectedPosts={selectedPosts}
          setSelectedPosts={setSelectedPosts}
        />
        {/* <SocialPlatforms platforms={socialPlatforms} /> */}
        <CheckoutButtons />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="w-full fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center">
          <TimelineModal
            content={"Posts Content"}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
    </div>
  );
}

// Sub-components
function FeatureList({ features }: { features: string[] }) {
  const midPoint = Math.ceil(features.length / 2);
  const firstRowFeatures = features.slice(0, midPoint);
  const secondRowFeatures = features.slice(midPoint);

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 justify-between gap-4">
        {/* First Row */}
        <div className="space-y-3">
          {firstRowFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-[#4A4C56] text-sm">{feature}</span>
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="space-y-3">
          {secondRowFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-[#4A4C56] text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionButtons({
  handleModal,
}: {
  handleModal: (content: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-8">
      <Button
        onClick={() => handleModal("Timeline Content")}
        variant="outline"
        className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm"
      >
        Timeline
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>

      {["Examples", "How the service works"].map((text) => (
        <Button
          key={text}
          variant="outline"
          className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm"
        >
          {text}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      ))}
    </div>
  );
}

function PricingHeader({
  selectedPosts,
  basePrice,
}: {
  selectedPosts: number;
  basePrice: number;
}) {
  return (
    <div className="flex justify-between items-center mb-8">
      <span className="text-sm">{selectedPosts} Post</span>
      <span className="text-2xl font-bold">${basePrice}/mo</span>
    </div>
  );
}

function PostSelector({
  posts,
  selectedPosts,
  setSelectedPosts,
}: {
  posts: number[];
  selectedPosts: number;
  setSelectedPosts: (count: number) => void;
}) {
  return (
    <div className="mb-8">
      <p className="text-sm mb-4">Select monthly number of posts</p>
      <div className="grid grid-cols-7 gap-2">
        {posts.map((count) => (
          <Button
            key={count}
            variant={selectedPosts === count ? "default" : "outline"}
            className={`${
              selectedPosts === count ? "bg-black text-white" : ""
            }`}
            onClick={() => setSelectedPosts(count)}
          >
            {count}
          </Button>
        ))}
      </div>
    </div>
  );
}

function SocialPlatforms({ platforms }: { platforms: any[] }) {
  return (
    <div className="mb-8">
      <p className="text-sm mb-4">Social media including</p>
      <div className="flex flex-wrap gap-4">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            {platform}
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckoutButtons() {
  return (
    <>
      <Link href={"/dashboard/user-dashboard/services/service-selection"}>
        <Button className="w-full bg-black text-white mb-4">Checkout</Button>
      </Link>
      <Button variant="outline" className="w-full">
        Schedule a Demo
      </Button>
    </>
  );
}
