import React from "react";

interface VideoPlayIconProps {
  className?: string;
}

const VideoPlayIcon: React.FC<VideoPlayIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M29.3327 20.0001V12.0001C29.3327 5.33341 26.666 2.66675 19.9993 2.66675H11.9993C5.33268 2.66675 2.66602 5.33341 2.66602 12.0001V20.0001C2.66602 26.6667 5.33268 29.3334 11.9993 29.3334H19.9993C26.666 29.3334 29.3327 26.6667 29.3327 20.0001Z"
        stroke="#777980"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.35938 9.47925H28.6394"
        stroke="#777980"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3594 2.8125V9.2925"
        stroke="#777980"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6406 2.8125V8.6925"
        stroke="#777980"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 19.2669V17.6669C13 15.6136 14.4533 14.7736 16.2267 15.8002L17.6133 16.6002L19 17.4002C20.7733 18.4269 20.7733 20.1069 19 21.1336L17.6133 21.9336L16.2267 22.7336C14.4533 23.7602 13 22.9202 13 20.8669V19.2669V19.2669Z"
        stroke="#777980"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VideoPlayIcon;
