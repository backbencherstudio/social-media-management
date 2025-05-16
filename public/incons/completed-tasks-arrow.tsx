import React from "react";

interface CompletedTasksArrowIconProps {
  className?: string;
}

const CompletedTasksArrowIcon: React.FC<CompletedTasksArrowIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M5.54688 3.83393L11.1203 9.40732M5.55525 8.43765L5.54756 3.83325L10.1506 3.84234"
        stroke="#00A86B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.39258 13.1667H12.2766"
        stroke="#00A86B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CompletedTasksArrowIcon;
