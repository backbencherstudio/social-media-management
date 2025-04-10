import React from 'react';
import Image from 'next/image';

interface VideoComponentProps {
  src: string;
  thumbnail: string;
  title: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, thumbnail, title }) => {
  const handleVideoClick = () => {
    // Add video playing logic here
    console.log(`Playing video: ${src}`);
  };

  return (
    <div 
      className="relative group cursor-pointer rounded-lg overflow-hidden"
      onClick={handleVideoClick}
    >
      <div className="aspect-video relative">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-black" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default VideoComponent;