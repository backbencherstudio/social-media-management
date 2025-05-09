import React from 'react'
import BlogHeader from './_components/header'
import BlogBanner from './_components/banner'
import AllBlogs from './_components/all-blogs'

export default function Blog() {
  return (
    <div className='max-w-[1200px] mx-auto'>
    <BlogHeader/>
    <BlogBanner/>
    <AllBlogs/>
    
    </div>
  )
}
