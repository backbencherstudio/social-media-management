import React from "react";

interface ServicesIconProps {
  className?: string;
}

const ServicesIcon: React.FC<ServicesIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M16.2451 8.32988L15.5101 11.4649C14.8801 14.1724 13.6351 15.2674 11.2951 15.0424C10.9201 15.0124 10.5151 14.9449 10.0801 14.8399L8.82013 14.5399C5.69263 13.7974 4.72513 12.2524 5.46013 9.11738L6.19513 5.97488C6.34513 5.33738 6.52513 4.78238 6.75013 4.32488C7.62763 2.50988 9.12013 2.02238 11.6251 2.61488L12.8776 2.90738C16.0201 3.64238 16.9801 5.19488 16.2451 8.32988Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2957 15.0417C10.8307 15.3567 10.2457 15.6192 9.53324 15.8517L8.34824 16.2417C5.37074 17.2017 3.80324 16.3992 2.83574 13.4217L1.87574 10.4592C0.915744 7.48172 1.71074 5.90672 4.68824 4.94672L5.87324 4.55672C6.18074 4.45922 6.47324 4.37672 6.75074 4.32422C6.52574 4.78172 6.34574 5.33672 6.19574 5.97422L5.46074 9.11672C4.72574 12.2517 5.69324 13.7967 8.82074 14.5392L10.0807 14.8392C10.5157 14.9442 10.9207 15.0117 11.2957 15.0417Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.48047 6.89746L13.118 7.81996"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.74609 9.80078L10.9211 10.3558"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ServicesIcon;
