import React from 'react';
import Heading from '../../_components/heading-text';
import Email from '../../_components/_email/email';

const EmailDesign = () => {
    return (
        <div className='max-w-[1200px] mx-auto lg:py-[100px] md:py-[80px] py-[60px]  px-5 2xl:px-0'>
            <Heading
                text="Email Design Examples"
                className="text-center text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
            />
            <div className='md:mt-12 mt-8'>
                <Email />
            </div>
        </div>
    );
};

export default EmailDesign;