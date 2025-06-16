import React from "react";

interface StoriesIconProps {
  className?: string;
}

const StoriesIcon: React.FC<StoriesIconProps> = ({ className }) => {
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
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M18.5 3V21M18.5 8L6.5 8M18.5 16L6.5 16M6.5 3V21M6.5 22H18.5C20.7091 22 22.5 20.2091 22.5 18V6C22.5 3.79086 20.7091 2 18.5 2H6.5C4.29086 2 2.5 3.79086 2.5 6V18C2.5 20.2091 4.29086 22 6.5 22Z"
          stroke="#04060F"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default StoriesIcon;
