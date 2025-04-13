import React from 'react'
import Banner from './_components/banner'
import BusinessTrust from '@/app/(client)/_components/business-trust'
import Pricing from '@/app/(client)/pricing-and-package/_components/pricing'
import HowItWork from './_components/how-it-work'

export default function SocialMediaPost() {
  return (
    <div>
      <Banner/>
      <BusinessTrust/>
      <Pricing/>
      <HowItWork/>
    </div>
  )
}
