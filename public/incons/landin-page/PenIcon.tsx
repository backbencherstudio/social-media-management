import React from 'react';

interface IconProps {
  className?: string;
}

const PenIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M17.6792 4.79988L6.73248 16.3865C6.31915 16.8265 5.91915 17.6932 5.83915 18.2932L5.34582 22.6132C5.17248 24.1732 6.29248 25.2399 7.83915 24.9732L12.1325 24.2399C12.7325 24.1332 13.5725 23.6932 13.9858 23.2399L24.9325 11.6532C26.8258 9.65321 27.6792 7.37322 24.7325 4.58655C21.7992 1.82655 19.5725 2.79988 17.6792 4.79988Z" stroke="#04060F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8535 6.7334C16.4268 10.4134 19.4135 13.2267 23.1202 13.6001" stroke="#04060F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 29.3333H28" stroke="#04060F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default PenIcon;
