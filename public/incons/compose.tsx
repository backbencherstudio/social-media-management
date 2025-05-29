import React from "react";

interface ComposeIconProps {
  className?: string;
}

const ComposeIcon: React.FC<ComposeIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M8.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 15.5 3 17 6.75 17H11.25C15 17 16.5 15.5 16.5 11.75V10.25"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0304 2.76519L6.1204 8.67519C5.8954 8.90019 5.6704 9.34269 5.6254 9.66519L5.3029 11.9227C5.1829 12.7402 5.7604 13.3102 6.5779 13.1977L8.8354 12.8752C9.1504 12.8302 9.5929 12.6052 9.8254 12.3802L15.7354 6.47019C16.7554 5.45019 17.2354 4.26519 15.7354 2.76519C14.2354 1.26519 13.0504 1.74519 12.0304 2.76519Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1836 3.61279C11.6861 5.40529 13.0886 6.80779 14.8886 7.31779"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ComposeIcon;
