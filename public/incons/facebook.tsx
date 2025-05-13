import React from "react";

interface FacebookIconProps {
  className?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M32.1956 16.5978C32.1956 7.70722 24.9883 0.5 16.0978 0.5C7.20722 0.5 0 7.70722 0 16.5978C0 24.6325 5.88669 31.2924 13.5825 32.5V21.251H9.49518V16.5978H13.5825V13.0512C13.5825 9.01673 15.9859 6.7882 19.6629 6.7882C21.4236 6.7882 23.2663 7.10261 23.2663 7.10261V11.0642H21.2365C19.2368 11.0642 18.6131 12.3051 18.6131 13.5794V16.5978H23.0777L22.364 21.251H18.6131V32.5C26.3089 31.2924 32.1956 24.6325 32.1956 16.5978Z"
        fill="#1877F2"
      />
    </svg>
  );
};

export default FacebookIcon;
