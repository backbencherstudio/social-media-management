import ReUsableBanner from "@/app/(client)/_components/re-usable-banner";
import React from "react";
import bannerImg from "@/public/img/social-media-posts/banner.png";
import Heading from "@/app/(client)/_components/heading-text";
import ParagraphText from "@/app/(client)/_components/paragraph-text";

export default function Banner() {
  return (
    <div>
      <ReUsableBanner
        heading={
          <Heading
            text="Professional Post Design Services Starting at Just $149/mo to $99/mo"
            className="text-[42px]"
          />
        }
        description={
          <ParagraphText
            paraText="Take your email marketing to the next level with stunning emails that convert. Made by our team of copywriters, designers, and email experts."
            className="text-base"
          />
        }
        image={bannerImg}
      />
    </div>
  );
}
