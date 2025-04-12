import AfterPayIcon from "@/public/incons/landin-page/AfterPay";
import DocuSignIcon from "@/public/incons/landin-page/Docusign";
import GithubIcon from "@/public/incons/landin-page/GithubIcon";
import GumroadIcon from "@/public/incons/landin-page/GumroadIcon";
import MazeIcon from "@/public/incons/landin-page/MazeIcon";
import RipplingIcon from "@/public/incons/landin-page/RippklingIcon";
import React from "react";

export default function BusinessTrust() {
  return (
    <div className="w-full bg-white border border-[#DFE1E7] md:py-[34px] py-4  md:mt-0 relative z-10 md:-top-43">
      <div className="container px-5 2xl:px-0 mx-auto flex justify-between items-center">
        <div className="text-black flex flex-col gap-2 py-1 w-full md:w-[22%]">
          <h2 className="md:text-[36px] text-2xl font-bold leading-[120%] text-black">
            12,000+
          </h2>
          <p className="text-black text-base leading-[150%]">
            Business trust TagGrowth
          </p>
        </div>
        <div className="lg:mx-[78px] mx-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="84"
            viewBox="0 0 2 84"
            fill="none"
          >
            <path d="M1 0V83.5" stroke="#000000" />
          </svg>
        </div>
        <div className="flex md:flex-row flex-col md:gap-2 gap-2 items-center w-full justify-between [&_svg]:text-black [&_path]:fill-black">
          <span>
            <DocuSignIcon />
          </span>
          <span>
            <AfterPayIcon />
          </span>
          <span>
            <GithubIcon />
          </span>
          <span>
            <MazeIcon />
          </span>
          <span>
            <GumroadIcon />
          </span>
          <span>
            <RipplingIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
