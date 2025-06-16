import React from "react";

interface TrashIconProps {
  className?: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M11.0526 3.00002L4.21098 10.2417C3.95264 10.5167 3.70264 11.0584 3.65264 11.4334L3.34431 14.1333C3.23598 15.1083 3.93598 15.775 4.90264 15.6084L7.58598 15.15C7.96098 15.0834 8.48598 14.8084 8.74431 14.525L15.586 7.28335C16.7693 6.03335 17.3026 4.60835 15.461 2.86668C13.6276 1.14168 12.236 1.75002 11.0526 3.00002Z"
        stroke="#4A4C56"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.90894 4.20801C10.2673 6.50801 12.1339 8.26634 14.4506 8.49967"
        stroke="#4A4C56"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 18.333H17.5"
        stroke="#4A4C56"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
