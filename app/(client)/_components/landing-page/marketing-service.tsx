import React from 'react';
import Heading from '../heading-text';
import { X, Check, ThumbsDown, ThumbsUp } from 'lucide-react';
import CrossIcon from '@/public/incons/landin-page/CrossIcon';
import CheckIcon from '@/public/incons/landin-page/CheckIcon';

const MarketingService = () => {

    const beforeItems = [
        "Unpredictable, high-cost agencies",
        "Unreliable freelancers and poor communication",
        "Inconsistent quality and missed deadlines",
        "Unmanageable workloads and stress",
        "Not enough time to focus on your business"
    ];

    const afterItems = [
        "Premium, on-brand content creation",
        "Affordable, fixed monthly pricing",
        "Fast, reliable turnaround times",
        "Fully managed marketing services",
        "More time to focus on growing your business"
    ];

    return (
        <div className="max-w-[996px] mx-auto px-5 2xl:px-0 pb-25">
            <div className="max-w-[696px] capitalize mx-auto text-center mt-20 md:mt-0">
                <Heading text="Fully managed marketing services for small businesses" className="text-2xl md:text-3xl lg:text-[42px]" />
            </div>
            <div>
                <div className="flex flex-col md:flex-row gap-6 md:mt-12 mt-8">
                    {/* Before TagGrowth Column */}
                    <div className="flex-1  rounded-lg overflow-hidden" style={{ background: "rgba(245, 245, 247, 0.59)" }}>
                        <div className="flex justify-between bg-[#E9E9EA] items-center p-4">
                            <h2 className="text-2xl font-semibold leading-[126%] capitalize">Before TagGrowth</h2>
                            <button className="text-gray-500 w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
                                <ThumbsDown size={20} />
                            </button>
                        </div>

                        <div className="px-4 py-6 flex flex-col gap-3">
                            {beforeItems.map((item, index) => (
                                <div key={`before-${index}`} className="flex  items-center gap-3">
                                    <span> <CrossIcon /> </span>
                                    <p className='text-[#4A4C56] md:text-lg text-base leading-[150%] tracking-[.18px]'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* After TagGrowth Column */}
                    <div className="flex-1  rounded-lg overflow-hidden" >
                        <div className="flex justify-between bg-[#1D1D1F] items-center px-4 py-5">
                            <h2 className="md:text-[32px] text-white text-[28px] font-bold leading-[126%] capitalize">After TagGrowth</h2>
                            <button className="text-gray-500 w-[48px] h-[48px] bg-[#FFF] rounded-full flex justify-center items-center">
                                <ThumbsUp size={24} />
                            </button>
                        </div>

                        <div className="px-4 py-6 flex flex-col gap-3 border rounded-b-lg border-[#DFE1E7]">
                            {afterItems.map((item, index) => (
                                <div key={`before-${index}`} className="flex  items-center gap-3 ">
                                    <span> <CheckIcon /> </span>
                                    <p className='text-[#1D1F2C] md:text-lg text-base leading-[150%] tracking-[.18px]'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingService;