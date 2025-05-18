"use client";
import React, { useState } from "react";
import EarningsModal from "./earnings-modal";
import WithdrawModal from "./withdraw-modal";

export default function Earnings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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

  const handleViewDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 px-1">
        <div className="space-y-2 sm:space-y-3 w-full sm:w-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Earnings
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Total Available Balance: $1,500.00
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <WithdrawModal />
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg">
              Client Namee
            </th>
            <th className="py-3 px-4">Project</th>
            <th className="py-3 px-4">Earnings</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
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
                  <span className={`px-3 py-1 rounded-full font-medium`}>
                    {"Oct 17"}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleViewDetails(service)}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View Details
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Earnings Modal */}
      <EarningsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedService={selectedService}
      />
    </div>
  );
}
