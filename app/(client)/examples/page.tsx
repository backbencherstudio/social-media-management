

import React from 'react';
import Heading from '../_components/heading-text';
import PostExample from './_components/post-content';
import ShortVideoExample from './_components/short-video';
import Email from '../_components/_email/email';
import EmailDesign from './_components/email-design';
import BlogpostExample from './_components/blogpost-example';



const ExamplePages = () => {




    return (
        <div>
            <PostExample />
            <ShortVideoExample />
            <EmailDesign />
            <BlogpostExample/>
        </div >
    );
};

export default ExamplePages;