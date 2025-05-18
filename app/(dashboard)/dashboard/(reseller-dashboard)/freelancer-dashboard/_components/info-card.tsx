import CompletedTasksIcon from '@/public/incons/completed-tasks'
import CompletedTasksArrowIcon from '@/public/incons/completed-tasks-arrow'
import EarningsIcon from '@/public/incons/earnings'
import EarningsArrowIcon from '@/public/incons/earnings-arrow'
import OnTimeDeliveryIcon from '@/public/incons/on-time-delivery'
import OnTimeDeliveryIconArrowIcon from '@/public/incons/on-time-delivery-arrow'
import React from 'react'

export default function InfoCard() {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-10 mt-4 md:mt-6">
            {/* div 1 */}
            <div className="border-2 border-gray-400 flex flex-col md:flex-row gap-4 md:gap-12 p-4 md:px-12 md:py-6 rounded-lg w-full">
              <CompletedTasksIcon className={'w-16 h-14 p-3 bg-gray-100 rounded-full'} />
              <div className="w-full">
                <div className="flex flex-col md:flex-row justify-between md:gap-12">
                  <p className="text-sm md:text-base">Completed Tasks</p>
                  <div className="flex items-center px-3 py-1 rounded-full bg-[#EBFBF5] text-[#00A86B] mt-2 md:mt-0 w-fit">
                    <CompletedTasksArrowIcon />
                    <span>8.2%</span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-black font-semibold block mt-2">24</span>
              </div>
            </div>
            {/* div 2 */}
            <div className="border-2 border-gray-400 flex flex-col md:flex-row gap-4 md:gap-12 p-4 md:px-10 md:py-6 rounded-lg w-full">
              <OnTimeDeliveryIcon className={'w-16 h-14 p-3 bg-gray-100 rounded-full'} />
              <div className="w-full">
                <div className="flex flex-col md:flex-row justify-between md:gap-12">
                  <p className="text-sm md:text-base">Completed Tasks</p>
                  <div className="flex items-center px-3 py-1 rounded-full bg-[#FFF9E9] text-[#DA7908] mt-2 md:mt-0 w-fit">
                    <OnTimeDeliveryIconArrowIcon />
                    <span>8.2%</span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-black font-semibold block mt-2">24</span>
              </div>
            </div>
            {/* div 3 */}
            <div className="border-2 border-gray-400 flex flex-col md:flex-row gap-4 md:gap-12 p-4 md:px-10 md:py-6 rounded-lg w-full">
              <EarningsIcon className={'w-16 h-14 p-3 bg-gray-100 rounded-full'} />
              <div className="w-full">
                <div className="flex flex-col md:flex-row justify-between md:gap-12">
                  <p className="text-sm md:text-base">Completed Tasks</p>
                  <div className="flex items-center px-3 py-1 rounded-full bg-[#FFF1F1] text-[#DC0002] mt-2 md:mt-0 w-fit">
                    <EarningsArrowIcon />
                    <span>8.2%</span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-black font-semibold block mt-2">24</span>
              </div>
            </div>
          </div>
  )
}
