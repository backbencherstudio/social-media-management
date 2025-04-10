"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import EmojiIcon from "@/public/incons/emoji";
import createOne from "@/public/about-page/creatingOne.png";
import createTwo from "@/public/about-page/creatingTwo.png";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";
import SmileIcon from "@/public/incons/smile-icon";

export default function Creating() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <Heading text="What We're Creating" className="text-5xl " />
        <ParagraphText
          paraText="TagGrowth is an innovative content curation and distribution solution designed to
          empower small businesses with consistent and impactful content for their audiences."
          className="md:max-w-[632px] mx-auto mt-4"
        />

        <div className="mt-10 w-full items-center flex gap-4">
          {/* Left Image */}
          <div className="w-[70%] rounded-xl overflow-hidden">
            <Image
              src={createOne} // Replace with your actual image path
              alt="Team working"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Image + Card */}
          <div className="w-[30%] space-y-6">
            <div className="rounded-xl overflow-hidden">
              <Image
                src={createTwo} // Replace with your actual image path
                alt="Discussion"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <Card className="w-full max-w-xs mx-auto shadow-md border border-[#A5A5AB]">
              <CardContent className="flex items-center gap-4 py-6">
                <div className="bg-gray-200  rounded-full p-3">
                  <SmileIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">12,000+</p>
                  <p className="text-sm text-gray-600">Total clients</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
