"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { Pagination } from "../../payment/_components/pagination";
import PaymentDetailsModalReseller from "../../payment/_components/payment-details-modal-reseller";
import CreateNewEmailModal from "./create-new-email-modal";
import { useGetAllSentsQuery } from "@/src/redux/features/admin/help-and-support/support";

export default function Sent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const { data, isLoading, isError } = useGetAllSentsQuery();

  const services = data?.data || [];
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const paginatedServices = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading)
    return <div className="flex justify-center items-center">Loading...</div>;

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 px-1">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Sent</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <select
            className="w-full sm:w-auto border border-gray-200 rounded-md px-3 py-1.5 text-sm"
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

      <table className="min-w-full table-auto">
        <thead className="bg-gray-100 text-gray-700 text-left rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left text-xs md:text-sm font-medium">
              Email Type
            </th>
            <th className="py-3 px-4 text-xs md:text-sm font-medium">
              Subject
            </th>
            <th className="py-3 px-4 text-xs md:text-sm font-medium">
              Recipients
            </th>
            <th className="py-3 px-4 text-xs md:text-sm font-medium">Date</th>
            <th className="py-3 px-4 text-xs md:text-sm font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedServices && paginatedServices.length > 0 ? (
            paginatedServices.map((sentData) => (
              <tr
                key={sentData.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-4 text-xs md:text-sm">
                  {sentData.type || "—"}
                </td>

                <td className="py-4 px-4 text-xs md:text-sm font-semibold text-gray-900">
                  {sentData.subject || "No Subject"}
                </td>

                <td className="py-4 px-4 text-xs md:text-sm">
                  {Array.isArray(sentData.recipient_emails)
                    ? sentData.recipient_emails.join(", ")
                    : sentData.recipient_emails}
                </td>

                <td className="py-4 px-4 text-xs md:text-sm">
                  {new Date(sentData.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>

                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/dashboard/admin-dashboard/admin-support/${sentData.id}`}
                      className="hover:text-gray-700 transition-colors"
                    >
                      <GrView className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-400">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
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
            Showing {paginatedServices.length} of {services.length} entries
          </label>
          <select
            id="itemsPerPage"
            className="w-full sm:w-auto border border-gray-200 rounded-md px-2 md:px-3 py-1.5 text-xs md:text-sm"
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

      {/* Modals */}
      <PaymentDetailsModalReseller
        isModalOpen={isModalOpen}
        paymentDetails={selectedService}
        setIsModalOpen={setIsModalOpen}
      />

      <CreateNewEmailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
