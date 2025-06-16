import React from 'react';

interface iconProps {
  className?: string;
}

const WritingIcon: React.FC<iconProps> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M14.666 2.66675H11.9993C5.33268 2.66675 2.66602 5.33341 2.66602 12.0001V20.0001C2.66602 26.6667 5.33268 29.3334 11.9993 29.3334H19.9993C26.666 29.3334 29.3327 26.6667 29.3327 20.0001V17.3334" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3865 4.02676L10.8798 14.5334C10.4798 14.9334 10.0798 15.7201 9.99984 16.2934L9.42651 20.3068C9.21317 21.7601 10.2398 22.7734 11.6932 22.5734L15.7065 22.0001C16.2665 21.9201 17.0532 21.5201 17.4665 21.1201L27.9732 10.6134C29.7865 8.80009 30.6398 6.69343 27.9732 4.02676C25.3065 1.36009 23.1998 2.21343 21.3865 4.02676Z" stroke="#04060F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.8809 5.5332C20.7742 8.71987 23.2675 11.2132 26.4675 12.1199" stroke="#04060F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default WritingIcon;
