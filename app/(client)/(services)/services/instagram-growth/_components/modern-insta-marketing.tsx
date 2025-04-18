"use client";
import React from 'react';


import { User, BarChart3, Target, TrendingUp, Pencil, Shield, Settings, LineChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Heading from '@/app/(client)/_components/heading-text';
import ParagraphText from '@/app/(client)/_components/paragraph-text';

const features = [
    {
        icon: User,
        title: "Real Followers",
        description: "We attract genuine accounts that actively engage with your content and niche."
    },
    {
        icon: BarChart3,
        title: "Handmade Growth",
        description: "Real people using real devices manually engage with potential followers for authentic results."
    },
    {
        icon: Target,
        title: "Targeted Growth",
        description: "Our team targets specific audiences matching your ideal customer profile."
    },
    {
        icon: TrendingUp,
        title: "Increase Engagement",
        description: "We focus on quality followers who genuinely interact with your content."
    },
    {
        icon: Pencil,
        title: "Works In 2025",
        description: "Our strategies continuously adapt to Instagram's latest algorithm changes."
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        description: "100% compliant with Instagram's terms, protecting your account from restrictions."
    },
    {
        icon: Settings,
        title: "Advanced Optimization",
        description: "Data-driven targeting adjustments to maximize follower quality and conversion rates."
    },
    {
        icon: LineChart,
        title: "Analytics & Reports",
        description: "Monthly performance insights showing your growth,engagement, and audience metrics."
    }
];

const ModernInstaMarketing = () => {
    return (
        <div className="w-full max-w-[1200px] mx-auto  py-[60px] md:py-[80px] lg:py-[100px] px-5 2xl:px-0">

            <div className="text-center max-w-[694px] mx-auto  mb-8 md:mb-12 px-5 2xl:px-[0px]">
                <Heading
                    text="Modern Instagram Marketing"
                    className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                />
                <ParagraphText
                    paraText="Get your design & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises."
                    className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 '>
                {features.map((feature, index) => (
                    <Card key={index} className="bg-gray-50 border-0 p-4">
                        <CardContent className="  p-0">
                            <div className="md:mb-6 mb-4 flex items-start justify-start">
                                <span className=' bg-white  p-2 rounded-md'>
                                    <feature.icon className="lg:h-8 lg:w-8 w-6 h-6 text-gray-900" />
                                </span>
                            </div>
                            <h3 className="md:text-xl text-base font-semibold mb-3 text-[#1D1D1F]">
                                {feature.title}
                            </h3>
                            <p className="md:text-base text-sm text-[#4A4C56] leading-[150%] tracking-[.16px]">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ModernInstaMarketing;

