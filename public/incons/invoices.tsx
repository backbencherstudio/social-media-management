import React from "react";

interface InvoicesIconProps {
  className?: string;
}

const InvoicesIcon: React.FC<InvoicesIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M16.5 5V6.815C16.5 8 15.75 8.75 14.565 8.75H12V3.5075C12 2.675 12.6825 2 13.515 2C14.3325 2.0075 15.0825 2.3375 15.6225 2.8775C16.1625 3.425 16.5 4.175 16.5 5Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 5.75V16.25C1.5 16.8725 2.205 17.225 2.7 16.85L3.9825 15.89C4.2825 15.665 4.7025 15.695 4.9725 15.965L6.2175 17.2175C6.51 17.51 6.99 17.51 7.2825 17.2175L8.5425 15.9575C8.805 15.695 9.225 15.665 9.5175 15.89L10.8 16.85C11.295 17.2175 12 16.865 12 16.25V3.5C12 2.675 12.675 2 13.5 2H5.25H4.5C2.25 2 1.5 3.3425 1.5 5V5.75Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 10.2578H9"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 7.25781H9"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.49609 10.25H4.50283"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.49609 7.25H4.50283"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InvoicesIcon;
