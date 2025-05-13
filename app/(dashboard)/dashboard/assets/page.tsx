"use client";

import AssetsTable, {
  Asset,
} from "@/components/UserDashboard/Components/assets-table";
import React from "react";
import ContentQueue from "./_components/content-queue";
import { ScheduledPostCard } from "./_components/scheduled-post-card";
import { SocialMediaDesignCard } from "./_components/social-media-design-card";

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
  // Handlers
  const handleApprove = (title: string) => {
    console.log(`Approved: ${title}`);
  };

  const handleReject = (title: string) => {
    console.log(`Rejected: ${title}`);
  };

  const handleViewDetails = (title: string) => {
    console.log(`Viewing details for: ${title}`);
  };
  return (
    <section className="p-3">
      <AssetsTable assets={assets} title="Assets" />
      <ContentQueue />

      {/* content card */}
      <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <ScheduledPostCard
          title="New Product Launch Post"
          scheduledFor="Dec 25, 2023 10:00 AM"
          platforms={["Facebook", "Instagram"]}
          content="Exciting news! Introducing our latest product line that will revolutionize your daily routine. Stay tuned for the big reveal! #NewLaunch #Innovation"
          onApprove={() => handleApprove("New Product Launch Post")}
          onReject={() => handleReject("New Product Launch Post")}
          onViewDetails={() => handleViewDetails("New Product Launch Post")}
        />

        <SocialMediaDesignCard
          title="Summer Collection Banner"
          type="Instagram Post"
          submittedDate="Dec 20, 2023"
          onApprove={() => handleApprove("Summer Collection Banner")}
          onReject={() => handleReject("Summer Collection Banner")}
          onViewDetails={() => handleViewDetails("Summer Collection Banner")}
        />
        <ScheduledPostCard
          title="New Product Launch Post"
          scheduledFor="Dec 25, 2023 10:00 AM"
          platforms={["Facebook", "Instagram"]}
          content="Exciting news! Introducing our latest product line that will revolutionize your daily routine. Stay tuned for the big reveal! #NewLaunch #Innovation"
          onApprove={() => handleApprove("New Product Launch Post")}
          onReject={() => handleReject("New Product Launch Post")}
          onViewDetails={() => handleViewDetails("New Product Launch Post")}
        />

        <SocialMediaDesignCard
          title="Summer Collection Banner"
          type="Instagram Post"
          submittedDate="Dec 20, 2023"
          onApprove={() => handleApprove("Summer Collection Banner")}
          onReject={() => handleReject("Summer Collection Banner")}
          onViewDetails={() => handleViewDetails("Summer Collection Banner")}
        />
      </div>
    </section>
  );
}
