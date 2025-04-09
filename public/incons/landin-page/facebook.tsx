import React from 'react';

interface FacebookIconProps {
    className?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34" height="32"
            viewBox="0 0 34 32" fill="none"
            className={className}
        >
            <path d="M33.0973 16.0978C33.0973 7.20722 25.8901 0 16.9995 0C8.10895 0 0.901733 7.20722 0.901733 16.0978C0.901733 24.1325 6.78843 30.7924 14.4842 32V20.751H10.3969V16.0978H14.4842V12.5512C14.4842 8.51673 16.8876 6.2882 20.5646 6.2882C22.3253 6.2882 24.1681 6.60261 24.1681 6.60261V10.5642H22.1382C20.1386 10.5642 19.5148 11.8051 19.5148 13.0794V16.0978H23.9794L23.2657 20.751H19.5148V32C27.2106 30.7924 33.0973 24.1325 33.0973 16.0978Z" fill="#1877F2" />      </svg>
    );
};

export default FacebookIcon;


