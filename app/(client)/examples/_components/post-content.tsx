"use client"

import React, { useState } from 'react';

import image1 from "@/public/landing-page/card/image.png";
import image2 from "@/public/landing-page/card/image2.png";
import image3 from "@/public/landing-page/card/image3.png";
import image4 from "@/public/landing-page/card/imgPost.png";
import image5 from "@/public/landing-page/card/image5.png";
import image6 from "@/public/landing-page/card/image6.png";
import PostsContent from '../../_components/landing-page/_work_components/posts-content';
import Heading from '../../_components/heading-text';
import ParagraphText from '../../_components/paragraph-text';


const categories = [
    { id: "1", name: "All" },
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
        category: "All",
    },
    {
        id: "2",
        title: "Car Promotion",
        image: image2.src,
        likes: 15,
        category: "All",
    },
    {
        id: "3",
        title: "Payment Service",
        image: image3.src,
        likes: 32,
        category: "All",
    },
    {
        id: "4",
        title: "Jewelry Promotion",
        image: image4.src,
        likes: 18,
        category: "All",
    },
    {
        id: "5",
        title: "Food Delivery",
        image: image5.src,
        likes: 27,
        category: "All",
    },
    {
        id: "6",
        title: "Beauty Product",
        image: image6.src,
        likes: 21,
        category: "All",
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


interface PostExampleProps {
    header?: string;
    para?: String
}

const PostExample = ({ header = "", para = "" }: PostExampleProps) => {

    const initialCategory = "All";
    const [activeCategory, setActiveCategory] = useState(initialCategory)

    const filteredContent = contentItems.filter((item) => item.category === activeCategory)

    return (
        <div className='bg-[#F7F7F9] lg:py-[100px] md:py-[80px] py-[60px]'>
            <div className='max-w-[1200px] mx-auto px-5 2xl:px-0'>
                <div className='max-w-[694px] mx-auto text-center'>
                    <Heading
                        text={header}
                        className="text-center text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                    />
                    {para && (
                        <ParagraphText
                            paraText={para}
                            className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                        />
                    )}
                </div>
                <div className='md:mt-12 mt-8'>
                    <PostsContent
                        categories={categories}
                        contentItems={filteredContent}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>
            </div>
        </div>
    );
};

export default PostExample;