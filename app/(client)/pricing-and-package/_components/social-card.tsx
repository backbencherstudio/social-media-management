import React from "react";
interface SocialCardProps {
  icon: React.ReactNode;
  platform: string;
  count: number;
}

export default function SocialCard({ icon, platform, count }: SocialCardProps) {
  return (
    <div className="flex items-center text-start gap-3 bg-[#F7F7F9] py-3 px-5 rounded-xl w-[282px] hover:bg-[#F0F0F3] transition-colors cursor-pointer">
      <div className="">
        {icon}
      </div>
      <div>
        <p className="text-[#1D1F2C] font-medium text-base">{platform}</p>
        <p className="text-[#1D1D1F] text-sm">
          {count}/<span className="text-[#777980]">mo</span>
        </p>
      </div>
    </div>
  );
}
