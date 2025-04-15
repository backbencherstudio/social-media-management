"use client"

import React, { useState } from 'react';
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
import { Minus, MinusIcon, Plus, PlusIcon } from 'lucide-react';

const questions = [
    { id: 1, question: "How much does it cost?" },
    { id: 2, question: "What features are included?" },
    { id: 3, question: "Can I cancel anytime?" },
    { id: 4, question: "Is there a free trial?" },
    { id: 5, question: "How do I get support?" },
];


const FrequentlyAsked = () => {


    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the state: open or close the clicked item
    };
    return (
        <div className="max-w-[1200px] mx-auto px-5 2xl:px-0 lg:py-[100px] md:py-[80px] py-[60px]">
            <div className='flex justify-between gap-4 md:flex-row flex-col'>
                <div className='lg:w-[34%] md:w-[40%]'>
                    <div className="mx-auto mb-12 md:mb-16">
                        <Heading
                            text="Frequently asked questions"
                            className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
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

                <div className='lg:w-[49%] md:w-[60%] text-[#1D1D1F]'>

                    <Accordion type="single" collapsible>
                        {questions.map((question, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                                className={`${index === 0 ? "border-t border-b " : "border-b"
                                    } border-[#DFE1E7] last:border-b`}
                            >
                                <AccordionTrigger
                                    key={question.id}
                                    onClick={() => handleAccordionClick(index)}
                                    className="cursor-pointer hover:no-underline"
                                >
                                    <h1 className="font-semibold text-[20px] leading-[150%] tracking-[.2px]">
                                        {question.question}
                                    </h1>
                                    <div className="relative">
                                        <PlusIcon
                                            className={`h-5 w-5 transition-all duration-300 ease-in-out transform absolute right-0 ${openIndex === index ? 'opacity-0 rotate-160' : 'opacity-100 rotate-0'}`}
                                        />
                                        <MinusIcon
                                            className={`h-5 w-5 transition-all duration-300 ease-in-out transform absolute right-0 ${openIndex === index ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45'}`}
                                        />
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className=''>
                                    If you have any questions that aren't listed below, feel free to
                                    schedule a demo to speak with someone from our team.
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </div>

        </div>
    );
};

export default FrequentlyAsked;