"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import CreativeCard from "./blog-card"

const TABS = [
  "Latest Updates",
  "Social Media Marketing",
  "TikTok Tips & Resources",
  "Instagram Tips & Resources",
  "Social Media Management",
]

// Sample data for each tab
const TAB_CONTENT = {
  "Latest Updates": [
    {
      image: "https://img.freepik.com/free-photo/front-view-sad-girl-being-bullied-by-girls_23-2149748405.jpg?ga=GA1.1.1363655190.1746773733&semt=ais_hybrid&w=740",
      date: "January 27, 2025",
      readTime: "5 min read",
      title: "How To Post On Pinterest Successfully In 2023",
      description: "Learn the latest tips and tricks for posting on Pinterest in 2023 with our comprehensive guide.",
      href: "/blog/pinterest-posting",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 27, 2025",
      readTime: "5 min read",
      title: "Creative Social Media For Entertainment Industry",
      description: "Learn the latest tips and tricks for posting on Pinterest in 2023 with our comprehensive guide.",
      href: "/blog/social-media-entertainment",
    },
    {
      image: "https://img.freepik.com/free-photo/front-view-sad-girl-being-bullied-by-girls_23-2149748405.jpg?ga=GA1.1.1363655190.1746773733&semt=ais_hybrid&w=740",
      date: "January 27, 2025",
      readTime: "5 min read",
      title: "Discover 12+ Creative Contest Ideas And Examples",
      description: "Learn the latest tips and tricks for posting on Pinterest in 2023 with our comprehensive guide.",
      href: "/blog/creative-contest-ideas",
    },
  ],
  "Social Media Marketing": [
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 25, 2025",
      readTime: "7 min read",
      title: "10 Social Media Marketing Strategies That Work",
      description: "Discover proven social media marketing strategies that can boost your engagement and conversions.",
      href: "/blog/social-media-strategies",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 23, 2025",
      readTime: "6 min read",
      title: "How To Create A Social Media Content Calendar",
      description: "Learn how to plan and organize your social media content for maximum impact and efficiency.",
      href: "/blog/content-calendar",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 20, 2025",
      readTime: "8 min read",
      title: "Social Media Analytics: Measuring What Matters",
      description:
        "Understand which metrics are important and how to use analytics to improve your social media performance.",
      href: "/blog/social-media-analytics",
    },
  ],
  "TikTok Tips & Resources": [
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 26, 2025",
      readTime: "5 min read",
      title: "How To Go Viral On TikTok In 2025",
      description: "Discover the latest trends and techniques to increase your chances of going viral on TikTok.",
      href: "/blog/tiktok-viral",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 24, 2025",
      readTime: "4 min read",
      title: "TikTok Algorithm Explained: What You Need To Know",
      description: "Learn how the TikTok algorithm works and how to optimize your content for better reach.",
      href: "/blog/tiktok-algorithm",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 22, 2025",
      readTime: "6 min read",
      title: "Best TikTok Editing Apps For Creating Professional Content",
      description: "Explore the top editing apps that can help you create professional-looking TikTok videos.",
      href: "/blog/tiktok-editing-apps",
    },
  ],
  "Instagram Tips & Resources": [
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 25, 2025",
      readTime: "5 min read",
      title: "Instagram Reels: Tips For Higher Engagement",
      description: "Learn how to create Instagram Reels that capture attention and drive engagement.",
      href: "/blog/instagram-reels",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 23, 2025",
      readTime: "6 min read",
      title: "Instagram Shopping: Setting Up Your Store",
      description: "A step-by-step guide to setting up and optimizing your Instagram Shop for e-commerce success.",
      href: "/blog/instagram-shopping",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 21, 2025",
      readTime: "4 min read",
      title: "Instagram Stories: Creative Ideas To Boost Engagement",
      description:
        "Discover creative ways to use Instagram Stories to connect with your audience and boost engagement.",
      href: "/blog/instagram-stories",
    },
  ],
  "Social Media Management": [
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 24, 2025",
      readTime: "7 min read",
      title: "Best Social Media Management Tools For 2025",
      description: "Explore the top tools that can help you manage multiple social media accounts efficiently.",
      href: "/blog/management-tools",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 22, 2025",
      readTime: "5 min read",
      title: "How To Handle Social Media Crisis Management",
      description: "Learn strategies for effectively managing and responding to social media crises.",
      href: "/blog/crisis-management",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "January 20, 2025",
      readTime: "6 min read",
      title: "Building A Social Media Team: Roles And Responsibilities",
      description: "Understand the key roles and responsibilities needed for an effective social media team.",
      href: "/blog/social-media-team",
    },
  ],
}

export default function SocialMediaTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].map((item, index) => (
          <CreativeCard
            key={index}
            image={item.image}
            date={item.date}
            readTime={item.readTime}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}
