import React from "react";

interface LiveChatIconProps {
  className?: string;
}

const LiveChatIcon: React.FC<LiveChatIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M16.5 8V10.25C16.5 13.25 15 14.75 12 14.75H11.625C11.3925 14.75 11.1675 14.8625 11.025 15.05L9.9 16.55C9.405 17.21 8.595 17.21 8.1 16.55L6.975 15.05C6.855 14.885 6.5775 14.75 6.375 14.75H6C3 14.75 1.5 14 1.5 10.25V6.5C1.5 3.5 3 2 6 2H10.5"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.625 5.75C15.6605 5.75 16.5 4.91053 16.5 3.875C16.5 2.83947 15.6605 2 14.625 2C13.5895 2 12.75 2.83947 12.75 3.875C12.75 4.91053 13.5895 5.75 14.625 5.75Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9978 8.75H12.0046"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99588 8.75H9.00262"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99588 8.75H6.00262"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LiveChatIcon;
