import React from "react";
import BlogCard from "./cards/blog-card";

export default function BlogPost() {
  return (
    <section
      className="mx-auto max-w-[1200px] flex flex-col gap-[48px] py-25 bg-[#F7F7F9]
       
       "
    >
      {/* content */}

      <div className=" px-20">
        <h2 className="text-[42px] text-center font-bold capitalize bg-gradient-to-b from-[rgba(0,0,0)] via-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent mb-2">
        Blog Post Examples
        </h2>

       

        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-5 mt-12">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            

           
        </div>
      </div>
    </section>
  );
}
