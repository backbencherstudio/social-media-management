import React from "react";

interface DriverIconProps {
  className?: string;
}

const DriverIcon: React.FC<DriverIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M15.2403 7.50007H4.26782C3.15782 7.50007 2.25781 6.59258 2.25781 5.49008V3.51757C2.25781 2.40757 3.16532 1.50757 4.26782 1.50757H15.2403C16.3503 1.50757 17.2503 2.41507 17.2503 3.51757V5.49008C17.2503 6.59258 16.3428 7.50007 15.2403 7.50007Z"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2403 16.5001H4.26782C3.15782 16.5001 2.25781 15.5926 2.25781 14.4901V12.5176C2.25781 11.4076 3.16532 10.5076 4.26782 10.5076H15.2403C16.3503 10.5076 17.2503 11.4151 17.2503 12.5176V14.4901C17.2503 15.5926 16.3428 16.5001 15.2403 16.5001Z"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 3.75V5.25"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 3.75V5.25"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 12.75V14.25"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 12.75V14.25"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 4.5H14.25"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 13.5H14.25"
        stroke="#1B91FF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DriverIcon;
