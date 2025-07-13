"use client";
import React, { useState } from "react";
import EarningsModal from "./earnings-modal";
import WithdrawModal from "./withdraw-modal";
import { useGetResellerEarningsQuery } from "@/src/redux/features/reseller/profile/profileApi";

export default function Earnings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const id = "RES_td6d9pei2ly83rp5rp7d2giu";
  const { data } = useGetResellerEarningsQuery(id);
  // console.log(data);



  const earnings = data?.data?.completed_tasks || [];


  const handleViewDetails = (service: any) => {
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
              Client Name
            </th>
            <th className="py-3 px-4">Package Name</th>
            <th className="py-3 px-4">Earnings</th>
            <th className="py-3 px-4">Assign Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {earnings.map((task: any) => (
            <tr key={task.task_id}>
              {/* Client Name */}
              <td className="py-4 px-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h1 className="font-semibold text-gray-900">
                      {task.client_name || "N/A"}
                    </h1>
                    <span className="text-sm text-gray-500">
                      {task.client_email || "No Email"}
                    </span>
                  </div>
                </div>
              </td>

              {/* Package Name */}
              <td className="py-4 px-4 text-center">{task.package_name}</td>

              {/* Earnings (Task Amount) */}
              <td className="py-4 px-4 text-center">${task.task_amount}</td>

              {/* Assign Date */}
              <td className="py-4 px-4 text-center">
                {new Date(task.assign_date).toLocaleDateString()}
              </td>

              {/* Status */}
              <td className="py-4 px-4 text-center">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.task_status === "completed" &&
                      "bg-[#ECEFF3] text-black"
                    } ${
                      task.task_status === "in progress" &&
                      "bg-[#F5F1FF] text-[#5B21B6]"
                    } ${
                      task.task_status === "pending" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    }`}
                  >
                    {task.task_status}
                  </span>
                </div>
              </td>

              {/* Actions */}
              <td className="py-4 px-4 text-center">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleViewDetails(task)}
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
