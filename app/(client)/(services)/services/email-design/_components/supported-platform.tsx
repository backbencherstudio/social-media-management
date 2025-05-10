import Heading from "@/app/(client)/_components/heading-text";
import { hu, id } from "date-fns/locale";
import React from "react";
import sendgrid from "@/public/img/supported-platform/sendinblue.png";
import hubspot from "@/public/img/supported-platform/hubspot.png";

export default function SupportedPlatform() {
  return (
    <section className="md:my-25 my-10">
      <Heading
        text="Any email marketing platform supported"
        className="text-center text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F] "
      />
      <p className="text-center text-sm sm:text-base mt-4 text-[#1D1F2C] ">
        Our email designs are guaranteed to integrate seamlessly with the email
        tool you're already using.
      </p>

      <div className="max-w-[1200px] mx-auto mt-12 grid grid-cols-3 md:grid-cols-5  gap-4 md:gap-6 px-2 ">
        {supportedPlatforms.map((platform) => (
          <div
            key={platform.id}
            className=" border px-4 py-6 rounded-lg border-[#E5E7EB] bg-white shadow-md h-[192px] flex flex-col gap-6 items-center justify-center"
          >
            <img src={platform.icon.src} alt={platform.name} />
            <p className="text-[20px] font-semibold text-[#1D1D1F]">
              {platform.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const supportedPlatforms = [
  {
    id: 1,
    icon: sendgrid,
    name: "Mailchimp",
  },
  {
    id: 2,
    icon: sendgrid,
    name: "Mailchimp",
  },
  {
    id: 6,
    icon: sendgrid,
    name: "Mailchimp",
  },
  {
    id: 3,
    icon: sendgrid,
    name: "Mailchimp",
  },
  {
    id: 4,
    icon: sendgrid,
    name: "Mailchimp",
  },
  {
    id: 5,
    icon: hubspot,
    name: "Mailchimp",
  },
  {
    id: 7,
    icon: hubspot,
    name: "Mailchimp",
  },
  {
    id: 8,
    icon: hubspot,
    name: "Mailchimp",
  },
  {
    id: 9,
    icon: hubspot,
    name: "Mailchimp",
  },
  {
    id: 10,
    icon: hubspot,
    name: "Mailchimp",
  },
];
