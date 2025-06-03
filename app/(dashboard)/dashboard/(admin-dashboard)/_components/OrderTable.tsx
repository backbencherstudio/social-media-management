"use cient";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, EyeIcon, User, UserRoundPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AssignOrderModal } from "../order/_components/AssignOrderModal";

const OrderTable = () => {
  // Fake order data
  const orders = [
    {
      orderId: "#ORD-2024001",
      clientName: "McDonald's",
      clientEmail: "jennings@example.com",
      packageName: "Social Media Post",
      packageDetails: "With 3 Add Ons",
      amount: 245.0,
      orderDate: "Feb 18, 2024",
      status: "Pending Assignment",
    },
    {
      orderId: "#ORD-2024002",
      clientName: "McDonald's",
      clientEmail: "weaver@example.com",
      packageName: "Email Design",
      packageDetails: "-",
      amount: 99.0,
      orderDate: "Feb 17, 2024",
      status: "In Progress",
    },
    {
      orderId: "#ORD-2024003",
      clientName: "eBay",
      clientEmail: "simmons@example.com",
      packageName: "SEO Backlinks",
      packageDetails: "With 1 Add On",
      amount: 120.0,
      orderDate: "Feb 17, 2024",
      status: "Completed",
    },
  ];

  //   export type Order = {
  //   orderId: string;
  //   clientName: string;
  //   clientEmail: string;
  //   packageName: string;
  //   packageNote?: string;
  //   amount: string;
  //   orderDate: string;
  //   status: "Pending Assignment" | "In Progress" | "Completed";
  //   assignedTo: string[];
  // };

  const router = useRouter();

  // view all orders handler
  const handleViewAll = () => {
    // Logic to view all orders
    router.push("/dashboard/order");
  };

  //   for modal
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAssignClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    setModalOpen(true);
  };

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4 mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold ">New Order</h2>
        <Button
          onClick={handleViewAll}
          variant="outline"
          className="border-gray-200 text-gray-500 cursor-pointer hover:bg-gray-50 hover:text-gray-700 transition duration-200"
        >
          View All
        </Button>
      </div>

      <table className="min-w-full table-auto">
        
        <thead>
          <tr className="text-left bg-gray-100 text-sm font-medium text-gray-700">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Package</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b text-sm border-gray-200">
              <td className="px-4 py-2">{order.orderId}</td>
              <td className="px-4 py-2">
                {order.clientName}
                <br />
                <span className="text-gray-500">{order.clientEmail}</span>
              </td>
              <td className="px-4 py-2">
                {order.packageName}
                <br />
                <span className="text-gray-500">{order.packageDetails}</span>
              </td>
              <td className="px-4 py-2">${order.amount.toFixed(2)}</td>
              <td className="px-4 py-2">{order.orderDate}</td>
              <td className="py-4">
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
              </td>
              <td className="px-4 py-2">
                <div className="flex space-x-2">
                  {/* View Icon */}
                  <div
                    onClick={() =>
                      router.push(
                        `/dashboard/order/${encodeURIComponent(order.orderId)}`
                      )
                    }
                    className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-100 hover:bg-gray-300 cursor-pointer"
                  >
                    <button className="text-blue-500">
                      {/* Eye icon here */}
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Add User Button */}
                  <button
                    onClick={() => handleAssignClick(order.orderId)}
                    className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#F3F3FF] text-indigo-600 hover:bg-indigo-100 cursor-pointer border border-4 border-white"
                  >
                    <UserRoundPlus className="w-6 h-6 " />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* for modal */}
      {selectedOrderId && (
        <AssignOrderModal
          orderId={selectedOrderId}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onAssign={(reseller, role, notes) => {
            console.log("Assigning to:", reseller, role, notes);
          }}
        />
      )}
    </div>
  );
};

export default OrderTable;
