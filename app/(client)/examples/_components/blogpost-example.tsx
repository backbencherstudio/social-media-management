import React from 'react';
import Heading from '../../_components/heading-text';
import Blogs from '../../_components/_blogs/blogs';

const BlogpostExample = () => {
    return (
        <div className='bg-[#F7F7F9]'>
            <div className='max-w-[1200px] mx-auto lg:py-[100px] md:py-[80px] py-[60px]  px-5 2xl:px-0'>
                <Heading
                    text="Blog Post Examples"
                    className="text-center text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                />
                <div>
                    <Blogs />
                </div>
            </div>
        </div>
    );
};

export default BlogpostExample;