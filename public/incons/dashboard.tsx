import React from "react";

interface DashboardIconProps {
  className?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M12.75 8H14.25C15.75 8 16.5 7.25 16.5 5.75V4.25C16.5 2.75 15.75 2 14.25 2H12.75C11.25 2 10.5 2.75 10.5 4.25V5.75C10.5 7.25 11.25 8 12.75 8Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 17H5.25C6.75 17 7.5 16.25 7.5 14.75V13.25C7.5 11.75 6.75 11 5.25 11H3.75C2.25 11 1.5 11.75 1.5 13.25V14.75C1.5 16.25 2.25 17 3.75 17Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 8C6.15685 8 7.5 6.65685 7.5 5C7.5 3.34315 6.15685 2 4.5 2C2.84315 2 1.5 3.34315 1.5 5C1.5 6.65685 2.84315 8 4.5 8Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 17C15.1569 17 16.5 15.6569 16.5 14C16.5 12.3431 15.1569 11 13.5 11C11.8431 11 10.5 12.3431 10.5 14C10.5 15.6569 11.8431 17 13.5 17Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
