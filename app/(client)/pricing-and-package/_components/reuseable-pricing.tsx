"use client";

import React, { useState } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AffordableMarketingServices from "../../_components/_post/affordable-marketing-services";
import Video from "../../_components/_video/video";
import Email from "../../_components/_email/email";
import Blogs from "../../_components/_blogs/blogs";
import { usePathname } from "next/navigation";
import { useGetAllServicesQuery } from "@/src/redux/features/admin/services";

const services = [
  { id: "Short-Form Post and video", title: "Posts" },
  { id: "short-video", title: "Videos" },
  { id: "email-marketing", title: "Email" },
  { id: "blogs", title: "Blogs" },
];

const ReuseablePricing = () => {
  const pathname = usePathname();
  const match = pathname.match(/^\/services\/([^\/]+)$/);
  const slug = match ? match[1] : null;

  // Simplified defaultValue logic
  const getDefaultValue = () => {
    if (!slug) return "Short-Form Post and video";

    switch (slug) {
      case "short-video":
        return "short-video";
      case "Short-Form Post and video":
        return "Short-Form Post and video";
      case "email-marketing":
        return "email-marketing";
      case "blogs":
        return "blogs";
      default:
        return "Short-Form Post and video";
    }
  };

  const [activeTab, setActiveTab] = useState(getDefaultValue());

  const { data: serviceData } = useGetAllServicesQuery();


  // Filter services based on activeTab
  const filteredService = React.useMemo(() => {
    if (!serviceData) return null;
    return serviceData.find(
      (service) => service?.category === activeTab
    );
  }, [serviceData, activeTab]);


  return (
    <div>
      <Tabs
        defaultValue={getDefaultValue()}
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="bg-white h-full sm:grid sm:grid-cols-2 md:grid-cols-4 w-full gap-2 sm:gap-4 mb-8">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className={`py-3 bg-[#F6F8FA80] cursor-pointer px-4 text-base transition-all duration-200 ${
                activeTab === service.id ? "bg-black text-white" : ""
              }`}
            >
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="w-full overflow-x-hidden">
          <TabsContent value="Short-Form Post and video">
            <AffordableMarketingServices service={filteredService}  />
          </TabsContent>
          <TabsContent value="short-video">
            <Video  service={filteredService}  />
          </TabsContent>
          <TabsContent value="email-marketing">
            <Email service={filteredService}  />
          </TabsContent>
          <TabsContent value="blogs">
            <Blogs service={filteredService}  />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ReuseablePricing;
