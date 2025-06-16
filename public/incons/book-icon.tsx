import React from "react";

interface BookIconProps {
  className?: string;
}

const BookIcon: React.FC<BookIconProps> = ({ className }) => {
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
          d="M22.75 7.58334V18.4167C22.75 21.6667 21.125 23.8333 17.3333 23.8333H8.66667C4.875 23.8333 3.25 21.6667 3.25 18.4167V7.58334C3.25 4.33334 4.875 2.16667 8.66667 2.16667H17.3333C21.125 2.16667 22.75 4.33334 22.75 7.58334Z"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7083 4.875V7.04167C15.7083 8.23333 16.6833 9.20833 17.8749 9.20833H20.0416"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66675 14.0833H13.0001"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66675 18.4167H17.3334"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default BookIcon;
