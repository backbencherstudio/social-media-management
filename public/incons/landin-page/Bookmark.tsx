import React from 'react';

interface BookmarkIconProps {
    className?: string;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
            <path d="M15.4191 1H3.53339C2.22596 1 1.15625 2.024 1.15625 3.27556V21.48L9.47625 18.0667L17.7962 21.48V3.27556C17.7962 2.024 16.7265 1 15.4191 1Z" stroke="#4A4C56" strokeWidth="1.2" />
        </svg>
    );
};

export default BookmarkIcon;
