import React from "react";

interface startupIconProps {
  className?: string;
}

const StartupIcon: React.FC<startupIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M9.77344 24.2002V21.4402"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5996 24.1999V18.6799"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23.4258 24.1998V15.9065"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23.4268 7.80005L22.8134 8.52005C19.4134 12.4934 14.8534 15.3067 9.77344 16.5734"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.5195 7.80005H23.4262V11.6934"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.599 29.3334H20.599C27.2656 29.3334 29.9323 26.6667 29.9323 20.0001V12.0001C29.9323 5.33341 27.2656 2.66675 20.599 2.66675H12.599C5.93229 2.66675 3.26562 5.33341 3.26562 12.0001V20.0001C3.26562 26.6667 5.93229 29.3334 12.599 29.3334Z"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StartupIcon;
