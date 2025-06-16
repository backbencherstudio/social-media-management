import Image from 'next/image';
import React from 'react';
import img from '@/public/compareBanner.png'
import Heading from '../../_components/heading-text';
import ParagraphText from '../../_components/paragraph-text';
import Link from 'next/link';
import { IoMdAddCircle } from 'react-icons/io';

const CompareBanner = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-5 2xl:px-0 mt-6 md:mb-10 mb-8'>
            <div className="flex gap-4 md:gap-6 lg:gap-8 md:items-center w-full md:justify-between md:flex-row flex-col">
                <div className="flex flex-col w-full">
                    <Heading
                        text="A comparison of social media services"
                        className="text-2xl md:text-[28px] lg:text-[42px] max-w-[18ch] capitalize font-bold text-[#1D1D1F]"
                    />
                    <ParagraphText
                        paraText="Compare the best low-cost social media services and discover the best fit for your needs. Elevate your online presence and choose wisely!"
                        className=" mx-auto mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base text-[#1D1F2C]"
                    />
                    <div className="lg:mt-9 md:mt-6 mt-4 flex">
                        <Link href="">
                            <div className="border leading-[150%] lg:px-9 md:px-6 px-4 lg:py-4 md:py-3 py-2 flex md:text-base text-sm cursor-pointer items-center justify-start   rounded-[8px] gap-2 font-semibold hover:bg-[#070707] hover:text-white">
                                <span className="font-serotiva text-sm md:text-base ">Schedule a free demo call</span>
                                <IoMdAddCircle className="ml-2 w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=" w-full overflow-hidden rounded-lg">
                    <Image
                        src={img.src}
                        width={532}
                        height={316}
                        alt={`illustration`}
                        className="w-full h-auto object-cover transition-transform hover:scale-[1.02] duration-500"
                    />
                </div>

            </div>
        </div>
    );
};

export default CompareBanner;