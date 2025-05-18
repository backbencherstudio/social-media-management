import React from "react";

export default function PaymentDetailsModalClient({
  isModalOpen,
  selectedService,
  setIsModalOpen,
}) {
  return (
    <div>
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Payment Details (client)
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Payment ID</p>
                  <p className="font-medium">{selectedService.orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{selectedService.started}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedService.status === "For Review" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    } ${
                      selectedService.status === "In Progress" &&
                      "bg-[#F5F1FF] text-[#5B21B6]"
                    } ${
                      selectedService.status === "Complete" &&
                      "bg-[#ECEFF3] text-black"
                    }`}
                  >
                    {selectedService.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium">{selectedService.amount}</p>
                </div>
              </div>
              <div>
                <p className="">Service Details</p>

                <div className="bg-gray-50 p-4 rounded-lg text-black space-y-2 mt-4">
                  <p className="font-semibold text-xl">
                    Social Media Management
                  </p>
                  <p>Premium Package</p>
                  <p>Period: Feb 1, 2024 - Feb 29, 2024</p>
                  <p>Next Payment: Mar 1, 2024</p>
                </div>
              </div>
              <div>
                <p className="">Payment Method</p>

                <div className="bg-gray-50 p-4 rounded-lg text-black space-y-2 mt-4">
                  <p className="font-semibold text-xl">Credit Card</p>
                  <p className="text-gray-500">**** **** **** 4242</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center gap-4 mt-6">
                    <button
                      onClick={() => {
                        // Handle invoice download
                        console.log("Downloading invoice...");
                      }}
                      className="px-5 py-3 text-sm font-medium  rounded-lg border transition-colors"
                    >
                      Download Invoice
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
