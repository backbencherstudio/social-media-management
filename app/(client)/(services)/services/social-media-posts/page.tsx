import React from 'react'
import Banner from './_components/banner'
import BusinessTrust from '@/app/(client)/_components/business-trust'
import Pricing from '@/app/(client)/pricing-and-package/_components/pricing'

export default function SocialMediaPost() {
  return (
    <div>
      <Banner/>
      <BusinessTrust/>
      <Pricing/>
    </div>
  )
}
