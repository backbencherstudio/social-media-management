"use client"

import { useState, useEffect } from "react"
import ContentTabs from "@/components/content-tabs"

// Types
type ContentType = "Posts" | "Videos" | "Emails" | "Blogs"
type Category = { id: string; name: string }
type ContentItem = {
  id: string
  title: string
  image: string
  likes: number
  category: string
  type: ContentType
}

export default function ExampleWithDynamicData() {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<Category[]>([])
  const [contentItems, setContentItems] = useState<ContentItem[]>([])
  const [activeTab, setActiveTab] = useState<ContentType>("Posts")
  const [activeCategory, setActiveCategory] = useState("Featured")

  // Simulate fetching data
  useEffect(() => {
    // This would be your API call in a real application
    const fetchData = async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Sample categories
      const sampleCategories = [
        { id: "1", name: "Featured" },
        { id: "2", name: "Beauty Services" },
        { id: "3", name: "Food & Beverages" },
        { id: "4", name: "Health & Wellness" },
        { id: "5", name: "Home Services" },
        { id: "6", name: "Professional Services" },
        { id: "7", name: "Real Estate" },
      ]

      // Sample content items for different tabs and categories
      const sampleContent = [
        // Posts
        {
          id: "1",
          title: "Digital Service",
          image: "/placeholder.svg?height=400&width=400",
          likes: 24,
          category: "Featured",
          type: "Posts" as ContentType,
        },
        {
          id: "2",
          title: "Car Promotion",
          image: "/placeholder.svg?height=400&width=400",
          likes: 15,
          category: "Featured",
          type: "Posts" as ContentType,
        },
        // Videos
        {
          id: "3",
          title: "Tutorial Video",
          image: "/placeholder.svg?height=400&width=400",
          likes: 32,
          category: "Featured",
          type: "Videos" as ContentType,
        },
        // Emails
        {
          id: "4",
          title: "Newsletter",
          image: "/placeholder.svg?height=400&width=400",
          likes: 18,
          category: "Featured",
          type: "Emails" as ContentType,
        },
        // Blogs
        {
          id: "5",
          title: "Tech Blog",
          image: "/placeholder.svg?height=400&width=400",
          likes: 27,
          category: "Featured",
          type: "Blogs" as ContentType,
        },
      ]

      setCategories(sampleCategories)
      setContentItems(sampleContent)
      setLoading(false)
    }

    fetchData()
  }, [])

  // Filter content based on active tab and category
  const filteredContent = contentItems.filter((item) => item.type === activeTab && item.category === activeCategory)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Dynamic Content Tabs Example</h1>

      <ContentTabs
        initialTab={activeTab}
        initialCategory={activeCategory}
        categories={categories}
        contentItems={filteredContent}
      />
    </div>
  )
}
