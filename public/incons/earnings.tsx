import React from "react";

interface EarningsIconProps {
  className?: string;
}

const EarningsIcon: React.FC<EarningsIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      className={className}
    >
      <path
        d="M7.16992 10.7474C7.16992 11.7149 7.91242 12.4949 8.83492 12.4949H10.7174C11.5199 12.4949 12.1724 11.8124 12.1724 10.9724C12.1724 10.0574 11.7749 9.73488 11.1824 9.52488L8.15992 8.47488C7.56742 8.26488 7.16992 7.94238 7.16992 7.02738C7.16992 6.18738 7.82242 5.50488 8.62492 5.50488H10.5074C11.4299 5.50488 12.1724 6.28488 12.1724 7.25238"
        stroke="#6A7EFF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66602 4.5V13.5"
        stroke="#6A7EFF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66602 16.5C13.8082 16.5 17.166 13.1421 17.166 9C17.166 4.85786 13.8082 1.5 9.66602 1.5C5.52388 1.5 2.16602 4.85786 2.16602 9C2.16602 13.1421 5.52388 16.5 9.66602 16.5Z"
        stroke="#6A7EFF"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EarningsIcon;
