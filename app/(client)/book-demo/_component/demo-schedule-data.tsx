import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import HashIcons from '@/public/incons/hash-icon';
import { Calendar, Clock, Globe } from 'lucide-react';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";
import { type ITimezone } from "react-timezone-select"
import ContactForm from './contact-demo-form';

interface DemoScheduleDataProps {
    dateFormat: string;
    selectedTime: string | null;
    selectedTimezone: ITimezone;
}


const DemoScheduleData: React.FC<DemoScheduleDataProps> = ({ dateFormat, selectedTime, selectedTimezone }) => {



    return (
        <div className='flex gap-6'>
            <div className='mt-[64px]'>
                <BookDemoCard dateFormat={dateFormat} selectedTime={selectedTime} selectedTimezone={selectedTimezone} />
            </div>
            <ContactForm />
        </div>
    );
};

export default DemoScheduleData;


interface BookDemoCardProps {
    dateFormat: string;
    selectedTime: string | null;
    selectedTimezone: ITimezone;
}

const BookDemoCard: React.FC<BookDemoCardProps> = ({ dateFormat, selectedTime, selectedTimezone }) => {


    console.log(selectedTimezone)


    return (
        <>
            <Card className="shadow-none h-full border-0 p-2">
                <CardContent className=" h-full p-0">
                    <div className='flex flex-col   h-full'>
                        <div className='flex flex-col gap-4 '>
                            <div className="  flex items-center justify-start">
                                <div className='flex gap-4 items-center'>
                                    <span className=' bg-[#F5F5F780] p-3  rounded-md'>
                                        <HashIcons className='lg:w-6 lg:h-6 w-4 h-4' />
                                    </span>
                                    <h2 className='xk:text-[26px] text-lg text-[#1D1D1F] font-semibold leading-[126%] capitalize'>TagGrowth Intro</h2>
                                </div>
                                {/* <div className='flex items-center gap-2 ml-auto bg-[#F6F8FA] px-2 py-1 rounded-[99px]'>
                                    <span> <Clock className='w-5 h-5' /> </span>
                                    <span className='text-base text-[#070707] leading-[150%] tracking-[.16px]'>20 min</span>
                                </div> */}
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='flex items-center gap-3'> <Clock className='w-5 h-5' /> 20 min </span>
                                <span className='flex items-center gap-3'> <Calendar className='w-5 h-5' />{selectedTime} , {dateFormat}</span>
                                <span className='flex items-center gap-3'><Globe className='w-5 h-5' /> {typeof selectedTimezone === 'object' && 'value' in selectedTimezone
                                    ? selectedTimezone.value.toString()
                                    : selectedTimezone.toString()}</span>
                            </div>
                            <div>
                                <p className='text-base leading-[150%] tracking-[.16px] text-[#4A4C56]'>Book a <span className='text-[#1D1F2C] font-medium'>free 20-min Google Meet call</span> to learn more about TagGrowth and get any of your
                                    questions answered.</p>
                            </div>
                            <div>
                                <p className='text-base leading-[150%] tracking-[.16px] text-[#4A4C56]'><span className='text-[#1D1F2C] font-medium'>Important:</span> Ensure select the correct AM/PM time to avoid mistakes, like 3am instead of 3pm.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3  mt-6'>
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
        </>
    )
}




