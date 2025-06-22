import React from "react";

interface ScheduleGalleryIconProps {
  className?: string;
}

const ScheduleGalleryIcon: React.FC<ScheduleGalleryIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M6.00065 14.6668H10.0007C13.334 14.6668 14.6673 13.3335 14.6673 10.0002V6.00016C14.6673 2.66683 13.334 1.3335 10.0007 1.3335H6.00065C2.66732 1.3335 1.33398 2.66683 1.33398 6.00016V10.0002C1.33398 13.3335 2.66732 14.6668 6.00065 14.6668Z"
        stroke="#04060F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99935 6.66667C6.73573 6.66667 7.33268 6.06971 7.33268 5.33333C7.33268 4.59695 6.73573 4 5.99935 4C5.26297 4 4.66602 4.59695 4.66602 5.33333C4.66602 6.06971 5.26297 6.66667 5.99935 6.66667Z"
        stroke="#04060F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.7793 12.6335L5.06596 10.4269C5.59263 10.0735 6.35263 10.1135 6.82596 10.5202L7.04596 10.7135C7.56596 11.1602 8.40596 11.1602 8.92596 10.7135L11.6993 8.33354C12.2193 7.88687 13.0593 7.88687 13.5793 8.33354L14.666 9.26687"
        stroke="#04060F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ScheduleGalleryIcon;
