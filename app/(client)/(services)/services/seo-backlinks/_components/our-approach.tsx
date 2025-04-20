import React from 'react';
import Image from 'next/image';
import CheckIcon from '@/public/incons/landin-page/CheckIcon';
import img from "@/public/service/backlinkprofile.png"
import Heading from '@/app/(client)/_components/heading-text';
import ParagraphText from '@/app/(client)/_components/paragraph-text';
import { CopyCheck, FileCode2, Globe, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
    <path d="M7.5 14C7.5 14.8284 8.17157 15.5 9 15.5C9.82843 15.5 10.5 14.8284 10.5 14V11H13.5C14.3284 11 15 10.3284 15 9.5C15 8.67157 14.3284 8 13.5 8H10.5V5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5V8L4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11L7.5 11V14Z" stroke="#28303F" strokeWidth="1.125" strokeLinejoin="round" />
</svg>

const features = [
    {
        icon: Globe,
        title: "Genuine, Manual Outreach",
        description: ["Hand-picked, industry-relevant websites to maximize results", "No PBNs or link farms, only high-authority, legitimate sites.", "Manual, white-hat outreach to secure valuable backlinks."]
    },
    {
        icon: FileCode2,
        title: "Expert Content",
        description: ["Hand-picked, industry-relevant websites to maximize results", "No PBNs or link farms, only high-authority, legitimate sites.", "Manual, white-hat outreach to secure valuable backlinks."]
    },
    {
        icon: CopyCheck,
        title: "Advanced Quality Control",
        description: ["Hand-picked, industry-relevant websites to maximize results", "No PBNs or link farms, only high-authority, legitimate sites.", "Manual, white-hat outreach to secure valuable backlinks."]
    },
]

const OurApproach = () => {
    return (
        <div className=''>
            <div className='max-w-[1200px] mx-auto px-5 2xl:px-0 lg:py-[100px] md:py-[80px] py-[60px]'>
                <div className="flex flex-col gap-6 md:flex-row bg-[#F5F5F780] rounded-[12px]  overflow-hidden  lg:p-6 md:p-4 p-3 justify-between items-center">
                    {/* Left side content */}
                    <div className="  lg:w-[53%] w-full">
                        <h2 className="lg:text-[32px] md:text-2xl text-2xl leading-[110%] font-semibold text-[#1D1D1F] mb-4">Your link is always guaranteed</h2>

                        <p className="text-[#4A4C56] lg:text-base text-sm leading-[150%] tracking-[.16px] mt-4 mb-5">
                            High-quality DA20-85 backlinks to boost your website's search engine rankings. We
                            secure valuable placements on authoritative websites to enhance your site's credibility
                            and visibility.
                        </p>

                        <div className="">
                            <div className="flex items-center gap-[10px]">
                                <span> <CheckIcon /> </span>
                                <span className="text-gray-700">12-month link stability guarantee</span>
                            </div>

                            <div className="flex items-center gap-[10px] mt-2">
                                <span> <CheckIcon /> </span>
                                <span className="text-gray-700">Detailed monthly reporting</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side testimonial */}
                    <div className="bg-white lg:w-[31%] w-full md:p-5 p-3 border border-[#DFE1E7] rounded-[12px]  flex flex-col justify-center ">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                <Image
                                    src={img.src}
                                    alt="Stephen K."
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold tracking-[.20px] md:text-xl text-[#000]">Stephen K.</h3>
                                <p className="text-sm text-[#4A4C56] tracking-[.14px] mt-1">Founder & CEO</p>
                            </div>
                        </div>

                        <blockquote className="text-[#1D1F2C] text-base leading-[150%] tracking-[.16px] ">
                            "The process of reviewing and requesting revisions was streamlined to perfection. I never had to worry about following up at all time!"
                        </blockquote>
                    </div>
                </div>

                {/* our seo backlinks part  */}
                <div className="text-center mt-[100px]  mb-8 md:mb-12 px-5 2xl:px-[0px]">
                    <Heading
                        text="Our Approach to SEO Backlinks"
                        className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                    />
                    <ParagraphText
                        paraText="TagGrowth is a creative subscription service, trusted by 12,000+ businesses to get exceptional creative services faster, more reliably and at the lowest cost."
                        className="md:max-w-[581px] mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-[#F5F5F780] border-0 p-4">
                            <CardContent className="  p-0">
                                <div className="md:mb-6 mb-4 flex items-start justify-start">
                                    <span className=' bg-white  p-2 rounded-md'>
                                        <feature.icon className="lg:h-8 lg:w-8 w-6 h-6 text-gray-900" />
                                    </span>
                                </div>
                                <h3 className="md:text-xl text-base font-semibold leading-[175%] mb-3 text-[#1D1D1F]">
                                    {feature.title}
                                </h3>
                                <div className='flex flex-col gap-4'>
                                    {feature.description.map((text, i) => (
                                        <p key={i} className="lg:text-base flex gap-3 text-sm text-[#1D1F2C] leading-[120%] tracking-[.16px]">
                                            <span className=''>{icon}</span>
                                            {text}
                                        </p>
                                    ))}
                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default OurApproach;



