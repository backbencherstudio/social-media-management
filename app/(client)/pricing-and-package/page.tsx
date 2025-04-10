import React from 'react'
import Banner from './_components/banner'
import Pricing from './_components/pricing'

export default function PricingAndPackage() {
  return (
    <div className="min-h-screen w-full px-4">
      <Banner/>
      <div className="sm:px-6 lg:px-8">
        <Pricing/>
      </div>
    </div>
  )
}
