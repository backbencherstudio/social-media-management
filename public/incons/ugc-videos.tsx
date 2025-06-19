import React from "react";

interface UGCVideosIconProps {
  className?: string;
}

const UGCVideosIcon: React.FC<UGCVideosIconProps> = ({ className = "" }) => {
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
        d="M7.32319 23.8346H18.6765C21.6665 23.8346 22.8582 22.0038 22.999 19.7721L23.5624 10.8238C23.714 8.4838 21.8507 6.5013 19.4999 6.5013C18.839 6.5013 18.2324 6.12214 17.929 5.53714L17.149 3.9663C16.6507 2.98047 15.3507 2.16797 14.2457 2.16797H11.7649C10.649 2.16797 9.34902 2.98047 8.85069 3.9663L8.07069 5.53714C7.76736 6.12214 7.16069 6.5013 6.49986 6.5013C4.14902 6.5013 2.28569 8.4838 2.43736 10.8238L3.00069 19.7721C3.13069 22.0038 4.33319 23.8346 7.32319 23.8346Z"
        stroke="#04060F"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.375 8.66797H14.625"
        stroke="#04060F"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0003 19.4987C14.9395 19.4987 16.5212 17.917 16.5212 15.9779C16.5212 14.0387 14.9395 12.457 13.0003 12.457C11.0612 12.457 9.47949 14.0387 9.47949 15.9779C9.47949 17.917 11.0612 19.4987 13.0003 19.4987Z"
        stroke="#04060F"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UGCVideosIcon;
