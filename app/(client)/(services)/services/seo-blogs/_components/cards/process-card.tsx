import React from 'react'

export default function ProcessCard({content}) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-5 relative flex flex-col items-center text-center">
      {/* Step indicator */}
      <div className="absolute top-5 right-0">
        <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-l-lg">
          Step {content?.id}
        </span>
      </div>
      
      {/* Icon */}
      <div className="mt-4 mb-5">
        <div className="bg-gray-100 p-3 rounded-lg inline-block">
          {content?.icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Onboarding
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm px-4">
      {content?.text}
      </p>
    </div>
  )
}
