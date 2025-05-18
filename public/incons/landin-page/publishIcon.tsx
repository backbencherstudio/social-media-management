import React from 'react';

interface IconProps {
  className?: string;
}

const PublishIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M21.92 11.8665C26.72 12.2798 28.68 14.7465 28.68 20.1465V20.3198C28.68 26.2798 26.2933 28.6665 20.3333 28.6665H11.6533C5.69331 28.6665 3.30664 26.2798 3.30664 20.3198V20.1465C3.30664 14.7865 5.23997 12.3198 9.95997 11.8798" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 20.0002V4.8269" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.4665 7.79992L15.9999 3.33325L11.5332 7.79992" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default PublishIcon;
