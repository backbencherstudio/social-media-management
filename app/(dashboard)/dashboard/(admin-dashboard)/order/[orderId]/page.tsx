"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import OrderDetails from "../../../_components/order-details/OrderDetails";
import { useGetOrderDetailQuery } from "@/src/redux/features/admin/order/orderApi";

const fakeOrder = {
  id: "ORD_uga3iixnxydloih9awp71em4",
  order_status: "progress",
  subscription_id: "cmb1t2agn000rre4kmue2vrl3",
  payment_status: "paid",
  ammount: 399,
  pakage_name: "Social Media Posts",
  user_id: "cmb1qxtzc0001ree0hcyoc3a8",
  user_email: "yoyebe7706@pricegh.com",
  user_name: "Joy",
  subscription: {
    service_id: "cmb1rmy9q0075reeozko7zwtd",
    service_tier_id: "cmb1rmyay007mreeo3d7shmti",
    start_at: "2025-05-24T05:44:57.717Z",
    end_at: "2025-06-24T05:44:57.717Z",
  },
};

export default function OrderDetailsPage() {
  const router = useRouter();
  const { orderId } = useParams();

  const { data: order } = useGetOrderDetailQuery(orderId);
  console.log(order);

  return (
    <div className="max-w-[1500px] mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 rounded bg-gray-200 text-gray-700"
      >
        &larr; Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Order Detail -: {orderId}</h1>

      <OrderDetails order={order || fakeOrder}></OrderDetails>
    </div>
  );
}
