"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FacebookIcon from "@/public/incons/landin-page/facebook";
import InstaIcon from "@/public/incons/landin-page/insta-icon";
import LinkdinIcon from "@/public/incons/landin-page/LinkdinIcon";
import TiktokIcon from "@/public/incons/landin-page/ToktokIcon";
import TwitterIcon from "@/public/incons/landin-page/TwitterIcon";
import YoutubeIcon from "@/public/incons/landin-page/youtubeIcon";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";

// Define the column headers
const companies = [
  {
    id: "tagGrowth",
    name: "Tag Growth",
    plan: "Standard Plan",
    isHighlighted: true,
  },
  {
    id: "buckSocial",
    name: "98 Buck Social",
    plan: "Starter",
    isHighlighted: false,
  },
  {
    id: "smarcomms",
    name: "Smarcomms",
    plan: "Basic Plan",
    isHighlighted: false,
  },
  { id: "socialSinQ", name: "SocialSinQ", plan: "Basic", isHighlighted: false },
];

const socialIcons = {
  tagGrowth: [
    <FacebookIcon className="w-[22px] h-[22px]" key="fb" />,
    <LinkdinIcon className="w-[24px] h-[24px]" key="ln" />,
    <InstaIcon className="w-[24px] h-[24px] " key="ig" />,
    <YoutubeIcon className="w-[24px] h-[24px]" key="yt" />,
    <TwitterIcon className="w-[24px] h-[24px] " key="tw" />,
    <TiktokIcon className="w-[24px] h-[24px]" key="tt" />,
  ],
  buckSocial: [
    <FacebookIcon className="w-[22px] h-[22px]" key="fb" />,
    <InstaIcon className="w-[24px] h-[24px]" key="ig" />,
    <YoutubeIcon className="w-[24px] h-[24px]" key="yt" />,
  ],
  smarcomms: [
    <FacebookIcon className="w-[22px] h-[22px]" key="fb" />,
    <InstaIcon className="w-[24px] h-[24px]" key="ig" />,
  ],
  socialSinQ: [
    <FacebookIcon className="w-[22px] h-[22px]" key="fb" />,
    <LinkdinIcon className="w-[24px] h-[24px]" key="ln" />,
    <InstaIcon className="w-[24px] h-[24px]" key="ig" />,
    <YoutubeIcon className="w-[24px]" key="yt" />,
  ],
};

// Define the row data
const features = [
  {
    id: "pricing",
    name: "Pricing from",
    values: {
      tagGrowth: "$99/mo",
      buckSocial: "$99/mo",
      smarcomms: "$99/mo",
      socialSinQ: "$99/mo",
    },
  },
  {
    id: "posts",
    name: "Monthly social media posts",
    values: {
      tagGrowth: "10",
      buckSocial: "10",
      smarcomms: "10",
      socialSinQ: "10",
    },
  },
  {
    id: "scheduled",
    name: "Scheduled & posted for you",
    values: {
      tagGrowth: "Yes",
      buckSocial: "Yes",
      smarcomms: "Pay €9.95/mo for posting.",
      socialSinQ: "Yes",
    },
  },
  {
    id: "custom",
    name: "Custom, branded posts",
    values: {
      tagGrowth: "Yes",
      buckSocial: "only generic stock photos",
      smarcomms: "Yes",
      socialSinQ: "Yes",
    },
  },
  {
    id: "quality",
    name: "Quality",
    values: {
      tagGrowth: "Custom, brand-aligned.",
      buckSocial: "5/10",
      smarcomms: "Good",
      socialSinQ: "4/10",
    },
  },
  {
    id: "review",
    name: "Review & Approval",
    values: {
      tagGrowth: "Approval required before posting.",
      buckSocial: "$29/mo for review.",
      smarcomms: "Yes",
      socialSinQ: "Yes",
    },
  },
  {
    id: "manager",
    name: "Dedicated Account Manager",
    values: {
      tagGrowth: "Yes",
      buckSocial: "Yes",
      smarcomms: "Yes",
      socialSinQ: "Yes",
    },
  },
  {
    id: "revisions",
    name: "Revisions allowed",
    values: {
      tagGrowth: "Yes",
      buckSocial: "Yes",
      smarcomms: "Yes",
      socialSinQ: "Yes",
    },
  },
  {
    id: "platforms",
    name: "Number Of platforms",
    values: {
      tagGrowth: "+$10 per channel extra",
      buckSocial: "2",
      smarcomms: "2, but posting costs extra.",
      socialSinQ: "3",
    },
  },
  {
    id: "supported",
    name: "Platforms supported",
    values: {
      tagGrowth: socialIcons.tagGrowth,
      buckSocial: socialIcons.buckSocial,
      smarcomms: socialIcons.smarcomms,
      socialSinQ: socialIcons.socialSinQ,
    },
    isSpecial: true,
  },
  {
    id: "cancellation",
    name: "Cancellation policy",
    values: {
      tagGrowth: "Month-to-month",
      buckSocial: "Month-to-month",
      smarcomms: "Cancel anytime",
      socialSinQ: "Cancel anytime",
    },
  },
  {
    id: "location",
    name: "Team location",
    values: {
      tagGrowth: "Vetted EU & USA experts.",
      buckSocial: "USA",
      smarcomms: "Bangladesh",
      socialSinQ: "The Philipines",
    },
  },
];

export default function SocialMediaComparisonTable() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 2xl:px-0 lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[60px] md:pt-[40px] pt-[20px]">
      <div className="mx-auto md:max-w-[678px] text-center mb-8 md:mb-12">
        <Heading
          text="Compare affordable social media management agencies"
          className="text-2xl sm:text-3xl md:text-[42px] capitalize font-semibold text-[#1D1D1F]"
        />
        <ParagraphText
          paraText="The table below objectively compares the top 4 low-cost social media agencies."
          className="max-w-[335px] sm:max-w-[500px] md:max-w-[644px] text-center mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
        />
      </div>

      <div className="overflow-x-auto">
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="leading-[150%] tracking-[.16px] lg:text-base text-sm">
                <TableHead className="border border-gray-200 bg-white text-[#1D1F2C] font-medium p-4">
                  Monthly Plans
                </TableHead>
                {companies.map((company) => (
                  <TableHead
                    key={company.id}
                    className={`border border-gray-200  p-4 ${
                      company.isHighlighted
                        ? "text-white"
                        : "bg-white text-[#1D1F2C]"
                    }`}
                    style={
                      company.isHighlighted
                        ? {
                            background:
                              "linear-gradient(110deg, #0D0D0D 5.15%, #7C7C85 139.45%)",
                          }
                        : undefined
                    }
                  >
                    <div className="font-semibold lg:text-base text-sm">
                      {company.name}
                    </div>
                    <div className="lg:text-base text-sm font-[400] ">
                      {company.plan}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.id}>
                  <TableCell className="border border-gray-200 p-4">
                    {feature.name}
                  </TableCell>
                  {companies.map((company) => (
                    <TableCell
                      key={`${feature.id}-${company.id}`}
                      className="border border-gray-200 p-4"
                    >
                      {feature.isSpecial ? (
                        <div className="flex items-center -space-x-[6px] ">
                          {
                            feature.values[
                              company.id as keyof typeof feature.values
                            ]
                          }
                        </div>
                      ) : (
                        feature.values[
                          company.id as keyof typeof feature.values
                        ]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
