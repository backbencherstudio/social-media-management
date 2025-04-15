"use client"

import React from 'react';
import Heading from '../heading-text';
import ParagraphText from '../paragraph-text';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import img1 from "@/public/landing-page/client-project/image1.png"
import img2 from "@/public/landing-page/client-project/image2.png"
import img3 from "@/public/landing-page/client-project/image3.png"
import img4 from "@/public/landing-page/client-project/image4.png"
import img5 from "@/public/landing-page/client-project/image5.png"
import img6 from "@/public/landing-page/client-project/image3.png"
import img7 from "@/public/landing-page/client-project/image4.png"
import img8 from "@/public/landing-page/client-project/image5.png"
import img9 from "@/public/landing-page/client-project/image1.png"
import img10 from "@/public/landing-page/client-project/image5.png"

import Image from 'next/image';

const images = [
    { id: 1, imgPath: img1.src },
    { id: 2, imgPath: img2.src },
    { id: 3, imgPath: img3.src },
    { id: 4, imgPath: img4.src },
    { id: 5, imgPath: img5.src },
    { id: 6, imgPath: img6.src },
    { id: 7, imgPath: img7.src },
    { id: 8, imgPath: img8.src },
    { id: 9, imgPath: img9.src },
    { id: 10, imgPath: img10.src },
]

const ClientsProject = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
            skipSnaps: true,
        },
        [Autoplay({ delay: 1000, stopOnInteraction: false })],
    )

    return (
        <div className='pb-[60px] md:pb-[80px] lg:pb-[100px]'>
            <div className="max-w-[694px] mx-auto mb-12 md:mb-16 text-center px-5 2xl:px-[0px]">
                <Heading
                    text="Our Client Project"
                    className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                />
                <ParagraphText
                    paraText="Explore our branded masterpieces, where every post fits into a larger, cohesive picture."
                    className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                />
            </div>


            <div className="overflow-hidden" ref={emblaRef}>
                <div className='flex lg:gap-6 md:gap-4 gap-2'  >
                    {images.map((img, ind) => (
                        <div className='flex-[0_0_49%]  min-w-0 md:flex-[0_0_33%] lg:flex-[0_0_33.33%]  xl:flex-[0_0_25.33%] 2xl:flex-[0_0_20%] last:mr-2 md:last:mr-4 lg:last:mr-6' key={ind}>
                            <div className="relative ">
                                <img src={img.imgPath} alt={`Client project image ${ind + 1}`}  className='w-full h-[250px] sm:h-[300px] md:h-[370px] lg:h-[450px] xl:h-[500px] object-fill' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ClientsProject;