import React from "react";

export default function PaymentDetailsModalReseller({
  isModalOpen,
  paymentDetails,
  setIsModalOpen,
}) {

  return (
    <div>
      {isModalOpen && paymentDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6">
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
                  <p className="font-medium">{paymentDetails.reseller_id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{paymentDetails.started}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      paymentDetails.status === "For Review" &&
                      "bg-[#FEF3C7] text-[#984917]"
                    } ${
                      paymentDetails.status === "In Progress" &&
                      "bg-[#F5F1FF] text-[#5B21B6]"
                    } ${
                      paymentDetails.status === "Complete" &&
                      "bg-[#ECEFF3] text-black"
                    }`}
                  >
                    {paymentDetails.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium">{paymentDetails.total_earnings}</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-4 rounded-lg text-black space-y-2 mt-4">
                  <p>Task</p>
                  <p className="font-semibold text-xl">2 Task Completed</p>
                  <p>Period: Feb 1, 2024 - Feb 29, 2024</p>
                  <p>Next Payment: Mar 1, 2024</p>
                </div>
              </div>
              {/* <div>
                <div>
                  <div className="flex items-center gap-4 mt-6">
                    <button
                      onClick={() => {
                        // Handle invoice download
                        console.log("Downloading invoice...");
                      }}
                      className="flex-1 px-5 py-3 text-sm font-medium  rounded-lg border transition-colors"
                    >
                      Download Invoice
                    </button>
                    <button className="flex-1 px-4 py-3 rounded-lg bg-blue-700 flex items-center gap-3 text-white justify-center">
                      <CiCreditCard1 /> Release Payment
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
