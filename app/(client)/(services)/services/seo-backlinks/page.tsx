import ReuseableHero from '@/app/(client)/_components/reuseable-hero';
import React from 'react';
import img from "@/public/service/banklink.png"
import BusinessTrust from '@/app/(client)/_components/business-trust';
import AfordableSeo from './_components/afordable-seo';
import OurApproach from './_components/our-approach';
import ProcessSteps from './_components/process-step';
import FrequentlyAsked from '@/app/(client)/_components/landing-page/frequently-asked';

const SeoBackLinkPage = () => {
    return (
        <div>
            <ReuseableHero header={`Premium SEO Backlinks\nFrom only $80 Each`} para={[
                "Improve your search rankings",
                "From high-quality DA20-65 websites",
                "Natural backlink placements"
            ]} img={img} />
            <BusinessTrust />
            <AfordableSeo />
            <OurApproach />
            <ProcessSteps />
            <FrequentlyAsked />
        </div>
    );
};

export default SeoBackLinkPage;