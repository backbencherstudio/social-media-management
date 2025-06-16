import React from "react";

interface TaskManagementIconProps {
  className?: string;
}

const TaskManagementIcon: React.FC<TaskManagementIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M9.27734 7.16016H13.2148"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.78516 7.16016L5.34766 7.72266L7.03516 6.03516"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.27734 12.4102H13.2148"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.78516 12.4102L5.34766 12.9727L7.03516 11.2852"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 17H11.25C15 17 16.5 15.5 16.5 11.75V7.25C16.5 3.5 15 2 11.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 15.5 3 17 6.75 17Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TaskManagementIcon;
