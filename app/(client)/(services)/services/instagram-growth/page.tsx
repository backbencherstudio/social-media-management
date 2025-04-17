import ReuseableHero from '@/app/(client)/_components/reuseable-hero';
import React from 'react';
import img from "@/public/instaGrowth.png"

const InstaGrowthPage = () => {
    return (
        <div>
            <ReuseableHero header={"Grow your Instagramwith real & targeted followers"}  para={[
    "Gain 100-400+ relevant followers per month",
    "Strategic follow/unfollow by experts (not bots)",
    "Strategic follow/unfollow by experts (not bots)"
  ]} img={img}  />
        </div>
    );
};

export default InstaGrowthPage;