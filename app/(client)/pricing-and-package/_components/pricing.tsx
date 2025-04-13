"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SocialMediaPost from "../../_components/_post/social-media-post";
import Video from "../../_components/_video/video";
import Email from "../../_components/_email/email";
import Blogs from "../../_components/_blogs/blogs";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";

const services = [
  { id: "post", title: "Posts" },
  { id: "videos", title: "Videos" },
  { id: "email", title: "Email" },
  { id: "blogs", title: "Blogs" },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("post");

  return (
    <div className="bg-[#ECEFF3] py-[100px]">
    <div className='container mx-auto text-center  pb-14'>
        <Heading text="Affordable Marketing Services" className='text-[42px] mb-4'/>
        <ParagraphText paraText="Elite Creative Talent | 80% More Cost-Effective than Agencies | Work with Real Experts, Not AI" className='text-[1D1F2C] '/>
    </div>
    
    <div className="container mx-auto py-6 md:py-12">
      <Tabs defaultValue="post" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 w-full gap-2 sm:gap-4 mb-20 md:mb-8">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className={`py-3 px-4 text-base transition-all duration-200 ${
                activeTab === service.id ? "bg-black text-white" : ""
              }`}
            >
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="w-full overflow-x-hidden">
          <TabsContent value="post">
            <SocialMediaPost />
          </TabsContent>
          <TabsContent value="videos">
            <Video />
          </TabsContent>
          <TabsContent value="email">
            <Email />
          </TabsContent>
          <TabsContent value="blogs">
            <Blogs />
          </TabsContent>
        </div>
      </Tabs>
    </div>
    </div>
  );
}
