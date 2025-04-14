import React from 'react';
import Heading from '../heading-text';
import ParagraphText from '../paragraph-text';


import ContentTabs from "@/app/(client)/_components/landing-page/_work_components/content-tabs"
// import EnhancedContentTabs from '@/components/enhanced-content-tabs.tsx'




const ExampleOfWork = () => {
    return (
        <div className='bg-[#F7F7F9] py-[60px] md:py-[80px] lg:py-[100px]'>
            <div className='max-w-[1200px] mx-auto px-5 2xl:px-0   '>
                <div className='max-w-[694px] mx-auto flex flex-col gap-4 text-center '>
                    <div>
                        <Heading text="Examples of our work" className='lg:text-[42px] md:text-[36px] text-2xl leading-[126%] font-bold capitalize' />
                    </div>
                    <div>
                        <ParagraphText className='text-[#1D1F2C] leading-[160%] tracking-[0.16px]' paraText="Get your design & marketing work done without the hassle of unreliable freelancers, costly
                    agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises." />
                    </div>

                </div>
                <div className='mt-10'>
                    <ContentTabs  />
                </div>
            </div>
        </div>
    );
};

export default ExampleOfWork;