// OrderStatCard.tsx (Optional reusable card component if you want more control)
import React from "react";

export type OrderStat = {
  title: string;
  count: number;
};

interface OrderSlateProps {
  orderslate: OrderStat[];
}

export const OrderStateCard= ({ orderslate }: OrderSlateProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {orderslate.map((order, index) => (
        <div
          className="p-6 rounded-lg shadow-md bg-white space-y-2 "
          key={index}
        >
          <p className="text-gray-500 font-medium">{order.title}</p>
          <h3 className="text-2xl font-bold">{order.count}</h3>
        </div>
      ))}
    </div>
  );
};
