import React from "react";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Notification() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>

        <div className="space-y-4">
          {/* Notification Item */}
          <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <FiUser className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-gray-900">John Doe</h3>
              </div>
              <p className="text-gray-600">
                Order Completed! Your social media management order is now
                complete. Check your dashboard for details.
              </p>
              <span className="text-sm text-gray-500">1 hr ago</span>
            </div>
          </div>
          {/* Notification Item */}
          <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <FiUser className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-gray-900">John Doe</h3>
              </div>
              <p className="text-gray-600">
                Order Completed! Your social media management order is now
                complete. Check your dashboard for details.
              </p>
              <span className="text-sm text-gray-500">1 hr ago</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-1 py-2 px-4 rounded-full">
            Show More <MdKeyboardArrowDown className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
