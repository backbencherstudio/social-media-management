import React from 'react';

interface IconProps {
  className?: string;
}

const OnboardingIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M22.627 16.3333V22.3333C22.627 27.3333 20.627 29.3333 15.627 29.3333H9.62695C4.62695 29.3333 2.62695 27.3333 2.62695 22.3333V16.3333C2.62695 11.3333 4.62695 9.33325 9.62695 9.33325H15.627C20.627 9.33325 22.627 11.3333 22.627 16.3333Z" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.2936 7.80008V12.2001C29.2936 15.8667 27.827 17.3334 24.1603 17.3334H22.627V16.3334C22.627 11.3334 20.627 9.33341 15.627 9.33341H14.627V7.80008C14.627 4.13341 16.0936 2.66675 19.7603 2.66675H24.1603C27.827 2.66675 29.2936 4.13341 29.2936 7.80008Z" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default OnboardingIcon;
