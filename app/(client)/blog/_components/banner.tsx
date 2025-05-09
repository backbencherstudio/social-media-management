import ImageMasonry from "@/components/reusable/ImageMasonry";
import FacebookIcon from "@/public/incons/landin-page/facebook";
import InstaIcon from "@/public/incons/landin-page/insta-icon";
import LinkdinIcon from "@/public/incons/landin-page/LinkdinIcon";
import TiktokIcon from "@/public/incons/landin-page/ToktokIcon";
import TwitterIcon from "@/public/incons/landin-page/TwitterIcon";
import YoutubeIcon from "@/public/incons/landin-page/youtubeIcon";

import img1 from "@/public/landing-page/image2.png";
import img2 from "@/public/landing-page/image3.png";
import img3 from "@/public/landing-page/image4.png";
import img4 from "@/public/landing-page/image5.png";
import img5 from "@/public/landing-page/image6.png";
import img6 from "@/public/landing-page/image7.png";
import img7 from "@/public/landing-page/image8.png";
import Link from "next/link";
import { IoMdAddCircle } from "react-icons/io";
import Heading from "../../_components/heading-text";

const images = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
];

export default function BlogBanner() {
  return (
    <section className="flex flex-col md:flex-row mb-12 md:mb-25 item-center justify-between md:gap-15">
      {/* left */}
      <div className="w-full md:w-1/2  border rounded-lg border-[#ECEFF3] h-[452px] overflow-hidden shadow-sm">
      <h2 className="text-center mt-4 text-4xl font-semibold">From Just $99/Month!</h2>

        <div className="leading-[150%] md:mt-5 mt-4 tracking-[.16px] flex md:flex-row flex-col items-center gap-2 md:gap-0 mb-10 justify-center">
          <p className="text-[#1D1F2C] mr-4">Supported social media</p>
          <div className="flex ">
            <span>
              {" "}
              <FacebookIcon />
            </span>
            <span className="-ml-[6px]">
              <InstaIcon />
            </span>
            <span className="-ml-[6px]">
              <LinkdinIcon />
            </span>
            <span className="-ml-[6px]">
              <YoutubeIcon />
            </span>
            <span className="-ml-[6px]">
              <TiktokIcon />
            </span>
            <span className="-ml-[6px]">
              <TwitterIcon />
            </span>
          </div>
          <div className="md:block hidden ">
            <svg
              className="stroke-1 mx-5"
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="22"
              viewBox="0 0 2 22"
              fill="none"
            >
              <path d="M1.09827 0L1.09827 22" stroke="#D2D2D5" />
            </svg>
          </div>
          <p className="text-[#4A4C56]">Cancel anytime</p>
        </div>
        <div className="relative">
          <div className="md:mt-12 mt-10 flex items-center justify-center absolute -bottom-12 left-40">
            <Link href="/">
              <div className="bg-black leading-[150%] px-4 py-2 inline-flex cursor-pointer items-center rounded-[8px] gap-2 font-semibold hover:bg-gray-800 text-white ">
                <span className="font-serotiva text-sm md:text-base">
             
                  Schedule a free demo call
                </span>
                <IoMdAddCircle className="ml-2 w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
        <div className=" mx-auto 2xl:px-0 px-5 mt-6 md:mt-0">
          <div className="relative ">
            <ImageMasonry images={images} />
            {/* White gradient overlay at the bottom */}
          </div>
        </div>
      </div>

      {/* right */}

      <div className="w-full md:w-1/2 py-12">
        <Heading
          text={
            "12 Top Social Media Management Agencies & Services for Impact in 2025"
          }
          className="text-[42px] "
        ></Heading>
        <p className="mt-4">
          Check out the 12 best social media management agencies offering
          tailored services to boost engagement and business growth across
          platforms.
        </p>

        <div className="flex gap-2.5 items-center mt-15">
          <h5>January 27, 2025</h5>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
            >
              <circle cx="4" cy="4.5" r="4" fill="#D9D9D9" />
            </svg>
          </span>
          <p>5 min read</p>
        </div>
      </div>
    </section>
  );
}
