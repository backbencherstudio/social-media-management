
import { IoMdAddCircle } from "react-icons/io";
import React from 'react';
import Link from 'next/link';
import ImageMasonry from "@/components/reusable/ImageMasonry";
import img1 from "@/public/landing-page/image2.png";
import img2 from "@/public/landing-page/image3.png";
import img3 from "@/public/landing-page/image4.png";
import img4 from "@/public/landing-page/image5.png";
import img5 from "@/public/landing-page/image6.png";
import img6 from "@/public/landing-page/image7.png";
import img7 from "@/public/landing-page/image8.png";
import FacebookIcon from "@/public/incons/landin-page/facebook";
import InstaIcon from "@/public/incons/landin-page/insta-icon";
import LinkdinIcon from "@/public/incons/landin-page/LinkdinIcon";
import YoutubeIcon from "@/public/incons/landin-page/youtubeIcon";
import TiktokIcon from "@/public/incons/landin-page/ToktokIcon";
import TwitterIcon from "@/public/incons/landin-page/TwitterIcon";




const images = [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
    img6.src,
    img7.src,
];

const Hero: React.FC = () => {
    return (
        <div>
            <div className='max-w-[700px] px-5 2xl:px-0 mx-auto flex flex-col items-center justify-center gap-5 md:mt-[66px] mt-[40px]'>
                <div className='flex text-[#1D1F2C] text-sm font-medium leading-[150%] tracking-[.14px] px-[14px] py-[6px] border-[.5px] border-[#1D1D1F] rounded-[99px] bg-[#F7F8FA] gap-2'>
                    <span>icon</span>
                    <span>Elite Creative Talent – Top 1% Worldwide</span>
                </div>
                <div>
                    <div className='bg-gradient-to-b from-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent md:text-[42px] text-[28px] lg:text-[56px] text-center leading-[126%] font-semibold'>
                        <h1 className='capitalize'>Results-Driven<br />Social Media Management<br />from Just $99/Month!</h1>
                    </div>
                </div>
                <div className='leading-[150%] tracking-[.16px] flex md:flex-row flex-col items-center gap-2 md:gap-0'>
                    <p className='text-[#1D1F2C] mr-4'>Supported social media</p>
                    <div className='flex '>
                        <span > <FacebookIcon /></span>
                        <span className="-ml-[6px]"><InstaIcon /></span>
                        <span className="-ml-[6px]"><LinkdinIcon /></span>
                        <span className="-ml-[6px]"><YoutubeIcon /></span>
                        <span className="-ml-[6px]"><TiktokIcon/></span>
                        <span className="-ml-[6px]"><TwitterIcon /></span>
                    </div>
                    <div className='md:block hidden '><svg className='stroke-1 mx-5' xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                        <path d="M1.09827 0L1.09827 22" stroke="#D2D2D5" />
                    </svg></div>
                    <p className='text-[#4A4C56]'>Cancel anytime</p>
                </div>
                <div className='mt-7'>
                    <Link href="">
                        <div className="bg-black leading-[150%] px-9 py-4 flex cursor-pointer items-center rounded-[8px] gap-2 font-semibold hover:bg-gray-800 text-white">
                            <span className='font-serotiva'> Schedule a free demo call</span> <IoMdAddCircle className="ml-2 w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto 2xl:px-0 px-5 ">
                <div className="relative">
                    <ImageMasonry images={images} />
                    {/* White gradient overlay at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full md:h-[28%] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.74)_27.4%,_#FFF_36.22%,_#FFF_100%)]"></div>
                </div>
            </div>


            <div className="w-full bg-black py-[34px] relative z-10 md:-top-30 ">
                <div className="max-w-[1200px] px-5 2xl:px-0 mx-auto flex justify-between">
                    <div className="text-white">
                        <h2 className="md:text-[36px] text-2xl font-bold leading-[120%]">12,000+</h2>
                        <p className="text-[#F5F5F7] leading-[150%]">Business trust TagGrowth</p>
                    </div>
                    <div className="border border-white"></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;