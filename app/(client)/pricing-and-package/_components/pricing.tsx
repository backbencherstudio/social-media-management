"use client";

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SocialMediaPost from './social-media-post';
import Video from './video';
import Email from './email';
import Blogs from './blogs';

const services = [
  {
    id: 'post',
    title: 'Social Media Posts',
  },
  { id: 'videos', title: 'Videos' },
  { id: 'email', title: 'Email' },
  { id: 'blogs', title: 'Blogs' },
];

export default function Pricing() {
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
          <SocialMediaPost />
        </TabsContent>
        <TabsContent value="videos" className="w-full">
          <Video />
        </TabsContent>
        <TabsContent value="email" className="w-full">
          <Email />
        </TabsContent>
        <TabsContent value="blogs" className="w-full">
          <Blogs />
        </TabsContent>
      </Tabs>
    </div>
  );
}
