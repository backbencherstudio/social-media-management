import React from "react";

interface AddIconProps {
  className?: string;
}

const AddIcon: React.FC<AddIconProps> = ({ className }) => {
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
          d="M23.83 13C23.83 18.9831 18.9797 23.8334 12.9967 23.8334C7.01358 23.8334 2.16333 18.9831 2.16333 13C2.16333 7.01694 7.01358 2.16669 12.9967 2.16669C18.9797 2.16669 23.83 7.01694 23.83 13Z"
          fill="white"
        />
        <path
          d="M12.9967 8.66669V17.3334M17.33 13H8.66333M12.9967 23.8334C18.9797 23.8334 23.83 18.9831 23.83 13C23.83 7.01694 18.9797 2.16669 12.9967 2.16669C7.01358 2.16669 2.16333 7.01694 2.16333 13C2.16333 18.9831 7.01358 23.8334 12.9967 23.8334Z"
          stroke="#1D1D1F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default AddIcon;
