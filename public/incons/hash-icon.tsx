import React from 'react';

interface HashIconProps {
    className?: string;
}

const HashIcons: React.FC<HashIconProps> = ({ className = "" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none" className={className}>
            <mask id="mask0_5654_55301" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="24">
                <path d="M0.69043 0H27.3086V24H0.69043V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_5654_55301)">
                <path d="M11.1575 14.4676L9.75009 18.8909L9.36884 20.0869L8.12395 24H3.36259L4.97282 18.8909H0.69043L1.58134 14.4676H6.39611L7.18191 11.9994L7.57963 10.7267H12.3478L11.9433 11.9994L11.5467 13.2716L11.1734 14.4676H11.1575ZM24.2632 5.10852H23.0251L24.6347 0H19.8734L18.6285 3.9125L18.2472 5.10852L16.8393 9.53182H16.8245L16.4512 10.7278L16.0546 12L15.6501 13.2727H20.4188L20.816 12L21.6018 9.53182H26.4518L27.3075 5.10852H24.2632ZM20.045 14.4676H12.4115L12.2972 14.8307L11.0063 18.8909H13.8455L13.4683 20.0869L12.2347 24H16.9961L18.241 20.0869L18.6222 18.8909H23.4024L24.258 14.4676H20.045ZM7.95236 9.53068H15.5865L15.7007 9.16761L16.9916 5.10795H14.1524L14.5296 3.91136L15.7632 0H11.0018L9.75577 3.9125L9.37452 5.10852H4.62963L3.73872 9.53182H7.95236V9.53068Z" fill="black" />
            </g>
        </svg>
    );
};

export default HashIcons;
