"use client";

import React, { useState } from "react";
import { OrderStateCard } from "../order/_components/OrderStatCard";
import { ClientStateCard } from "./_components/client-stat-cards";
import { clientStatsData, fakeClientsList } from "./fakeClient";
import { ClientTable } from "./_components/clientTable";
import { Pagination } from "../_components/Pagination";
import CustomSelect from "../../_components/custom-select";

export default function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(fakeClientsList.length / itemsPerPage);
  const paginationList = fakeClientsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // filter
  const [period, setPeriod] = useState("week");
  const [orderStatus, setOrderStatus] = useState("all");

  return (
    <div className="max-w-[1480px] mx-auto">
      client page
      {/* stats */}
      <ClientStateCard clientslate={clientStatsData} />
      <div className=" rounded-xl mt-6  bg-white shadow">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-xl font-semibold ">All Order</h2>

          <div className="flex flex-wrap items-center justify-center gap-4 ">
            <CustomSelect
              value={period}
              onChange={setPeriod}
              options={[
                { label: "This Week", value: "week" },
                { label: "This Month", value: "month" },
                { label: "This Year", value: "year" },
              ]}
            />
            <CustomSelect
              value={orderStatus}
              onChange={setOrderStatus}
              options={[
                { label: "All", value: "all" },
                { label: "Pending", value: "pending" },
                { label: "Completed", value: "completed" },
              ]}
            />
          </div>
        </div>
        {/* table */}
        <ClientTable clients={paginationList} />
      </div>
      {/* pagination */}
      <div className="mt-4 flex items-center justify-between">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, fakeClientsList.length)} of{" "}
            {fakeClientsList.length} entries
          </label>
          <select
            id="itemsPerPage"
            className="border border-gray-200 rounded-md px-3 py-1.5 text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>Show 5</option>
            <option value={8}>Show 8</option>
            <option value={10}>Show 10</option>
            <option value={20}>Show 20</option>
          </select>
        </div>
      </div>
    </div>
  );
}
