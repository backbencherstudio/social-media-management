import Heading from '@/app/(client)/_components/heading-text';
import ParagraphText from '@/app/(client)/_components/paragraph-text';
import React from 'react';

interface ProcessStep {
    number: number;
    title: string;
    description: string;
}

const ProcessSteps: React.FC = () => {
    const steps: ProcessStep[] = [
        {
            number: 1,
            title: "Strategic Outreach",
            description: "High-quality DA20-65 backlinks to boost your website's search engine rankings. We secure valuable placements on authoritative websites to enhance your site's credibility and visibility."
        },
        {
            number: 2,
            title: "Link Placement",
            description: "Skilled copywriters enhance existing content. Your link fits seamlessly within the context. Every placement adds value to the host site."
        },
        {
            number: 3,
            title: "Transparent Reporting",
            description: "Monitor live placements from your dashboard. Access complete Domain Authority metrics. Export white-label reports for your records."
        }
    ];

    return (
        <div className="w-full bg-[#F7F7F9] px-5 2xl:px-0 py-[100px]">

            <div className="text-center md:max-w-[544px] mx-auto   mb-8 md:mb-12 px-5 2xl:px-[0px]">
                <Heading
                    text="Simple 3-Step Process"
                    className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                />
                <ParagraphText
                    paraText="Get high-quality backlinks from established websites that help your business rank higher on Google. Starting at just $99/month."
                    className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                />
            </div>

            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step) => (
                        <div key={step.number} className="bg-white lg:p-6 md:p-2 p-3 flex flex-col items-center text-center rounded-[12px] shadow-sm">
                            <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-5">
                                <h2 className="text-white text-xl font-semibold leading-[175%] ">{step.number}</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-[#1D1D1F] tracking-[175%] mb-3">{step.title}</h3>

                            <p className="text-[#4A4C56] text-base leading-[150%] tracking-[.16px] ">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessSteps;