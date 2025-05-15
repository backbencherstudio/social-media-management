"use client";

import Link from "next/link";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    invoiceId: "#1NV-2024001",
    project: "Social Media Post Design",
    amount: "$150",
    date: "2024-01-15",
    status: "Pending",
  },
  {
    id: 2,
    invoiceId: "#1NV-2024001",
    project: "Social Media Post Design",
    amount: "$150",
    date: "2024-01-15",
    status: "Paid",
  },
];

const Invoices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleViewDetails = (service) => {
    setSelectedInvoice(service);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg">
              Invoice ID
            </th>
            <th className="py-3 px-4">Project</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Status</th>
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
                      {service.invoiceId}
                    </h1>
                  </div>
                </div>
              </td>

              <td className="py-4 px-4 text-center">{service.project}</td>
              <td className="py-4 px-4 text-center">{service.amount}</td>
              <td className="py-4 px-4 text-center">{service.date}</td>
              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full font-medium ${
                      service.status === "Pending" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    } ${
                      service.status === "Paid" && "bg-[#EBFBF5] text-[#119B70]"
                    }`}
                  >
                    {service.status}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <button
                  onClick={() => handleViewDetails(service)}
                  className="text-[#2D50FF] underline hover:text-[#1e3bcc] transition-colors"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Invoice Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Invoice Details {selectedInvoice.invoiceId}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {selectedInvoice && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Invoice Date</p>
                    <p className="font-medium text-gray-900">
                      {"January 15, 2024"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Due Date</p>
                    <span className={`inline-block rounded-full font-medium`}>
                      {"January 30, 2024"}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Status</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-medium ${
                        selectedInvoice.status === "Pending"
                          ? "bg-[#FEF3C7] text-[#984917]"
                          : "bg-[#EBFBF5] text-[#119B70]"
                      }`}
                    >
                      {selectedInvoice.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-medium text-gray-900">
                      {selectedInvoice.amount}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 w-full">
                  <p className="text-sm text-gray-500">Service Details</p>
                  <p className="font-medium text-gray-900">
                    {
                      "Social media post design project including initial concepts, revisions, and final deliverables. The project was completed within the specified timeline and approved by the client."
                    }
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-4 py-2.5 bg-gray-100 text-black rounded-lg transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;
