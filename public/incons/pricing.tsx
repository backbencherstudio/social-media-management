import React from 'react';

interface PricingIconProps {
  className?: string;
}

const PricingIcon: React.FC<PricingIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
    >
      <path d="M4.77182 16.8202L9.67932 21.7277C11.6943 23.7427 14.966 23.7427 16.9918 21.7277L21.7477 16.9719C23.7627 14.9569 23.7627 11.6852 21.7477 9.6594L16.8293 4.76273C15.8002 3.73356 14.381 3.18106 12.9293 3.2569L7.51265 3.5169C5.34599 3.6144 3.62349 5.3369 3.51515 7.49273L3.25515 12.9094C3.19015 14.3719 3.74265 15.7911 4.77182 16.8202Z" stroke="currentColor" strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.546 13.2452C12.0418 13.2452 13.2543 12.0327 13.2543 10.5369C13.2543 9.04113 12.0418 7.82857 10.546 7.82857C9.05021 7.82857 7.83765 9.04113 7.83765 10.5369C7.83765 12.0327 9.05021 13.2452 10.546 13.2452Z" stroke="currentColor" strokeWidth="1.625" strokeLinecap="round" />
      <path d="M14.3376 18.6619L18.671 14.3286" stroke="currentColor" strokeWidth="1.625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default PricingIcon;