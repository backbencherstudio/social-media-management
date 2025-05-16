import React from "react";

interface EarningsArrowIconProps {
  className?: string;
}

const EarningsArrowIcon: React.FC<EarningsArrowIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M5.21289 13.1661L10.7863 7.59268M5.22126 8.56235L5.21358 13.1667L9.81662 13.1577"
        stroke="#DC0002"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.05859 3.83325H11.9426"
        stroke="#DC0002"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EarningsArrowIcon;
