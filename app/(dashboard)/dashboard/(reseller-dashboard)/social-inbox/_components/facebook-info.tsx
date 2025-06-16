import React from 'react'
import { FaSearch, FaThumbsUp, FaComment, FaShare, FaEye } from 'react-icons/fa'

export default function FacebookInfo() {
  return (
    <div className="space-y-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
            {/* Search Input */}
            <div className="relative">
                <input 
                    type="text"
                    placeholder="Search in social inbox..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="mt-6">
                <div className="space-y-4">
                    {/* Post 1 */}
                    <div className="border-t border-gray-300 p-4">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="/avatar-1.jpg" 
                                    alt="Profile" 
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h3 className="font-medium">John Doe</h3>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                •••
                            </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Just launched our new social media campaign! Check out our latest products and services. #SocialMedia #Marketing
                        </p>
                    </div>

                    {/* Post 2 */}
                    <div className="border-t border-gray-300 p-4">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="/avatar-2.jpg" 
                                    alt="Profile" 
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h3 className="font-medium">Jane Smith</h3>
                                    <p className="text-sm text-gray-500">5 hours ago</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                •••
                            </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Excited to announce our upcoming webinar on social media strategy! Save your spot now. 🎯 #DigitalMarketing #Webinar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
