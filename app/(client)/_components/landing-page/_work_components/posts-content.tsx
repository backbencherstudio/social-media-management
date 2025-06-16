"use client";

import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
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
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const handleCardClick = (item: ContentItem) => {
    setSelectedItem(item);
  };

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
            className="overflow-hidden py-0 gap-0 rounded-xl border-[1.28px] border-[#F0F6FD] bg-white shadow-[0px_12.8px_51.2px_0px_rgba(222,230,237,0.40)] hover:scale-102 transition-transform duration-500 cursor-pointer"
            onClick={() => handleCardClick(item)}
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
            <div className="relative aspect-square group">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-6 py-2 bg-white text-black rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </button>
              </div>
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

      {/* Details Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[1200px] sm:max-h-[500px] bg-white rounded-3xl border-0 overflow-hidden p-0">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="w-full h-[400px] sm:w-1/2 sm:h-full sm:pt-5 md:pt-0">
              <img
                src={selectedItem?.image || "/placeholder.svg"}
                alt={selectedItem?.title || "Post image"}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full sm:w-1/2 p-4 sm:p-6 space-y-3 sm:space-y-4">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold">
                  {selectedItem?.title}
                </DialogTitle>
              </DialogHeader>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-500">
                  Category: {selectedItem?.category}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  Likes: {selectedItem?.likes}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                {selectedItem?.title}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
