import React from 'react'
import Heading from '../../_components/heading-text'
import ParagraphText from '../../_components/paragraph-text'

export default function Banner() {
  return (
    <div className='container mx-auto text-center pt-[100px] pb-14'>
        <Heading text="Affordable Marketing Services" className='text-[42px] mb-4'/>
        <ParagraphText paraText="Elite Creative Talent | 80% More Cost-Effective than Agencies | Work with Real Experts, Not AI" className='text-[1D1F2C] '/>
    </div>
  )
}
