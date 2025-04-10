import React from 'react';

interface HeartIconProps {
    className?: string;
}

const HeartIcons: React.FC<HeartIconProps> = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
            <path d="M6.41697 0C2.71474 0 0.203125 3.42304 0.203125 7.19568C0.203125 13.663 5.18475 16.3286 11.5502 20.48C17.9156 16.3286 22.8972 13.663 22.8972 7.19568C22.8972 3.42304 20.3856 0 16.6833 0C14.3004 0 12.3418 1.34737 11.5502 2.15578C10.7585 1.34737 8.7999 0 6.41697 0Z" fill="#F0304E" />
        </svg>
    );
};

export default HeartIcons;
