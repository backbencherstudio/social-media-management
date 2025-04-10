import React from "react";

interface AnalysisIconProps {
  className?: string;
}

const AnalysisIcon: React.FC<AnalysisIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M17.875 10.2917L13.325 14.8417L11.5917 12.2417L8.125 15.7083"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.709 10.2917H17.8757V12.4583"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.74935 23.8333H16.2493C21.666 23.8333 23.8327 21.6667 23.8327 16.25V9.74999C23.8327 4.33332 21.666 2.16666 16.2493 2.16666H9.74935C4.33268 2.16666 2.16602 4.33332 2.16602 9.74999V16.25C2.16602 21.6667 4.33268 23.8333 9.74935 23.8333Z"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

export default AnalysisIcon;
