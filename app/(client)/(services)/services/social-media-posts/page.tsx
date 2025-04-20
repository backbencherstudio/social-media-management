import React from 'react'
import BusinessTrust from '@/app/(client)/_components/business-trust'
import Pricing from '@/app/(client)/pricing-and-package/_components/pricing'
import HowItWork from './_components/how-it-work'
import ReuseableHero from '@/app/(client)/_components/reuseable-hero'
import img from "@/public/img/social-media-posts/banner.png"
import PostExample from '@/app/(client)/examples/_components/post-content'
import FrequentlyAsked from '@/app/(client)/_components/landing-page/frequently-asked'


export default function SocialMediaPostsPage() {
  return (
    <div>
      {/* <Banner/> */}
      <ReuseableHero header={"Professional Post Design Services Starting at Just $149/mo to $99/mo"} para = {["Take your email marketing to the next level with stunning emails that convert. Made by our team of copywriters, designers, and email experts."]} img={img}  />
      <BusinessTrust/>
      <Pricing  />
      <HowItWork/>  {/* need to work this */}
      <PostExample header='Examples of Social media post' para = "Get your design & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises." />
      <FrequentlyAsked />
    </div>
  )
}
