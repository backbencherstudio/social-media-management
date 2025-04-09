import React from "react";

interface LinkIconProps {
  className?: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M16.2422 18.9583H17.878C21.1497 18.9583 23.8364 16.2825 23.8364 13C23.8364 9.72834 21.1605 7.04167 17.878 7.04167H16.2422"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.74935 7.04167H8.12435C4.84185 7.04167 2.16602 9.71751 2.16602 13C2.16602 16.2717 4.84185 18.9583 8.12435 18.9583H9.74935"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.66602 13H17.3327"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default LinkIcon;
