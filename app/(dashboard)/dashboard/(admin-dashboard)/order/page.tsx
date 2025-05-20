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

// handle add user

const page = () => {
  // for paginaiton
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(fakeOrders.length / itemsPerPage);
  const paginatedOrders = fakeOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        </div>

        {/* table data */}
        <OrderTable
          orders={paginatedOrders}
          onAssignClick={handleAssignClick}
        ></OrderTable>
      </div>


      {/* pagination controle div */}

      <div className="mt-6 flex items-center justify-between">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, fakeOrders.length)} of{" "}
            {fakeOrders.length} entries
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
