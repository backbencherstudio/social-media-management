import React from "react";

interface WriteIconProps {
  className?: string;
}

const WriteIcon: React.FC<WriteIconProps> = ({ className = "" }) => {
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
        d="M11.4926 3.50002L4.65092 10.7417C4.39258 11.0167 4.14258 11.5584 4.09258 11.9334L3.78425 14.6333C3.67592 15.6083 4.37592 16.275 5.34258 16.1084L8.02592 15.65C8.40092 15.5834 8.92592 15.3084 9.18425 15.025L16.0259 7.78335C17.2093 6.53335 17.7426 5.10835 15.9009 3.36668C14.0676 1.64168 12.6759 2.25002 11.4926 3.50002Z"
        stroke="#4A4C56"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3489 4.70801C10.7072 7.00801 12.5739 8.76634 14.8905 8.99967"
        stroke="#4A4C56"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.93994 18.833H17.9399"
        stroke="#4A4C56"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WriteIcon;
