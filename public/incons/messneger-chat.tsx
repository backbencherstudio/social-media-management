import React from "react";

interface MessengerIconProps {
  className?: string;
}

const MessengerChatIcon: React.FC<MessengerIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M11.9998 29.3346H19.9998C26.6665 29.3346 29.3332 26.668 29.3332 20.0013V12.0013C29.3332 5.33464 26.6665 2.66797 19.9998 2.66797H11.9998C5.33317 2.66797 2.6665 5.33464 2.6665 12.0013V20.0013C2.6665 26.668 5.33317 29.3346 11.9998 29.3346Z"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.771 19.3197L12.9443 15.1997C13.3977 14.613 14.2377 14.5064 14.8243 14.9597L17.2643 16.8797C17.851 17.333 18.691 17.2264 19.1443 16.653L22.2243 12.6797"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessengerChatIcon;
