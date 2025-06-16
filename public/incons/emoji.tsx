import React from "react";

interface EmojiIconProps {
  className?: string;
}

const EmojiIcon: React.FC<EmojiIconProps> = ({ className }) => {
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
          d="M9.74996 16.25C9.74996 16.25 10.9687 17.3333 13 17.3333C15.0312 17.3333 16.25 16.25 16.25 16.25M18.4166 10.8333C18.4166 11.4316 17.9316 11.9167 17.3333 11.9167C16.735 11.9167 16.25 11.4316 16.25 10.8333C16.25 10.235 16.735 9.74999 17.3333 9.74999C17.9316 9.74999 18.4166 10.235 18.4166 10.8333ZM23.8333 13C23.8333 18.9831 18.983 23.8333 13 23.8333C7.01687 23.8333 2.16663 18.9831 2.16663 13C2.16663 7.0169 7.01687 2.16666 13 2.16666C18.983 2.16666 23.8333 7.0169 23.8333 13ZM9.74996 10.8333C9.74996 11.4316 9.26493 11.9167 8.66663 11.9167C8.06832 11.9167 7.58329 11.4316 7.58329 10.8333C7.58329 10.235 8.06832 9.74999 8.66663 9.74999C9.26493 9.74999 9.74996 10.235 9.74996 10.8333Z"
          stroke="#070707"
          strokeWidth="1.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default EmojiIcon;
