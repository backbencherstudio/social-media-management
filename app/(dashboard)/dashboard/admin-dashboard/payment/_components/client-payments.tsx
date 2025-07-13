"use client";
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { Pagination } from "./pagination";
import PaymentDetailsModalClient from "./payment-details-modal-client";
import { useGetPaymentQuery } from "@/src/redux/features/admin/payment/payment";

export default function ClientPayments() {

  const { data: payments } = useGetPaymentQuery();
  // console.log(payments, "payments");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);


  // Calculate pagination
  const totalPages = Math.ceil(payments?.length / itemsPerPage);
  const paginatedDetails = payments?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<
    (typeof payments)[0] | null
  >(null);

  return (
    <div className="overflow-x-auto w-full p-3 md:p-4 lg:p-6 bg-white rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 px-1">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Client Payments
          </h1>
        </div>
        <div className="w-full md:w-auto">
          <select
            className="md:w-auto border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue="this_week"
          >
            <option value="this_week">This week</option>
            <option value="last_week">Last week</option>
            <option value="this_month">This month</option>
            <option value="last_month">Last month</option>
            <option value="this_year">This year</option>
          </select>
        </div>
      </div>

      <div className="relative overflow-x-auto rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="py-3 px-2 md:px-4 text-left text-xs md:text-sm font-medium first:rounded-tl-lg whitespace-nowrap">
                Order ID
              </th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">
                Client
              </th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">
                Package
              </th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">
                Amount
              </th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">
                Due Date
              </th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">
                Status
              </th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedDetails?.map((order: any) => (
              <tr
                key={order.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm whitespace-nowrap">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span>{order.id}</span>
                  </div>
                </td>

                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div>
                    <h1 className=" text-gray-500 text-xs md:text-sm">
                      {order.user_name}
                    </h1>
                    <span className="text-xs text-gray-500">
                      {order.user_email}
                    </span>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div>
                    <h1 className="text-gray-600 text-xs md:text-sm">
                      {order.package}
                    </h1>
                    <span className="text-xs text-gray-500">
                      {order.orderId}
                    </span>
                  </div>
                </td>

                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm whitespace-nowrap">
                  <span>${order.ammount}</span>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm whitespace-nowrap">
                  <span>{order.started}</span>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                        order.payment_status
                        === "pending" &&
                        "bg-[#FFF9E9] text-[#ED7600]"
                      } ${
                        order.payment_status
                        === "paid" &&
                        "bg-[#EBFBF5] text-[#07811E]"
                      }`}
                    >
                      {order.payment_status}
                    </span>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={() => {
                        setSelectedService(order);
                        setIsModalOpen(true);
                      }}
                      className="hover:text-gray-700 transition-colors p-1 cursor-pointer"
                    >
                      <GrView className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
          <label
            htmlFor="itemsPerPage"
            className="text-xs md:text-sm text-gray-600"
          >
            Showing 1 to 8 of 50 entries
          </label>
          <select
            id="itemsPerPage"
            className="border border-gray-200 rounded-md px-2 md:px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-black"
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
            {/* <option value="100">Show 100</option> */}
          </select>
        </div>
      </div>
      {/* Payment Details Modal */}
      <PaymentDetailsModalClient
        isModalOpen={isModalOpen}
        selectedOrder={selectedService}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
