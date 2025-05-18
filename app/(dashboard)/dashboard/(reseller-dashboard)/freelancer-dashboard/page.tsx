import CompletedTasksIcon from "@/public/incons/completed-tasks";
import CompletedTasksArrowIcon from "@/public/incons/completed-tasks-arrow";
import EarningsIcon from "@/public/incons/earnings";
import EarningsArrowIcon from "@/public/incons/earnings-arrow";
import OnTimeDeliveryIcon from "@/public/incons/on-time-delivery";
import OnTimeDeliveryIconArrowIcon from "@/public/incons/on-time-delivery-arrow";
import React from "react";
import ActiveServices from "./_components/active-services";
import TextCard from "./_components/text-card";
import InfoCard from "./_components/info-card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <div className="w-full p-4 md:p-6 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-lg">
          <h1 className="text-xl md:text-2xl font-semibold">
            Welcome! Ali Husni
          </h1>
          <p className="text-sm md:text-base mt-2">
            Let's Rock today. We have 2 Pending Tasks and 5 New Task.
          </p>
          <InfoCard />
        </div>
      </div>
      <div>
        <ActiveServices />
      </div>
      <div>
        <TextCard />
      </div>
    </div>
  );
}
