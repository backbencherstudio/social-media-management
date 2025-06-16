import React from "react";

interface ContentCalendarIconProps {
  className?: string;
}

const ContentCalendarIcon: React.FC<ContentCalendarIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={className}
    >
      <path
        d="M8.33398 2V5"
        stroke="#04060F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.334 2V5"
        stroke="#04060F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.334 3.5C19.664 3.68 21.334 4.95 21.334 9.65V15.83C21.334 19.95 20.334 22.01 15.334 22.01H9.33398C4.33398 22.01 3.33398 19.95 3.33398 15.83V9.65C3.33398 4.95 5.00398 3.69 8.33398 3.5H16.334Z"
        stroke="#04060F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.084 17.6001H3.58398"
        stroke="#04060F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.334 8.25C11.104 8.25 10.064 8.92 10.064 10.22C10.064 10.84 10.354 11.31 10.794 11.61C10.184 11.97 9.83398 12.55 9.83398 13.23C9.83398 14.47 10.784 15.24 12.334 15.24C13.874 15.24 14.834 14.47 14.834 13.23C14.834 12.55 14.484 11.96 13.864 11.61C14.314 11.3 14.594 10.84 14.594 10.22C14.594 8.92 13.564 8.25 12.334 8.25ZM12.334 11.09C11.814 11.09 11.434 10.78 11.434 10.29C11.434 9.79 11.814 9.5 12.334 9.5C12.854 9.5 13.234 9.79 13.234 10.29C13.234 10.78 12.854 11.09 12.334 11.09ZM12.334 14C11.674 14 11.194 13.67 11.194 13.07C11.194 12.47 11.674 12.15 12.334 12.15C12.994 12.15 13.474 12.48 13.474 13.07C13.474 13.67 12.994 14 12.334 14Z"
        fill="#04060F"
      />
    </svg>
  );
};

export default ContentCalendarIcon;
