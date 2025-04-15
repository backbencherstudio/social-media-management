import React from "react";

export default function ParagraphText({
  paraText,
  className = "",
}: {
  paraText: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <p className={`text-[#1D1F2C] leading-[150%] tracking-[.16px] font-inter ${className}`}>{paraText}</p>
    </div>
  );
}
