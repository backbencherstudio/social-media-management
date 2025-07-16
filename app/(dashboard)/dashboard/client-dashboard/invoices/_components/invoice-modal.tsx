import React from "react";

export default function InvoiceModal({ isOpen, setIsOpen, service }: any) {
  if (!isOpen || !service) return null;

  console.log("Modal service", service);

  // Destructuring data from the service object
  const {
    id: invoiceId,
    created_at: date,
    order_status: status,
    ammount: amount,
    pakage_name,
    Order_Details,
  } = service;

  // Default service details, based on the provided service details in the structure
  const serviceDetails =
    Order_Details && Order_Details.length > 0
      ? `${Order_Details[0].service_name} - ${Order_Details[0].service_amount_name}`
      : "No service details available.";

  const formatDate = (dateStr: any) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Styles for invoice status
  const statusStyles: Record<"progress" | "active" | "pending", string> = {
    progress: "bg-yellow-100 text-yellow-700",
    active: "bg-green-100 text-green-700",
    pending: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="fixed inset-0 h-screen w-full bg-gray-900/40 flex items-center justify-center z-50">
      <div className="w-[665px] bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-9">
          <h2 className="text-xl font-semibold">Invoice Details {invoiceId}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-y-6 text-sm mb-6">
          <div className="space-y-1">
            <p className="text-gray-500">Invoice Date</p>
            <p className="font-medium">{formatDate(date)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Due Date</p>
            <p className="font-medium">TBD</p>{" "}
            {/* You can add due date if available */}
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Status</p>
            <span
              className={`inline-block px-3 py-0.5 text-xs rounded-full ${
                statusStyles[status as keyof typeof statusStyles] ||
                "bg-gray-100 text-gray-700"
              }`}
            >
              {status}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Amount</p>
            <p className="font-medium">${amount}</p>
          </div>
        </div>

        <div className="border-t-[2px] pt-4 border-gray-200 ">
          <p className="font-semibold mb-2.5">Service Details</p>
          <p className="text-sm text-gray-600">{serviceDetails}</p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
