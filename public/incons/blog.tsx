import React from "react";

interface BlogIconProps {
  className?: string;
}

const BlogIcon: React.FC<BlogIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M15.75 7.52083V14C15.75 15.6569 14.4069 17 12.75 17H5.25C3.59315 17 2.25 15.6569 2.25 14V5C2.25 3.34315 3.59315 2 5.25 2H10.0848"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5.75H9"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M6 9.5H12"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M6 13.25H12"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M13.5 2V6.5"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
      <path
        d="M15.75 4.25L11.25 4.25"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BlogIcon;
