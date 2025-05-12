import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoMdAddCircle } from "react-icons/io";
import Heading from "./heading-text";
import ParagraphText from "./paragraph-text";
import { BsArrowUpRightCircle } from "react-icons/bs";

interface ReuseableHeroProps {
  header: string;
  para: string[]; // <-- update this
  img: { src: string };
}

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
  >
    <path
      d="M7.5 14C7.5 14.8284 8.17157 15.5 9 15.5C9.82843 15.5 10.5 14.8284 10.5 14V11H13.5C14.3284 11 15 10.3284 15 9.5C15 8.67157 14.3284 8 13.5 8H10.5V5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5V8L4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11L7.5 11V14Z"
      stroke="#28303F"
      strokeWidth="1.125"
      strokeLinejoin="round"
    />
  </svg>
);

const ReuseableHero: React.FC<ReuseableHeroProps> = ({ img, header, para }) => {
  console.log(para.length > 2);

  return (
    <div className="max-w-[1200px] mx-auto px-5 2xl:px-0 mt-6 md:mb-10 mb-8">
      <div className="flex gap-4 md:gap-6 lg:gap-8 md:items-center w-full md:justify-between md:flex-row flex-col">
        <div className="flex flex-col w-full">
          <Heading
            text={header}
            className="text-2xl md:text-[28px] lg:text-[38px] xl:text-[42px]  font-bold text-[#1D1D1F] whitespace-pre-line"
          />
          <div className="flex flex-col gap-2 md:mt-6 mt-4">
            {para.map((text, ind) => (
              <div className="flex items-center gap-4" key={ind}>
                {para.length > 2 && <span>{icon}</span>}
                <ParagraphText
                  paraText={text}
                  className=" mx-auto  text-sm sm:text-base text-[#1D1F2C] "
                />
              </div>
            ))}
          </div>
          <div className="lg:mt-9 md:mt-6 mt-4 flex gap-4">
            <Link href="">
              <div className="border leading-[150%] lg:px-9 md:px-4 px-2 lg:py-4 md:py-3 py-2 flex md:text-base text-sm cursor-pointer items-center justify-start   rounded-[8px] gap-2 font-semibold  duration-500 hover:bg-[#070707] hover:text-white">
                <span className="font-serotiva text-sm lg:text-base ">
                  Get Started
                </span>
                <BsArrowUpRightCircle className="ml-2 w-5 h-5 " />
              </div>
            </Link>
            <Link href="">
              <div className="border leading-[150%] lg:px-9 md:px-4 px-2 lg:py-4 md:py-3 py-2 flex md:text-base text-sm cursor-pointer items-center justify-start   rounded-[8px] gap-2 font-semibold duration-500 hover:bg-[#070707] hover:text-white">
                <span className="font-serotiva text-sm lg:text-base ">
                  Schedule a Demo
                </span>
                <IoMdAddCircle className="ml-2 w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
        <div className=" w-full overflow-hidden rounded-lg">
          <Image
            src={img.src}
            width={532}
            height={316}
            alt={`illustration`}
            className="w-full h-auto object-cover transition-transform hover:scale-[1.02] duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ReuseableHero;
