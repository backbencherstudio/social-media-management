import React from "react";

interface EditIconProps {
  className?: string;
}

const EditIcon: React.FC<EditIconProps> = ({ className }) => {
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
        <g clipPath="url(#clip0_5742_1840)">
          <path
            d="M11.8842 2.16667H9.71749C4.30082 2.16667 2.13416 4.33334 2.13416 9.75001V16.25C2.13416 21.6667 4.30082 23.8333 9.71749 23.8333H16.2175C21.6342 23.8333 23.8008 21.6667 23.8008 16.25V14.0833"
            stroke="#04060F"
            strokeWidth="1.625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.7032 3.85668C22.3707 7.18252 19.0232 11.7108 16.2282 13.9533L14.5166 15.3183C14.2999 15.4808 14.0832 15.6108 13.8341 15.7083C13.8341 15.5458 13.8232 15.3833 13.8016 15.21C13.7041 14.4842 13.3791 13.8017 12.7941 13.2275C12.1982 12.6317 11.4832 12.2958 10.7466 12.1983C10.5732 12.1875 10.3999 12.1767 10.2266 12.1875C10.3241 11.9167 10.4649 11.6675 10.6491 11.4617L12.0141 9.75002C14.2566 6.95502 18.7957 3.58585 22.1107 2.25335C22.6199 2.05835 23.1182 2.21001 23.4324 2.52418C23.7574 2.84918 23.9091 3.34752 23.7032 3.85668Z"
            stroke="#04060F"
            strokeWidth="1.625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8449 15.6975C13.8449 16.6508 13.4766 17.5608 12.7941 18.2542C12.2633 18.785 11.5483 19.1533 10.6924 19.2617L8.55827 19.4892C7.3991 19.6192 6.40244 18.6333 6.53244 17.4525L6.75994 15.3183C6.96577 13.4225 8.54744 12.2092 10.2374 12.1767C10.4108 12.1658 10.5841 12.1767 10.7574 12.1875C11.4941 12.285 12.2091 12.6208 12.8049 13.2167C13.3899 13.8017 13.7149 14.4733 13.8124 15.1992C13.8341 15.3725 13.8449 15.5458 13.8449 15.6975Z"
            stroke="#04060F"
            strokeWidth="1.625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1384 12.9783C17.1384 10.7142 15.3076 8.8725 13.0326 8.8725"
            stroke="#04060F"
            strokeWidth="1.625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_5742_1840">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>{" "}
    </svg>
  );
};

export default EditIcon;
