
import React from 'react';
import { Check, X } from 'lucide-react';

const socialMediaOptions = [
    {
        title: "In-house Social Media Teams",
        pros: [
            "Complete control of the social media process and seamless integration",
            "Deep understanding of the brand identity to deliver authentic content",
            "Focus on social media strategy beyond just content creation"
        ],
        cons: [
            "Higher costs including salaries, benefits, and overhead expenses",
            "Limited breadth of social media capabilities and lack of access to the latest trends",
            "Recruitment challenges to find, manage, and retain talent"
        ]
    },
    {
        title: "Agencies",
        pros: [
            "Direct collaboration and input into the social media process",
            "Established reputation within an industry when looking for a trusted partner",
            "High specialization and track record of successful projects in their area of expertise"
        ],
        cons: [
            "Limited control of the social media team and operations",
            "Longer turnaround times due to inefficient project management and limited resources",
            "Locked-in retainer contract with higher bills to compensate for excessive costs"
        ]
    },
    {
        title: "Freelancers",
        pros: [
            "Complete control of the social media process and seamless integration",
            "Flexibility to respond to changes in scope or direction",
            "Lower cost depending on the breadth of skills and the number of freelancers required"
        ],
        cons: [
            "Limited accountability —and availability— to meet deadlines and deliver quality work",
            "Limited range Of social media skills, implying a network of freelancers to account",
            "Locked-in retainer contract with higher bills to compensate for excessive costs"
        ]
    }
];

const CreativityCompare = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[1200px] mx-auto 2xl:px-0 px-5">
            {socialMediaOptions.map((option, index) => (
                <div key={index} className="flex-1 p-4 md:p-6 border border-[#E9E9EA] rounded-[12px] shadow-sm overflow-hidden bg-white">
                    <div className=''>
                        <div className=" flex flex-col gap-4 md:gap-6  ">
                            <div className=" flex ">
                                <span className='bg-[#F6F8FA] p-2 rounded-[8px]'>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <h2 className="md:text-2xl text-xl leading-[130%] font-semibold text-[#1D1D1F]">{option.title}</h2>
                        </div>
                        <div className=' w-full h-[1px] my-4 md:my-6 bg-[#ECEFF3]'></div>
                    </div>

                    <div className="md:pb-6 pb-4">
                        <h3 className="font-semibold text-[#1D1D1F] leading-[130%] text-lg ">Pros:</h3>
                        <ul className="space-y-4 mt-4">
                            {option.pros.map((pro, i) => (
                                <li key={i} className="flex  gap-[10px]">
                                    <span className='mt-[2px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9993 1.66797H4.99935C3.1584 1.66797 1.66602 3.16035 1.66602 5.0013V15.0013C1.66602 16.8423 3.1584 18.3346 4.99935 18.3346H14.9994C16.8403 18.3346 18.3327 16.8423 18.3327 15.0013V5.0013C18.3327 3.16035 16.8403 1.66797 14.9993 1.66797ZM13.826 7.88504C14.038 7.61258 13.9889 7.2199 13.7164 7.00799C13.4439 6.79607 13.0513 6.84515 12.8393 7.11762L9.50017 11.4108C9.42592 11.5063 9.28625 11.5187 9.19636 11.4378L7.08412 9.53677C6.82756 9.30586 6.43237 9.32666 6.20146 9.58323C5.97055 9.8398 5.99135 10.235 6.24792 10.4659L8.36015 12.3669C8.98943 12.9332 9.9671 12.8465 10.4869 12.1783L13.826 7.88504Z" fill="#3EB83E" />
                                        </svg>
                                    </span>
                                    <span className="md:text-base tracking-[.16px] leading-[150%] text-[#4A4C56] text-sm">{pro}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-[#ECEFF3] md:pt-6 pt-4">
                        <h3 className="font-semibold text-[#1D1D1F] leading-[130%] text-lg">Cons:</h3>
                        <ul className="space-y-4 mt-4">
                            {option.cons.map((con, i) => (
                                <li key={i} className="flex  gap-[10px]">
                                    <span className='mt-[2px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 1.66797H15.3333C17.1743 1.66797 18.6667 3.16035 18.6667 5.0013V15.0013C18.6667 16.8423 17.1743 18.3346 15.3333 18.3346H5.33333C3.49238 18.3346 2 16.8423 2 15.0013V5.0013C2 3.16035 3.49238 1.66797 5.33333 1.66797ZM13.1323 7.20238C13.3764 7.44646 13.3764 7.84218 13.1323 8.08626L11.2173 10.0013L13.1323 11.9163C13.3764 12.1604 13.3764 12.5561 13.1323 12.8002C12.8882 13.0443 12.4925 13.0443 12.2484 12.8002L10.3334 10.8852L8.41825 12.8003C8.17418 13.0444 7.77845 13.0444 7.53437 12.8003C7.29029 12.5562 7.29029 12.1605 7.53437 11.9164L9.4495 10.0013L7.53438 8.08617C7.2903 7.84209 7.2903 7.44637 7.53438 7.20229C7.77846 6.95821 8.17418 6.95821 8.41826 7.20229L10.3334 9.11741L12.2484 7.20238C12.4925 6.9583 12.8882 6.9583 13.1323 7.20238Z" fill="#AFAFAF" />
                                        </svg>
                                    </span>
                                    <span className="md:text-base tracking-[.16px] leading-[150%] text-[#4A4C56] text-sm">{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CreativityCompare;