import React from "react";

interface BlackGalleryIconProps {
  className?: string;
}

const BlackGalleryIcon: React.FC<BlackGalleryIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M11.9993 29.3334H19.9993C26.666 29.3334 29.3327 26.6667 29.3327 20.0001V12.0001C29.3327 5.33341 26.666 2.66675 19.9993 2.66675H11.9993C5.33268 2.66675 2.66602 5.33341 2.66602 12.0001V20.0001C2.66602 26.6667 5.33268 29.3334 11.9993 29.3334Z" stroke="#777980" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.0007 13.3333C13.4734 13.3333 14.6673 12.1394 14.6673 10.6667C14.6673 9.19391 13.4734 8 12.0007 8C10.5279 8 9.33398 9.19391 9.33398 10.6667C9.33398 12.1394 10.5279 13.3333 12.0007 13.3333Z" stroke="#777980" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.56055 25.2668L10.1339 20.8535C11.1872 20.1468 12.7072 20.2268 13.6539 21.0402L14.0939 21.4268C15.1339 22.3202 16.8139 22.3202 17.8539 21.4268L23.4005 16.6668C24.4405 15.7735 26.1205 15.7735 27.1605 16.6668L29.3339 18.5335" stroke="#777980" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
};

export default BlackGalleryIcon;
