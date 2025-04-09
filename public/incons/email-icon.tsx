import React from "react";

interface EmailIconProps {
  className?: string;
}

const EmailIcon: React.FC<EmailIconProps> = ({ className }) => {
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
          d="M18.416 22.2083H7.58268C4.33268 22.2083 2.16602 20.5833 2.16602 16.7917V9.20832C2.16602 5.41666 4.33268 3.79166 7.58268 3.79166H18.416C21.666 3.79166 23.8327 5.41666 23.8327 9.20832V16.7917C23.8327 20.5833 21.666 22.2083 18.416 22.2083Z"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.4173 9.75L15.0265 12.4583C13.9106 13.3467 12.0798 13.3467 10.964 12.4583L7.58398 9.75"
          stroke="#04060F"
          strokeWidth="1.625"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default EmailIcon;
