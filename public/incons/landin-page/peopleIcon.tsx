import React from "react";

interface peopleIconProps {
  className?: string;
}

const PeopleIcon: React.FC<peopleIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M24.2006 9.54675C24.1206 9.53342 24.0273 9.53342 23.9473 9.54675C22.1073 9.48009 20.6406 7.97342 20.6406 6.10675C20.6406 4.20008 22.174 2.66675 24.0806 2.66675C25.9873 2.66675 27.5206 4.21342 27.5206 6.10675C27.5073 7.97342 26.0406 9.48009 24.2006 9.54675Z"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8271 19.2531C24.6538 19.5598 26.6671 19.2398 28.0804 18.2931C29.9604 17.0398 29.9604 14.9865 28.0804 13.7331C26.6538 12.7865 24.6138 12.4665 22.7871 12.7865"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.15985 9.54675C8.23985 9.53342 8.33318 9.53342 8.41318 9.54675C10.2532 9.48009 11.7198 7.97342 11.7198 6.10675C11.7198 4.20008 10.1865 2.66675 8.27985 2.66675C6.37318 2.66675 4.83984 4.21342 4.83984 6.10675C4.85318 7.97342 6.31985 9.48009 8.15985 9.54675Z"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.53443 19.2531C7.70776 19.5598 5.69443 19.2398 4.28109 18.2931C2.40109 17.0398 2.40109 14.9865 4.28109 13.7331C5.70776 12.7865 7.74776 12.4665 9.57442 12.7865"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2006 19.5067C16.1206 19.4934 16.0273 19.4934 15.9473 19.5067C14.1073 19.44 12.6406 17.9334 12.6406 16.0667C12.6406 14.16 14.174 12.6267 16.0806 12.6267C17.9873 12.6267 19.5206 14.1734 19.5206 16.0667C19.5073 17.9334 18.0406 19.4534 16.2006 19.5067Z"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3221 23.7065C10.4421 24.9598 10.4421 27.0131 12.3221 28.2665C14.4554 29.6931 17.9488 29.6931 20.0821 28.2665C21.9621 27.0131 21.9621 24.9598 20.0821 23.7065C17.9621 22.2932 14.4554 22.2932 12.3221 23.7065Z"
        stroke="#04060F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PeopleIcon;
