"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeIcon, PencilIcon } from "lucide-react";
import Image from "next/image";
import CustomSwitch from "../../_components/CustomSwitch";
import { useRouter } from "next/navigation";
import CustomSelect from "../../../_components/custom-select";
import { useState } from "react";
import { Pagination } from "../../_components/Pagination";
import { useUpdateResellerStatusMutation } from "@/src/redux/features/admin/reseller/resellerApi";

export type Reseller = {
  id: string;
  full_name: string;
  user_email: string;
  total_earnings: number;
  total_task: number;
  skills: string[];
  completeTask: number;
  user_type: string;
  status: "active" | "inactive";
};

interface ResellerTableProps {
  isLoading: boolean;
  isError: boolean;
  resellers: Reseller[];
  period: string;
  setPeriod: (value: string) => void;
  orderStatus: string;
  setOrderStatus: (value: string) => void;
}

// const fakeReseller = {
//   "id": "RES_n461l81lt1q8naigks2170vm",
//   "full_name": "The Topu",
//   "user_email": "rjtopu6645@gmail.com",
//   "total_earnings": 133,
//   "total_task": 3,
//   "skills": [
//     "Product Strategy",
//     "Agile",
//     "User Experience"
//   ],
//   "completeTask": 1,
//   "user_type": "reseller",
//   "status": "active"
// }
export function ResellerTable({
  isLoading,
  isError,
  resellers,
  period,
  setPeriod,
  orderStatus,
  setOrderStatus,
}: ResellerTableProps) {
  const router = useRouter();

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(resellers.length / itemsPerPage);
  const paginationResellersList = resellers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [
    updateResellerStatus,
    { isLoading: isUpdateLoading, isError: isUpdateError },
  ] = useUpdateResellerStatusMutation();

  const handleUpdateResellerStatus = async (id: string) => {
    try {
      await updateResellerStatus(id);
      console.log("Update id", id);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className=" overflow-hidden border border-gray-100 shadow-sm px-4">
      <div className="flex items-center justify-between p-2 md:p-5">
        <h2 className="text-xl font-semibold">Active Resellers</h2>

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
      </div>

      <Table>
        <TableHeader className="">
          <TableRow className="bg-gray-50 text-sm text-[#44444A] border-gray-200 ">
            <TableHead>Reseller</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Earning</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginationResellersList?.map((reseller) => (
            <TableRow key={reseller.id} className="hover:bg-gray-50">
              {/* Reseller Info */}
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Image
                    src={reseller?.avatar || "/images/avatar.png"}
                    alt={reseller.full_name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#1D1F2C]">
                      {reseller.full_name}
                    </span>
                    <span className="text-sm text-[#4A4C56]">
                      {reseller.user_email}
                    </span>
                  </div>
                </div>
              </TableCell>

              {/* Skills */}
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {reseller?.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2 py-1 rounded-full ${skillColor(
                        skill
                      )}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TableCell>

              {/* Task */}
              <TableCell className="text-sm text-[#4A4C56] font-medium">
                {reseller.total_task}
              </TableCell>

              {/* Earning */}
              <TableCell className="text-sm text-[#4A4C56] font-medium">
                {reseller.total_earnings}
              </TableCell>

              {/* Status */}
              <TableCell>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                    reseller.status === "active"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-500 bg-gray-100"
                  }`}
                >
                  {reseller.status}
                </span>
              </TableCell>

              {/* Actions */}
              <TableCell>
                <div className="flex items-center gap-4">
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      router.push(`/dashboard/reseller/active/${reseller.id}`)
                    }
                  >
                    <EyeIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  {/* <button
                    onClick={() =>
                      router.push(`/dashboard/reseller/${reseller.id}/edit`)
                    }
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
                  >
                    <PencilIcon className="w-4 h-4 text-gray-600" />
                  </button> */}
                  <CustomSwitch
                    disabled={isUpdateLoading}
                    checked={reseller.status === "active"}
                    onChange={() => {
                      handleUpdateResellerStatus(reseller.id);
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* pagination */}
      <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, resellers.length)} of{" "}
            {resellers.length} entries
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
    </div>
  );
}

// Optional: Simple color generator
function skillColor(skill: string) {
  const colors: { [key: string]: string } = {
    "Social Media": "bg-blue-100 text-blue-600",
    Content: "bg-pink-100 text-pink-600",
    SEO: "bg-indigo-100 text-indigo-600",
    Backlinks: "bg-purple-100 text-purple-600",
    Copywrite: "bg-gray-100 text-gray-600",
    Blog: "bg-zinc-100 text-zinc-600",
    Marketing: "bg-cyan-100 text-cyan-600",
    Ads: "bg-fuchsia-100 text-fuchsia-600",
  };
  return colors[skill] || "bg-gray-100 text-gray-600";
}
