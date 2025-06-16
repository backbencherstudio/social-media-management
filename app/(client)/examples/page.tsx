

import React from 'react';
import PostExample from './_components/post-content';
import ShortVideoExample from './_components/short-video';
import EmailDesign from './_components/email-design';
import BlogpostExample from './_components/blogpost-example';
import TrustedBrand from '../_components/trusted-brand';
import InstastoryExample from './_components/instastory-example';



const ExamplePages = () => {




    return (
        <div>
            <PostExample header='Examples of Social media post' />
            <ShortVideoExample />
            <InstastoryExample />
            <EmailDesign />
            <BlogpostExample/>
            <TrustedBrand bgcolor={false} />
        </div >
    );
};

export default ExamplePages;