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
  onAssignClick: (orderId: string) => void;
}

export function OrderTable({ orders, onAssignClick }: OrderTableProps) {
  return (
    <>
    
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
          {orders.map((order, i) => (
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
                  <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <EyeIcon className="w-5 h-5 text-gray-600" />
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
                    <button onClick={()=> onAssignClick(order.orderId)} className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#F3F3FF] text-indigo-600 hover:bg-indigo-100 cursor-pointer border border-4 border-white">
                      <UserRoundPlus className="w-6 h-6 " />
                    </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
