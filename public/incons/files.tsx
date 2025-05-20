import React from "react";

interface FilesIconProps {
  className?: string;
}

const FilesIcon: React.FC<FilesIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M12.4993 17.8333L14.6137 15.719C15.6551 14.6776 17.3436 14.6776 18.385 15.719L20.4993 17.8333M16.4993 15.1667V21.8333M29.8327 13.8333V23.1667C29.8327 26.1122 27.4449 28.5 24.4993 28.5H8.49935C5.55383 28.5 3.16602 26.1122 3.16602 23.1667V9.83333C3.16602 6.88781 5.55383 4.5 8.49935 4.5H12.0549C13.2089 4.5 14.3317 4.87428 15.2549 5.56667L17.7438 7.43333C18.667 8.12572 19.7898 8.5 20.9438 8.5H24.4993C27.4449 8.5 29.8327 10.8878 29.8327 13.8333Z"
        stroke="#777980"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default FilesIcon;
