import React from "react";

interface DiagramIconProps {
  className?: string;
}

const DiagramIcon: React.FC<DiagramIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M1.75 1.5V14.25C1.75 15.495 2.755 16.5 4 16.5H16.75"
        stroke="#35CE56"
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 12.75L7.4425 8.73001C8.0125 8.07001 9.025 8.025 9.64 8.6475L10.3525 9.36001C10.9675 9.97501 11.98 9.9375 12.55 9.2775L16 5.25"
        stroke="#35CE56"
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DiagramIcon;
