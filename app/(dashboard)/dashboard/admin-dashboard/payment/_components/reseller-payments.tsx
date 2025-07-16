"use client";

import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { Pagination } from "./pagination";
import { CiCreditCard1 } from "react-icons/ci";
import PaymentDetailsModalReseller from "./payment-details-modal-reseller";
import PayoutModal from "./payout-modal";
import { useGetAllResellerPaymentQuery } from "@/src/redux/features/admin/payment/payment";
import ReleaserPaymentModal from "./release-payment-modal";

export default function ResellerPayments() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data: resellerPayments } = useGetAllResellerPaymentQuery();

 const totalPages = Math.ceil(
    resellerPayments?.data?.resellers?.length / itemsPerPage
  );
  const paginatedDetails = resellerPayments?.data?.resellers?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentDetails, setpaymentDetails] = useState<
    (typeof resellerPayments)[0] | null
  >(null);
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [isReleaserModalOpen, setIsReleaserModalOpen] = useState(false);
  const [releaserPaymentDetails, setReleaserPaymentDetails] = useState(null);

  return (
    <div className="overflow-x-auto w-full p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Reseller Payments
          </h1>
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
          {/* <button
            onClick={() => setShowPayoutModal(true)}
            className="px-4 py-2 rounded-lg bg-blue-700 flex items-center justify-center gap-3 text-white hover:bg-blue-800 transition-colors"
          >
            <CiCreditCard1 className="w-5 h-5" /> Release Payment
          </button> */}
        </div>
      </div>

      <div className="relative overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="py-3 px-2 md:px-4 text-left text-xs md:text-sm font-medium whitespace-nowrap">
                Company
              </th>
              <th className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap">
                Task
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
            {paginatedDetails?.map((service: any) => (
              <tr
                key={service.reseller_id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm whitespace-nowrap">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span>{service.orderId}</span>
                  </div>
                </td> */}

                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div>
                    <h1 className="font-semibold text-gray-900 text-xs md:text-sm">
                      {service.full_name}
                    </h1>
                    <span className="text-xs text-gray-500">
                      {service.user_email}
                    </span>
                  </div>
                </td>

                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div>
                    <h1 className="font-semibold text-gray-900 text-xs md:text-sm">
                      {service?.total_task} Completed
                    </h1>
                    <span className="text-xs text-gray-500">This Month</span>
                  </div>
                </td>

                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm whitespace-nowrap">
                  <span>${service.total_earnings}</span>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm whitespace-nowrap">
                  <span>{service.due_date}</span>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                        service.status === "Pending" &&
                        "bg-[#FFF9E9] text-[#ED7600]"
                      } ${
                        service.status === "Paid" &&
                        "bg-[#EBFBF5] text-[#07811E]"
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={() => {
                        setpaymentDetails(service);
                        setIsModalOpen(true);
                      }}
                      className="hover:text-gray-700 transition-colors p-1 cursor-pointer"
                    >
                      <GrView className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={() => {
                        setReleaserPaymentDetails(service);
                        setIsReleaserModalOpen(true);
                      }}
                      className="hover:text-gray-700 transition-colors p-1 cursor-pointer"
                    >
                       <CiCreditCard1 className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    {/* <Link
                      href={`/dashboard/service/${service.id}`}
                      className="hover:text-gray-700 transition-colors p-1"
                    >
                      <CiCreditCard1 className="w-4 h-4 md:w-5 md:h-5" />
                    </Link> */}
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
          <label
            htmlFor="itemsPerPage"
            className="text-xs md:text-sm text-gray-600 whitespace-nowrap"
          >
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
        paymentDetails={paymentDetails}
        setIsModalOpen={setIsModalOpen}
      />

      <ReleaserPaymentModal
        isModalOpen={isReleaserModalOpen}
        paymentDetails={releaserPaymentDetails}
        setIsModalOpen={setIsReleaserModalOpen}
      />

      <PayoutModal
        isOpen={showPayoutModal}
        onClose={() => setShowPayoutModal(false)}
      />
    </div>
  );
}
