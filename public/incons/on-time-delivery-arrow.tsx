import React from "react";

interface OnTimeDeliveryIconArrowIconProps {
  className?: string;
}

const OnTimeDeliveryIconArrowIcon: React.FC<
  OnTimeDeliveryIconArrowIconProps
> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M11.4551 3.83393L5.88168 9.40732M11.4467 8.43765L11.4544 3.83325L6.85135 3.84234"
        stroke="#DA7908"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6094 13.1667H4.72537"
        stroke="#DA7908"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OnTimeDeliveryIconArrowIcon;
