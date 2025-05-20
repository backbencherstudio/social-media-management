import React from "react";

export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="">Active Services</h2>
        <p className="text-3xl font-bold">15</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="">Total Sales</h2>
        <p className="text-3xl font-bold">08</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h2 className="">Revenue</h2>
        <p className="text-3xl font-bold">32</p>
      </div>
    </div>
  );
}
