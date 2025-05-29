import React from "react";

interface PaymentIconProps {
  className?: string;
}

const PaymentIcon: React.FC<PaymentIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M1.5 9.95801H14.25"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 8.20961V13.5721C14.2275 15.7096 13.6425 16.2496 11.415 16.2496H4.33502C2.07002 16.2496 1.5 15.6871 1.5 13.4521V8.20961C1.5 6.18461 1.9725 5.53211 3.75 5.42711C3.93 5.41961 4.12502 5.41211 4.33502 5.41211H11.415C13.68 5.41211 14.25 5.97461 14.25 8.20961Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 5.5475V10.79C16.5 12.815 16.0275 13.4675 14.25 13.5725V8.21C14.25 5.975 13.68 5.4125 11.415 5.4125H4.33502C4.12502 5.4125 3.93 5.42 3.75 5.4275C3.7725 3.29 4.35752 2.75 6.58502 2.75H13.665C15.93 2.75 16.5 3.3125 16.5 5.5475Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.9375 13.8574H5.22748"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83203 13.8574H9.41203"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PaymentIcon;
