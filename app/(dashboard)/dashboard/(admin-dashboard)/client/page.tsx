"use client";

import React, { useState } from "react";
import { ClientStateCard } from "./_components/client-stat-cards";
import { clientStatsData, fakeClientsList } from "./fakeClient";
import { ClientTable } from "./_components/clientTable";

export default function page() {
 

  // filter
  const [period, setPeriod] = useState("week");
  const [orderStatus, setOrderStatus] = useState("all");

  return (
    <div className="max-w-[1480px] mx-auto">
      {/* stats */}
      <ClientStateCard clientslate={clientStatsData} />
      {/* table with filter */}
      <div className=" rounded-xl mt-6  bg-white shadow">
       
        {/* table */}
        <ClientTable
          clients={fakeClientsList}
          period={period}
          setPeriod={setPeriod}
          orderStatus={orderStatus}
          setOrderStatus={setOrderStatus}
        />
      </div>
     
    </div>
  );
}
