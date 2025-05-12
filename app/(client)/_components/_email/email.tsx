"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FacebookIcon from '@/public/incons/landin-page/facebook';
import TwitterIcon from '@/public/incons/landin-page/TwitterIcon';
import InstaIcon from '@/public/incons/landin-page/insta-icon';
import LinkdinIcon from '@/public/incons/landin-page/LinkdinIcon';
import YoutubeIcon from '@/public/incons/landin-page/youtubeIcon';
import TiktokIcon from '@/public/incons/landin-page/ToktokIcon';

const email = {
  title: "Email Design",
  description:
    "Take your email marketing to the next level with stunning emails that convert. Made by our team of copywriters, designers, and email experts.",
  features: [
    "Emails in your branding",
    "Captions & hashtags",
    "Implemented in your ESP",
  ],
  additionalFeatures: [
    "Email Design",
    "Responsive design",
    "Sent for you (optiona0)",
  ],
  pricing: {
    basePrice: {
      2: 99,
      4: 149,
      6: 199,
      8: 249,
      10: 299,
    },
    posts: [2, 4, 6, 8, 10],
  },
};

const socialPlatforms = [<FacebookIcon/>, <TwitterIcon/>, <InstaIcon/>, <LinkdinIcon/>, <YoutubeIcon/>, <TiktokIcon/>];

export default function Email(                             ) {
  const [selectedPosts, setSelectedPosts] = useState(6);
  const basePrice = email.pricing.basePrice[selectedPosts];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {/* Left Side */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border border-[#D2D2D5]">
        <div className="flex items-start gap-4 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-[26px] text-[#1D1D1F] font-serotiva-semibold font-semibold">{email.title}</h2>
        </div>
        <p className="text-sm sm:text-base text-[#4A4C56] mb-4 sm:mb-6">{email.description}</p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="flex-1">
            <FeatureList features={email.features} />
          </div>
          <div className="flex-1">
            <FeatureList features={email.additionalFeatures} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <ActionButtons />
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
          Orders over $149+ qualify for monthly content review calls
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border border-[#D2D2D5]">
        <PricingHeader selectedPosts={selectedPosts} basePrice={basePrice} />
        <PostSelector 
          posts={email.pricing.posts} 
          selectedPosts={selectedPosts} 
          setSelectedPosts={setSelectedPosts} 
        />
        <SocialPlatforms />
        <CheckoutButtons />
      </div>
    </div>
  );
}


// Sub-components
function FeatureList({ features }: { features: string[] }) {
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3);

  return (
    <div className="mb-8">
      <div className="">
        {/* Left Column */}
        <div className="space-y-3">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className=" rounded-full bg-black flex items-center justify-center flex-shrink-0">
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

function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-8">
      {['Timeline', 'Examples', 'How the service works'].map((text) => (
        <Button key={text} variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm">
          {text}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      ))}
    </div>
  );
}

function PricingHeader({ selectedPosts, basePrice }: { selectedPosts: number; basePrice: number }) {
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
  setSelectedPosts 
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
            className={`${selectedPosts === count ? 'bg-black text-white' : ''}`}
            onClick={() => setSelectedPosts(count)}
          >
            {count}
          </Button>
        ))}
      </div>
    </div>
  );
}

function SocialPlatforms() {
  return (
    <div className="mb-8">
      <p className="text-sm mb-4">Combine any services & add-ons during checkout </p>
      <div className="flex flex-wrap gap-4">

      </div>
    </div>
  );
}

function CheckoutButtons() {
  return (
    <>
      <Button className="w-full bg-black text-white mb-4">
        Checkout
      </Button>
      <Button variant="outline" className="w-full">
        Schedule a Demo
      </Button>
    </>
  );
}
