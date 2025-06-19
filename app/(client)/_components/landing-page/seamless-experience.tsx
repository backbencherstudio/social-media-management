// "use client"

// import React, { act, useState } from 'react';
// import Heading from '../heading-text';
// import ParagraphText from '../paragraph-text';
// import Image from 'next/image';
// import img from "@/public/landing-page/Frame 161.png"

// const category = [
//     { id: 1, name: "Services" },
//     { id: 2, name: "Onboarding" },
//     { id: 3, name: "Communication" },
//     { id: 4, name: "Collaboration" },
//     { id: 5, name: "Scheduling" },
//     { id: 6, name: "Analytics" },
// ];

// const SeamlessExperience = () => {

//     const [activeTab, setActiveTab] = useState('')

//     const handleTab = (item: string) => {
//         setActiveTab(item)
//     }

//     const ServiceItem = () => {
//         return (
//             <div className='w-full border mt-6 bg-white lg:p-9 p-6 rounded-[12px] border-[#DFE1E7]'>
//                 <div className='flex gap-6 md:gap-2  md:items-center w-full md:justify-between md:flex-row flex-col'>
//                     <div className='flex  flex-col gap-4 xl:w-[35%] md:w-[50%]'>
//                         <h1 className='text-2xl md:text-[28px] leading-[126%] font-semibold text-[#1D1D1F] '>Customize Your Package</h1>
//                         <p className='text-base leading-[150%] tracking-[.16px] text-[#1D1F2C]'>Select services, add-ons, and social platforms to tailor the perfect solution for your business needs.</p>
//                     </div>
//                     <div className='md:w-[57%] w-full'>
//                         <Image src={img.src} width={532} height={316} alt="Service Image" />
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className='bg-[#F7F7F9]'>
//             <div className='max-w-[996px] mx-auto px-5 2xl:px-0 lg:py-[100px] md:py-[80px] py-[60px]'>
//                 <div className="mx-auto text-center mt-20 md:mt-0">
//                     <Heading text="Seamless experience" className="text-2xl sm:text-3xl md:text-[42px] capitalize font-semibold" />
//                     <ParagraphText
//                         paraText="TagGrowth is a flexible subscription-based service enabled by technology to deliver compelling creative at scale."
//                         className="max-w-[335px] sm:max-w-[500px] md:max-w-[644px] text-center mx-auto mt-3 sm:mt-4 mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base"
//                     />
//                 </div>

//                 <div>
//                     <div className='flex flex-wrap gap-4 justify-center'>
//                         {category.map((item, ind) => (
//                             <button onClick={() => handleTab(item.name)} className='focus:bg-black focus:text-white bg-[#ECEFF3] cursor-pointer border rounded-[99px] border-[#E9E9EA] px-6 py-[10px]  text-base font-medium leading-[150%] tracking-[.16px] text-center' key={ind}>
//                                 <span className="   " >
//                                     {item.name}
//                                 </span>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//                 <div>
//                     {activeTab === "Services" && (
//                         ServiceItem()
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SeamlessExperience;

"use client";

import { useState } from "react";
import Heading from "../heading-text";
import ParagraphText from "../paragraph-text";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Users,
  MessageSquare,
  FolderKanban,
  Calendar,
  BarChart3,
} from "lucide-react";

// Define the tab content data structure
const tabsData = [
  {
    id: "services",
    name: "Services",
    title: "Customize Your Package",
    description:
      "Select services, add-ons, and social platforms to tailor the perfect solution for your business needs.",
    icon: <Check className="w-5 h-5" />,
    imagePath: "/landing-page/Frame 161.png",
  },
  {
    id: "onboarding",
    name: "Onboarding",
    title: "Streamlined Onboarding Process",
    description:
      "Get started quickly with our intuitive onboarding process designed to understand your business goals and requirements.",
    icon: <Users className="w-5 h-5" />,
    imagePath: "/landing-page/onboarding.png",
  },
  {
    id: "communication",
    name: "Communication",
    title: "Effective Communication Channels",
    description:
      "Stay connected with dedicated communication channels ensuring your team is always in sync with our experts.",
    icon: <MessageSquare className="w-5 h-5" />,
    imagePath: "/landing-page/communication.png",
  },
  {
    id: "collaboration",
    name: "Collaboration",
    title: "Seamless Team Collaboration",
    description:
      "Work together efficiently with collaborative tools designed to enhance productivity and creative workflows.",
    icon: <FolderKanban className="w-5 h-5" />,
    imagePath: "/landing-page/collaboration.png",
  },
  {
    id: "scheduling",
    name: "Scheduling",
    title: "Intelligent Content Scheduling",
    description:
      "Plan and schedule your content with our intelligent calendar system optimized for maximum engagement.",
    icon: <Calendar className="w-5 h-5" />,
    imagePath: "/landing-page/scheduling.png",
  },
  {
    id: "analytics",
    name: "Analytics",
    title: "Comprehensive Performance Analytics",
    description:
      "Track and analyze your campaign performance with detailed metrics and actionable insights.",
    icon: <BarChart3 className="w-5 h-5" />,
    imagePath: "/landing-page/analytics.png",
  },
];

const SeamlessExperience = () => {
  // Set default active tab to the first item
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  // Handle tab selection
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Find the active tab data
  const activeTabData =
    tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  return (
    <section className="bg-[#F7F7F9] py-16 md:py-24 lg:py-32">
      <div className="max-w-[996px] mx-auto px-5 2xl:px-0">
        <div className="mx-auto text-center mb-12 md:mb-16">
          <Heading
            text="Seamless experience"
            className="text-2xl sm:text-3xl md:text-[42px] capitalize font-semibold text-[#1D1D1F]"
          />
          <ParagraphText
            paraText="TagGrowth is a flexible subscription-based service enabled by technology to deliver compelling creative at scale."
            className="max-w-[335px] sm:max-w-[500px] md:max-w-[644px] text-center mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
          />
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                transition-all duration-300 ease-in-out
                rounded-[99px] px-6 py-[10px] text-base font-medium cursor-pointer
                ${
                  activeTab === tab.id
                    ? "bg-[#1D1D1F] text-white shadow-md"
                    : "bg-[#ECEFF3] text-[#1D1F2C] hover:bg-[#E0E3E9] border border-[#E9E9EA]"
                }
              `}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full border bg-white p-6 lg:p-9 rounded-[12px] border-[#DFE1E7] shadow-sm"
          >
            <div className="flex gap-6 md:gap-8 md:items-center w-full md:justify-between md:flex-row flex-col">
              <div className="flex flex-col gap-4 xl:w-[35%] md:w-[45%]">
                <h2 className="text-2xl md:text-[28px] leading-[126%] font-semibold text-[#1D1D1F]">
                  {activeTabData.title}
                </h2>
                <p className="text-base leading-[150%] tracking-[.16px] text-[#1D1F2C]">
                  {activeTabData.description}
                </p>
              </div>
              <div className="md:w-[50%] w-full overflow-hidden rounded-lg">
                <Image
                  src={activeTabData.imagePath || "/placeholder.svg"}
                  width={532}
                  height={316}
                  alt={`${activeTabData.name} illustration`}
                  className="w-full h-auto object-cover transition-transform hover:scale-[1.02] duration-500"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SeamlessExperience;
