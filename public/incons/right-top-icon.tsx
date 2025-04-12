import React from "react";

interface RightTopIconProps {
  className?: string;
}

const RightTopIcon: React.FC<RightTopIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <rect
        width="18"
        height="18"
        rx="9"
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 18 18)"
        fill="#070707"
      />
      <path
        d="M12.1756 10.0588L12.1756 5.81618M12.1756 5.81618L7.93291 5.81618M12.1756 5.81618L5.81159 12.1801"
        stroke="white"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightTopIcon;
