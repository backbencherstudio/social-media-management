"use client";

import React from "react";
import PostData from "./_components/postData";
import { useGetAllPostsQuery } from "@/src/redux/features/reseller/posts/post";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

export default function Posts() {
  const clientId = useSelector((state: RootState) => state.clientId.id);
  const { data: posts } = useGetAllPostsQuery(clientId);

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black cursor-pointer">
          <option value="this-week">This week</option>
          <option value="last-week">Last week</option>
          <option value="this-month">This month</option>
          <option value="last-month">Last month</option>
          <option value="this-year">This year</option>
        </select>
        <select className="py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black cursor-pointer">
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="scheduled">Scheduled</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {posts?.data?.map((post: any) => (
          <PostData key={post?.id} post={post} />  
        ))}
      </div>
    </div>
  );
}
