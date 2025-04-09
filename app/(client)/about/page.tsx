import React from 'react'
import HeadingText from '../_components/heading-text'
import ParagraphText from '../_components/paragraph-text'

export default function About() {
  return (
    <div className='container px-5 2xl:px-0'>
      <div className='max-w-[776px] mx-auto mt-20 flex flex-col gap-6'>

      <HeadingText 
        text={<>Professional and Cost-Effective Social Media Management Solutions</>} 
        className="text-[24px] md:text-[36px] lg:text-[42px] "
        />
       <ParagraphText paraText="Small businesses often struggle with time and resources for effective marketing. Our all-in-one solution combines advanced technology, data-driven strategies, and expert support—all for just $99/month." className='text-center'/>
        </div>
    </div>
  )
}
