import SocialMediaPost from '@/app/(client)/_components/_post/social-media-post';
import Heading from '@/app/(client)/_components/heading-text';
import ParagraphText from '@/app/(client)/_components/paragraph-text';

import React from 'react';



const AfordableSeo = () => {
    return (
        <div className='bg-[#F7F7F9] lg:py-[100px] md:py-[80px] py-[60px]'>
            <div className='max-w-[1200px] mx-auto'>

                <div className="text-center   mb-8 md:mb-12 px-5 2xl:px-[0px]">
                    <Heading
                        text="Affordable SEO Backlinks"
                        className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                    />
                    <ParagraphText
                        paraText="Elite Creative Talent | 80% More Cost-Effective than Agencies | Work with Real Experts, Not AI"
                        className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                    />
                </div>
                <SocialMediaPost />
            </div>
        </div>
    );
};

export default AfordableSeo;