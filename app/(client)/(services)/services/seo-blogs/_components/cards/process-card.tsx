import React from 'react'

export default function ProcessCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 relative flex flex-col items-center text-center">
      {/* Step indicator */}
      <div className="absolute top-5 right-0">
        <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-l-lg">
          Step 1
        </span>
      </div>
      
      {/* Icon */}
      <div className="mt-4 mb-5">
        <div className="bg-gray-100 p-3 rounded-lg inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="14" height="14" rx="2" ry="2"></rect>
            <rect x="8" y="8" width="14" height="14" rx="2" ry="2"></rect>
          </svg>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Onboarding
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm px-4">
        Complete a questionnaire to guide our content writing & keyword research
      </p>
    </div>
  )
}
