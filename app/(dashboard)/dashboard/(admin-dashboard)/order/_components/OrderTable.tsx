"use cient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { EyeIcon, UserRoundPlus, Users2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "../../_components/Pagination";
import CustomSelect from "../../../_components/custom-select";
import { useRouter } from "next/navigation";

export type Order = {
  orderId: string;
  clientName: string;
  clientEmail: string;
  packageName: string;
  packageNote?: string;
  amount: string;
  orderDate: string;
  status: "Pending Assignment" | "In Progress" | "Completed";
  assignedTo: string[];
};

interface OrderTableProps {
  orders: Order[];
  period: string;
  setPeriod: (value: string) => void;
  orderStatus: string;
  setOrderStatus: (value: string) => void;
  onAssignClick: (orderId: string) => void;
}

// orderStatus, setOrderStatus
// period, setPeriod

export function OrderTable({
  orders,
  onAssignClick,
  period,
  setPeriod,
  orderStatus,
  setOrderStatus,
}: OrderTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const paginationOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between mb-4">
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
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-gray-300 bg-gray-50 text-sm text-[#44444A]">
            <TableHead>Order ID</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Package</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {/* table body */}
        <TableBody>
          {paginationOrders.map((order, i) => (
            <TableRow className="border-b border-gray-100" key={i}>
              <TableCell className="text-sm text-[#1D1F2C] font-medium">
                {order.orderId}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-[#1D1F2C] font-medium">
                    {order.clientName}
                  </span>
                  <span className="text-sm text-muted-foreground text-[#4A4C56]">
                    {order.clientEmail}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-medium text-[#1D1F2C]">
                    {order.packageName}
                  </p>
                  {order.packageNote && (
                    <p className="text-sm text-muted-foreground text-[#4A4C56]">
                      {order.packageNote}
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {order.amount}
              </TableCell>
              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {order.orderDate}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    order.status === "Pending Assignment"
                      ? "text-orange-500 border-orange-300 bg-orange-50"
                      : order.status === "In Progress"
                      ? "text-blue-500 border-blue-300 bg-blue-50"
                      : "text-green-500 border-green-300 bg-green-50"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  {/* View Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-100 hover:bg-gray-800 cursor-pointer">
                    <button
                      onClick={() =>
                        router.push(
                          `/dashboard/order/${encodeURIComponent(
                            order.orderId
                          )}`
                        )
                      }
                      className="text-blue-500"
                    >
                      {/* Eye icon here */}
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Assigned Avatars */}
                  <div className="flex">
                    {" "}
                    {order.assignedTo.length > 0 &&
                      order.assignedTo.map((url, idx) => (
                        <Image
                          key={idx}
                          src={url}
                          alt={`Avatar ${idx}`}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-cover rounded-[10px] -mr-4 border border-2 border-white"
                        />
                      ))}
                    {/* Add User Button */}
                    <button
                      onClick={() => onAssignClick(order.orderId)}
                      className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#F3F3FF] text-indigo-600 hover:bg-indigo-100 cursor-pointer border border-4 border-white"
                    >
                      <UserRoundPlus className="w-6 h-6 " />
                    </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex items-center justify-between flex-wrap ">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, orders.length)} of{" "}
            {orders.length} entries
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
