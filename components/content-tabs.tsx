"use client"

import { useCallback, useState } from "react"
import { cn } from "@/lib/utils"
// import { MoreHorizontal, Hash, Heart, MessageCircle, Send, Bookmark, HeartIcon, SendIcon } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import HashTagIcon from "@/public/incons/landin-page/HashTag"
import UnionIcon from "@/public/incons/landin-page/Union"
import HeartIcons from "@/public/incons/landin-page/Heart"
import CommentIcon from "@/public/incons/landin-page/Comments"
import SendIcons from "@/public/incons/landin-page/Send"
import BookmarkIcon from "@/public/incons/landin-page/Bookmark"
import useEmblaCarousel from "embla-carousel-react"

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
}

interface ContentTabsProps {
    initialTab?: ContentType
    initialCategory?: string
    categories: Category[]
    contentItems: ContentItem[]
}

export default function ContentTabs({
    initialTab = "Posts",
    initialCategory = "Featured",
    categories,
    contentItems,
}: ContentTabsProps) {
    const [activeTab, setActiveTab] = useState<ContentType>(initialTab)
    const [activeCategory, setActiveCategory] = useState(initialCategory)

    // const [emblaRef, emblaApi] = useEmblaCarousel()
    const [emblaRef,emblaApi] = useEmblaCarousel({
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
    })

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    // Initialize Embla Carousel

    // Filter content based on active tab and category
    const filteredContent = contentItems.filter((item) => item.category === activeCategory)

    return (
        <div className="w-full">
            {/* Main Tabs */}
            <div className="flex w-full mb-4 bg-white p-[6px] rounded-[12px]">
                {(["Posts", "Videos", "Emails", "Blogs"] as ContentType[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "flex-1 py-3 text-center font-medium transition-colors",
                            activeTab === tab ? "bg-black text-white rounded-md " : "bg-white text-black hover:bg-gray-100",
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Categories */}
            {/* <ScrollArea className="w-full whitespace-nowrap pb-4"> */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex space-x-2 py-4">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant="outline"
                            onClick={() => setActiveCategory(category.name)}
                            className={cn(
                                "rounded-full  border px-5 py-2 text-base leading-[150%] tracking-[.16px]",
                                activeCategory === category.name
                                    ? "bg-black text-white font-medium border-black"
                                    : "bg-white text-black font-normal border-gray-200 hover:bg-gray-100",
                            )}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
                <div className="w-full flex justify-between">
                    <button onClick={() => scrollNext()}>Next</button>
                    <button onClick={() => scrollPrev()}>Prev</button>
                </div>
            </div>
            {/* <ScrollBar orientation="horizontal" /> */}
            {/* </ScrollArea> */}

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {filteredContent.map((item) => (
                    <Card key={item.id} className="overflow-hidden  py-0 gap-0 rounded-xl border-[1.28px] border-[#F0F6FD]  bg-white shadow-[0px_12.8px_51.2px_0px_rgba(222,230,237,0.40)]">
                        {/* Card Header */}
                        <div className="flex items-center justify-between px-5 pt-5 pb-4">
                            <div className="flex items-center gap-3">
                                {/* <Hash className="h-5 w-5" /> */}
                                <span> <HashTagIcon /> </span>
                                <span className="text-[17.92px] font-serotiva font-medium text-[#1B1D28]">TagGrowth</span>
                            </div>
                            <button>
                                {/* <MoreHorizontal className="h-5 w-5 text-gray-500" /> */}
                                <span> <UnionIcon /> </span>
                            </button>
                        </div>

                        {/* Card Image */}
                        <div className="relative aspect-square ">
                            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between px-5 pt-5 pb-[28px]">
                            <div className="flex items-center gap-4">
                                <button className="text-red-500">
                                    <HeartIcons />
                                </button>
                                <button>
                                    {/* <MessageCircle className="h-5 w-5" /> */}
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
        </div>
    )
}
