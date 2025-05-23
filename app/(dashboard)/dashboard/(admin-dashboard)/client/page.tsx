"use client";

import React, { useState } from "react";
import { OrderStateCard } from "../order/_components/OrderStatCard";
import { ClientStateCard } from "./_components/client-stat-cards";
import { clientStatsData, fakeClientsList } from "./fakeClient";
import { ClientTable } from "./_components/clientTable";
import { Pagination } from "../_components/Pagination";
import CustomSelect from "../../_components/custom-select";

export default function page() {
 

  // filter
  const [period, setPeriod] = useState("week");
  const [orderStatus, setOrderStatus] = useState("all");

  return (
    <div className="max-w-[1480px] mx-auto">
      client page
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
