"use client";

import AssetsTable, {
  Asset,
} from "@/components/UserDashboard/Components/assets-table";
import React, { useState } from "react";
import ContentQueue from "./_components/content-queue";
import { ScheduledPostCard } from "./_components/scheduled-post-card";
import { SocialMediaDesignCard } from "./_components/social-media-design-card";
import { set } from "date-fns";
import { ScheduledPostModal } from "./_components/ScheduledPostModal";
import { hash } from "crypto";
import { SocialMediaDesignModal } from "./_components/SocialMediaDesignModal";

const assets: Asset[] = [
  {
    fileName: "Summer_Collection_Banner.png",
    type: "Design",
    approvedDate: "November 16, 2025",
    size: "2.6 MB",
  },
  {
    fileName: "Product_Launch_Post.pdf",
    type: "Post",
    approvedDate: "April 28, 2025",
    size: "2.6 MB",
  },
  {
    fileName: "Winter_Collection_Banner.png",
    type: "Design",
    approvedDate: "August 7, 2025",
    size: "1.2 MB",
  },
];

export default function page() {
  // view details
  const [isSchduledPostCardOpen, setIsScheduledPostCardOpen] = useState(false);
  const [isSocialMediaDesignModalOpen, setIsSocialMediaDesignModalOpen] =
    useState(false);

  const [selectedDesignData, setSelectedDesignData] = useState(null);
  // Handlers
  const handleApprove = (title: string) => {
    console.log(`Approved: ${title}`);
  };

  const handleReject = (title: string) => {
    console.log(`Rejected: ${title}`);
  };

  const handleOpenSocialMediaDesignModal = (data: any) => {
    setSelectedDesignData(data);
    setIsSocialMediaDesignModalOpen(true);
  };

  const scheduledPostData = {
    title: "New Product Launch Post",
    scheduledFor: "Dec 25, 2023 10:00 AM",
    platforms: ["Instagram", "Facebook"],
    content:
      "Exciting news! Introducing our latest product line that will revolutionize your daily routine. Stay tuned for the big reveal! ",
    hashtags: ["#NewProduct", "#LaunchDay", "#ExcitingNews"],
    timezone: "EST",
    autoScheduled: true,
  };

  const socialMediaDesignData = [
    {
      title: "Summer Collection Banner",
      type: "Social Media Post Design",
      platform: "Instagram",
      submittedDate: "Dec 20, 2023",
      fileFormat: "JPG",
      usageGuidelines: [
        "Instagram Reel Post",
        "Facebook Timeline",
        "LinkedIn Post",
      ],
    },
    {
      title: "Winter Collection Banner",
      type: "Social Media Post Design",
      platform: "Instagram",
      submittedDate: "Dec 20, 2023",
      fileFormat: "JPG",
      usageGuidelines: [
        "Instagram Reel Post",
        "Facebook Timeline",
        "LinkedIn Post",
      ],
    },
  ];

  return (
    <section className="p-3">
      <AssetsTable assets={assets} title="Assets" />
      <ContentQueue />

      {/* content card */}
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10">
        <ScheduledPostCard
          title={scheduledPostData.title}
          scheduledFor={scheduledPostData.scheduledFor}
          platforms={scheduledPostData.platforms}
          content={scheduledPostData.content}
          onApprove={() => handleApprove(scheduledPostData.title)}
          onReject={() => handleReject(scheduledPostData.title)}
          onViewDetails={() => setIsScheduledPostCardOpen(true)}
        />

        {socialMediaDesignData.map((data, index) => (
          <SocialMediaDesignCard
            key={index}
            title={data.title}
            type={data.type}
            submittedDate={data.submittedDate}
            onApprove={() => handleApprove(data.title)}
            onReject={() => handleReject(data.title)}
            onViewDetails={() => handleOpenSocialMediaDesignModal(data)}
          />
        ))}
      </div>

      {/* Modals */}

      <ScheduledPostModal
        isOpen={isSchduledPostCardOpen}
        onClose={() => setIsScheduledPostCardOpen(false)}
        data={scheduledPostData}
        onApprove={() => {
          handleApprove(scheduledPostData.title);
          setIsScheduledPostCardOpen(false);
        }}
        onReject={() => {
          handleReject(scheduledPostData.title);
          setIsScheduledPostCardOpen(false);
        }}
      />
      {/* Social Media Design Modal */}
      <SocialMediaDesignModal
        isOpen={isSocialMediaDesignModalOpen}
        onClose={() => setIsSocialMediaDesignModalOpen(false)}
        data={selectedDesignData}
        onApprove={() => {
          console.log("Approved:", selectedDesignData.title);
          setIsSocialMediaDesignModalOpen(false);
        }}
        onReject={() => {
          console.log("Rejected:", selectedDesignData.title);
          setIsSocialMediaDesignModalOpen(false);
        }}
      />
    </section>
  );
}
