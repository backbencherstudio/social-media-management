// "use client"

// import { useCallback, useEffect, useState } from "react"
// import { cn } from "@/lib/utils"
// // import { MoreHorizontal, Hash, Heart, MessageCircle, Send, Bookmark, HeartIcon, SendIcon } from "lucide-react"
// // import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import HashTagIcon from "@/public/incons/landin-page/HashTag"
// import UnionIcon from "@/public/incons/landin-page/Union"
// import HeartIcons from "@/public/incons/landin-page/Heart"
// import CommentIcon from "@/public/incons/landin-page/Comments"
// import SendIcons from "@/public/incons/landin-page/Send"
// import BookmarkIcon from "@/public/incons/landin-page/Bookmark"
// import useEmblaCarousel from "embla-carousel-react"
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";

// // Types for our component
// type ContentType = "Posts" | "Videos" | "Emails" | "Blogs"
// type Category = {
//     id: string
//     name: string
// }

// type ContentItem = {
//     id: string
//     title: string
//     image: string
//     likes: number
//     category: string
// }

// interface ContentTabsProps {
//     initialTab?: ContentType
//     initialCategory?: string
//     categories: Category[]
//     contentItems: ContentItem[]
// }

// export default function ContentTabs({
//     initialTab = "Posts",
//     initialCategory = "Featured",
//     categories,
//     contentItems,
// }: ContentTabsProps) {
//     const [activeTab, setActiveTab] = useState<ContentType>(initialTab)
//     const [activeCategory, setActiveCategory] = useState(initialCategory)
//     const [navigationClick, setNavigationClick] = useState(false)


//     // const [emblaRef, emblaApi] = useEmblaCarousel()
//     const [emblaRef, emblaApi] = useEmblaCarousel({
//         align: "start",
//         dragFree: true,
//         containScroll: "trimSnaps",
//     })

//     const [selectedIndex, setSelectedIndex] = useState(0);

//     useEffect(() => {
//         if (!emblaApi) return;

//         const onSelect = () => {
//             const index = emblaApi.selectedScrollSnap();
//             setSelectedIndex(index);
//         };

//         emblaApi.on('select', onSelect);
//         onSelect(); // Run once on mount

//         return () => {
//             emblaApi.off('select', onSelect);
//         };
//     }, [emblaApi]);

//     const scrollNext = useCallback(() => {
//         setNavigationClick(true);
//         if (emblaApi) emblaApi.scrollNext();
//     }, [emblaApi]);

//     const scrollPrev = useCallback(() => {
//         if (emblaApi) emblaApi.scrollPrev();
//     }, [emblaApi]);
//     // Initialize Embla Carousel

//     // Filter content based on active tab and category
//     const filteredContent = contentItems.filter((item) => item.category === activeCategory)

//     return (
//         <div className="w-full">
//             {/* Main Tabs */}
//             <div className="flex w-full mb-4 bg-white p-[6px] rounded-[12px]">
//                 {(["Posts", "Videos", "Emails", "Blogs"] as ContentType[]).map((tab) => (
//                     <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={cn(
//                             "flex-1 py-3 text-center font-medium transition-colors",
//                             activeTab === tab ? "bg-black text-white rounded-md " : "bg-white text-black hover:bg-gray-100",
//                         )}
//                     >
//                         {tab}
//                     </button>
//                 ))}
//             </div>

//             {/* Categories */}
//             {/* <ScrollArea className="w-full whitespace-nowrap pb-4"> */}
//             <div className="overflow-hidden relative" ref={emblaRef}>
//                 <div className="flex space-x-2 py-4">
//                     {categories.map((category) => (
//                         <Button
//                             key={category.id}
//                             variant="outline"
//                             onClick={() => {
//                                 setActiveCategory(category.name);
//                             }}
//                             className={cn(
//                                 "rounded-full border px-5 py-2 text-base leading-[150%] tracking-[.16px] ",
//                                 activeCategory === category.name
//                                     ? "bg-black text-white font-medium border-black "
//                                     : "bg-white text-black font-normal border-gray-200 hover:bg-gray-100 ",
//                             )}
//                         >
//                             {category.name}
//                         </Button>
//                     ))}

//                 </div>
//                 {selectedIndex > 0 && (
//                     <button className={` ${navigationClick ? "flex" : "hidden"} cursor-pointer absolute top-1/2 left-0 -translate-y-1/2  w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white hover:bg-amber-100`} onClick={scrollPrev}> <IoIosArrowBack className="text-2xl" /> </button>)}

//                 {emblaApi && selectedIndex < emblaApi.scrollSnapList().length - 1 && (
//                     <button className="cursor-pointer absolute z-50 top-1/2 right-0 -translate-y-1/2  w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white hover:bg-amber-100" onClick={scrollNext}><IoIosArrowForward className="text-2xl " /></button> )}
             
//              {emblaApi && selectedIndex < emblaApi.scrollSnapList().length - 1  && (
//                 <div className="absolute top-0 right-0 h-full w-24 pointer-events-none" style={{
//                     background: 'linear-gradient(270deg, #F7F7F9 53.76%, rgba(247, 247, 249, 0.00) 100%)'
//                 }}></div> )}
//             </div>
//             {/* <ScrollBar orientation="horizontal" /> */}
//             {/* </ScrollArea> */}

//             {/* Content Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//                 {filteredContent.map((item) => (
//                     <Card key={item.id} className="overflow-hidden  py-0 gap-0 rounded-xl border-[1.28px] border-[#F0F6FD]  bg-white shadow-[0px_12.8px_51.2px_0px_rgba(222,230,237,0.40)]">
//                         {/* Card Header */}
//                         <div className="flex items-center justify-between px-5 pt-5 pb-4">
//                             <div className="flex items-center gap-3">
//                                 {/* <Hash className="h-5 w-5" /> */}
//                                 <span> <HashTagIcon /> </span>
//                                 <span className="text-[17.92px] font-serotiva font-medium text-[#1B1D28]">TagGrowth</span>
//                             </div>
//                             <button>
//                                 {/* <MoreHorizontal className="h-5 w-5 text-gray-500" /> */}
//                                 <span> <UnionIcon /> </span>
//                             </button>
//                         </div>

//                         {/* Card Image */}
//                         <div className="relative aspect-square ">
//                             <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
//                         </div>

//                         {/* Card Footer */}
//                         <div className="flex items-center justify-between px-5 pt-5 pb-[28px]">
//                             <div className="flex items-center gap-4">
//                                 <button className="text-red-500">
//                                     <HeartIcons />
//                                 </button>
//                                 <button>
//                                     {/* <MessageCircle className="h-5 w-5" /> */}
//                                     <CommentIcon />
//                                 </button>
//                                 <button>
//                                     <SendIcons />
//                                 </button>
//                             </div>
//                             <button>
//                                 <BookmarkIcon />
//                             </button>
//                         </div>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     )
// }


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



interface ContentTabsProps {
  initialTab?: ContentType
  initialCategory?: string
}


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
      image:  image4.src,
      likes: 18,
      category: "Featured",
  },
  {
      id: "5",
      title: "Food Delivery",
      image:  image5.src,
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
          />
        )
      case "Emails":
        return (
          <EmailsContent
          />
        )
      case "Blogs":
        return (
          <BlogsContent 
         />
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
      <div className="flex w-full mb-4 bg-white p-[6px] rounded-[12px]">
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
      {renderTabContent()}
    </div>
  )
}

