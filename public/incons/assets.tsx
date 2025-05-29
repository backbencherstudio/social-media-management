import React from "react";

interface AssetsIconProps {
  className?: string;
}

const AssetsIcon: React.FC<AssetsIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M16.254 11.225L15.954 14.975C15.8415 16.1225 15.7515 17 13.719 17H4.28403C2.25153 17 2.16153 16.1225 2.04903 14.975L1.74903 11.225C1.68903 10.6025 1.88403 10.025 2.23653 9.5825C2.24403 9.575 2.24403 9.575 2.25153 9.5675C2.66403 9.065 3.28653 8.75 3.98403 8.75H14.019C14.7165 8.75 15.3315 9.065 15.7365 9.5525C15.744 9.56 15.7515 9.5675 15.7515 9.575C16.119 10.0175 16.3215 10.595 16.254 11.225Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
      />
      <path
        d="M2.625 9.07197V5.20947C2.625 2.65947 3.2625 2.02197 5.8125 2.02197H6.765C7.7175 2.02197 7.935 2.30697 8.295 2.78697L9.2475 4.06197C9.4875 4.37697 9.63 4.57197 10.2675 4.57197H12.18C14.73 4.57197 15.3675 5.20947 15.3675 7.75947V9.10197"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.07227 13.25H10.9273"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AssetsIcon;
