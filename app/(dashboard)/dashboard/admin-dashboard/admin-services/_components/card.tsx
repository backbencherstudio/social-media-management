"use client";
import {
  useGetActiveServicesQuery,
  useGetAllServicesQuery,
} from "@/src/redux/features/admin/services";
import React from "react";

export default function Card() {
  const { data } = useGetActiveServicesQuery();
  const { data: allServices } = useGetAllServicesQuery();

  // Calculate total sales from allServices
  const totalSales = allServices?.reduce((total, service) => {
    const saleAmount = service.sale || 0;
    return total + saleAmount;
  }, 0);

  const totalPrice = allServices?.reduce((sum, item) => {
    const numericPrice = parseFloat(
      item.price.replace("$", "").replace("/mo", "")
    );
    return sum + numericPrice;
  }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="">Active Services</h2>
        <p className="text-3xl font-bold">{data?.length || 0}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="">Total Sales</h2>
        <p className="text-3xl font-bold">{totalSales || 0}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="">Revenue</h2>
        <p className="text-3xl font-bold">{totalPrice || 0}</p>
      </div>
    </div>
  );
}
