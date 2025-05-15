import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import ContentCard from "./cards/content-card";
import ProfileIcon from "@/public/incons/landin-page/profileIcon";
import PeopleIcon from "@/public/incons/landin-page/peopleIcon";
import MessengerIcon from "@/public/incons/landin-page/messengerIcon";
import LikeIcon from "@/public/incons/like-icon";
import StartupIcon from "@/public/incons/landin-page/startupIcon";

export default function BlogContent() {
  const contents = [
    {
      icon: <ProfileIcon />,
      text: "Establish your authorityand expertise in the field",
    },
    {
      icon: <PeopleIcon  />,
      text: "Get more leads in a cost-effective way",
    },
    {
      icon: <MessengerIcon/>,
      text: "Increase revenue,closed deals, and conversions.",
    },
    {
      icon: <LikeIcon/>,
      text: "Google loves regular updates and new content",
    },
    {
      icon: <StartupIcon/>,
      text: "More content increases traffic and keyword rankings",
    },
  ];

  return (
    <section className="mx-auto max-w-[1200px] flex flex-col gap-[48px] py-25">
      {/* content */}

      <div className="text-center px-20">
        <h2 className="text-[42px] font-bold capitalize bg-gradient-to-b from-[#0D0D0D]  to-[#7C7C85] bg-clip-text text-transparent mb-2">
          The importance of blog content
        </h2>

        <p className="text-center text-[#1D1F2C] max-w-[650px] mx-auto">
          Keep in mind that your website exists online as a living. breathing
          thing. Search engines will adore you if you frequently update your
          website with good content.
        </p>

        <button className="flex h-12 px-4 py-3 justify-center items-center gap-2 rounded-lg bg-[#070707] text-white hover:bg-[#1a1a1a] transition mt-5 mx-auto">
          <span>Schedule demo</span>

          {/* <FaPlus className="text-black bg-white rounded-full p-1" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M18.8307 10.0001C18.8307 14.6025 15.0998 18.3334 10.4974 18.3334C5.89502 18.3334 2.16406 14.6025 2.16406 10.0001C2.16406 5.39771 5.89502 1.66675 10.4974 1.66675C15.0998 1.66675 18.8307 5.39771 18.8307 10.0001Z"
              fill="white"
            />
            <path
              d="M10.4974 6.66675V13.3334M13.8307 10.0001H7.16406M10.4974 18.3334C15.0998 18.3334 18.8307 14.6025 18.8307 10.0001C18.8307 5.39771 15.0998 1.66675 10.4974 1.66675C5.89502 1.66675 2.16406 5.39771 2.16406 10.0001C2.16406 14.6025 5.89502 18.3334 10.4974 18.3334Z"
              stroke="#1D1D1F"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* card section */}

      <div className="grid grid-cols-1 h-full   md:grid-cols-5  gap-6 place-items-center ">
        {contents.map((content, idx) => (
          <ContentCard key={idx} content={content}></ContentCard>
        ))}
      </div>
    </section>
  );
}

const profileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
  >
    <path
      d="M19.6523 25.4L21.679 27.4266L25.7323 23.3733"
      stroke="#04060F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6139 14.4934C16.4805 14.4801 16.3205 14.4801 16.1739 14.4934C13.0005 14.3867 10.4805 11.7867 10.4805 8.58675C10.4672 5.32008 13.1205 2.66675 16.3872 2.66675C19.6539 2.66675 22.3072 5.32008 22.3072 8.58675C22.3072 11.7867 19.7739 14.3867 16.6139 14.4934Z"
      stroke="#04060F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.3852 29.0799C13.9585 29.0799 11.5452 28.4666 9.70516 27.2399C6.47849 25.0799 6.47849 21.5599 9.70516 19.4132C13.3718 16.9599 19.3852 16.9599 23.0518 19.4132"
      stroke="#04060F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
