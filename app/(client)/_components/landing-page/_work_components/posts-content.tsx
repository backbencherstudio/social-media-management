"use client";

import { Card } from "@/components/ui/card";
import HashTagIcon from "@/public/incons/landin-page/HashTag";
import UnionIcon from "@/public/incons/landin-page/Union";
import HeartIcons from "@/public/incons/landin-page/Heart";
import CommentIcon from "@/public/incons/landin-page/Comments";
import SendIcons from "@/public/incons/landin-page/Send";
import BookmarkIcon from "@/public/incons/landin-page/Bookmark";

import CategorySelector from "./category-selection";

type Category = {
  id: string;
  name: string;
};

type ContentItem = {
  id: string;
  title: string;
  image: string;
  likes: number;
  category: string;
};

interface PostsContentProps {
  categories: Category[];
  contentItems: ContentItem[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function PostsContent({
  categories,
  contentItems,
  activeCategory,
  setActiveCategory,
}: PostsContentProps) {
  return (
    <>
      {/* Categories */}
      <CategorySelector
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {contentItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden py-0 gap-0 rounded-xl border-[1.28px] border-[#F0F6FD] bg-white shadow-[0px_12.8px_51.2px_0px_rgba(222,230,237,0.40)]"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <div className="flex items-center gap-3">
                <span>
                  <HashTagIcon />
                </span>
                <span className="text-[17.92px] font-serotiva font-medium text-[#1B1D28]">
                  TagGrowth
                </span>
              </div>
              <button>
                <span>
                  <UnionIcon />
                </span>
              </button>
            </div>

            {/* Card Image */}
            <div className="relative aspect-square">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between px-5 pt-5 pb-[28px]">
              <div className="flex items-center gap-4">
                <button className="text-red-500">
                  <HeartIcons />
                </button>
                <button>
                  <CommentIcon />
                </button>
                <button>
                  <SendIcons />
                </button>
              </div>
              <button>
                <BookmarkIcon />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
