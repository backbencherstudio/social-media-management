import React from "react";

interface PricingIconProps {
  className?: string;
}

const WatchIcon: React.FC<PricingIconProps> = ({ className }) => {
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
          d="M23.8334 16.25V9.75C23.8334 4.33334 21.6667 2.16667 16.2501 2.16667H9.75008C4.33341 2.16667 2.16675 4.33334 2.16675 9.75V16.25C2.16675 21.6667 4.33341 23.8333 9.75008 23.8333H16.2501C21.6667 23.8333 23.8334 21.6667 23.8334 16.25Z"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.73364 7.70183H23.2736"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.23364 2.28516V7.55016"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.7664 2.28516V7.06266"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5625 15.6522V14.3522C10.5625 12.6838 11.7433 12.0013 13.1842 12.8355L14.3108 13.4855L15.4375 14.1355C16.8783 14.9697 16.8783 16.3347 15.4375 17.1688L14.3108 17.8188L13.1842 18.4688C11.7433 19.303 10.5625 18.6205 10.5625 16.9522V15.6522V15.6522Z"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default WatchIcon;
