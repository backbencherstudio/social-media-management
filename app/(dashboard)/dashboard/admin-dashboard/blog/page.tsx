"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
  usePublishBlogMutation,
} from "@/src/redux/features/admin/blog/blog";
import { Pagination } from "../_components/Pagination";
import DeleteIcon from "@/public/incons/delete";
import WriteIcon from "@/public/incons/write";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";
import { toast } from "sonner";

export default function Blog() {
  const router = useRouter();

  const { data, isLoading } = useGetAllBlogsQuery();
  const [deleteBlog] = useDeleteBlogMutation();
  const [publishBlog] = usePublishBlogMutation();
  const imageURL = "http://192.168.4.2:9000/social-media/";

  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token as string);
    };
    fetchToken();
  }, []);

  const handleDelete = async (id: string) => {
    const data = {
      id,
      token,
    };
    const res = await deleteBlog(data);
    if (res?.data?.blog_id) {
      toast.success("Blog delete successfully");
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Calculate pagination
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const paginatedDetails = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Create New Card */}
        <div className="flex items-center justify-center bg-white h-[420px] rounded-lg shadow-sm p-6 border-2 border-dotted border-gray-400">
          <button
            onClick={() =>
              router.push("/dashboard/admin-dashboard/blog/create-blog")
            }
            className="px-4 py-2 border-2 border-dotted border-gray-400 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 cursor-pointer"
          >
            Create New +
          </button>
        </div>

        {/* Blog Post Cards */}
        {paginatedDetails?.map((post: any, idx:number) => (
          <div
            key={idx}
            className="bg-white h-[420px] rounded-lg shadow-sm overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 my-5 px-6">
                {post?.status === true ? (
                  <Button className="bg-[#F6F8FA] text-black">Published</Button>
                ) : (
                  <div className="flex gap-4">
                    <Button className="bg-gray-100">Draft</Button>
                    <Button
                      onClick={() => publishBlog(post.blog_id)}
                      className="bg-black text-white cursor-pointer"
                    >
                      Publish Post
                    </Button>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 px-6">
                  <Link
                    href={`/dashboard/admin-dashboard/blog/${post.blog_id}`}
                  >
                    <button
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                      title="Edit post"
                    >
                      <WriteIcon className={"w-5 h-5 text-gray-600"} />
                    </button>
                  </Link>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    title="Delete post"
                    onClick={() => handleDelete(post.blog_id)}
                  >
                    <DeleteIcon className={"w-5 h-5 text-red-600"} />
                  </button>
                </div>
              </div>
            </div>
            {post?.contents &&
              (() => {
                const firstMedia = post.contents.find(
                  (content: any) => content.content_type === "media"
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
              {post?.contents &&
                (() => {
                  const firstText = post.contents.find(
                    (content: any) => content.content_type === "text"
                  );
                  return firstText ? (
                    <div
                      className="text-[#212121] leading-relaxed blog-content"
                      dangerouslySetInnerHTML={{
                        __html:
                          firstText.content.length > 100
                            ? firstText.content.slice(0, 100) + "..."
                            : firstText.content || "",
                      }}
                    />
                  ) : null;
                })()}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
          <label
            htmlFor="itemsPerPage"
            className="text-xs md:text-sm text-gray-600"
          >
            Showing 1 to 8 of 50 entries
          </label>
          <select
            id="itemsPerPage"
            className="border border-gray-200 rounded-md px-2 md:px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-black"
            value={itemsPerPage}
            onChange={(e) => {
              const newItemsPerPage = parseInt(e.target.value);
              setItemsPerPage(newItemsPerPage);
              setCurrentPage(1);
            }}
          >
            <option value="5">Show 5</option>
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
            <option value="50">Show 50</option>
            {/* <option value="100">Show 100</option> */}
          </select>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
