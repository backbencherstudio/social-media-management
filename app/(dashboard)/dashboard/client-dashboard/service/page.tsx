"use client";

import React from "react";
import Link from "next/link";
import { ImPower } from "react-icons/im";
import { useUserAllServicesQuery } from "@/src/redux/features/user/user-services/userServicesApi";
import NoDataAvailable from "@/components/reusable/NoDataAvailable";

const Service = () => {
  const { data, isLoading, isError } = useUserAllServicesQuery(undefined);

  const services = data?.data || [];

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="flex gap-3">
          <h1 className="text-2xl font-bold text-gray-900">All Services</h1>

          <div className="text-sm text-black flex items-center justify-center px-4 py-1 rounded-full bg-[#EBFBF5] gap-1">
            <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">{services.length}</span>
            &nbsp;Active
          </div>
        </div>
        <Link
          href="/dashboard/service/"
          className="px-7 py-3 bg-[#1A7DFF] text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <ImPower className="w-5 h-5" /> Add Services
        </Link>
      </div>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg">Service</th>
            <th className="py-3 px-4">Started</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Order Status</th>
            <th className="py-3 px-4 last:rounded-tr-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service: any) => (
            <tr key={service.id} className="">
              {/* Service cell with left side text & status */}
              <td className="py-4 px-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h1 className="font-semibold text-gray-900">
                      {service.service}
                    </h1>
                    <span className="text-sm text-gray-500">
                      Activation: {service.status}
                    </span>
                  </div>
                </div>
              </td>

              <td className="py-4 px-4 text-center">
                {new Date(service.started).toLocaleDateString()}
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      service.status === "active" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    } ${
                      service.status === "inactive" &&
                      "bg-[#F5F1FF] text-[#5B21B6]"
                    }`}
                  >
                    {service.status}
                  </span>
                </div>
              </td>

              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      service.order_status === "progress"
                        ? "bg-[#F5F1FF] text-[#5B21B6]"
                        : "bg-[#FEF3C7] text-[#984917]"
                    }`}
                  >
                    {service.order_status}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <Link
                  href={`/dashboard/service/${service.id}`}
                  className="border border-[#E9E9EA] text-gray-800 px-3 py-1 rounded-md transition-colors"
                >
                  Order Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isError && <p>Error fetching data...</p>}
      {isLoading && <p>Loading...</p>}
      {services.length === 0 && <NoDataAvailable />}
    </div>
  );
};

export default Service;
