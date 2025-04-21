"use client";

import React from 'react';
import { useState } from "react";

import { Chevron, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Heading from '../_components/heading-text';
import ParagraphText from '../_components/paragraph-text';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, CopyCheck, FileCode2, Globe, Globe2, Globe2Icon, GlobeIcon, GlobeLock, GlobeLockIcon, HashIcon, LucideGlobe, LucideGlobeLock, Target } from 'lucide-react';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";
import HashIcons from '@/public/incons/hash-icon';
import TimezoneSelect, { type ITimezone } from "react-timezone-select"




const BookDemoPage = () => {

    const [selected, setSelected] = useState<Date>();

    const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    )
    console.log(selectedTimezone, "selectedTimezone")

    return (
        <div className='bg-[#F7F7F9]'>
            <div className='max-w-[1200px] mx-auto px-5 2xl:px-0 lg:py-[100px] md:py-[80px] py-[60px] '>
                <div className="text-center md:max-w-[544px] mx-auto   mb-8 md:mb-12 px-5 2xl:px-[0px]">
                    <Heading
                        text="Schedule a Demo"
                        className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                    />
                    <ParagraphText
                        paraText="Schedule a meeting to learn more about our services"
                        className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                    />
                </div>
                <div className='max-w-[996px] mx-auto bg-white rounded-[18px] lg:p-6 p-3' >
                    <div className='grid lg:grid-cols-2 gap-6 justify-between '>
                        <div className='w-full h-full  block'>
                            <Card className="shadow-none h-full border-0 p-6">
                                <CardContent className=" h-full p-0">
                                    <div className='flex flex-col   h-full'>
                                        <div className='flex flex-col gap-4 '>
                                            <div className="  flex items-start justify-start">
                                                <div className='flex gap-4 items-center'>
                                                    <span className=' bg-[#F5F5F780] p-3 rounded-md'>
                                                        <HashIcons />
                                                    </span>
                                                    <h2 className='text-[26px] text-[#1D1D1F] font-semibold leading-[126%] capitalize'>TagGrowth Intro</h2>
                                                </div>
                                                <div className='flex items-center gap-2 ml-auto bg-[#F6F8FA] px-2 py-1 rounded-[99px]'>
                                                    <span> <Clock className='w-5 h-5' /> </span>
                                                    <span className='text-base text-[#070707] leading-[150%] tracking-[.16px]'>20 min</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-base leading-[150%] tracking-[.16px] text-[#4A4C56]'>Book a <span className='text-[#1D1F2C] font-medium'>free 20-min Google Meet call</span> to learn more about TagGrowth and get any of your
                                                    questions answered.</p>
                                            </div>
                                            <div>
                                                <p className='text-base leading-[150%] tracking-[.16px] text-[#4A4C56]'><span className='text-[#1D1F2C] font-medium'>Important:</span> Ensure select the correct AM/PM time to avoid mistakes, like 3am instead of 3pm.</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3  mt-auto justify-end'>
                                            <div className='flex'>
                                                <span className='flex border-b items-center gap-2 flex-start'>
                                                    <Link href="" className='text-base leading-[150%] tracking-[.16px] font-medium '>Client Reviews</Link>
                                                    <FiArrowUpRight />
                                                </span>
                                            </div>
                                            <div className='flex'>
                                                <span className='flex border-b items-center gap-2 flex-start'>
                                                    <Link href="" className='text-base leading-[150%] tracking-[.16px] font-medium '>Pricing & Plans</Link>
                                                    <FiArrowUpRight />
                                                </span>
                                            </div>
                                            <div className='flex'>
                                                <span className='flex border-b items-center gap-2 flex-start'>
                                                    <Link href="" className='text-base leading-[150%] tracking-[.16px] font-medium '>Examples of our work</Link>
                                                    <FiArrowUpRight />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='w-full  h-full p-6 border border-[#D2D2D5] rounded-[12px]'>
                            <DayPicker
                                animate
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                                showOutsideDays
                                classNames={{
                                    months: 'w-full max-w-full', // <- this overrides rdp-months
                                    month: 'w-full',
                                    table: 'w-full ',
                                    weekdays: 'h-[70px]',
                                    month_grid: 'w-full ',
                                    day_button: 'rdp-day_button !text-center !mx-auto  ',
                                    chevron: 'text-red-500',
                                    outside: 'text-[#E0E0E0]',
                                    selected: 'bg-[#1D1D1F] text-white rounded-full',
                                    today: 'text-black font-semibold bg-[#F6F8FA]  rounded-full',
                                    focused: 'bg-gray-900 font-medium text-white rounded-full',

                                }}
                            // footer={
                            //     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                            // }
                            />

                            <div className="mt-4">
                                <p className="text-sm font-medium mb-2">Time zone</p>
                                <div className='flex items-center gap-2'>
                                    <span><LucideGlobe className='w-[16px] h-4' /></span>
                                    <TimezoneSelect
                                        value={selectedTimezone}
                                        onChange={(timezone) => setSelectedTimezone(timezone)}
                                        labelStyle="original"
                                        className='border-0 w-full'
                                        styles={{
                                            control: (baseStyles) => ({
                                                ...baseStyles,
                                                border: 'none',
                                                boxShadow: 'none',
                                                '&:hover': {
                                                    border: 'none',
                                                },
                                            }),
                                        }}
                                        // formatOptionLabel={(option: ITimezone | string, { context }) => {
                                        //     // In the dropdown menu
                                        //     if (context === 'menu') {
                                        //         // Return the default format with GMT offset
                                        //         return option?.label; // This shows the default "GMT+6:00 Astana, Dhaka" format
                                        //     }
                                        //     // For the selected value display
                                        //     else {
                                        //         const now = new Date();
                                        //         const formatter = new Intl.DateTimeFormat('en-US', {
                                        //             hour: 'numeric',
                                        //             minute: 'numeric',
                                        //             timeZone: option?.value,
                                        //             hour12: true
                                        //         });
                                        //         const time = formatter.format(now);
                                        //         return `${option?.value} (${time})`;
                                        //     }
                                        // }} ///this is the code that is easy but typescript error

                                        formatOptionLabel={(option: ITimezone | string, { context }) => {
                                            // Handle case when option is a string
                                            if (typeof option === 'string') {
                                                const now = new Date();
                                                const formatter = new Intl.DateTimeFormat('en-US', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    timeZone: option,
                                                    hour12: true
                                                });
                                                const time = formatter.format(now);
                                                return `${option} (${time})`;
                                            }
                                        
                                            // Handle case when option is ITimezone
                                            if (context === 'menu') {
                                                return option.label; // This shows the default "GMT+6:00 Astana, Dhaka" format
                                            } else {
                                                const now = new Date();
                                                const formatter = new Intl.DateTimeFormat('en-US', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    timeZone: option.value,
                                                    hour12: true
                                                });
                                                const time = formatter.format(now);
                                                return `${option.value} (${time})`;
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDemoPage;