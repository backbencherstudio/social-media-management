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
import { EyeIcon, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "../../_components/Pagination";
import CustomSelect from "../../../_components/custom-select";
import { useRouter } from "next/navigation";

const order = {
  id: "ORD_bh759n51x748h3asdcjbut9b",
  order_status: "progress",
  subscription_id: null,
  ammount: 149,
  pakage_name: "Social Media Posts",
  user_email: "tqmhosain@gmail.com",
  user_name: null,
  user_id: "cmb4xs19l0004uoh41k0zeqjb",
  payment_status: "paid",
  subscription: null,
};

export type Order = {
  id: string;
  order_status: string;
  subscription_id: string;
  ammount: number;
  pakage_name: string;
  user_email: string;
  user_name: string;
  user_id: string;
  payment_status: string;
  subscription: {
    service_id: string;
    service_tier_id: string;
  } | null;
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

  const totalPages = Math.ceil(orders?.length / itemsPerPage);
  const paginationOrders = orders?.slice(
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
                {order.id}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-[#1D1F2C] font-medium">
                    {order.user_name}
                  </span>
                  <span className="text-sm text-muted-foreground text-[#4A4C56]">
                    {order.user_email}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-medium text-[#1D1F2C]">
                    {order.pakage_name}
                  </p>
                  {order.subscription?.service_id && (
                    <p className="text-sm text-muted-foreground text-[#4A4C56]">
                      {order.subscription?.service_id}
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {order.ammount}
              </TableCell>
              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {order.order_status}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`rounded-full ${
                    order.order_status === "Pending Assignment"
                      ? "text-orange-500 border-orange-300 bg-orange-50"
                      : order.order_status === "In Progress"
                      ? "text-blue-500 border-blue-300 bg-blue-50"
                      : "text-green-500 border-green-300 bg-green-50"
                  }`}
                >
                  {order.order_status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  {/* View Icon */}
                  <div
                    onClick={() =>
                      router.push(
                        `/dashboard/order/${encodeURIComponent(order.id)}`
                      )
                    }
                    className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-100 hover:bg-gray-300 cursor-pointer"
                  >
                    <button className="text-blue-500">
                      {/* Eye icon here */}
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Assigned Avatars */}
                  <div className="flex">
                    {" "}
                    {order.subscription?.service_id && (
                      <Image
                        key={order.subscription.service_tier_id}
                        src={
                          // order.subscription.service_tier_id ||
                          "https://img.freepik.com/free-photo/man-wearing-round-eyeglasses-casual-t-shirt_273609-19641.jpg?w=740"
                        }
                        alt={`Avatar ${order.subscription.service_tier_id} `}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover rounded-[10px] -mr-4 border border-2 border-white"
                      />
                    )}
                    {/* Add User Button */}
                    <button
                      onClick={() => onAssignClick(order.id)}
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
