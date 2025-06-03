"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function OrderDetailsPage() {
  const router = useRouter();
  const { orderId } = useParams();

  return (
    <div className="max-w-[1500px] mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 rounded bg-gray-200 text-gray-700"
      >
        &larr; Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Order Detail - {orderId}</h1>
      <div className="bg-white p-6 rounded shadow">
        <p>Order details for order <strong>{orderId}</strong> will be shown here.</p>
      </div>
    </div>
  );
}