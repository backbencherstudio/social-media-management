import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

export default function EarningsModal({isModalOpen, setIsModalOpen, selectedService}: any) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
    <DialogContent className="bg-white max-w-4xl">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-900">
          Earnings Details #EARN-2024001
        </DialogTitle>
      </DialogHeader>

      {selectedService && (
        <div className="space-y-6">
          {/* Order Info */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order ID</p>
              <p className="font-medium text-gray-900">62A2AA44-2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Service Name</p>
              <p className="font-medium text-gray-900">
                {selectedService.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${
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
              <p className="text-sm text-gray-500 mb-1">Start Date</p>
              <p className="font-medium text-gray-900">
                {selectedService.started}
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Project Details</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Project requirements and specific details will be displayed
                here based on the service ID. This includes project scope,
                deliverables, and any special requirements.
              </p>
            </div>
          </div>

        </div>
      )}
    </DialogContent>
  </Dialog>
  )
}
