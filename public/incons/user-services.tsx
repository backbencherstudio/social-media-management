import React from "react";

interface UserServicesIconProps {
  className?: string;
}

const UserServicesIcon: React.FC<UserServicesIconProps> = ({
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
        d="M16.5 8.825V5.675C16.5 3.05 15.45 2 12.825 2H9.675C7.05 2 6 3.05 6 5.675V6.5H8.325C10.95 6.5 12 7.55 12 10.175V12.5H12.825C15.45 12.5 16.5 11.45 16.5 8.825Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.325V10.175C12 7.55 10.95 6.5 8.325 6.5H5.175C2.55 6.5 1.5 7.55 1.5 10.175V13.325C1.5 15.95 2.55 17 5.175 17H8.325C10.95 17 12 15.95 12 13.325Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.56055 11.7496L6.02305 13.2121L8.94055 10.2871"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserServicesIcon;
