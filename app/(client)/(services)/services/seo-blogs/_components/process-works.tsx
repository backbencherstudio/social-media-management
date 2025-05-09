import ProfileIcon from "@/public/incons/landin-page/profileIcon";
import ProcessCard from "./cards/process-card";
import OnboardingIcon from "@/public/incons/landin-page/onboarding";
import IdeationIcon from "@/public/incons/landin-page/ideation";
import WritingIcon from "@/public/incons/landin-page/writingIcon";
import PublishIcon from "@/public/incons/landin-page/publishIcon";

export default function ProcessWorks() {
  const contents = [
    {
      id: 1,
      icon: <OnboardingIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
    {
      id: 2,
      icon: <IdeationIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
    {
      id: 3,
      icon: <WritingIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
    {
      id: 4,
      icon: <PublishIcon />,
      text: "Complete a questionnaire to guide our content writing & keyword research",
    },
  ];

  return (
    <section
      className="mx-auto max-w-[1200px] flex flex-col gap-[48px] py-25 bg-[#F7F7F9]
    
    "
    >
      {/* content */}

      <div className="text-center px-20">
        <h2 className="text-[42px] font-bold capitalize bg-gradient-to-b from-[rgba(0,0,0)] via-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent mb-2">
          How our process works
        </h2>

        <p className="text-center text-[#1D1F2C] max-w-[650px] mx-auto">
          We have a four-step process that helps us drive results
        </p>

        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-6 mt-12">
          {/* <ProcessCard /> */}
          {contents.map((content) => (
            <ProcessCard content={content}></ProcessCard>
          ))}
        </div>
      </div>
    </section>
  );
}
