import React from "react";

interface PinterestIconProps {
  className?: string;
}

export const PinterestIcon: React.FC<PinterestIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
    >
      <g clip-path="url(#clip0_5654_39508)">
        <path
          d="M6.33689 9.21531C5.97689 11.1032 5.53707 12.9133 4.23421 13.8589C3.83216 11.0051 4.82483 8.86201 5.28555 6.58683C4.49966 5.26362 5.3801 2.60112 7.03787 3.25737C9.0776 4.06415 5.27162 8.17603 7.82671 8.68951C10.4946 9.22549 11.5834 4.06067 9.92939 2.38121C7.53903 -0.0442405 2.97153 2.32576 3.53323 5.79826C3.66983 6.6471 4.54707 6.90478 3.88385 8.07612C2.35385 7.73701 1.89742 6.53058 1.95608 4.9221C2.05064 2.28906 4.3218 0.44567 6.59992 0.19067C9.48073 -0.13183 12.1845 1.24817 12.5579 3.95835C12.9784 7.01701 11.2574 10.3296 8.17707 10.0915C7.34189 10.0267 6.99153 9.61281 6.33689 9.21531Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5654_39508">
          <rect
            width="13.7143"
            height="13.7143"
            fill="white"
            transform="translate(0.429688 0.142578)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PinterestIcon;
