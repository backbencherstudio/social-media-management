import React from "react";

interface GalleryIconProps {
  className?: string;
}

const GalleryIcon: React.FC<GalleryIconProps> = ({
  className,
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
    <path d="M7.5 16.5H12C15.75 16.5 17.25 15 17.25 11.25V6.75C17.25 3 15.75 1.5 12 1.5H7.5C3.75 1.5 2.25 3 2.25 6.75V11.25C2.25 15 3.75 16.5 7.5 16.5Z" stroke="#3A5EFF" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 7.5C8.32843 7.5 9 6.82843 9 6C9 5.17157 8.32843 4.5 7.5 4.5C6.67157 4.5 6 5.17157 6 6C6 6.82843 6.67157 7.5 7.5 7.5Z" stroke="#3A5EFF" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.75195 14.2124L6.44945 11.7299C7.04195 11.3324 7.89695 11.3774 8.42945 11.8349L8.67695 12.0524C9.26195 12.5549 10.207 12.5549 10.792 12.0524L13.912 9.37492C14.497 8.87242 15.442 8.87242 16.027 9.37492L17.2495 10.4249" stroke="#3A5EFF" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default GalleryIcon;
