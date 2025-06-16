import React from "react";

interface SupportIconProps {
  className?: string;
}

const SupportIcon: React.FC<SupportIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M12.75 14.3226H9.75L6.41249 16.5425C5.91749 16.8725 5.25 16.5201 5.25 15.9201V14.3226C3 14.3226 1.5 12.8226 1.5 10.5726V6.07251C1.5 3.82251 3 2.32251 5.25 2.32251H12.75C15 2.32251 16.5 3.82251 16.5 6.07251V10.5726C16.5 12.8226 15 14.3226 12.75 14.3226Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99889 9.02002V8.86255C8.99889 8.35255 9.31391 8.08254 9.62891 7.86504C9.93641 7.65504 10.2439 7.38505 10.2439 6.89005C10.2439 6.20005 9.68889 5.64502 8.99889 5.64502C8.30889 5.64502 7.75391 6.20005 7.75391 6.89005"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99662 10.8125H9.00337"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SupportIcon;
