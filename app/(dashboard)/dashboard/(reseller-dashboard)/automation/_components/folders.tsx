import React from "react";
import { FiEdit2 } from "react-icons/fi";

export default function Folders() {
  return (
    <div className="bg-white py-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <div>
        <h1 className="text-xl text-gray-900 px-4 mb-4">Folders</h1>
        <hr className="text-gray-200" />
        <div className="px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Folder 1 */}
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h1>Welcome Message</h1>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    Automated welcome response for new followers
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FiEdit2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="px-4 py-4 bg-gray-200 rounded-lg mt-6">Hi Sakib! Thanks for following us! We're excited to have
              you here...</p>
            </div>
            {/* Folder 2 */}
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h1>Welcome Message</h1>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    Automated welcome response for new followers
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FiEdit2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="px-4 py-4 bg-gray-200 rounded-lg mt-6">Hi Sakib! Thanks for following us! We're excited to have
              you here...</p>
            </div>
            {/* Folder 3 */}
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h1>Welcome Message</h1>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    Automated welcome response for new followers
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FiEdit2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="px-4 py-4 bg-gray-200 rounded-lg mt-6">Hi Sakib! Thanks for following us! We're excited to have
              you here...</p>
            </div>
            {/* Folder 4 */}
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h1>Welcome Message</h1>
                  <p className="text-sm font-medium text-gray-900 mt-2">
                    Automated welcome response for new followers
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FiEdit2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="px-4 py-4 bg-gray-200 rounded-lg mt-6">Hi Sakib! Thanks for following us! We're excited to have
              you here...</p>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
}
