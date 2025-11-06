"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ImPower } from "react-icons/im";

const services = [
  {
    id: 1,
    invoiceId: "#1NV-2024001",
    project: "Social Media Post Design",
    amount: "$150",
    date: "2024-01-15",
    dueDate: "2024-01-30",
    status: "Pending",
  },
  {
    id: 2,
    invoiceId: "#1NV-2024001",
    project: "Social Media Post Design",
    amount: "$150",
    date: "2024-01-15",
    dueDate: "2024-01-30",
    status: "Paid",
  },
];

type service = {
  id: number;
  invoiceId: string;
  project: string;
  amount: string;
  date: string;
  dueDate: string;
  status: string;
};
export default function PaymentInvoices() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (item: any) => {
    setIsOpen(true);
    setModalData(item);
  };

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      <h1 className="text-2xl mb-4">Invoices</h1>
      <div className="space-y-6 border border-gray-100 p-4 rounded-xl">
        <div className="flex justify-between items-center ">
          <h1>Active Services</h1>
      <Link href="/dashboard/user-dashboard/services">
        <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
            <ImPower />
            <span>Add Services</span>
          </button></Link>
        </div>
        <table className="min-w-full table-auto border-collapse  rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left rounded-t-lg">
            <tr>
              <th className="py-3 px-4  first:rounded-tl-lg">Invoice</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Date due</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="">
                {/* Service cell with left side text & status */}
                <td className="py-4 px-4">
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <h1 className="font-semibold text-gray-900">
                        {service.invoiceId}
                      </h1>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4 text-left">{service.date}</td>
                <td className="py-4 px-4 text-left">{service.date}</td>
                <td className="py-4 px-4 text-left">{service.amount}</td>
                <td className="py-4 px-4 text-left">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="bg-[#F5F5F7] px-4 py-3 rounded-full flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <span>Abandoned Checkout</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show Modal */}
      {/* <InvoiceModal isOpen={isOpen} setIsOpen={setIsOpen} service={modalData} /> */}
    </div>
  );
}
