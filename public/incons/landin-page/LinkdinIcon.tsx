import React from 'react';

interface LinkdinIconProps {
    className?: string;
}

const LinkdinIcon: React.FC<LinkdinIconProps> = ({ className = "" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"  className={className}>
            <g clipPath="url(#clip0_3475_10994)">
                <path d="M2.09827 4.29228C2.09827 3.02663 3.15697 2 4.463 2H31.7335C33.0395 2 34.0983 3.02663 34.0983 4.29228V31.7077C34.0983 32.9738 33.0395 34 31.7335 34H4.463C3.15697 34 2.09827 32.9738 2.09827 31.7077V4.29228Z" fill="#006699" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.1862 27.0791V14.9339H9.1494V27.0791H13.1862ZM11.1678 13.2757C12.5755 13.2757 13.4517 12.3431 13.4517 11.1776C13.4255 9.98584 12.5755 9.0791 11.1945 9.0791C9.81363 9.0791 8.91077 9.98584 8.91077 11.1776C8.91077 12.3431 9.78677 13.2757 11.1415 13.2757H11.1678Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4199 27.0791H19.4567V20.2967C19.4567 19.9337 19.483 19.5711 19.5896 19.3116C19.8814 18.5864 20.5456 17.8353 21.6608 17.8353C23.1215 17.8353 23.7059 18.949 23.7059 20.5817V27.0791H27.7424V20.1152C27.7424 16.3848 25.7508 14.6489 23.0949 14.6489C20.9171 14.6489 19.9611 15.8662 19.4299 16.6953H19.4569V14.9339H15.4201C15.473 16.0735 15.4199 27.0791 15.4199 27.0791Z" fill="white" />
            </g>
            <rect x="1.29827" y="1.2" width="33.6" height="33.6" rx="16.8" stroke="white" strokeWidth="1.6" />
            <defs>
                <clipPath id="clip0_3475_10994">
                    <rect x="2.09827" y="2" width="32" height="32" rx="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default LinkdinIcon;


