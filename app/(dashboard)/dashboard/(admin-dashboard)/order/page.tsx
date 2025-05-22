"use client";

import React, { useState } from "react";
import { OrderStat, OrderStateCard } from "./_components/OrderStatCard";
import { Order, OrderTable } from "./_components/OrderTable";
import { Pagination } from "../_components/Pagination";
import { AssignOrderModal } from "./_components/AssignOrderModal";
import CustomSelect from "../../_components/custom-select";

// orderstates
const orderStats: OrderStat[] = [
  {
    title: "Total Orders",
    count: 245,
  },
  {
    title: "Pending Assignment",
    count: 245,
  },
  {
    title: "In Progress",
    count: 245,
  },
  {
    title: "Completed",
    count: 245,
  },
];

const baseAssignedAvatars = [
  "https://img.freepik.com/free-photo/man-wearing-round-eyeglasses-casual-t-shirt_273609-19641.jpg?w=740",
  "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=740",
  "https://img.freepik.com/premium-photo/man-wearing-headset-with-blue-background_758367-169302.jpg?w=740",
];

// fake table data
const fakeOrders: Order[] = [
  {
    orderId: "#ORD-2024001",
    clientName: "McDonald's",
    clientEmail: "jennings@example.com",
    packageName: "Social Media Post",
    packageNote: "With 3 Add Ons",
    amount: "$245.00",
    orderDate: "Feb 18, 2024",
    status: "Pending Assignment",
    assignedTo: [],
  },
  {
    orderId: "#ORD-2024002",
    clientName: "McDonald's",
    clientEmail: "weaver@example.com",
    packageName: "Email Design",
    amount: "$99.00",
    orderDate: "Feb 17, 2024",
    status: "Pending Assignment",
    assignedTo: [],
  },
  {
    orderId: "#ORD-2024003",
    clientName: "Mitsubishi",
    clientEmail: "holt@example.com",
    packageName: "Short-Form Videos",
    amount: "$99.00",
    orderDate: "Feb 16, 2024",
    status: "In Progress",
    assignedTo: baseAssignedAvatars,
  },
  // 🔽 Add 100 more fake orders for pagination
  ...Array.from({ length: 100 }, (_, i) => ({
    orderId: `#ORD-2024${(i + 4).toString().padStart(3, "0")}`,
    clientName: `Client ${i + 4}`,
    clientEmail: `client${i + 4}@example.com`,
    packageName: ["Website Design", "Logo Pack", "Brand Strategy"][i % 3],
    packageNote: i % 2 === 0 ? "Priority Project" : undefined,
    amount: `$${(Math.random() * 500 + 50).toFixed(2)}`,
    orderDate: `Feb ${Math.floor(Math.random() * 28) + 1}, 2024`,
    status: ["Pending Assignment", "In Progress", "Completed"][i % 3] as
      | "Pending Assignment"
      | "In Progress"
      | "Completed",
    assignedTo: i % 3 === 0 ? baseAssignedAvatars : [],
  })),
];


const page = () => {
 
  //   for modal
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAssignClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    setModalOpen(true);
  };

  const [period, setPeriod] = useState("week");
  const [orderStatus, setOrderStatus] = useState("all");

  return (
    <div className="max-w-[1500px] mx-auto p-6">
      <OrderStateCard orderslate={orderStats} />

      <div className="rounded-xl  p-4 shadow-sm bg-white my-5">
   

        {/* table data */}
        <OrderTable
          orders={fakeOrders}
          onAssignClick={handleAssignClick}
          period={period}
          setPeriod={setPeriod}
          orderStatus={orderStatus}
          setOrderStatus={setOrderStatus}
        ></OrderTable>
      </div>

      

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

export default page;
