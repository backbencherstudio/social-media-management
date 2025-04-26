'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FiBox, FiHelpCircle } from 'react-icons/fi'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import ActiveServicesTable from '@/components/UserDashboard/Home/ActiveServicesTable'
import RecommendedResources from '@/components/UserDashboard/Home/RecommendedResources'


export default function DashboardHome() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDateChange = (item: any) => {
    setState([item.selection]);
  };

  const handleClear = () => {
    setState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
  };

  return (
    <>
      <div className="p-5 lg:p-10 bg-white rounded-[12px]">
        <div className='mb-6'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mb-5 sm:mb-0'>
            <h1
              className="text-[24px] font-[700]"
              style={{
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                background: "linear-gradient(to bottom, #000000 0%, #444444 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Welcome! Ali Husni
            </h1>

            {/* Date Range Picker */}
            <div className="flex items-center gap-2 text-sm relative">
              <div 
                className='w-full flex items-center gap-2 border border-[#E5E5EC] rounded-lg px-2 py-3 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66667 1.66666V4.16666" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3333 1.66666V4.16666" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.91667 7.57501H17.0833" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 7.08332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08332C2.5 4.58332 3.75 2.91666 6.66667 2.91666H13.3333C16.25 2.91666 17.5 4.58332 17.5 7.08332Z" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="bg-transparent text-gray-700 font-medium">
                  {state[0].startDate && state[0].endDate
                    ? `${state[0].startDate.toLocaleDateString()} - ${state[0].endDate.toLocaleDateString()}`
                    : 'Select date range'}
                </span>
              </div>

              {isOpen && (
                <div 
                  ref={dropdownRef} 
                  className="absolute sm:right-0 top-[calc(100%+8px)] z-50 bg-white p-2 shadow-lg border border-[#E5E5EC] rounded-md"
                  style={{
                    position: 'absolute',
                    right: 0,
                    transform: 'translateY(4px)',
                    minWidth: 'max-content'
                  }}
                >
                  <DateRange
                    editableDateInputs={false}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className="shadow-none"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleClear}
                      className="w-full px-4 py-2 border border-[#E5E5EC] cursor-pointer rounded-md hover:bg-gray-50 text-sm"
                    >
                        Clear
                      </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full px-4 py-2 border border-[#E5E5EC] cursor-pointer rounded-md hover:bg-gray-50 text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-600 ">Let's Rock today. We have 2 Pending Tasks and 5 New Records.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F9F9FA] border border-[#F5F5F7] rounded-xl p-6  transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full">
                <FiBox className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">Services</h2>
                <p className="text-[#777980] text-sm">Discover our services</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F9F9FA] border border-[#F5F5F7] rounded-xl p-6  transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full">
                <FiHelpCircle className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">Help Center</h2>
                <p className="text-[#777980] text-sm">Helpful guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ActiveServicesTable />
      </div>


      <div>
        <h1 className="text-[24px] font-[700]">Recommended Resources</h1>
        <RecommendedResources />
      </div>


    </>
  )
}

