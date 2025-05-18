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
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Client Payments</h1>
        </div>
        <div className="flex gap-4">
          <select
            className="border border-gray-200 rounded-md px-3 py-1.5 text-sm"
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
            className="px-4 py-2 rounded-lg bg-blue-700 flex items-center gap-3 text-white"
          >
            <CiCreditCard1 /> Process Payout
          </button>
        </div>
      </div>

      <table className="min-w-full table-auto ">
        <thead className="bg-gray-100 text-gray-700 text-left rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg">
              Order ID
            </th>
            <th className="py-3 px-4">Client</th>
            <th className="py-3 px-4">Package</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Due Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedServices.map((service) => (
            <tr
              key={service.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="py-4 px-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span>{service.orderId}</span>
                </div>
              </td>

              <td className="py-4 px-4">
                <div>
                  <h1 className="font-semibold text-gray-900">
                    {service.name}
                  </h1>
                  <span className="text-sm text-gray-500">
                    {service.orderId}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div>
                  <h1 className="font-semibold text-gray-900">
                    {service.package}
                  </h1>
                  <span className="text-sm text-gray-500">
                    {service.orderId}
                  </span>
                </div>
              </td>

              <td className="py-4 px-4">
                <span>{service.amount}</span>
              </td>
              <td className="py-4 px-4">
                <span>{service.started}</span>
              </td>
              <td className="py-4 px-4">
                <div className="">
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
              <td className="py-4 px-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      setSelectedService(service);
                      setIsModalOpen(true);
                    }}
                    className="hover:text-gray-700 transition-colors"
                  >
                    <GrView />
                  </button>
                  <Link href={`/dashboard/service/${service.id}`} className="">
                    <CiCreditCard1 />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex items-center justify-between">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing 1 to 8 of 50 entries
          </label>
          <select
            id="itemsPerPage"
            className="border border-gray-200 rounded-md px-3 py-1.5 text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              const newItemsPerPage = parseInt(e.target.value);
              setItemsPerPage(newItemsPerPage);
              setCurrentPage(1); // Reset to first page when changing items per page
            }}
          >
            <option value="5">Show 5</option>
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
            <option value="50">Show 50</option>
            {/* <option value="100">Show 100</option> */}
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
