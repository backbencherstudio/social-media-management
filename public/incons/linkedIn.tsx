import React from "react";

interface LinkedInIconProps {
  className?: string;
}

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
    >
      <g clip-path="url(#clip0_5654_43623)">
        <path
          d="M2 4.79228C2 3.52663 3.0587 2.5 4.36474 2.5H31.6353C32.9412 2.5 34 3.52663 34 4.79228V32.2077C34 33.4738 32.9412 34.5 31.6353 34.5H4.36474C3.0587 34.5 2 33.4738 2 32.2077V4.79228Z"
          fill="#006699"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.088 27.5791V15.4339H9.05113V27.5791H13.088ZM11.0695 13.7757C12.4773 13.7757 13.3535 12.8431 13.3535 11.6776C13.3272 10.4858 12.4773 9.5791 11.0962 9.5791C9.71536 9.5791 8.8125 10.4858 8.8125 11.6776C8.8125 12.8431 9.68851 13.7757 11.0432 13.7757H11.0695Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.3217 27.5791H19.3585V20.7967C19.3585 20.4337 19.3847 20.0711 19.4913 19.8116C19.7831 19.0864 20.4474 18.3353 21.5625 18.3353C23.0233 18.3353 23.6076 19.449 23.6076 21.0817V27.5791H27.6441V20.6152C27.6441 16.8848 25.6525 15.1489 22.9966 15.1489C20.8189 15.1489 19.8628 16.3662 19.3316 17.1953H19.3586V15.4339H15.3218C15.3748 16.5735 15.3217 27.5791 15.3217 27.5791Z"
          fill="white"
        />
      </g>
      <rect
        x="1.2"
        y="1.7"
        width="33.6"
        height="33.6"
        rx="6.8"
        stroke="white"
        strokeWidth="1.6"
      />
      <defs>
        <clipPath id="clip0_5654_43623">
          <rect x="2" y="2.5" width="32" height="32" rx="6" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedInIcon;
