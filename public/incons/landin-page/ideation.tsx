import React from 'react';

interface iconProps {
  className?: string;
}

const IdeationIcon: React.FC<iconProps> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={className}>
      <path d="M18.4673 15.7732V19.4132C18.4673 22.4532 17.254 23.6665 14.214 23.6665H10.5873C7.56065 23.6665 6.33398 22.4532 6.33398 19.4132V15.7732C6.33398 12.7465 7.54732 11.5332 10.5873 11.5332H14.2273C17.254 11.5332 18.4673 12.7465 18.4673 15.7732Z" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.6665 10.5733V14.2133C23.6665 17.2533 22.4532 18.4666 19.4132 18.4666H18.4665V15.7733C18.4665 12.7466 17.2532 11.5333 14.2132 11.5333H11.5332V10.5733C11.5332 7.53325 12.7465 6.33325 15.7865 6.33325H19.4265C22.4532 6.33325 23.6665 7.54659 23.6665 10.5733Z" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.3333 19C28.3333 24.16 24.16 28.3333 19 28.3333L20.4 26" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.66602 11.0001C1.66602 5.84008 5.83935 1.66675 10.9993 1.66675L9.59935 4.00008" stroke="#04060F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default IdeationIcon;
