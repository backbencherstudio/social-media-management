import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Heading from '../heading-text';
import ParagraphText from '../paragraph-text';

import { IoMdAddCircle } from 'react-icons/io';
import Link from 'next/link';


const FrequentlyAsked = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-5 2xl:px-0 lg:py-[100px] md:py-[80px] py-[60px]">
            <div className='flex justify-between'>
                <div className='w-[34%] '>
                    <div className="mx-auto mb-12 md:mb-16">
                        <Heading
                            text="Frequently asked questions"
                            className="text-2xl sm:text-3xl md:text-[42px] capitalize font-bold text-[#1D1D1F]"
                        />
                        <ParagraphText
                            paraText="If you have any questions that aren't listed below, feel free to schedule a demo to speak with someone from our team."
                            className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                        />
                        <div className="md:mt-12 mt-10 flex">
                            <Link href="">
                                <div className="border leading-[150%] px-9 py-4 flex  cursor-pointer items-center justify-start   rounded-[8px] gap-2 font-semibold hover:bg-[#070707] hover:text-white">
                                    <span className="font-serotiva text-sm md:text-base "> Schedule demo</span>
                                    <IoMdAddCircle className="ml-2 w-5 h-5" />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className='w-[49%]'>
                    <Accordion type="single"   collapsible>
                        <AccordionItem value="item-1" className='border border-t-[#DFE1E7] border-b-[#DFE1E7] border-r-0 border-l-0'>
                            <AccordionTrigger className=' hover:no-underline'>
                                <h1 className='font-semibold text-[20px] leading-[150%] tracking-[.2px] '>How much does it cost?</h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                If you have any questions that aren't listed below, feel free to schedule a demo to speak with
                                someone from our team.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='border-[#DFE1E7] border-t-0 border-b  border-r-0 border-l-0'>
                            <AccordionTrigger className=' hover:no-underline'>
                                <h1 className='font-semibold text-[20px] leading-[150%] tracking-[.2px] '>How much does it cost?</h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                If you have any questions that aren't listed below, feel free to schedule a demo to speak with
                                someone from our team.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </div>
    );
};

export default FrequentlyAsked;