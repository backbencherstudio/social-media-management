import React from "react";

interface PinterestIconProps {
  className?: string;
}

const PinterestIcon: React.FC<PinterestIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
    >
      <rect
        x="1.45"
        y="1.95"
        width="44.1"
        height="44.1"
        rx="22.05"
        fill="#D10D0D"
      />
      <rect
        x="1.45"
        y="1.95"
        width="44.1"
        height="44.1"
        rx="22.05"
        stroke="white"
        strokeWidth="2.1"
      />
      <g clipPath="url(#clip0_5654_57348)">
        <path
          d="M22.3391 27.8739C21.7091 31.1776 20.9394 34.3454 18.6594 36.0001C17.9558 31.0061 19.693 27.2556 20.4992 23.274C19.1239 20.9584 20.6647 16.299 23.5658 17.4475C27.1353 18.8593 20.4748 26.0551 24.9463 26.9537C29.615 27.8917 31.5205 18.8532 28.6259 15.9142C24.4428 11.6696 16.4497 15.8172 17.4327 21.894C17.6717 23.3795 19.2069 23.8304 18.0463 25.8803C15.3688 25.2868 14.57 23.1756 14.6727 20.3607C14.8381 15.7529 18.8127 12.527 22.7994 12.0807C27.8408 11.5164 32.5723 13.9314 33.2258 18.6742C33.9617 24.0268 30.95 29.8239 25.5594 29.4072C24.0978 29.2937 23.4847 28.5695 22.3391 27.8739Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5654_57348">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PinterestIcon;
