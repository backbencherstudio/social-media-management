"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

import { Pagination } from "../../_components/Pagination";
import CustomSelect from "../../../_components/custom-select";

export type Task = {
  task_id: string;
  role: string;
  assignees:{
    full_name: string;
  }[];
  avatar: string;
  due_date: string;
  task_status:
    | "Pending"
    | "In_progress"
    | "completed"
    | "In Review"
    | "On Hold"
    | "Cancel";
};

interface TaskTableProps {
  tasks: Task[];
  // onAssignClick: (TaskId: string) => void;
  period: string;
  setPeriod: (value: string) => void;
  orderStatus: string;
  setOrderStatus: (value: string) => void;
}

export function TaskTable({
  tasks,
  period,
  setPeriod,
  orderStatus,
  setOrderStatus,
}: TaskTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(tasks?.length / itemsPerPage);
  const paginatedOrders = tasks?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // console.log(tasks)
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold ">All Order</h2>

        <div className="flex flex-wrap items-center justify-center gap-4 ">
          <CustomSelect
            value={period}
            onChange={setPeriod}
            options={[
              { label: "This Week", value: "week" },
              { label: "This Month", value: "month" },
              { label: "This Year", value: "year" },
            ]}
          />
          <CustomSelect
            value={orderStatus}
            onChange={setOrderStatus}
            options={[
              { label: "All", value: "all" },
              { label: "Pending", value: "pending" },
              { label: "Completed", value: "completed" },
            ]}
          />
        </div>

        {/* table */}
      </div>

      {/* table */}
      <Table className="mt-6">
        <TableHeader>
          <TableRow className="border-gray-300 bg-gray-50 text-sm text-[#44444A]">
            <TableHead>Task ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {/* table body */}
        <TableBody>
          {tasks?.map((task, i) => (
            <TableRow className="border-b border-gray-100" key={i}>
              <TableCell className="text-sm text-[#1D1F2C] font-medium">
                #{task?.task_id}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className=" text-[#1D1F2C] font-medium">
                    {task.role}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-medium text-[#1D1F2C]">
                    {task.assignees[0].full_name}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {task.due_date}
              </TableCell>

              <TableCell>
                <Badge
                  variant="outline"
                  className={`rounded-full ${
                    task.task_status === "Pending"
                      ? "text-orange-500 border-orange-300 bg-orange-50"
                      : task.task_status === "In_progress"
                      ? "text-blue-500 border-blue-300 bg-blue-50"
                      : "text-green-500 border-green-300 bg-green-50"
                  }`}
                >
                  {task.task_status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  {/* View Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <EyeIcon className="w-5 h-5 text-gray-600" />
                  </div>

                  {/* Assigned Avatars */}
                  <div className="flex">
                    {/* Add User Button */}
                    {/* <button onClick={()=> onAssignClick(task.taskId)} className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#F3F3FF] text-indigo-600 hover:bg-indigo-100 cursor-pointer border border-4 border-white">
                      <UserRoundPlus className="w-6 h-6 " />
                    </button> */}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* pagiantion */}
      <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, tasks?.length)} of{" "}
            {tasks?.length} entries
          </label>
          <select
            id="itemsPerPage"
            className="border border-gray-200 rounded-md px-3 py-1.5 text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>Show 5</option>
            <option value={8}>Show 8</option>
            <option value={10}>Show 10</option>
            <option value={20}>Show 20</option>
          </select>
        </div>
      </div>
    </>
  );
}
