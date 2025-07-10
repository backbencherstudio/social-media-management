"use client";

import FacebookIcon from "@/public/incons/facebook";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { useGetAllUpcomingPostQuery } from "@/src/redux/features/reseller/schedule/schedule";
import { DateHelper } from "@/helper/date.helper";
import ScheduleGalleryIcon from "@/public/incons/schedule-gallery";
import { useDeletePostMutation } from "@/src/redux/features/reseller/posts/post";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { DatePickerDemo } from "./calenderComponent";
import DateRangePicker from "./schedule-date-picker";

export default function UpcomingPost() {

  const clientId = useSelector((state: RootState) => state.clientId.id);
  const { data: upcomingPosts } = useGetAllUpcomingPostQuery(clientId);
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async (id: string) => {
    await deletePost({ id });
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Posts</h2>

     

      <div className="space-y-4">
        {upcomingPosts?.data?.map((post: any) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-4 items-center">
                <FacebookIcon />
                <span className="">
                  {post.platform === "instagram" ? "Instagram" : "Facebook"}
                </span>
              </div>
              <span className="text-3xl text-red-800 font-medium">
                <MdDeleteForever onClick={() => handleDeletePost(post.id)} />
              </span>
            </div>
            <hr className="my-4 text-gray-300" />
            <p className="text-gray-600 text-sm mb-4">{post.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                <span>{DateHelper.formatRelativeTime(post.created_at)}</span>
              </div>
              {post.post_files && post.post_files.length > 0 && (
                <div className="flex items-center gap-2">
                  <ScheduleGalleryIcon />
                  <span>
                    {post.post_files.length}{" "}
                    {post.post_files.length > 1 ? "images" : "image"} attached
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
