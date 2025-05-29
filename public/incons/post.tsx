import React from "react";

interface PostIconProps {
  className?: string;
}

const PostIcon: React.FC<PostIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M6.75 8C7.57843 8 8.25 7.32843 8.25 6.5C8.25 5.67157 7.57843 5 6.75 5C5.92157 5 5.25 5.67157 5.25 6.5C5.25 7.32843 5.92157 8 6.75 8Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 15.5 3 17 6.75 17H11.25C15 17 16.5 15.5 16.5 11.75V8"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3561 2.44225L11.6336 5.16475C11.5286 5.26975 11.4236 5.47225 11.4086 5.62225L11.2586 6.66475C11.2061 7.03975 11.4686 7.30225 11.8436 7.24975L12.8861 7.09975C13.0286 7.07725 13.2386 6.97975 13.3436 6.87475L16.0661 4.15225C16.5386 3.67975 16.7561 3.13975 16.0661 2.44975C15.3686 1.74475 14.8286 1.96975 14.3561 2.44225Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9648 2.83276C14.1973 3.65776 14.8423 4.30276 15.6673 4.53526"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00195 14.7122L5.69945 12.2297C6.29195 11.8322 7.14695 11.8772 7.67945 12.3347L7.92695 12.5522C8.51195 13.0547 9.45695 13.0547 10.042 12.5522L13.162 9.87468C13.747 9.37218 14.692 9.37218 15.277 9.87468L16.4995 10.9247"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PostIcon;
