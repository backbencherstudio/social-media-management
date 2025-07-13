import React from "react";

export default function SeoCard({content}: any) {
  return (
    <div className="max-w-lg mx-auto bg-white border border-[#E9E9EA] rounded-lg py-6 px-4 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-5">
        <div className="bg-gray-100 p-3 rounded-lg inline-block">
        {content.logo}
        </div>
      </div>
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
     {content.title}
      </h3>

      {/* Description */}
      <p className="text-[#4A4C56] text-sm">
       {content.info}
      </p>
    </div>
  );
}
