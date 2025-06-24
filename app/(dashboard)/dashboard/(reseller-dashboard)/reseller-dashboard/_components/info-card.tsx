import React from "react";
import CompletedTasksIcon from "@/public/incons/completed-tasks";
import CompletedTasksArrowIcon from "@/public/incons/completed-tasks-arrow";
import EarningsIcon from "@/public/incons/earnings";
import EarningsArrowIcon from "@/public/incons/earnings-arrow";
import OnTimeDeliveryIcon from "@/public/incons/on-time-delivery";
import OnTimeDeliveryIconArrowIcon from "@/public/incons/on-time-delivery-arrow";
import { useGetDashboardAnalysisQuery } from "@/src/redux/features/reseller/dashboard/dashboard";
import { useSelector } from "react-redux";
import type { RootState } from "@/src/redux/store";

export default function InfoCard() {
  const clientId = useSelector((state: RootState) => state.clientId.id);

  const { data: dashboardAnalysis } = useGetDashboardAnalysisQuery(clientId);

  return (
    <div className="flex flex-col 2xl:flex-row justify-between gap-4 xl:gap-10 mt-4 md:mt-6">
      {/* div 1 */}
      <div className="border-2 border-gray-200 flex gap-4 md:gap-12 p-4 md:px-12 md:py-6 rounded-lg w-full">
        <CompletedTasksIcon
          className={"w-16 h-14 p-3 bg-gray-100 rounded-full"}
        />
        <div className="w-full">
          <div className="flex justify-between md:gap-12">
            <p className="text-sm md:text-base">Completed Tasks</p>
            <div className="flex items-center px-3 py-1 rounded-full bg-[#EBFBF5] text-[#00A86B] mt-2 md:mt-0 w-fit">
              <CompletedTasksArrowIcon />
              <span>
                {dashboardAnalysis?.data?.stats?.completedTasks?.change || 0}%
              </span>
            </div>
          </div>
          <span className="text-xl md:text-2xl text-black font-semibold block md:mt-2">
            {dashboardAnalysis?.data?.stats?.completedTasks?.count || 0}
          </span>
        </div>
      </div>
      {/* div 2 */}
      <div className="border-2 border-gray-200 flex gap-4 md:gap-12 p-4 md:px-12 md:py-6 rounded-lg w-full">
        <OnTimeDeliveryIcon
          className={"w-16 h-14 p-3 bg-gray-100 rounded-full"}
        />
        <div className="w-full">
          <div className="flex justify-between md:gap-12">
            <p className="text-sm md:text-base">On-Time Delivery</p>
            <div className="flex items-center px-3 py-1 rounded-full bg-[#FFF9E9] text-[#DA7908] mt-2 md:mt-0 w-fit">
              <OnTimeDeliveryIconArrowIcon />
              <span>
                {dashboardAnalysis?.data?.stats?.onTimeDelivery?.change || 0}%
              </span>
            </div>
          </div>
          <span className="text-xl md:text-2xl text-black font-semibold block md:mt-2">
            {dashboardAnalysis?.data?.stats?.onTimeDelivery?.percentage || 0}%
          </span>
        </div>
      </div>
      {/* div 3 */}
      <div className="border-2 border-gray-200 flex gap-4 md:gap-12 p-4 md:px-12 md:py-6 rounded-lg w-full">
        <EarningsIcon className={"w-16 h-14 p-3 bg-gray-100 rounded-full"} />
        <div className="w-full">
          <div className="flex justify-between md:gap-12">
            <p className="text-sm md:text-base">Earnings</p>
            <div className="flex items-center px-3 py-1 rounded-full bg-[#FFF1F1] text-[#DC0002] mt-2 md:mt-0 w-fit">
              <EarningsArrowIcon />
              <span>
                {dashboardAnalysis?.data?.stats?.earnings?.change || 0}%
              </span>
            </div>
          </div>
          <span className="text-xl md:text-2xl text-black font-semibold block md:mt-2">
            ${dashboardAnalysis?.data?.stats?.earnings?.amount || 0}
          </span>
        </div>
      </div>
    </div>
  );
}
