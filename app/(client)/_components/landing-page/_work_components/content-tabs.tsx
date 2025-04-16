"use client"



// Import your tab-specific components
import PostsContent from "@/app/(client)/_components/landing-page/_work_components/posts-content"
import VideosContent from "@/app/(client)/_components/landing-page/_work_components/videos-content"
import EmailsContent from "@/app/(client)/_components/landing-page/_work_components/emails-content"
import BlogsContent from "@/app/(client)/_components/landing-page/_work_components/blogs-content"
import { useState } from "react"

import { cn } from "@/lib/utils"
import image1 from "@/public/landing-page/card/image.png";
import image2 from "@/public/landing-page/card/image2.png";
import image3 from "@/public/landing-page/card/image3.png";
import image4 from "@/public/landing-page/card/image4.png";
import image5 from "@/public/landing-page/card/image5.png";
import image6 from "@/public/landing-page/card/image6.png";



// Types for our component
type ContentType = "Posts" | "Videos" | "Emails" | "Blogs"





// Sample data
const categories = [
  { id: "1", name: "Featured" },
  { id: "2", name: "Beauty Services" },
  { id: "3", name: "Food & Beverages" },
  { id: "4", name: "Health & Wellness" },
  { id: "5", name: "Home Services" },
  { id: "6", name: "Professional Services" },
  { id: "7", name: "Real Estate" },
  { id: "8", name: "Shopping" },
  { id: "9", name: "Shopping2" },
  { id: "10", name: "Shopping3" },
  { id: "11", name: "Shopping4" },
  { id: "12", name: "Shopping5" },
  { id: "13", name: "Shopping6" },
  { id: "14", name: "Shopping7" },
]



const contentItems = [
  {
    id: "1",
    title: "Digital Service",
    image: image1.src,
    likes: 24,
    category: "Featured",
  },
  {
    id: "2",
    title: "Car Promotion",
    image: image2.src,
    likes: 15,
    category: "Featured",
  },
  {
    id: "3",
    title: "Payment Service",
    image: image3.src,
    likes: 32,
    category: "Featured",
  },
  {
    id: "4",
    title: "Jewelry Promotion",
    image: image4.src,
    likes: 18,
    category: "Featured",
  },
  {
    id: "5",
    title: "Food Delivery",
    image: image5.src,
    likes: 27,
    category: "Featured",
  },
  {
    id: "6",
    title: "Beauty Product",
    image: image6.src,
    likes: 21,
    category: "Featured",
  },
  // Beauty Services content
  {
    id: "7",
    title: "Spa Treatment",
    image: "/placeholder.svg?height=400&width=400",
    likes: 42,
    category: "Beauty Services",
  },
  {
    id: "8",
    title: "Hair Styling",
    image: "/placeholder.svg?height=400&width=400",
    likes: 38,
    category: "Beauty Services",
  },
  // Food & Beverages content
  {
    id: "9",
    title: "Restaurant Promo",
    image: "/placeholder.svg?height=400&width=400",
    likes: 56,
    category: "Food & Beverages",
  },
  {
    id: "10",
    title: "Coffee Shop",
    image: "/placeholder.svg?height=400&width=400",
    likes: 29,
    category: "Food & Beverages",
  },
]

// Sample video data with more reliable video URLs
const videoItems = [
  {
    id: "v1",
    title: "Woman Working on Crafts",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "9:56",
    views: "1.2K",
    category: "Featured",
  },
  {
    id: "v2",
    title: "Elephants Dream",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "10:53",
    views: "856",
    category: "Featured",
  },
  {
    id: "v3",
    title: "For Bigger Blazes",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "0:15",
    views: "3.4K",
    category: "Featured",
  },
  {
    id: "v4",
    title: "For Bigger Escapes",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "0:15",
    views: "2.1K",
    category: "Feautured",
  },
  {
    id: "v5",
    title: "For Bigger Fun",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "0:15",
    views: "945",
    category: "Featured",
  },
  {
    id: "v6",
    title: "For Bigger Fun",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "0:15",
    views: "945",
    category: "Beauty Services",
  },
  {
    id: "v7",
    title: "For Bigger Joyrides",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "0:15",
    views: "5.2K",
    category: "Beauty Services",
  },
]



export default function ContentTabs() {

  const initialTab: ContentType = "Posts";
  const initialCategory = "Featured";

  const [activeTab, setActiveTab] = useState<ContentType>(initialTab)
  const [activeCategory, setActiveCategory] = useState(initialCategory)



  // Filter content based on active tab and category
  const filteredContent = contentItems.filter((item) => item.category === activeCategory)

  // Render the appropriate component based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Posts":
        return (
          <PostsContent
            categories={categories}
            contentItems={filteredContent}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )
      case "Videos":
        return (
          <VideosContent
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            videoItems={videoItems}
          />
        )
      case "Emails":
        return (
          <EmailsContent />
        )
      case "Blogs":
        return (
          <BlogsContent />
        )
      default:
        return (
          <PostsContent
            categories={categories}
            contentItems={filteredContent}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )
    }
  }


  return (
    <div className="w-full">
      {/* Main Tabs */}
      <div className="flex w-full mb:8 md:mb-12 bg-white p-[6px] rounded-[12px] ">
        {(["Posts", "Videos", "Emails", "Blogs"] as ContentType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 py-3 text-center font-medium transition-colors cursor-pointer",
              activeTab === tab ? "bg-black text-white rounded-md " : "bg-white text-black hover:bg-gray-100",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render the content for the active tab */}
      <div>
        {renderTabContent()}
      </div>
    </div>
  )
}

