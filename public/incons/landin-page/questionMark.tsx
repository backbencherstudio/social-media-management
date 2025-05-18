import React from 'react';

interface IconProps {
  className?: string;
}

const QuestionMarkIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M22.666 24.5729H17.3327L11.3993 28.5195C10.5193 29.1062 9.33268 28.4796 9.33268 27.4129V24.5729C5.33268 24.5729 2.66602 21.9063 2.66602 17.9063V9.90617C2.66602 5.90617 5.33268 3.2395 9.33268 3.2395H22.666C26.666 3.2395 29.3327 5.90617 29.3327 9.90617V17.9063C29.3327 21.9063 26.666 24.5729 22.666 24.5729Z" stroke="#04060F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 15.1458V14.8658C16.0004 13.9591 16.5604 13.4791 17.1204 13.0924C17.6671 12.7191 18.2137 12.2391 18.2137 11.3591C18.2137 10.1325 17.2271 9.14575 16.0004 9.14575C14.7737 9.14575 13.7871 10.1325 13.7871 11.3591" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.9947 18.3334H16.0067" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default QuestionMarkIcon;
