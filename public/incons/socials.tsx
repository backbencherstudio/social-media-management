import React from "react";

interface SocialsIconProps {
  className?: string;
}

const SocialsIcon: React.FC<SocialsIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M6.13422 12.515C5.56422 12.4625 5.00172 12.2 4.56672 11.7425C3.57672 10.7 3.57672 8.99004 4.56672 7.94754L6.20922 6.22255C7.19922 5.18005 8.82673 5.18005 9.82423 6.22255C10.8142 7.26505 10.8142 8.97505 9.82423 10.0175L9.00672 10.88"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8642 6.48511C12.4342 6.53761 12.9966 6.80011 13.4316 7.25761C14.4216 8.30011 14.4216 10.0101 13.4316 11.0526L11.7891 12.7776C10.7991 13.8201 9.17164 13.8201 8.17414 12.7776C7.18414 11.7351 7.18414 10.0251 8.17414 8.9826L8.99165 8.1201"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 17H11.25C15 17 16.5 15.5 16.5 11.75V7.25C16.5 3.5 15 2 11.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 15.5 3 17 6.75 17Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SocialsIcon;
