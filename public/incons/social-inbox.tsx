import React from "react";

interface SocialInboxIconProps {
  className?: string;
}

const SocialInboxIcon: React.FC<SocialInboxIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M13.485 8.59251V11.5925C13.485 11.7875 13.4775 11.975 13.455 12.155C13.2825 14.18 12.09 15.185 9.8925 15.185H9.59251C9.40501 15.185 9.225 15.275 9.1125 15.425L8.21251 16.625C7.81501 17.1575 7.17 17.1575 6.7725 16.625L5.87249 15.425C5.77499 15.2975 5.5575 15.185 5.3925 15.185H5.09251C2.70001 15.185 1.5 14.5925 1.5 11.5925V8.59251C1.5 6.39501 2.51251 5.20251 4.53001 5.03001C4.71001 5.00751 4.89751 5 5.09251 5H9.8925C12.285 5 13.485 6.20001 13.485 8.59251Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4843 5.59251V8.59251C16.4843 10.7975 15.4718 11.9825 13.4543 12.155C13.4768 11.975 13.4843 11.7875 13.4843 11.5925V8.59251C13.4843 6.20001 12.2843 5 9.89179 5H5.0918C4.8968 5 4.7093 5.00751 4.5293 5.03001C4.7018 3.01251 5.8943 2 8.0918 2H12.8918C15.2843 2 16.4843 3.20001 16.4843 5.59251Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1216 10.4375H10.1284"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49662 10.4375H7.50337"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.87162 10.4375H4.87837"
        stroke="#4A4C56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SocialInboxIcon;
