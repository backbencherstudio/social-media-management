import { Content } from "next/font/google";
import {
  facebookLogo,
  imageLogo,
  instagramLogo,
  linkedinLogo,
  linkLogo,
  videoLogo,
} from "./logos";
import { bg, vi } from "date-fns/locale";
import AudienceDemographics from "./AudienceDemographics";

export default function Performance() {
  const platformPerformanceData = [
    {
      title: "Facebook",
      engagementRate: "45%",
      likes: "2.4K",
      comments: "1.2K",
      shares: "800",
    },
    {
      title: "Instagram",
      engagementRate: "50%",
      likes: "3.5K",
      comments: "2.1K",
      shares: "1.5K",
    },
    {
      title: "Twitter",
      engagementRate: "70%",
      likes: "1.8K",
      comments: "900",
      shares: "600",
    },
  ];

  const contentTypePerformance = [
    {
      title: "Images",
      performance: "45%",
    },
    {
      title: "Videos",
      performance: "30%",
    },
    {
      title: "Links",
      performance: "15%",
    },
    {
      title: "Text",
      performance: "10%",
    },
  ];

  return (
    <section className="my-4  flex flex-col md:flex-row gap-4 rounded-lg p-3">
      {/* Left side: platfrom performance */}
      <div className="p-4 w-full md:w-1/2 rounded-xl bg-white">
        <h3 className="text-[20px] font-semibold">Platform Performance</h3>
        <div className="grid grid-cols-1 gap-4 mt-2">
          {platformPerformanceData.map((data, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              {/* Platform name and logo */}
              <div className="inline-flex items-center rounded-full border-[#E9E9EA] mb-5 gap-1.5 border py-1 px-2.5">
                {getPlatformLogo(data.title)}
                <p className="text-sm">{data.title}</p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h4>Engagement Rate</h4>
                <h4>{data.engagementRate}</h4>
              </div>
              <div className="h-1 w-full bg-gray-200 rounded-full mb-5">
                <div
                  className={`h-1 rounded-full ${
                    data.title === "Facebook"
                      ? "bg-[#1877F2]"
                      : data.title === "Instagram"
                      ? "bg-[#FD65A9]"
                      : "bg-[#2E8EBD]"
                  }`}
                  style={{ width: data.engagementRate }}
                ></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <PerformanceCard title="Likes" count={data.likes} />
                <PerformanceCard title="Comments" count={data.comments} />
                <PerformanceCard title="Shares" count={data.shares} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Content type performance & Audience Demographics */}

      <div className="w-full md:w-1/2">
        {/* Content type performance */}
        <div className="p-4  rounded-xl bg-white">
          <h3 className="text-[20px] font-semibold">
            Content Type Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {/* <ContentPerformanceCard title="Images" performance="45%" />
             */}
            {contentTypePerformance.map((data, index) => {
              return (
                <ContentPerformanceCard
                  key={index}
                  title={data.title}
                  performance={data.performance}
                />
              );
            })}
          </div>
        </div>
        {/* Audience Demographics */}
        <div className="mt-5">
          <AudienceDemographics />
        </div>
      </div>
    </section>
  );
}

const PerformanceCard = ({
  title,
  count,
}: {
  title: string;
  count: string;
}) => {
  return (
    <div className="flex items-center justify-between px-3 py-1 bg-[#F9F8FA] rounded-md">
      <div className="flex flex-col">
        <p className="text-[#4A4C56]">{title}</p>
        <h3 className="font-semibold text-xl text-[#070707]">{count}</h3>
      </div>
    </div>
  );
};

const ContentPerformanceCard = ({ title, performance }: any) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-md gap-5 bg-white shadow border border-[#E9E9EA]`}
    >
      {/* logo */}
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full ${
          title === "Images"
            ? "bg-[#ECF4FF]"
            : title === "Videos"
            ? "bg-[#FAECFF]"
            : title === "Links"
            ? "bg-[#ECFFF7]"
            : title === "Text"
            ? "bg-[#FFF9EC]"
            : "bg-[#F9F8FA]"
        }`}
      >
        {getPlatformLogo(title)}
      </div>
      <div className="text-center ">
        <h3 className="font-semibold text-xl text-[#070707]">{title}</h3>
        <p className="text-[#4A4C56] mt-1 text-sm">{performance}</p>
      </div>
    </div>
  );
};

const getPlatformLogo = (platform: string) => {
  switch (platform) {
    case "Facebook":
      return facebookLogo;
    case "Instagram":
      return instagramLogo;
    case "Twitter":
      return linkedinLogo;
    case "Images":
      return imageLogo;
    case "Videos":
      return videoLogo;
    case "Links":
      return linkLogo;
    case "Text":
      return linkLogo;
    default:
      return null;
  }
};
