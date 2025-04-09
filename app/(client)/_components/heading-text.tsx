import React from 'react'

export default function HeadingText({children}: { children: React.ReactNode}) {
  return (
    <div className='bg-gradient-to-b from-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent md:text-[42px] text-[28px] lg:text-[56px] text-center leading-[126%] font-semibold'>
        {children}
    </div>
  )
}
