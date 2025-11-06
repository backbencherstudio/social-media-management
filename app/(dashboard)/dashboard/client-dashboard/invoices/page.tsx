"use client";

import Link from "next/link";
import React, { useState } from "react";
import InvoiceModal from "./_components/invoice-modal";
import { useClientPaymentsQuery } from "@/src/redux/features/user/invoices/invoiceApi";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLazyGetInvoicePdfQuery } from "@/src/redux/features/admin/payment/payment";
import NoDataAvailable from "@/components/reusable/NoDataAvailable";

const Invoices = () => {
  const { data: payment, isLoading } = useClientPaymentsQuery(null);
  const payments = payment?.data || [];

  console.log("Payments from client", payment)

  const [getInvoicePdf, { isLoading: isDownloading }] =
    useLazyGetInvoicePdfQuery();

  // for modal
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (item: any) => {
    setIsOpen(true);
    setModalData(item);
  };

  const handleDownloadInvoice = async (id: any) => {
    // console.log("download", id);
    try {
      const invoicePdf = await getInvoicePdf(id).unwrap();
      if (invoicePdf) {
        const url = window.URL.createObjectURL(invoicePdf);
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice-${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Failed to download invoice", error);
    }
  };

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 pl-4 text-left first:rounded-tl-lg ">
              Invoice ID
            </th>
            <th className="py-3 px-4">Package Name</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 ">Actions</th>
            <th className="py-3 px-4 last:rounded-tr-lg">Download</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment: any) => (
            <tr key={payment.id}>
              {/* Invoice ID */}
              <td className="py-4 pl-4 ">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h1 className="font-medium  text-gray-900">{payment.id}</h1>
                  </div>
                </div>
              </td>

              {/* Package Name */}
              <td className="py-4 px-4 text-center">{payment?.pakage_name}</td>

              {/* Amount */}
              <td className="py-4 px-4 text-center">{payment?.ammount}</td>

              {/* Date */}
              <td className="py-4 px-4 text-center">
                {new Date(payment?.created_at).toLocaleDateString()}
              </td>

              {/* <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          service.status === "For Review"
                            ? "bg-[#E98800]/10 text-[#E98800]"
                            : service.status === "In Progress"
                            ? "bg-[#8A71F7]/10 text-[#8A71F7]"
                            : "bg-green-100 text-green-500"
                        }`}
                      >
                        {service.status}
                      </span> */}

              {/* Status */}
              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                      payment.order_status === "progress" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    } ${
                      payment.order_status === "active" &&
                      "bg-[#EBFBF5] text-[#119B70]"
                    }`}
                  >
                    {payment.order_status}
                  </span>
                </div>
              </td>

              {/* View Details Button */}
              <td className="py-4 px-4 text-center underline-none">
                <button
                  onClick={() => handleOpenModal(payment)}
                  className="text-[#2D50FF] underline-none font-semibold text-sm hover:text-[#2D50FF]/80"
                >
                  View Details
                </button>
              </td>

              {/* Download invoice */}
              <td>
                <Button
                  onClick={() => handleDownloadInvoice(payment?.id)}
                  disabled={isDownloading}
                  className="flex items-center justify-center text-center mx-auto bg-gray-50 cursor-pointer hover:bg-gray-100"
                >
                  {isDownloading ? "..." : <Download />}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {payments.length === 0 && <NoDataAvailable />}

      {/* Show Modal */}
      <InvoiceModal isOpen={isOpen} setIsOpen={setIsOpen} service={modalData} />
    </div>
  );
};

export default Invoices;
