import React from "react";

interface OnTimeDeliveryIconProps {
  className?: string;
}

const OnTimeDeliveryIcon: React.FC<OnTimeDeliveryIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      className={className}
    >
      <path
        d="M9.33398 16.5H4.83398C3.17713 16.5 1.83398 15.1569 1.83398 13.5V4.5C1.83398 2.84315 3.17713 1.5 4.83398 1.5H13.834C15.4908 1.5 16.834 2.84315 16.834 4.5V10.5"
        stroke="#00D889"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M6.33398 1.5H12.334V7.18934C12.334 7.85752 11.5261 8.19214 11.0537 7.71967L9.86431 6.53033C9.57142 6.23744 9.09655 6.23744 8.80365 6.53033L7.61432 7.71967C7.14184 8.19214 6.33398 7.85752 6.33398 7.18934V1.5Z"
        stroke="#00D889"
        strokeWidth="1.125"
        strokeLinejoin="round"
      />
      <path
        d="M11.584 15L12.8986 16.0517C13.212 16.3024 13.6673 16.262 13.9316 15.9599L16.084 13.5"
        stroke="#00D889"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OnTimeDeliveryIcon;
