"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const services = [
  {
    id: 'post',
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
  },
  { id: 'videos', title: 'Videos' },
  { id: 'email', title: 'Email' },
  { id: 'blogs', title: 'Blogs' },
];

const socialPlatforms = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'tiktok'];

export default function Pricing() {
  const [selectedPosts, setSelectedPosts] = useState(20);
  const [activeTab, setActiveTab] = useState('post');

  return (
    <div className='container mx-auto py-12'>
      <Tabs defaultValue="post" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className={`py-3 ${activeTab === service.id ? 'bg-black text-white' : ''}`}
            >
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="post" className="w-full">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Service Description */}
            <div className="bg-white p-8 rounded-lg border">
              <div className="flex items-start gap-4 mb-6">
                <h2 className="text-2xl font-semibold">{services[0].title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{services[0].description}</p>

              <div className="space-y-4 mb-8">
                {services[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {services[0].additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" className="flex items-center gap-2">
                  Timeline
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  Examples
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  How the service works
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Orders over $149+ qualify for monthly content review calls
              </p>
            </div>

            {/* Right Side - Pricing */}
            <div className="bg-white p-8 rounded-lg border">
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm">{selectedPosts} Post</span>
                <span className="text-2xl font-bold">${services[0].pricing.basePrice}/mo</span>
              </div>

              <div className="mb-8">
                <p className="text-sm mb-4">Select monthly number of posts</p>
                <div className="grid grid-cols-7 gap-2">
                  {services[0].pricing.posts.map((count) => (
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

              <div className="mb-8">
                <p className="text-sm mb-4">Social media including</p>
                <div className="flex flex-wrap gap-2">
                  {socialPlatforms.map((platform) => (
                    <div
                      key={platform}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                      {/* Platform icon would go here */}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-black text-white mb-4">
                Checkout
              </Button>
              
              <Button variant="outline" className="w-full">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Other tab contents would go here */}
        <TabsContent value="videos">Videos content coming soon</TabsContent>
        <TabsContent value="email">Email content coming soon</TabsContent>
        <TabsContent value="blogs">Blogs content coming soon</TabsContent>
      </Tabs>
    </div>
  );
}
