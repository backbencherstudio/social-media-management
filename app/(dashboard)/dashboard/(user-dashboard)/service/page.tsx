"use client";

import React from "react";
import Link from "next/link";
import { ImPower } from "react-icons/im";

const services = [
  {
    id: 1,
    name: "Website Hosting",
    started: "2024-12-01",
    status: "For Review",
    approval: "Approved",
  },
  {
    id: 2,
    name: "Email Marketing",
    started: "2025-01-15",
    status: "In Progress",
    approval: "Pending",
  },
  {
    id: 3,
    name: "Email Marketing",
    started: "2025-01-15",
    status: "Complete",
    approval: "Pending",
  },
];

const Service = () => {
  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="flex gap-3">
          <h1 className="text-2xl font-bold text-gray-900">All Services</h1>

          <div className="text-sm text-black flex items-center justify-center px-4 py-1 rounded-full bg-[#EBFBF5] gap-1">
            <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">15</span>&nbsp;Active
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
            <th className="py-3 px-4">Approval</th>
            <th className="py-3 px-4 last:rounded-tr-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="">
              {/* Service cell with left side text & status */}
              <td className="py-4 px-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h1 className="font-semibold text-gray-900">
                      {service.name}
                    </h1>
                    <span className="text-sm text-gray-500">
                      Activation: {service.status}
                    </span>
                  </div>
                </div>
              </td>

              <td className="py-4 px-4 text-center">{service.started}</td>
              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.status === "For Review" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    } ${
                      service.status === "In Progress" &&
                      "bg-[#F5F1FF] text-[#5B21B6]"
                    } ${
                      service.status === "Complete" && "bg-[#ECEFF3] text-black"
                    }`}
                  >
                    {service.status}
                  </span>
                </div>
              </td>

              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.approval === "Approved"
                        ? "bg-[#EBFBF5] text-[#119B70]"
                        : "bg-[#FEF3C7] text-[#984917]"
                    }`}
                  >
                    {service.approval}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <Link
                  href={`/dashboard/service/${service.id}`}
                  className="border px-3 py-1 rounded-md transition-colors"
                >
                  Order Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Service;
