import React from 'react';

interface HashTagIconProps {
    className?: string;
}

const HashTagIcon: React.FC<HashTagIconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <g clipPath="url(#clip0_5654_54533)">
                <circle cx="25.8031" cy="25.6" r="25.1" fill="#F6F8FA" stroke="#DFE1E7" />
                <mask id="mask0_5654_54533" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="15" y="16" width="23" height="20">
                    <path d="M15 16H37.1818V36H15V16Z" fill="white" />
                </mask>
                <g mask="url(#mask0_5654_54533)">
                    <path d="M23.7225 28.0563L22.5497 31.7424L22.232 32.7391L21.1946 36H17.2268L18.5687 31.7424H15L15.7424 28.0563H19.7547L20.4096 25.9995L20.741 24.9389H24.7145L24.3774 25.9995L24.0469 27.0597L23.7358 28.0563H23.7225ZM34.6439 20.2571H33.6122L34.9536 16H30.9858L29.9484 19.2604L29.6307 20.2571L28.4574 23.9432H28.4451L28.134 24.9399L27.8035 26L27.4664 27.0606H31.4403L31.7713 26L32.4261 23.9432H36.4678L37.1809 20.2571H34.6439ZM31.1288 28.0563H24.7675L24.6723 28.3589L23.5966 31.7424H25.9626L25.6482 32.7391L24.6203 36H28.5881L29.6255 32.7391L29.9432 31.7424H33.9266L34.6397 28.0563H31.1288ZM21.0516 23.9422H27.4134L27.5085 23.6397L28.5843 20.2566H26.2183L26.5327 19.2595L27.5606 16H23.5928L22.5545 19.2604L22.2367 20.2571H18.2827L17.5402 23.9432H21.0516V23.9422Z" fill="black" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_5654_54533">
                    <rect width="51.2" height="51.2" fill="white" transform="translate(0.203125)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default HashTagIcon;
