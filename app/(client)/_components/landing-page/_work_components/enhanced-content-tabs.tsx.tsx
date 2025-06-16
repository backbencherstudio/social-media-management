"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MoreHorizontal, Hash, Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// Types for our component
type ContentType = "Posts" | "Videos" | "Emails" | "Blogs"

type Category = {
  id: string
  name: string
}

type ContentItem = {
  id: string
  title: string
  image: string
  likes: number
  category: string
  type?: ContentType
}

interface EnhancedContentTabsProps {
  initialTab?: ContentType
  initialCategory?: string
  onTabChange?: (tab: ContentType) => void
  onCategoryChange?: (category: string) => void
  isLoading?: boolean
  categories: Category[]
  contentItems: ContentItem[]
}

export default function EnhancedContentTabs({
  initialTab = "Posts",
  initialCategory = "Featured",
  onTabChange,
  onCategoryChange,
  isLoading = false,
  categories,
  contentItems,
}: EnhancedContentTabsProps) {
  const [activeTab, setActiveTab] = useState<ContentType>(initialTab)
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  // Handle tab change
  const handleTabChange = (tab: ContentType) => {
    setActiveTab(tab)
    if (onTabChange) onTabChange(tab)
  }

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    if (onCategoryChange) onCategoryChange(category)
  }

  // Update local state if props change
  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  useEffect(() => {
    setActiveCategory(initialCategory)
  }, [initialCategory])

  return (
    <div className="w-full">
      {/* Main Tabs */}
      <div className="flex w-full mb-4">
        {(["Posts", "Videos", "Emails", "Blogs"] as ContentType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={cn(
              "flex-1 py-3 text-center font-medium transition-colors",
              activeTab === tab ? "bg-black text-white rounded-md" : "bg-white text-black hover:bg-gray-100",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Categories */}
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex space-x-2 py-4">
          {isLoading
            ? // Skeleton loaders for categories
              Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-9 w-24 rounded-full" />)
            : categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  onClick={() => handleCategoryChange(category.name)}
                  className={cn(
                    "rounded-full border px-4 py-1 text-sm",
                    activeCategory === category.name
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-200 hover:bg-gray-100",
                  )}
                >
                  {category.name}
                </Button>
              ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {isLoading ? (
          // Skeleton loaders for content
          Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden border border-gray-100">
              <div className="p-4 flex items-center justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-5 rounded-full" />
              </div>
              <Skeleton className="w-full aspect-square" />
              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-5 rounded-full" />
                </div>
                <Skeleton className="h-5 w-5 rounded-full" />
              </div>
            </Card>
          ))
        ) : contentItems.length === 0 ? (
          <div className="col-span-3 py-12 text-center text-gray-500">No content found for this category</div>
        ) : (
          contentItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border border-gray-100">
              {/* Card Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  <span className="font-medium">TagGrowth</span>
                </div>
                <button>
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Card Image */}
              <div className="relative aspect-square">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <button className="text-red-500">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button>
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button>
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                <button>
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
