import React from "react";

interface InstagramGrowthIconProps {
  className?: string;
}

const InstagramGrowthIcon: React.FC<InstagramGrowthIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
    >
      <path
        d="M8.09961 19.8777L11.4579 22.4777C11.8913 22.911 12.8663 23.1277 13.5163 23.1277H17.6329C18.9329 23.1277 20.3413 22.1527 20.6663 20.8527L23.2663 12.9444C23.8079 11.4277 22.8329 10.1277 21.2079 10.1277H16.8746C16.2246 10.1277 15.6829 9.58604 15.7913 8.82771L16.3329 5.36104C16.5496 4.38604 15.8996 3.30271 14.9246 2.97771C14.0579 2.65271 12.9746 3.08604 12.5413 3.73604L8.09961 10.3444"
        stroke="#04060F"
        strokeWidth="1.625"
        strokeMiterlimit="10"
      />
      <path
        d="M2.58105 19.8781V9.26146C2.58105 7.74479 3.23105 7.20312 4.74772 7.20312H5.83105C7.34772 7.20312 7.99772 7.74479 7.99772 9.26146V19.8781C7.99772 21.3948 7.34772 21.9365 5.83105 21.9365H4.74772C3.23105 21.9365 2.58105 21.3948 2.58105 19.8781Z"
        stroke="#04060F"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InstagramGrowthIcon;
