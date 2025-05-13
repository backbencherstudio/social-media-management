import Link from "next/link";
import React from "react";

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
                <button className="text-[#2D50FF] underline">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
