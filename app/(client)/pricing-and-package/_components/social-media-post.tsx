"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const socialMediaData = {
  title: 'Social Media Posts',
  description: 'Custom social media posts with your branding. Created & posted monthly to your social media channels. Includes strategy, engaging captions, and relevant hashtags tailored for your audience.',
  features: [
    'Posts in your branding',
    'Captions and hashtags',
    'Posted for you (optional)',
  ],
  additionalFeatures: [
    'Onboarding call (optional)',
    '1 social channel included',
    '+$10/mo each extra channel',
  ],
  pricing: {
    basePrice: 99,
    posts: [10, 15, 20, 25, 30, 35, 40],
  },
};

const socialPlatforms = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'tiktok'];

export default function SocialMediaPost() {
  const [selectedPosts, setSelectedPosts] = useState(20);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Side */}
      <div className="bg-white p-8 rounded-lg border">
        <div className="flex items-start gap-4 mb-6">
          <h2 className="text-2xl font-semibold">{socialMediaData.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{socialMediaData.description}</p>

        <FeatureList features={socialMediaData.features} />
        <FeatureList features={socialMediaData.additionalFeatures} />
        <ActionButtons />

        <p className="text-sm text-gray-500 mt-6">
          Orders over $149+ qualify for monthly content review calls
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white p-8 rounded-lg border">
        <PricingHeader selectedPosts={selectedPosts} basePrice={socialMediaData.pricing.basePrice} />
        <PostSelector 
          posts={socialMediaData.pricing.posts} 
          selectedPosts={selectedPosts} 
          setSelectedPosts={setSelectedPosts} 
        />
        <SocialPlatforms platforms={socialPlatforms} />
        <CheckoutButtons />
      </div>
    </div>
  );
}

// Sub-components
function FeatureList({ features }: { features: string[] }) {
  return (
    <div className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex gap-4 mt-8">
      {['Timeline', 'Examples', 'How the service works'].map((text) => (
        <Button key={text} variant="outline" className="flex items-center gap-2">
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

function SocialPlatforms({ platforms }: { platforms: string[] }) {
  return (
    <div className="mb-8">
      <p className="text-sm mb-4">Social media including</p>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <div
            key={platform}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            {/* Platform icon would go here */}
          </div>
        ))}
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
