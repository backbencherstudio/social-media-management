import ScheduleButton from "@/app/(client)/_components/schedule-button";
import LogoIcon from "@/public/incons/logo";
import Image from "next/image";
import React from "react";

export default function BlogBody() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-6 my-25">
      <div className="col-span-1">
        {/* Column 1 content */}

        <div className="px-[24px] py-[36px] flex flex-col items-center gap-8 bg-[#ECEFF3]/80 rounded-xl">
          <LogoIcon className="mx-auto text-black w-[148px]" />
          <p className="text-center text-[#1D1F2C]">
            Looking for an affordable social media management company to handle
            your social media presence for only $99/mo? Feedbird is the leading
            choice trusted by 7200+ small businesses.
          </p>

          <ScheduleButton
            text="Schedule a Call"
            className="bg-black text-white font-medium flex items-center justify-center"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2">
        {/* Column 2 content that spans 2 columns on md and up */}

        <section className="max-w-5xl mx-auto px-4 ">
          <div>
            {/* Heading */}
            <h2 className="text-[20px] font-semibold text-gray-900 mb-8">
              Spark engagement and grow your brand with these proven contest
              formats.
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-700 mb-4">
              Social media is no longer just a broadcasting tool — it’s a
              two-way street that thrives on interaction, storytelling, and
              community. And what better way to ignite that connection than
              through a creative contest?
            </p>
            <p className="text-gray-700 mb-8">
              Whether you're aiming to increase brand awareness, generate user
              content, or simply reward your community, contests offer a
              low-cost, high-impact way to boost your digital presence. In this
              article, we’ll explore 12+ social media contest ideas that are not
              only easy to implement but also come with real-world examples and
              expert tips — so you can confidently launch your next campaign.
            </p>

            {/* Image */}
            <div className="rounded-lg overflow-hidden h-[322px]">
              <Image
                src="https://img.freepik.com/premium-photo/teacher-asking-her-students-question_13339-162960.jpg?w=996"
                alt="blog img"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="py-4 mt-4 text-gray-900">
            <h2 className="text-3xl font-semibold mb-4">
              Why Social Media Contests Are So Powerful
            </h2>
            <p className="mb-6 ">
              Before jumping into the ideas, let’s understand what makes social
              contests so effective.
            </p>
            <ul className="space-y-1 mb-6 text-base leading-relaxed">
              <li>
                🔥 <span className="font-medium">High Engagement Rates:</span>
                Contests often receive up to 34% more engagement than regular
                posts.
              </li>
              <li>
                📣
                <span className="font-medium">
                  Word-of-Mouth Amplification:
                </span>
                People naturally share opportunities to win with friends.
              </li>
              <li>
                📸 <span className="font-medium">UGC Generation:</span> You gain
                access to tons of user-created content, which boosts
                credibility.
              </li>
              <li>
                🎯 <span className="font-medium">Emotional Triggers:</span>{" "}
                Winning, competing, and creating all trigger emotions — helping
                your brand stay memorable.
              </li>
              <li>
                🧭 <span className="font-medium">Follower Growth:</span> The
                right mechanics (tagging, sharing, following) bring in new
                audiences.
              </li>
            </ul>
            <p className="mb-8 text-gray-text-gray-900">
              So now that you know why you should run contests, let’s look at
              how to do it with style and substance.
            </p>

            {/* Image */}
            <div className="rounded-lg overflow-hidden h-[322px]">
              <Image
                src="https://img.freepik.com/premium-photo/teacher-asking-her-students-question_13339-162960.jpg?w=996"
                alt="blog img"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold my-6">
              Bonus Idea: 🎨 Design or Art Challenge
            </h2>

            <div className="space-y-4 text-[#1D1F2C] mb-8">
              <div className="space-y-1">
                <p>Great for creative and visual communities</p>
                <p>
                  Challenge users to create illustrations, graphic art, or DIYs
                  around your brand or theme.
                </p>
              </div>
              <div className="space-y-1">
                <p>Example:</p>
                <p>
                  Adobe regularly launches design challenges on Behance and
                  Instagram with creative prompts.
                </p>
                <p>Best For: Tech, design, and artistic communities. </p>
              </div>

              <div className="space-y-1">
                <p>Tips:</p>
                <p>Use a panel of judges or allow community voting.</p>
                <p>
                  Feature winning designs in your product, website, or
                  packaging.
                </p>
                <p>
                  Provide templates or brand elements to inspire submissions.
                </p>
              </div>
            </div>

              {/* Image */}
            <div className="rounded-lg overflow-hidden h-[322px]">
              <Image
                src="https://img.freepik.com/premium-photo/teacher-asking-her-students-question_13339-162960.jpg?w=996"
                alt="blog img"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-6 text-gray-900">
      <h2 className="text-3xl font-bold mb-4">How to Maximize Your Contest Success</h2>
      <p className="mb-6 text-gray-text-gray-900">
        To run a smooth, successful contest, follow these best practices:
      </p>
      <ul className="space-y-3 mb-6 text-base leading-relaxed">
        <li>
          ✅ <span className="font-medium">Clear Rules:</span> Explain how to enter, what the prize is, and when winners will be chosen.
        </li>
        <li>
          📅 <span className="font-medium">Defined Timeline:</span> Create urgency by setting start and end dates.
        </li>
        <li>
          📃 <span className="font-medium">Follow Platform Guidelines:</span> Avoid penalties by following Instagram/Facebook rules.
        </li>
        <li>
          📣 <span className="font-medium">Promote it Everywhere:</span> Use email, Stories, ads, and your bio link.
        </li>
      </ul>
      <p className="mb-12 text-gray-text-gray-900">
        <span className="font-medium">Showcase Winners:</span> Announce publicly and share winning entries to close the loop.
      </p>

      <h2 className="text-3xl font-bold mb-4">Final Thoughts</h2>
      <p className="mb-4 text-gray-text-gray-900">
        The right social media contest can transform your engagement metrics, drive brand loyalty, and generate content you’ll use for months to come. From quick “comment to win” games to full-blown user-generated content campaigns, there’s a contest format for every brand and every budget.
      </p>
      <p className="text-gray-text-gray-900">
        So go ahead — spark your audience’s creativity and make your next campaign your most engaging one yet.
      </p>
    </div>
        </section>
      </div>
    </section>
  );
}
