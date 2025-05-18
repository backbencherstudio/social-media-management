import PenIcon from "@/public/incons/landin-page/PenIcon";
import SeoCard from "./cards/seo-card";
import QuestionMarkIcon from "@/public/incons/landin-page/questionMark";
import { info } from "console";
import ProfileIcon from "@/public/incons/landin-page/profileIcon";
import StartupIcon from "@/public/incons/landin-page/startupIcon";

export default function SeoContent() {
  const contents = [
    {
      logo: <PenIcon />,
      title: "Make content that's actually helpful",
      info: "We provide long-form content on your blog in response to queries Google users pose about your goods or services. By doing this, you can be found on Google for any queries relating to your company.",
    },

    {
      logo: <QuestionMarkIcon />,
      title: 'Know the "why" behind the search',
      info: "Google is continually determining the purpose of that search Google then displays the results it believes match the user's intent. So you must fully comprehend search intent if you want to rank highly.",
    },
    {
      logo: <ProfileIcon />,
      title: "Cover everything they want to know",
      info: "You must address all the topics searchers are looking for in to earn a spot on Google's first page. Researching the popular subheadings and subtopics helps us achieve this..",
    },
    {
      logo: <StartupIcon />,
      title: "Find relevant topics with keyword research",
      info: 'When it comes to SEO, we adhere to the principle of "measure three times, cut once." To achieve the best results, we take the time to ensure that our SEO is founded in research and data..',
    },
  ];

  return (
    <section
      className="mx-auto max-w-[1200px] flex flex-col gap-[48px] py-25 
       
       "
    >
      {/* content */}

      <div className="text-center px-20">
        <h2 className="text-[42px] font-bold capitalize bg-gradient-to-b from-[rgba(0,0,0)] via-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent mb-2">
          The 4 pillars of excellent SEO content
        </h2>

        <p className="text-center text-[#1D1F2C] max-w-[750px] mx-auto">
          Since 2016, our team of strategists, copywriters, and SEO specialists
          has ranked blogs in competitive niches. Since then, a great deal has
          changed and is still changing. What to anticipate from our SEO blog
          writing service is listed below.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* <SeoCard /> */}
          {contents.map((content) => (
            <SeoCard content={content}></SeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
