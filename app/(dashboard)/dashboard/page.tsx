'use client'
import React, { useState } from 'react'
import { FiBox, FiHelpCircle } from 'react-icons/fi'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import ActiveServicesTable from '@/components/UserDashboard/Home/ActiveServicesTable'

export default function DashboardHome() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

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
            <div className="flex items-center gap-2 text-sm">
              <div className='w-full flex items-center gap-2 border border-[#E5E5EC] rounded-lg px-2 py-3'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66667 1.66666V4.16666" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3333 1.66666V4.16666" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.91667 7.57501H17.0833" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 7.08332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08332C2.5 4.58332 3.75 2.91666 6.66667 2.91666H13.3333C16.25 2.91666 17.5 4.58332 17.5 7.08332Z" stroke="#64748B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  className="bg-transparent  cursor-pointer text-gray-700 font-medium"
                  dateFormat="dd MMMM yyyy"
                  isClearable={false}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
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
    </>
  )
}

