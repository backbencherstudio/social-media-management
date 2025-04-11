import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  icon?: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  price: number;
  defaultPlan: string;
  plans?: string[];
  learnMoreLink: string;
}

export default function ServiceCard({
  icon,
  tag,
  title,
  description,
  price,
  defaultPlan,
  plans,
  learnMoreLink
}: ServiceCardProps) {
  return (
    <div className="w-full max-w-[520px]  bg-[#F7F7F9] p-6 rounded-2xl flex flex-col">
      <div className="space-y-2">
        <div className='flex justify-between items-center '>
        {icon && <div className="text-gray-600 mb-3">{icon}</div>}
        <p className='bg-white p-2 rounded-xl'>{tag}</p>
        </div>
        <h3 className="text-xl font-semibold text-[#1D1D1F] mt-[28px]">{title}</h3>
        <p className="text-sm text-[#4A4C56] leading-relaxed mt-[12px] mb-[36px]">{description}</p>
      </div>

      <div className="">
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-[32px] font-bold text-[#1D1D1F]">${price}</span>
          <span className="text-sm text-[#4A4C56]">Pricing from</span>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <select 
              className="w-full p-3 bg-white rounded-lg text-sm border border-[#D2D2D5] appearance-none cursor-pointer"
              defaultValue={defaultPlan}
            >
              {plans?.map((plan, index) => (
                <option key={index} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <Button 
            className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2 h-12"
          >
            Get Started
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Button>

          <div className="flex items-center justify-center">
            <Link 
              href={learnMoreLink}
              className="flex items-center gap-2 text-sm text-[#4A4C56] hover:text-gray-800"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
