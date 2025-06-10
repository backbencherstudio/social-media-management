import React from "react";
import Image from "next/image";

interface ReviewCardProps {
  image: string;
  name: string;
  position: string;
  quote: string;
}

export default function ReviewCard({
  image,
  name,
  position,
  quote,
}: ReviewCardProps) {
  return (
    <div className="bg-[#F7F7F9] rounded-2xl p-5 hover:bg-[#F0F0F3] transition-colors">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <h4 className="text-[#1D1D1F] font-medium text-sm">{name}</h4>
            <p className="text-[#777980] text-xs">{position}</p>
          </div>
          <p className="text-[#1D1D1F] text-sm leading-[150%]">"{quote}"</p>
        </div>
      </div>
    </div>
  );
}
