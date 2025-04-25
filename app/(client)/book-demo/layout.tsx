import React from "react";
import HowToWork from "../_components/landing-page/how-to-work";
import ParagraphText from "../_components/paragraph-text";
import Heading from "../_components/heading-text";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="bg-[#F7F7F9]">
                <div className=' px-5 2xl:px-0 lg:pt-[100px] md:pt-[80px] pt-[60px]'>
                    <div className='max-w-[1200px] mx-auto  '>
                        <div className="text-center md:max-w-[544px] mx-auto  ">
                            <Heading
                                text="Schedule a Demo"
                                className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                            />
                            <ParagraphText
                                paraText="Schedule a meeting to learn more about our services"
                                className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                            />
                        </div>
                    </div>
                </div>
                {children}
            </div>
            <HowToWork heading='TagGrowth Demo Overview' />
        </div>
    );
}
