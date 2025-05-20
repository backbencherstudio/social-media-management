import React from "react";

interface AnalyticsIconProps {
  className?: string;
}

const AnalyticsIcon: React.FC<AnalyticsIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      className={className}
    >
      <path
        d="M5.82617 13.6126V12.0601"
        stroke="#070707"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M9.66602 13.6126V10.5076"
        stroke="#070707"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M13.5059 13.6125V8.94751"
        stroke="#070707"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M13.5062 4.3877L13.1612 4.7927C11.2487 7.0277 8.68367 8.6102 5.82617 9.3227"
        stroke="#070707"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M11.3086 4.3877H13.5061V6.5777"
        stroke="#070707"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.41602 16.5H11.916C15.666 16.5 17.166 15 17.166 11.25V6.75C17.166 3 15.666 1.5 11.916 1.5H7.41602C3.66602 1.5 2.16602 3 2.16602 6.75V11.25C2.16602 15 3.66602 16.5 7.41602 16.5Z"
        stroke="#070707"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AnalyticsIcon;
