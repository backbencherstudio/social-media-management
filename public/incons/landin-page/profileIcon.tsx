import React from 'react';

interface profileIconProps {
    className?: string;
}

const ProfileIcon: React.FC<profileIconProps> = ({ className="" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
<path d="M19.6523 25.4L21.679 27.4266L25.7323 23.3733" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.6139 14.4934C16.4805 14.4801 16.3205 14.4801 16.1739 14.4934C13.0005 14.3867 10.4805 11.7867 10.4805 8.58675C10.4672 5.32008 13.1205 2.66675 16.3872 2.66675C19.6539 2.66675 22.3072 5.32008 22.3072 8.58675C22.3072 11.7867 19.7739 14.3867 16.6139 14.4934Z" stroke="#04060F" strokeWidth-="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M16.3852 29.0799C13.9585 29.0799 11.5452 28.4666 9.70516 27.2399C6.47849 25.0799 6.47849 21.5599 9.70516 19.4132C13.3718 16.9599 19.3852 16.9599 23.0518 19.4132" stroke="#04060F" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>

    );
};

export default ProfileIcon;
