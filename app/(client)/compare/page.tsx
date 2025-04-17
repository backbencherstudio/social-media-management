import React from 'react';
import CompareBanner from './_component/compare-banner';
import BusinessTrust from '../_components/business-trust';
import CompetitorTable from './_component/competitor-table';
import SocialMediaComparisonTable from './_component/social-media-compare';
import CreativityCompare from './_component/creativity-compare';
import MarketingService from '../_components/landing-page/marketing-service';
import TrustedBrand from '../_components/trusted-brand';
import FrequentlyAsked from '../_components/landing-page/frequently-asked';

const ComparePage = () => {
    return (
        <div>
            <CompareBanner />
            <BusinessTrust />
            <CompetitorTable />
            <SocialMediaComparisonTable />
            <CreativityCompare />
            <MarketingService />
            <TrustedBrand bgcolor={false} />
            <FrequentlyAsked />
        </div>
    );
};

export default ComparePage;