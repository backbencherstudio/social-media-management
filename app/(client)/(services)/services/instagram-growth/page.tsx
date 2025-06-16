import ReuseableHero from '@/app/(client)/_components/reuseable-hero';
import React from 'react';
import img from "@/public/instaGrowth.png"
import InstaGrowth from './_components/insta-growth';
import ModernInstaMarketing from './_components/modern-insta-marketing';
import InstastoryExample from '@/app/(client)/examples/_components/instastory-example';
import PostExample from '@/app/(client)/examples/_components/post-content';
import FrequentlyAsked from '@/app/(client)/_components/landing-page/frequently-asked';

const InstaGrowthPage = () => {
    return (
        <div>
            <ReuseableHero header={"Grow your Instagram with real & targeted followers"} para={[
                "Gain 100-400+ relevant followers per month",
                "Strategic follow/unfollow by experts (not bots)",
                "Strategic follow/unfollow by experts (not bots)"
            ]} img={img} />

            <InstaGrowth />
            <ModernInstaMarketing />
            <PostExample header="Examples of Instagram post" para = "Get your design & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises." />
            <InstastoryExample />
            <FrequentlyAsked />
        </div>
    );
};

export default InstaGrowthPage;