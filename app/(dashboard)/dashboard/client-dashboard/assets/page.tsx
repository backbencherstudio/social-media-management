"use client";

import AssetsTable from "@/components/UserDashboard/Components/assets-table";
import React, { useState } from "react";
import ContentQueue from "./_components/content-queue";
import { ScheduledPostCard } from "./_components/scheduled-post-card";
import { SocialMediaDesignCard } from "./_components/social-media-design-card";
import { ScheduledPostModal } from "./_components/ScheduledPostModal";
import { SocialMediaDesignModal } from "./_components/SocialMediaDesignModal";
import {
  useGetContentQueueQuery,
  useUpdateContentStatusMutation,
} from "@/src/redux/features/user/assets/userAssetsApi";
import { cl } from "@fullcalendar/core/internal-common";
import { ContentQueueCard } from "./_components/content-queue-card";
import { ContentQueueDetailsModal } from "./_components/content-queue-modal";
import { toast } from "sonner";

export default function page() {
  const { data } = useGetContentQueueQuery(undefined);
  const contentQueueData = data?.date;
  // console.log(contentQueueData);

  // view details

  const [isContentQueueModalOpen, setIsContentQueueModalOpen] = useState(false);
  const [contentQueueDetails, setContentQueueDetails] = useState<{
    id: string;
  } | null>(null);
  const [feedback, setFeedback] = useState("");

  // const comment = "hello";

  const [updateContentStatus, { isLoading, isSuccess, isError }] =
    useUpdateContentStatusMutation();

  const payload = { status: 1, feedback };

  // Handlers
  const handleApprove = async (id: string) => {
    const res = await updateContentStatus({ id, payload }).unwrap();

    if (res.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  const handleReject = async (id: string) => {
    const res = await updateContentStatus({ id, status: 2 }).unwrap();

    if (res.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };

  const handleViewDetails = (data: any) => {
    setContentQueueDetails(data);
    setIsContentQueueModalOpen(true);
  };

  return (
    <section className="p-3">
      {/* assets table */}
      <AssetsTable title="Assets" />
      {/* content queue header */}
      <ContentQueue />

      {/* content queue body */}

      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10">
        {contentQueueData?.map((data: any, idx: number) => (
          <ContentQueueCard
            key={idx}
            title={data.title}
            scheduledFor={data.scheduledFor}
            status={data.status}
            platforms={data.platforms}
            postType={data.postType}
            content={data.preview || "No content preview available"}
            imageUrl={data.files?.[0]?.file_path || ""}
            onApprove={() => handleApprove(data.id)}
            onReject={() => handleReject(data.id)}
            onViewDetails={() => handleViewDetails(data)}
          />
        ))}
      </div>

      {/* Modals */}

      <ContentQueueDetailsModal
        isOpen={isContentQueueModalOpen}
        onClose={() => setIsContentQueueModalOpen(false)}
        data={contentQueueDetails}
        feedback={feedback}
        setFeedback={setFeedback}
        onApprove={() => {
          if (contentQueueDetails?.id) {
            handleApprove(contentQueueDetails.id);
          }
          setIsContentQueueModalOpen(false);
        }}
        onReject={() => {
          if (contentQueueDetails?.id) {
            handleReject(contentQueueDetails.id);
          }
          setIsContentQueueModalOpen(false);
        }}
      />
    </section>
  );
}
