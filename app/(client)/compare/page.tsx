import React from 'react';
import CompareBanner from './_component/compare-banner';
import BusinessTrust from '../_components/business-trust';
import CompetitorTable from './_component/competitor-table';

const ComparePage = () => {
    return (
        <div>
            <CompareBanner />
            <BusinessTrust />
            <CompetitorTable />
        </div>
    );
};

export default ComparePage;