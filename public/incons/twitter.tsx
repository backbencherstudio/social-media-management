import React from "react";

interface TwitterIconProps {
  className?: string;
}

const TwitterIcon: React.FC<TwitterIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
    >
      <rect x="1.2" y="1.7" width="33.6" height="33.6" rx="6.8" fill="black" />
      <rect
        x="1.2"
        y="1.7"
        width="33.6"
        height="33.6"
        rx="6.8"
        stroke="white"
        strokeWidth="1.6"
      />
      <path
        d="M22.4636 11.2969H24.8386L19.6499 17.2271L25.7539 25.2969H20.9746L17.2312 20.4026L12.9479 25.2969H10.5715L16.1212 18.9538L10.2656 11.2969H15.1663L18.55 15.7704L22.4636 11.2969ZM21.63 23.8753H22.946L14.4513 12.6437H13.0391L21.63 23.8753Z"
        fill="white"
      />
    </svg>
  );
};

export default TwitterIcon;
