import React from "react";

const OrderTable = () => {
  // Fake order data
  const orders = [
    {
      orderId: "#ORD-2024001",
      clientName: "McDonald's",
      clientEmail: "jennings@example.com",
      packageName: "Social Media Post",
      packageDetails: "With 3 Add Ons",
      amount: 245.00,
      orderDate: "Feb 18, 2024",
      status: "Pending Assignment",
    },
    {
      orderId: "#ORD-2024002",
      clientName: "McDonald's",
      clientEmail: "weaver@example.com",
      packageName: "Email Design",
      packageDetails: "-",
      amount: 99.00,
      orderDate: "Feb 17, 2024",
      status: "Pending Assignment",
    },
    {
      orderId: "#ORD-2024003",
      clientName: "eBay",
      clientEmail: "simmons@example.com",
      packageName: "SEO Backlinks",
      packageDetails: "With 1 Add On",
      amount: 120.00,
      orderDate: "Feb 17, 2024",
      status: "Pending Assignment",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">New Order</h2>
        <button className="text-blue-500 hover:text-blue-700">View All</button>
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
            <tr key={index} className="border-b text-sm">
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
              <td className="px-4 py-2 text-orange-500">{order.status}</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <i className="fas fa-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
