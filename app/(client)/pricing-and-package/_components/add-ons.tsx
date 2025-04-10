'use client'

import React, { useState } from 'react'
import Heading from '../../_components/heading-text'
import ParagraphText from '../../_components/paragraph-text'
import { ChevronDown } from 'lucide-react'
import AddIcon from '@/public/incons/add-icon'
import MediaIcon from '@/public/incons/media-icon'
import StoriesIcon from '@/public/incons/stories'

interface AddOnItem {
  icon: React.ReactNode;
  title: string;
  price: string;
  isExpandable?: boolean;
  options?: { label: string; price: string }[];
}

const addOnsData: AddOnItem[] = [
  {
    icon: <AddIcon/>,
    title: "Instagram Stories",
    price: "10 stories - $49/mo",
    isExpandable: true,
    options: [
      { label: "10 stories", price: "10 stories - $49/mo" },
      { label: "20 stories", price: "20 stories - $89/mo" },
      { label: "30 stories", price: "30 stories - $129/mo" },
    ]
  },
  {
    icon: <MediaIcon/>,
    title: "Carousel Posts",
    price: "$5 extra per post",
  },
  {
    icon: <StoriesIcon/>,
    title: "Meta Stories",
    price: "10 stories - $49/mo",
    isExpandable: true,
    options: [
      { label: "10 stories", price: "10 stories - $49/mo" },
      { label: "20 stories", price: "20 stories - $89/mo" },
      { label: "30 stories", price: "30 stories - $129/mo" },
    ]
  },
];

export default function AddOns() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [selectedPrices, setSelectedPrices] = useState<{ [key: number]: string }>({});

  const handleItemClick = (index: number) => {
    if (addOnsData[index].isExpandable) {
      setExpandedItem(expandedItem === index ? null : index);
    }
  };

  const handleOptionSelect = (itemIndex: number, price: string) => {
    setSelectedPrices({ ...selectedPrices, [itemIndex]: price });
    setExpandedItem(null);
  };

  return (
    <div className='container text-center py-28'>
      <Heading text='Add-ons' className='text-[42px]'/>
      <ParagraphText 
        paraText="Add these extras during checkout to power up your marketing efforts." 
        className='text-base mb-12'
      />

      <div className="max-w-[776px] mx-auto space-y-3">
        {addOnsData.map((addon, index) => (
          <div key={index} className="relative">
            <div 
              onClick={() => handleItemClick(index)}
              className="bg-[#F7F7F9] rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#F0F0F3] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-[#1D1D1F]">
                  {addon.icon}
                </div>
                <span className="text-[#1D1D1F] font-medium">{addon.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1D1D1F]">
                  {selectedPrices[index] || addon.price}
                </span>
                {addon.isExpandable && (
                  <ChevronDown 
                    className={`w-5 h-5 text-[#1D1D1F] transition-transform ${
                      expandedItem === index ? 'transform rotate-180' : ''
                    }`}
                  />
                )}
              </div>
            </div>

            {/* Dropdown Options */}
            {expandedItem === index && addon.options && (
              <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {addon.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="p-3 hover:bg-[#F7F7F9] cursor-pointer text-left"
                    onClick={() => handleOptionSelect(index, option.price)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
