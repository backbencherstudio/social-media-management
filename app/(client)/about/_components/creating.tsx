"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import EmojiIcon from "@/public/incons/emoji";
import createOne from "@/public/about-page/creatingOne.png";
import createTwo from "@/public/about-page/creatingTwo.png";
import Heading from "../../_components/heading-text";
import ParagraphText from "../../_components/paragraph-text";

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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Image */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src={createOne} // Replace with your actual image path
              alt="Team working"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Image + Card */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden">
              <Image
                src={createTwo} // Replace with your actual image path
                alt="Discussion"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <Card className="w-full max-w-xs mx-auto shadow-md">
              <CardContent className="flex items-center gap-4 py-6">
                <div className="bg-yellow-100 text-yellow-600 rounded-full p-3">
                  <EmojiIcon className="w-6 h-6" />
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
