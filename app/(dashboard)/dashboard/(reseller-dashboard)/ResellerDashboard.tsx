import React from "react";
import ActiveServices from "./reseller-dashboard/_components/active-services";
import TextCard from "./reseller-dashboard/_components/text-card";
import InfoCard from "./reseller-dashboard/_components/info-card";

export default function ResellerDashboard() {
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
