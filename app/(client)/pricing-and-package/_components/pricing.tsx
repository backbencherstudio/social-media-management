"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SocialMediaPost from "./social-media-post";
import Video from "./video";
import Email from "./email";
import Blogs from "./blogs";

const services = [
  { id: "post", title: "Posts" },
  { id: "videos", title: "Videos" },
  { id: "email", title: "Email" },
  { id: "blogs", title: "Blogs" },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("post");

  return (
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
  );
}
