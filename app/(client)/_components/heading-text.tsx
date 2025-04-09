import React from 'react'

interface HeadingProps {
  text: React.ReactNode;
  className?: string;
}

export default function Heading({ text, className = "" }: HeadingProps) {
  return (
    <h2 className={`bg-gradient-to-b from-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent text-center leading-[126%] ${className}`}>
      {text}
    </h2>
  )
}
