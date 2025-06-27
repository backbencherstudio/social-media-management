import React from "react";

interface DeleteIconProps {
  className?: string;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      className={className}
    >
      <path
        d="M17.9399 5.48405C15.1649 5.20905 12.3733 5.06738 9.58994 5.06738C7.93994 5.06738 6.28994 5.15072 4.63994 5.31738L2.93994 5.48405"
        stroke="#F90004"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.52319 4.64199L7.70653 3.55033C7.83986 2.75866 7.93986 2.16699 9.34819 2.16699H11.5315C12.9399 2.16699 13.0482 2.79199 13.1732 3.55866L13.3565 4.64199"
        stroke="#F90004"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1481 8.11621L15.6064 16.5079C15.5148 17.8162 15.4398 18.8329 13.1148 18.8329H7.76478C5.43978 18.8329 5.36478 17.8162 5.27311 16.5079L4.73145 8.11621"
        stroke="#F90004"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04834 14.25H11.8233"
        stroke="#F90004"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.35669 10.917H12.5234"
        stroke="#F90004"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
