import React from "react";
import BlogCard from "./cards/blog-card";
import HomeServices from "@/public/incons/landin-page/HomeIcon";
import MentalHealth from "@/public/incons/landin-page/Mentalhealth";
import Agriculture from "@/public/incons/landin-page/Agriculture";
import Tourism from "@/public/incons/landin-page/Tourism";

export default function BlogPost() {
  const blogs = [
    {
      icon: <HomeServices />,
      title: "Home Services",
      info: "Luxurious Bathroom Design Ideas For Small Spaces",
      word: "1200",
      link: "",
    },
    {
      icon: <MentalHealth/>,
      title: "Mental Health",
      info: "Luxurious Bathroom Design Ideas For Small Spaces",
      word: "1000",
      link: "",
    },
    {
      icon: <Agriculture />,
      title: "Home Agriculture",
      info: "Luxurious Bathroom Design Ideas For Small Spaces",
      word: "1500",
      link: "",
    },
    {
      icon: <Tourism />,
      title: "Tourism",
      info: "Luxurious Bathroom Design Ideas For Small Spaces",
      word: "1800",
      link: "",
    },
  ];

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
          
      {
        blogs.map(blog => <BlogCard blog={blog}></BlogCard>)
      }
        </div>
      </div>
    </section>
  );
}
