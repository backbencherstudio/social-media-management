"use client";

import React, { useState } from "react";
import { OrderStat, OrderStateCard } from "./_components/OrderStatCard";
import { Order, OrderTable } from "./_components/OrderTable";
import { AssignOrderModal } from "./_components/AssignOrderModal";
import {
  useAssignOrderMutation,
  useGetAllOrdersQuery,
} from "@/src/redux/features/admin/order/orderApi";
import { toast } from "sonner";

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

const page = () => {
  const { data: orders } = useGetAllOrdersQuery(undefined);
  console.log(orders);
  //   for modal
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAssignClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    setModalOpen(true);
  };

  const [period, setPeriod] = useState("week");
  const [orderStatus, setOrderStatus] = useState("all");

  const [assignOrder, { isLoading }] = useAssignOrderMutation(undefined);

  const handleAssign = async (
    reseller: string,
    role: string,
    amount: string,
    notes: string,
    postType: string,
    postCount: string
  ) => {
    // Map incoming data to the target format
    const mappedData = {
      res_id: reseller, // map reseller to res_id
      roleId: role, // map role to roleId
      ammount: parseInt(amount, 10), // Convert amount to integer
      note: notes, // map notes to note
      post_type: postType, // map post type to post_type
      post_count: parseInt(postCount, 10), // Convert post count to integer
    };

    // Log the mapped data
    console.log("Assigning to:", mappedData);
    try {
      const response = await assignOrder({
        id: selectedOrderId,
        data: mappedData,
      }).unwrap();
      toast.success("Order assigned successfully");
      console.log(response);
    } catch (error) {
      toast.error("Failed to assign order");
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto p-2 md:p-6 ">
      <OrderStateCard orderslate={orderStats} />

      <div className="rounded-xl  p-4 shadow-sm bg-white my-5">
        {/* table data */}
        <OrderTable
          orders={orders || []}
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
          onAssign={handleAssign}
        />
      )}
    </div>
  );
};

export default page;
