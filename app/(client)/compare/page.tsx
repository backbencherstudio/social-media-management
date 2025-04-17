import React from 'react';
import CompareBanner from './_component/compare-banner';
import BusinessTrust from '../_components/business-trust';
import CompetitorTable from './_component/competitor-table';
import SocialMediaComparisonTable from './_component/social-media-compare';
import CreativityCompare from './_component/creativity-compare';

const ComparePage = () => {
    return (
        <div>
            <CompareBanner />
            <BusinessTrust />
            <CompetitorTable />
            <SocialMediaComparisonTable />
            <CreativityCompare />
        </div>
    );
};

export default ComparePage;