import Heading from '@/app/(client)/_components/heading-text';
import ParagraphText from '@/app/(client)/_components/paragraph-text';
import React from 'react';
import { ThumbsUp, Clock, ExternalLink, Play, ArrowRight, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import CheckIcon from '@/public/incons/landin-page/CheckIcon';
import Link from 'next/link';
import { IoMdAddCircle } from 'react-icons/io';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const InstaGrowth = () => {
    return (
        <div className='bg-[#F7F7F9]'>
            <div className='max-w-[1200px] mx-auto px-5 2xl:px-0 py-[60px] md:py-[80px] lg:py-[100px]'>
                <div className="text-center mb-8 md:mb-12 px-5 2xl:px-[0px]">
                    <Heading
                        text="Instagram Growth"
                        className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                    />
                    <ParagraphText
                        paraText="Elite Creative Talent | 80% More Cost-Effective than Agencies | Work with Real Experts, Not AI"
                        className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                    />
                </div>
                <div>
                    <div className="max-w-[764px] mx-auto grid md:grid-cols-2 gap-4">
                        <ServiceCard />
                        <PricingCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstaGrowth;


function ServiceCard() {
    return (
        <Card className="overflow-hidden pl-5 pt-5 pb-5 bg-white border border-[#DFE1E7]" >
            <CardContent className="h-full px-0">
                <div className="flex flex-col h-full">
                    <div className="">
                        <div className="flex justify-between items-center ">
                            <div className="bg-[#F7F7F9] p-3 rounded-2xl ">
                                <ThumbsUp className="h-9 w-9 text-gray-800" />
                            </div>
                            <div className="text-sm text-[#070707] bg-[#F5F5F7] py-2 px-4 rounded-tl-[8px] font-serotiva font-medium">
                                Social Media
                            </div>
                        </div>

                        <div className='pr-5'>
                            <h2 className="md:text-2xl text-lg font-semibold mb-3 md:mt-7 mt-4 leading-[145%] text-[#1D1D1F]">Instagram Growth</h2>

                            <p className="text-[#1D1D1F] tracking-[.16px] leading-[150%] md:text-base text-sm">
                                Real, targeted Instagram followers through manual engagement with your target audience. No bots or automation.
                            </p>
                        </div>
                    </div>

                    <div className=" pr-5 mt-5 mdLmt-0 h-full space-y-3">
                        <div className='flex flex-col gap-4 w-full h-full justify-end'>
                            <div className="gap-4 flex ">
                                <div className='w-full'>
                                    <Link href="">
                                        <button className="flex cursor-pointer  px-4 py-2 rounded-[6px] border border-[#4A4C56] bg-[#F6F8FA80] justify-between items-center w-full">
                                            <div className="flex items-center ">
                                                <Clock className="h-4 w-4 mr-2" />
                                                <span className='leading-[150%]  tracking-[.16px] text-base text-[#070707]'>Timeline</span>
                                            </div>
                                            <ExternalLink className="h-4 w-4" />
                                        </button>
                                    </Link>
                                </div>

                                <div className='w-full'>
                                    <Link href="">
                                        <button className="flex px-4 py-2 cursor-pointer rounded-[6px] border border-[#4A4C56] bg-[#F6F8FA80] justify-between items-center w-full">
                                            <div className="flex items-center">
                                                <span>Examples</span>
                                            </div>
                                            <ExternalLink className="h-4 w-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <Link href="">
                                <button className="flex cursor-pointer justify-center px-4 py-2 rounded-[6px] border border-[#4A4C56] bg-[#F6F8FA80]  items-center w-full">
                                    <Play className="h-4 w-4 mr-2" />
                                    <span>How the service works</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function PricingCard() {
    const features = [
        "Posts in your branding",
        "Captions and hashtags",
        "Posted for you (optional)",
        "Onboarding call (optional)",
        "1 social channel included",
        "+$10/mo each extra channel"
    ];

    return (
        <Card className="overflow-hidden p-5 bg-white border border-[#DFE1E7]">
            <CardContent className="h-full px-0">
                <div className="flex flex-col h-full">
                    <div className="">
                        <div className="flex justify-between items-center ">
                            <div className="text-base capitalize leading-[126%] text-[#4A4C56]">Pricing</div>
                            <div className="md:text-2xl text-lg leading-[126%] font-medium text-[#1D1D1F]">$99/mo</div>
                        </div>

                        <div className="h-px bg-gray-200 w-full mt-3 mb-5"></div>

                        <div className="mb-5">
                            <h4 className="text-lg font-medium leading-[126%] mb-4">Includes</h4>
                            <ul className="space-y-2">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-[10px]">
                                        <div className="  rounded-full ">
                                            {/* <Check className="h-3.5 w-3.5 text-white" /> */}
                                            <CheckIcon className='w-[16px] h-4' />
                                        </div>
                                        <span className='md:text-base text-sm font-medium leading-[150%] tracking-[.16px]'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4 mt-6 items-center">
                        <div className='w-full'>
                            <Link href="">
                                <div className=" leading-[150%] text-[#070707] border border-[#D2D2D5] px-6 py-4 flex cursor-pointer items-center justify-center rounded-[8px] gap-2 font-semibold hover:bg-black hover:text-white">
                                    <span className="font-serotiva text-sm md:text-base"> Checkout</span>
                                    <BsArrowUpRightCircle className="ml-2 w-5 h-5 " />
                                </div>
                            </Link>
                        </div>
                        <div className='w-full '>
                            <Link href="">
                                <div className=" leading-[150%] text-[#070707] border border-[#D2D2D5] px-9 py-4 flex cursor-pointer items-center justify-center rounded-[8px] gap-2 font-semibold hover:bg-black hover:text-white">
                                    <span className=" font-serotiva text-sm md:text-base"> Schedule a demo</span>
                                    <IoMdAddCircle className="ml-2 w-5 h-5" />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>
    );
}