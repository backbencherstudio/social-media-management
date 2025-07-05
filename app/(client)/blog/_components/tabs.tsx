"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import CreativeCard from "./blog-card";
import { useGetAllBlogsQuery } from "@/src/redux/features/admin/blog/blog";
import { useGetBlogCategoriesQuery } from "@/src/redux/features/admin/blog/blog_category";
import { Blog, BlogCategory } from "@/types/blog";

export default function SocialMediaTabs() {
  const { data: blogsData } = useGetAllBlogsQuery();
  const { data: categoriesData } = useGetBlogCategoriesQuery();

  // Only show published blogs
  const blogs = blogsData?.filter((blog: Blog) => blog?.status === true) || [];

  // Prepare categories for tabs
  const categories = categoriesData || [];

  // Set the first category as the default active tab
  const [activeTab, setActiveTab] = useState(categories[0]?.name || "");

  // Filter blogs by selected category
  const filteredBlogs = blogs?.filter((blog: Blog) =>
    blog?.categories?.some((item: BlogCategory) => item?.name === activeTab)
  );

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category: BlogCategory) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.name)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
              activeTab === category.name
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item: Blog, index: number) => (
            <CreativeCard key={item.id || index} blog={item} />
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            No blogs found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
