import React from "react";

interface CompletedTasksIconProps {
  className?: string;
}

const CompletedTasksIcon: React.FC<CompletedTasksIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        d="M16.5 8.325V5.175C16.5 2.55 15.45 1.5 12.825 1.5H9.675C7.05 1.5 6 2.55 6 5.175V6H8.325C10.95 6 12 7.05 12 9.675V12H12.825C15.45 12 16.5 10.95 16.5 8.325Z"
        stroke="#FF5B1F"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.825V9.675C12 7.05 10.95 6 8.325 6H5.175C2.55 6 1.5 7.05 1.5 9.675V12.825C1.5 15.45 2.55 16.5 5.175 16.5H8.325C10.95 16.5 12 15.45 12 12.825Z"
        stroke="#FF5B1F"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.56055 11.2501L6.02305 12.7126L8.94055 9.7876"
        stroke="#FF5B1F"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CompletedTasksIcon;
