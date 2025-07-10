"use client";

import { useRouter } from "next/navigation";
import { Blog } from "@/types/blog";
const imageURL = "http://192.168.4.2:9000/social-media/";



export default function CreativeCard({ blog }: { blog: Blog }) {
  // console.log(blog);
  const router = useRouter();
  const handleBlog = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="">
      {/* Blog Post Cards */}
      <div
        key={blog.id}
        className="bg-white h-[420px] rounded-lg shadow-sm overflow-hidden"
      >
        {blog?.contents &&
          (() => {
            const firstMedia = blog.contents.find(
              (content) => content.content_type === "media"
            );
            return firstMedia ? (
              <img
                src={`${imageURL}${firstMedia.content}`}
                alt={blog.title}
                className="w-full h-36 object-cover"
              />
            ) : null;
          })()}
        <div className="p-4 space-y-1">
          <p className="text-gray-600 text-sm m line-clamp-2">
            January 27, 2025
          </p>
          <h3 className="text-[24px] font-semibold text-gray-800 line-clamp-2">
            {blog.title}
          </h3>
          {blog?.contents &&
            (() => {
              const firstText = blog.contents.find(
                (content) => content.content_type === "text"
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
    </div>
  );
}
