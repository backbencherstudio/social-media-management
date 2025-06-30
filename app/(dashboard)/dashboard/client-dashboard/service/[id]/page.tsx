"use client";

import React from "react";
import { useParams } from "next/navigation";
import { IoImagesOutline } from "react-icons/io5";
import { Calculator, Download } from "lucide-react";
import { HiDocumentMinus } from "react-icons/hi2";
import Information from "./_components/information";

const ServiceDetails = () => {
  const params = useParams();
  // const serviceId = params.id;

  return (
    <div className="p-4 sm:p-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Order Details
        </h1>
        <p className="text-sm sm:text-base">
          Complete social media content creation and management service
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mt-6">
        {/* grid 1 */}
        <div className="col-span-1 lg:col-span-8 space-y-5">
          {/* Social Media Content Package */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg sm:text-xl font-semibold mb-6">
              Social Media Content Package
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="border border-[#E9E9EA] p-4 rounded-md space-y-2">
                <p className="text-gray-600 text-sm">Order ID</p>
                <p className="text-black text-lg sm:text-[20px]">62A23844_1</p>
              </div>
              <div className="border border-[#E9E9EA] p-4 rounded-md space-y-2">
                <p className="text-gray-600 text-sm">Service</p>
                <p className="text-black text-lg sm:text-[20px]">
                  Social Media Post
                </p>
              </div>
              <div className="border border-[#E9E9EA] p-4 rounded-md space-y-2">
                <p className="text-gray-600 text-sm">Payment</p>
                <p className="text-black text-lg sm:text-[20px]">Credit Card</p>
              </div>
              <div className="border border-[#E9E9EA] p-4 rounded-md space-y-2">
                <p className="text-gray-600 text-sm">Subscription</p>
                <div className="text-sm text-black flex items-center justify-start sm:justify-center w-fit px-3 py-1 rounded-full bg-[#EBFBF5] gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
                  <span className="font-medium text-gray-900">15</span>
                  &nbsp;Active
                </div>
              </div>
            </div>
          </div>
          {/* Order Progress */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Order Progress
            </h2>

            <div className="relative">
              <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-6 space-y-8 sm:space-y-0">
                {/* Order Placed */}
                <div className="flex flex-col items-center relative z-10 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#EBFBF5] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#119B70]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 font-medium">Order Placed</p>
                  <p className="mt-2 text-sm font-medium text-[#4A4C56]">
                    Mar 15, 2024
                  </p>
                </div>

                {/* Questionnaire */}
                <div className="flex flex-col items-center relative z-10 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#EBFBF5] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#119B70]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 font-medium">Questionnaire</p>
                  <p className="mt-2 text-sm font-medium text-[#4A4C56]">
                    Mar 15, 2024
                  </p>
                </div>

                {/* In Progress */}
                <div className="flex flex-col items-center relative z-10 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#F5F1FF] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#5B21B6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm font-medium">In Progress</p>
                  <p className="mt-2 text-sm font-medium text-[#34D399]">
                    Current Stage
                  </p>
                </div>

                {/* Review */}
                <div className="flex flex-col items-center relative z-10 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm font-medium">Review</p>
                  <p className="mt-2 text-sm font-medium text-[#4A4C56]">
                    Pending
                  </p>
                </div>

                {/* Completed */}
                <div className="flex flex-col items-center relative z-10 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm font-medium">Completed</p>
                  <p className="mt-2 text-sm font-medium text-[#4A4C56]">
                    Pending
                  </p>
                </div>

                {/* Dotted Line */}
                <div className="absolute top-5 left-0 right-0 h-[2px] hidden sm:flex -z-10">
                  <div className="w-1/4 h-full bg-[#119B70]"></div>
                  <div className="w-1/4 h-full bg-[#119B70]"></div>
                  <div className="w-1/4 h-full border-t-2 border-dashed border-gray-300"></div>
                  <div className="w-1/4 h-full border-t-2 border-dashed border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Status Box */}
            <div className="w-full bg-[#F9F9FA] flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-6 rounded-lg">
              <div className="flex sm:block justify-center">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#984917]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-lg sm:text-xl">
                  Current Status: Content Creation
                </h1>
                <p className="text-[#4A4C56] text-sm sm:text-base pb-4 sm:pb-6 border-b-2 border-dotted border-gray-300">
                  Our team is currently working on creating your social media
                  content based on your brand guidelines. Expected completion in
                  3-5 business days.
                </p>
                <h1 className="text-lg sm:text-xl pt-4 sm:pt-6">
                  Upcoming Milestones
                </h1>
                <div className="flex items-center gap-3 py-4 sm:py-6">
                  <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
                  <div>
                    <h1 className="text-lg sm:text-xl">
                      First batch of content review
                    </h1>
                    <p className="text-[#4A4C56] text-sm sm:text-base">
                      Mar 20, 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
                  <div>
                    <h1 className="text-lg sm:text-xl">
                      Content calendar approval
                    </h1>
                    <p className="text-[#4A4C56] text-sm sm:text-base">
                      Mar 22, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Client Questionnaire */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm space-y-[36px]">
            <h2 className="text-lg sm:text-xl font-semibold">
              Client Questionnaire
            </h2>
            {/* 1. Business Information */}
            <div>
              <p>1. Business Information</p>
              <div className="rounded-lg mt-6  p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Business Name</p>
                    <p className="text-black text-lg">Cody Fisher</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Industry</p>
                    <p className="text-black text-lg">Technology</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Website</p>
                    <p className="text-black text-lg">www.codyfisher.com</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Business Size</p>
                    <p className="text-black text-lg">10-50 Employees</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Target Audience</p>
                    <p className="text-black text-lg">B2B Professionals</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-black text-lg">New York, USA</p>
                  </div>
                </div>
                <Information
                  header={"Brief Description of Your Business"}
                  text={
                    "  A professional and engaging brand specializing in social  media marketing, content strategy, and audience growth.  Focused on helping businesses enhance their online presence and maximize engagement."
                  }
                />
              </div>
            </div>
            {/* 2. Social Media Goals */}
            <div>
              <p>2. Social Media Goals</p>
              <div className="rounded-lg mt-6  p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <div className="">
                  <p className="text-[#4A4C56]">
                    What are your primary goals for social media marketing?
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <span>Increase brand awareness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <span>Drive website traffic</span>
                    </li>
                  </ul>
                </div>
                <Information
                  header={
                    "  What are your primary goals for social media marketing?"
                  }
                  text={
                    " Social media marketing comes with various challenges, such as adapting to constantly changing algorithms, maintaining consistent engagement, and creating high-quality content that resonates with the audience. Managing multiple platforms while keeping up with trends can be overwhelming, and achieving measurable ROI fromcampaigns often requires  continuous testing and optimization. Additionally, handling negative feedback and ensuring brand reputation remain key concerns for marketers."
                  }
                />
              </div>
            </div>
            {/* 3. Target Audience */}
            <div>
              <p>3. Target Audience</p>
              <div className="rounded-lg mt-6  p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <Information
                  header={
                    "What are your primary goals for social media marketing?"
                  }
                  text={
                    "My ideal customer is 25-45 years old, tech-savvy, and engaged in digital marketing or business growth. They value creativity, data-driven strategies, and strong online branding."
                  }
                />
              </div>
            </div>
            {/* 4. Current Social Media Presence */}
            <div>
              <p>4. Current Social Media Presence</p>
              <div className="rounded-lg mt-6  p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Business Name</p>
                    <p className="text-black text-lg">Cody Fisher</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Industry</p>
                    <p className="text-black text-lg">Technology</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Website</p>
                    <p className="text-black text-lg">www.codyfisher.com</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Business Size</p>
                    <p className="text-black text-lg">10-50 Employees</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Target Audience</p>
                    <p className="text-black text-lg">B2B Professionals</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-black text-lg">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 5. Brand & Content Preferences */}
            <div>
              <p>5. Brand & Content Preferences</p>
              <div className="rounded-lg mt-6  p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <Information
                  header={"Brand's personality"}
                  text={
                    "My brand's personality is a blend of professional and engaging. It maintains an authoritative tone in delivering industry insights while keeping content approachable and relatable. For example, social media posts are informative yet visually appealing, balancing expertise with creativity to connect with the audience effectively."
                  }
                />
              </div>
            </div>
            {/*6. Brand Guidelines */}
            <div>
              <p>6. Brand Guidelines </p>

              <div className="flex flex-col lg:flex-row gap-5">
                {/* Typography */}
                <div className="flex-1 rounded-lg mt-6 p-4 sm:p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                  <div className="mt-4 sm:mt-8">
                    <p className="text-gray-600 text-sm mb-2">Typography</p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Primary:{" "}
                      <span className="text-lg sm:text-xl text-black">
                        Serotiva
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">
                      Secondary:{" "}
                      <span className="text-lg sm:text-xl text-black">
                        Inter Tight
                      </span>
                    </p>
                  </div>
                </div>
                {/* Color */}
                <div className="flex-1 rounded-lg mt-6 p-4 sm:p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                  <div className="mt-4 sm:mt-8">
                    <p className="text-gray-600 text-sm mb-2">Colors</p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Primary:{" "}
                      <span className="text-lg sm:text-xl text-black">
                        #1D1D1F
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">
                      Secondary:{" "}
                      <span className="text-lg sm:text-xl text-black">
                        Inter Tight
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Logo */}
            <div>
              <p>Logo</p>
              <div className="rounded-lg mt-6 p-4 sm:p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <HiDocumentMinus className="text-xl sm:text-2xl text-gray-600" />
                    <div>
                      <p className="text-black text-base sm:text-lg">tagGrowth_logo.zip</p>
                      <p className="text-gray-500 text-xs sm:text-sm">2.5 MB</p>
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors w-full sm:w-auto">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download
                  </button>
                </div>
              </div>
            </div>
            {/* 7. Hashtags & Keywords: */}
            <div>
              <p>7. Hashtags & Keywords:</p>
              <div className="rounded-lg mt-6  p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <Information
                  header={"Branded hashtags"}
                  text={
                    "#YourBrandName, #GrowWith[YourBrand], or #SocialSuccess."
                  }
                />
                <Information
                  header={"Specific keywords or phrases"}
                  text={
                    "Yes, posts should include keywords related to social media marketing, branding, and audience engagement. Examples  Phrases like 'grow your brand online' and 'maximize your social impact' should also be incorporated to align with the brand’s messaging."
                  }
                />
              </div>
            </div>
            {/* 8. Additional Information: */}
            <div>
              <p>8. Additional Information:</p>
              <div className="rounded-lg mt-6  p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <Information
                  header={"Preferences or special requestss"}
                  text={
                    "Consistency in tone and visuals is key. Content should be engaging yet professional, with a focus on value-driven insights. Posts should include strong CTAs, high-quality user-generated content are preferred to boost engagement."
                  }
                />
                <Information
                  header={"Specific promotions or campaigns"}
                  text={
                    "If there are upcoming promotions or campaigns, they should focus on increasing brand awareness, engagement, and conversions. Key details like launch dates, target audience, and promotional offers should be highlighted. Campaigns should align with the brand’s messaging, incorporating strong CTAs, compelling visuals, and relevant hashtags."
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="col-span-1 lg:col-span-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Summary</h2>
          <div className="space-y-4">
            {/* Service Items */}
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-3">
                <IoImagesOutline className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" />
                <div>
                  <h1 className="font-medium text-sm sm:text-base">
                    Social Media Posts
                  </h1>
                  <span className="text-xs sm:text-sm text-gray-500">
                    10 Posts
                  </span>
                </div>
              </div>
              <div className="font-semibold text-sm sm:text-base">$99.00</div>
            </div>

            {/* Repeat similar pattern for other services */}
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <IoImagesOutline className="w-6 h-6 text-gray-600" />
                <div>
                  <h1 className="font-medium">LinkedIn Posts</h1>
                  <span className="text-sm text-gray-500">5 Posts</span>
                </div>
              </div>
              <div className="font-semibold">$49.00</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <IoImagesOutline className="w-6 h-6 text-gray-600" />
                <div>
                  <h1 className="font-medium">Instagram Posts</h1>
                  <span className="text-sm text-gray-500">8 Posts</span>
                </div>
              </div>
              <div className="font-semibold">$79.00</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <IoImagesOutline className="w-6 h-6 text-gray-600" />
                <div>
                  <h1 className="font-medium">Pinterest Posts</h1>
                  <span className="text-sm text-gray-500">12 Posts</span>
                </div>
              </div>
              <div className="font-semibold">$89.00</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <IoImagesOutline className="w-6 h-6 text-gray-600" />
                <div>
                  <h1 className="font-medium">Carousel Posts</h1>
                  <span className="text-sm text-gray-500">4 Posts</span>
                </div>
              </div>
              <div className="font-semibold">$129.00</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <IoImagesOutline className="w-6 h-6 text-gray-600" />
                <div>
                  <h1 className="font-medium">Blog Posts</h1>
                  <span className="text-sm text-gray-500">3 Posts</span>
                </div>
              </div>
              <div className="font-semibold">$149.00</div>
            </div>

            {/* Total Amount Section */}
            <div className="pt-4 mt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base">
                  Total Amount
                </span>
                <span className="font-semibold text-base sm:text-lg">
                  $594.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
