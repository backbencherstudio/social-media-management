"use client";

import Link from "next/link";
import React from "react";
import DatePicker from "../../reseller-dashboard/_components/date-picker";
import { GrView } from "react-icons/gr";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useGetAllTasksQuery } from "@/src/redux/features/reseller/profile/profileApi";

export default function AllTask() {
  const id = "RES_n461l81lt1q8naigks2170vm";
  const { data: allTasks } = useGetAllTasksQuery(id);
  // console.log(allTasks);

  const tasks = allTasks?.data?.tasks || [];
  // console.log(tasks);

  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="flex gap-3">
          <h1 className="text-2xl font-bold text-gray-900">All Task</h1>

          <div className="text-sm text-black flex items-center justify-center px-4 py-1 rounded-full bg-[#EBFBF5] gap-1">
            <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">
              {allTasks?.data?.active_tasks}
            </span>
            &nbsp;Active
          </div>
        </div>
        <DatePicker />
      </div>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg">
              Client Name
            </th>
            <th className="py-3 px-4">Assign Date</th>
            <th className="py-3 px-4">Assigned by</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Deadline</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => {
            const dueDate = task.due_date
              ? new Date(task.due_date).toLocaleDateString()
              : "N/A"; // Format due_date
            const assignDate = new Date(task.Assign_Date).toLocaleDateString(); // Format Assign_Date

            return (
              <tr key={task.task_id}>
                {/* Client Name */}
                <td className="py-4 px-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h1 className="font-semibold text-gray-900">
                        {task.clint_name || "Unknown"}
                      </h1>
                      <span className="text-sm text-gray-500">
                        {task.clint_email}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Assign Date */}
                <td className="py-4 px-4 text-center">{assignDate}</td>

                {/* Assigned by */}
                <td className="py-4 px-4 text-center">{task.Assigned_by}</td>

                {/* Task Status */}
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.task_status === "For Review" &&
                        "bg-[#FEF3C7] text-[#984917]"
                      } ${
                        task.task_status === "In_progress" &&
                        "bg-[#F5F1FF] text-[#5B21B6]"
                      } ${
                        task.task_status === "Complete" &&
                        "bg-[#ECEFF3] text-black"
                      }`}
                    >
                      {task.task_status}
                      {/* Replace underscores with space */}
                    </span>
                  </div>
                </td>

                {/* Deadline */}
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    <span className="px-3 py-1 rounded-full font-medium">
                      {dueDate}
                    </span>
                  </div>
                </td>

                {/* Actions */}
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <Link href={`/dashboard/service/${task.task_id}`}>
                      <BsBoxArrowUpRight />
                    </Link>
                    <Link href={`/dashboard/service/${task.task_id}`}>
                      <GrView />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
