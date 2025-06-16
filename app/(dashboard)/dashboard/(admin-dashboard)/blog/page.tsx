"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "@/src/redux/features/admin/blog/blog";

export default function Blog() {
  const router = useRouter();
  // const blogData = [
  //   {
  //     id: 1,
  //     title: "Discover 12+ Creative Contest Ideas and Examples",
  //     excerpt:
  //       "Learn how to create an effective social media strategy that drives engagement and growth...",
  //     author: "John Doe",
  //     date: "2024-01-15",
  //     category: "Marketing",
  //     readTime: "5 min",
  //     image: "/blog-1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "CCreative Social Media for Entertainment Industry",
  //     excerpt:
  //       "Discover proven techniques for creating engaging content that resonates with your audience...",
  //     author: "Jane Smith",
  //     date: "2024-01-14",
  //     category: "Content",
  //     readTime: "7 min",
  //     image: "/blog-2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Instagram Contest Ideas: Increase User Participation",
  //     excerpt:
  //       "Discover proven techniques for creating engaging content that resonates with your audience...",
  //     author: "Jane Smith",
  //     date: "2024-01-14",
  //     category: "Content",
  //     readTime: "7 min",
  //     image: "/blog-2.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Instagram Contest Ideas: Increase User Participation",
  //     excerpt:
  //       "Discover proven techniques for creating engaging content that resonates with your audience...",
  //     author: "Jane Smith",
  //     date: "2024-01-14",
  //     category: "Content",
  //     readTime: "7 min",
  //     image: "/blog-2.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Instagram Contest Ideas: Increase User Participation",
  //     excerpt:
  //       "Discover proven techniques for creating engaging content that resonates with your audience...",
  //     author: "Jane Smith",
  //     date: "2024-01-14",
  //     category: "Content",
  //     readTime: "7 min",
  //     image: "/blog-2.jpg",
  //   },
  // ];

  const { data, isLoading } = useGetAllBlogsQuery();
  const [deleteBlog] = useDeleteBlogMutation();
  console.log(data, "data");
  const imageURL = "http://192.168.4.2:9000/social-media/";

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Create New Card */}
        <div className="flex items-center justify-center bg-white h-[420px] rounded-lg shadow-sm p-6 border-2 border-dotted border-gray-400">
          <button
            onClick={() => router.push("/dashboard/blog/create-blog")}
            className="px-4 py-2 border-2 border-dotted border-gray-400 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
          >
            Create New +
          </button>
        </div>

        {/* Blog Post Cards */}
        {data?.map((post) => (
          <div
            key={post.id}
            className="bg-white h-[420px] rounded-lg shadow-sm overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 my-5 px-6">
                <Button className="bg-gray-100">Draft</Button>
                <Button className="bg-black text-white">Publish Post</Button>
              </div>
              <div>
                <div className="flex items-center gap-2 px-6">
                  <Link href={`/dashboard/blog/${post.blog_id}`}>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                      title="Edit post"
                    >
                      <FaEdit className="w-5 h-5 text-gray-600" />
                    </button>
                  </Link>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    title="Delete post"
                    onClick={() => deleteBlog(post.blog_id)}
                  >
                    <FaTrash className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
            {post?.contents &&
              (() => {
                const firstMedia = post.contents.find(
                  (content) => content.content_type === "media"
                );
                return firstMedia ? (
                  <img
                    src={`${imageURL}${firstMedia.content}`}
                    alt={post.title}
                    className="w-full h-36 object-cover"
                  />
                ) : null;
              })()}
            <div className="p-4 space-y-1">
              <p className="text-gray-600 text-sm m line-clamp-2">
                January 27, 2025
              </p>
              <h3 className="text-[24px] font-semibold text-gray-800 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm m line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}