"use client"

import React, { useState } from 'react';
import Heading from '../../_components/heading-text';
import CategorySelector from '../../_components/landing-page/_work_components/category-selection';

import image1 from "@/public/example/image1.png";
import image2 from "@/public/example/image2.png";
import image3 from "@/public/example/image3.png";
import image4 from "@/public/example/image4.png";
import image5 from "@/public/example/image5.png";
import image6 from "@/public/example/image6.png";
import image7 from "@/public/example/image7.png";
import image8 from "@/public/example/image8.png";


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
        category: "All",
    },
    {
        id: "2",
        title: "Car Promotion",
        image: image2.src,
        category: "All",
    },
    {
        id: "3",
        title: "Payment Service",
        image: image3.src,
        category: "All",
    },
    {
        id: "4",
        title: "Jewelry Promotion",
        image: image4.src,
        category: "All",
    },
    {
        id: "5",
        title: "Food Delivery",
        image: image5.src,
        category: "All",
    },
    {
        id: "6",
        title: "Beauty Product",
        image: image6.src,
        category: "All",
    },
    {
        id: "7",
        title: "Beauty Product",
        image: image7.src,
        category: "All",
    },
    {
        id: "8",
        title: "Beauty Product",
        image: image8.src,
        category: "All",
    },
    // Beauty Services content
    {
        id: "9",
        title: "Spa Treatment",
        image: "/placeholder.svg?height=400&width=400",
        category: "Beauty Services",
    },
    {
        id: "10",
        title: "Hair Styling",
        image: "/placeholder.svg?height=400&width=400",
        category: "Beauty Services",
    },
    // Food & Beverages content
    {
        id: "11",
        title: "Restaurant Promo",
        image: "/placeholder.svg?height=400&width=400",
        category: "Food & Beverages",
    },
    {
        id: "12",
        title: "Coffee Shop",
        image: "/placeholder.svg?height=400&width=400",
        category: "Food & Beverages",
    },
]



const InstastoryExample = () => {

    const initialCategory = "All";

    const [activeCategory, setActiveCategory] = useState(initialCategory)

    const filterContet = contentItems.filter((item) => item.category === activeCategory)

    return (
        <div className='bg-[#F7F7F9]'>
            <div className='max-w-[1200px] mx-auto lg:py-[100px] md:py-[80px] py-[60px]  px-5 2xl:px-0'>
                <Heading
                    text="Instagram Story Examples"
                    className="text-center text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                />
                <div className='mt-8 md:mt-12'>
                    <CategorySelector categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>
                <div className='w-full mt-6'>
                    <div className='grid md:grid-cols-3  lg:grid-cols-4 md:gap-4 gap-2 lg:gap-6 '>
                        {filterContet.map((item) => (
                            <div className='' key={item.id}>
                                <div className="relative aspect-square">
                                    <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full rounded-[8px] object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstastoryExample;