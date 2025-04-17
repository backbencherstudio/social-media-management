import React from 'react';

interface TwitterIconProps {
    className?: string;
}

const TwitterIcon: React.FC<TwitterIconProps> = ({ className="" } ) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className={className}>
            <rect x="1.29827" y="1.2" width="33.6" height="33.6" rx="16.8" fill="black" />
            <rect x="1.29827" y="1.2" width="33.6" height="33.6" rx="16.8" stroke="white" strokeWidth="1.6" />
            <path d="M22.5618 10.7969H24.9368L19.7482 16.7271L25.8522 24.7969H21.0728L17.3294 19.9026L13.0461 24.7969H10.6697L16.2195 18.4538L10.3639 10.7969H15.2646L18.6483 15.2704L22.5618 10.7969ZM21.7283 23.3753H23.0443L14.5495 12.1437H13.1373L21.7283 23.3753Z" fill="white" />
        </svg>
    );
};

export default TwitterIcon;


