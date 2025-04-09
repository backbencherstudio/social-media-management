import React from "react";

interface MediaIconProps {
  className?: string;
}

const MediaIcon: React.FC<MediaIconProps> = ({ className }) => {
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
          d="M9.74935 23.8333H16.2493C21.666 23.8333 23.8327 21.6667 23.8327 16.25V9.75C23.8327 4.33334 21.666 2.16667 16.2493 2.16667H9.74935C4.33268 2.16667 2.16602 4.33334 2.16602 9.75V16.25C2.16602 21.6667 4.33268 23.8333 9.74935 23.8333Z"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.75065 10.8333C10.9473 10.8333 11.9173 9.86328 11.9173 8.66667C11.9173 7.47005 10.9473 6.5 9.75065 6.5C8.55403 6.5 7.58398 7.47005 7.58398 8.66667C7.58398 9.86328 8.55403 10.8333 9.75065 10.8333Z"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.89453 20.5291L8.23536 16.9432C9.0912 16.3691 10.3262 16.4341 11.0954 17.0949L11.4529 17.4091C12.2979 18.1349 13.6629 18.1349 14.5079 17.4091L19.0145 13.5416C19.8595 12.8157 21.2245 12.8157 22.0695 13.5416L23.8354 15.0582"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default MediaIcon;
