import React from "react";

interface ChatBotHeaderIconProps {
  className?: string;
}

const ChatBotHeaderIcon: React.FC<ChatBotHeaderIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      className={className}
    >
      <mask
        id="mask0_6179_12996"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="22"
        height="20"
      >
        <path d="M0 0H21.7583V19.6181H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_6179_12996)">
        <path
          d="M8.556 11.8262L7.40557 15.4419L7.09393 16.4195L6.07633 19.6181H2.18428L3.50052 15.4419H0L0.728249 11.8262H4.66395L5.30628 9.80861L5.63139 8.76825H9.52901L9.19832 9.80861L8.87414 10.8485L8.569 11.8262H8.556ZM19.2689 4.17582H18.2568L19.5726 0H15.6806L14.663 3.19817L14.3513 4.17582L13.2004 7.79152H13.1884L12.8832 8.76918L12.559 9.80907L12.2284 10.8494H16.1264L16.4511 9.80907L17.0934 7.79152H21.0579L21.7574 4.17582H19.2689ZM15.8208 11.8262H9.58103L9.48767 12.1229L8.43246 15.4419H10.7533L10.4449 16.4195L9.43658 19.6181H13.3286L14.3462 16.4195L14.6579 15.4419H18.5652L19.2647 11.8262H15.8208ZM5.93607 7.79059H12.1763L12.2697 7.49381L13.3249 4.17536H11.0041L11.3125 3.19724L12.3208 0H8.42874L7.41021 3.19817L7.09857 4.17582H3.21999L2.49174 7.79152H5.93607V7.79059Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export default ChatBotHeaderIcon;
