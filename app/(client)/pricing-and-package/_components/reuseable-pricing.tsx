"use client"

import React, { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SocialMediaPost from "../../_components/_post/social-media-post";
import Video from "../../_components/_video/video";
import Email from "../../_components/_email/email";
import Blogs from "../../_components/_blogs/blogs";

const services = [
    { id: "post", title: "Posts" },
    { id: "videos", title: "Videos" },
    { id: "email", title: "Email" },
    { id: "blogs", title: "Blogs" },
  ];

const ReuseablePricing = () => {


      const [activeTab, setActiveTab] = useState("post");
      

    return (
        <div>
                <Tabs defaultValue="post" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="flex p-[6px] flex-col bg-white h-full sm:grid sm:grid-cols-2 md:grid-cols-4 w-full gap-2 sm:gap-4 mb-20 md:mb-8">
                        {services.map((service) => (
                            <TabsTrigger
                                key={service.id}
                                value={service.id}
                                className={`py-3 bg-[#F6F8FA80] cursor-pointer px-4 text-base transition-all duration-200 ${activeTab === service.id ? "bg-black text-white" : ""
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
};

export default ReuseablePricing;