"use client";

import Link from "next/link";
import React from "react";
import DatePicker from "./date-picker";
import { useGetActiveServicesQuery } from "@/src/redux/features/reseller/dashboard/dashboard";
import { DateHelper } from "@/helper/date.helper";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

export default function ActiveServices() {
  const clientId = useSelector((state: RootState) => state.clientId.id);
  const { data: activeServices } = useGetActiveServicesQuery(clientId);

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0 mb-6 px-1">
        <div className="flex flex-wrap w-full sm:w-auto gap-3 justify-start">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
            Active Services
          </h1>

          <div className="text-sm text-black flex items-center justify-center px-4 py-1 rounded-full bg-[#EBFBF5] gap-1 whitespace-nowrap">
            <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">15</span>&nbsp;Active
          </div>
        </div>
        <div className="w-full sm:w-auto flex justify-end">
          <DatePicker />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
            <tr>
              <th className="py-3 px-4 text-left first:rounded-tl-lg whitespace-nowrap overflow-hidden text-ellipsis">
                Service
              </th>
              <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Started
              </th>
              <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Status
              </th>
              <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Delivery Date
              </th>
              <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis"></th>
            </tr>
          </thead>
          <tbody>
            {activeServices?.data && activeServices.data.length > 0 ? (
              activeServices.data.map((service: any) => (
                <tr key={service.id} className="">
                  {/* Service cell with left side text & status */}
                  <td className="py-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="max-w-full overflow-hidden">
                        <h1 className="font-semibold text-gray-900 truncate whitespace-nowrap">
                          {service.name}
                        </h1>
                        <span className="text-sm text-gray-500 block truncate">
                          {service.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {DateHelper.format(
                      service.created_at,
                      "MMM DD"
                    ).toLowerCase()}
                  </td>

                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 whitespace-nowrap overflow-hidden  
                      ${
                        service.status === 1
                          ? "bg-[#EBFBF5] text-[#00A86B]"
                          : "bg-[#ECEFF3] text-black"
                      }`}
                      >
                        {/* ${
                        service.status === "For Review" &&
                        "bg-[#FEF3C7] text-[#984917]"
                      } ${
                        service.status === "In Progress" &&
                        "bg-[#F5F1FF] text-[#5B21B6]"
                      } ${
                        service.status === "Complete" && "bg-[#ECEFF3] text-black"
                      }  */}

                        {/* <div
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          service.status === "For Review" && "bg-[#984917]"
                        } ${service.status === "In Progress" && "bg-[#5B21B6]"} ${
                          service.status === "Complete" && "bg-black"
                        } ${
                        service.status === "Active" && "bg-[#EBFBF5] text-[#00A86B]"
                      }`}
                      ></div> */}
                        {service.status === 1 ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {"Oct 17"}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-end">
                    <Link
                      href={`/dashboard/service/${service.id}`}
                      className="border px-3 py-1 rounded-md transition-colors"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-lg font-semibold text-gray-500"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
