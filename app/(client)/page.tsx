import React from 'react'
import Hero from './_components/landing-page/hero'
import ExampleOfWork from './_components/landing-page/ExampleOfWork'
import AllServices from './_components/landing-page/all-services'
import TrustedBrand from './_components/trusted-brand'
import HowToWork from './_components/landing-page/how-to-work'





export default function HomePage() {
  return (
    <div>
      <Hero />
      <ExampleOfWork />
      <AllServices />
      <TrustedBrand bgcolor={true} />
      <HowToWork />
    </div>
  )
}
