"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { Pagination } from "./pagination";
import { CiCreditCard1 } from "react-icons/ci";
import PaymentDetailsModalReseller from "./payment-details-modal-reseller";
import PayoutModal from "./payout-modal";

export default function ResellerPayments() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Extended fake data for pagination
  const services = [
    {
      id: 1,
      name: "Email Design",
      started: "2024-12-01",
      status: "For Review",
      approval: "Approved",
      orderId: "62A2AA44-2",
      amount: "$245.00",
      package: "Basic Email Package",
    },
    {
      id: 2,
      name: "Plus • 15 posts",
      started: "2025-01-15",
      status: "In Progress",
      approval: "Pending",
      orderId: "62A2AA44-3",
      amount: "$350.00",
      package: "Social Media Package",
    },
    {
      id: 3,
      name: "Email Marketing",
      started: "2025-01-15",
      status: "Complete",
      approval: "Pending",
      orderId: "62A2AA44-4",
      amount: "$199.00",
      package: "Marketing Suite",
    },
    // Add more items to demonstrate pagination
    ...Array.from({ length: 100 }, (_, i) => ({
      id: i + 4,
      name: `${
        [
          "Email Campaign",
          "Social Media Posts",
          "Content Marketing",
          "Digital Marketing",
          "SEO Package",
        ][i % 5]
      } ${i + 4}`,
      started: new Date(2024, Math.floor(i / 30), (i % 30) + 1)
        .toISOString()
        .split("T")[0],
      status: ["For Review", "In Progress", "Complete"][i % 3],
      approval: ["Pending", "Approved"][i % 2],
      orderId: `62A2AA44-${i + 5}`,
      amount: `$${(Math.random() * 900 + 100).toFixed(2)}`,
      package: `${
        ["Basic", "Standard", "Premium", "Enterprise", "Custom"][i % 5]
      } Package ${i + 4}`,
      client: `${["John", "Sarah", "Michael", "Emma", "David"][i % 5]} ${
        ["Smith", "Johnson", "Williams", "Brown", "Jones"][i % 5]
      }`,
    })),
  ];

  // Calculate pagination
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const paginatedServices = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const [showPayoutModal, setShowPayoutModal] = useState(false);

  return (
    <div className="overflow-x-auto w-full p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Client Payments</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 ">
          <select
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue="this_week"
          >
            <option value="this_week">This week</option>
            <option value="last_week">Last week</option>
            <option value="this_month">This month</option>
            <option value="last_month">Last month</option>
            <option value="this_year">This year</option>
          </select>
          <button 
            onClick={() => setShowPayoutModal(true)}
            className="px-4 py-2 rounded-lg bg-blue-700 flex items-center justify-center gap-3 text-white hover:bg-blue-800 transition-colors"
          >
            <CiCreditCard1 className="w-5 h-5" /> Process Payout
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="py-3 px-2 md:px-4 text-left text-xs md:text-sm font-medium whitespace-nowrap">Order ID</th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">Client</th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">Package</th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">Amount</th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">Due Date</th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">Status</th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedServices.map((service) => (
              <tr
                key={service.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  <span className="whitespace-nowrap">{service.orderId}</span>
                </td>

                <td className="py-3 md:py-4 px-2 md:px-4">
                  <div>
                    <h1 className="font-semibold text-gray-900 text-xs md:text-sm">
                      {service.name}
                    </h1>
                    <span className="text-xs text-gray-500">
                      {service.orderId}
                    </span>
                  </div>
                </td>

                <td className="py-3 md:py-4 px-2 md:px-4">
                  <div>
                    <h1 className="font-semibold text-gray-900 text-xs md:text-sm">
                      {service.package}
                    </h1>
                    <span className="text-xs text-gray-500">
                      {service.orderId}
                    </span>
                  </div>
                </td>

                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  <span>{service.amount}</span>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  <span>{service.started}</span>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4">
                  <div>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
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
                <td className="py-3 md:py-4 px-2 md:px-4">
                  <div className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setIsModalOpen(true);
                      }}
                      className="hover:text-gray-700 transition-colors p-1"
                    >
                      <GrView className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <Link 
                      href={`/dashboard/service/${service.id}`} 
                      className="hover:text-gray-700 transition-colors p-1"
                    >
                      <CiCreditCard1 className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4">
          <label htmlFor="itemsPerPage" className="text-xs md:text-sm text-gray-600 whitespace-nowrap">
            Showing 1 to 8 of 50 entries
          </label>
          <select
            id="itemsPerPage"
            className="w-full sm:w-auto border border-gray-200 rounded-md px-2 md:px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
            value={itemsPerPage}
            onChange={(e) => {
              const newItemsPerPage = parseInt(e.target.value);
              setItemsPerPage(newItemsPerPage);
              setCurrentPage(1);
            }}
          >
            <option value="5">Show 5</option>
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
            <option value="50">Show 50</option>
          </select>
        </div>
      </div>
      {/* Payment Details Modal */}
      <PaymentDetailsModalReseller
        isModalOpen={isModalOpen}
        selectedService={selectedService}
        setIsModalOpen={setIsModalOpen}
      />
      
      <PayoutModal 
        isOpen={showPayoutModal}
        onClose={() => setShowPayoutModal(false)}
      />
    </div>
  );
}
