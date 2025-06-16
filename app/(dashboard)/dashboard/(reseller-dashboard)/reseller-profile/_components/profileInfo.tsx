import { Clock, LocateIcon } from "lucide-react";
import React from "react";
import { FiUser } from "react-icons/fi";

export default function ProfileInfo() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center sm:items-start md:flex-row gap-4 sm:gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <FiUser className="w-12 h-12 sm:w-14 sm:h-14 text-gray-400" />
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              John Doe
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Senior Digital Marketing Specialist
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <LocateIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  Member since 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
