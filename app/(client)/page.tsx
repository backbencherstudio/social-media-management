import React from 'react'
import Hero from './_components/landing-page/hero'
import ExampleOfWork from './_components/landing-page/ExampleOfWork'
import ExampleWithDynamicData from './_components/landing-page/Example-useages'




export default function HomePage() {
  return (
    <div>
      <Hero />
      <ExampleOfWork />
      {/* <ExampleWithDynamicData /> */}

    </div>
  )
}
