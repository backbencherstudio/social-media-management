import Link from "next/link";
import React from "react";
import DatePicker from "./date-picker";

const services = [
  {
    id: 1,
    name: "Email Designg",
    started: "2024-12-01",
    status: "For Review",
    approval: "Approved",
  },
  {
    id: 2,
    name: "Plus • 15 posts",
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

export default function ActiveServices() {
  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="flex gap-3">
          <h1 className="text-2xl font-bold text-gray-900">All Services</h1>

          <div className="text-sm text-black flex items-center justify-center px-4 py-1 rounded-full bg-[#EBFBF5] gap-1">
            <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">15</span>&nbsp;Active
          </div>
        </div>
        <DatePicker />
      </div>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg">Service</th>
            <th className="py-3 px-4">Started</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Delivery Date</th>
            <th className="py-3 px-4"></th>
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
                    <span className="text-sm text-gray-500">62A2AA44-2</span>
                  </div>
                </div>
              </td>

              <td className="py-4 px-4 text-center">{service.started}</td>

              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${
                      service.status === "For Review" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    } ${
                      service.status === "In Progress" &&
                      "bg-[#F5F1FF] text-[#5B21B6]"
                    } ${
                      service.status === "Complete" && "bg-[#ECEFF3] text-black"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.status === "For Review" && "bg-[#984917]"
                    } ${
                      service.status === "In Progress" && "bg-[#5B21B6]"
                    } ${
                      service.status === "Complete" && "bg-black"
                    }`}></div>
                    {service.status}
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
