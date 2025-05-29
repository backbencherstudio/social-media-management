import SupportChatBoart from "@/app/(client)/_components/_ai-chatboart/support-chat";
import React from "react";
import SupportChat from "./_components/support-chat";

export default function HelpAndSupport() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="lg:col-span-8 space-y-6">
        {/* card */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="space-y-6 md:space-y-10">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Live Chat
                </h2>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  Chat with our support team in real-time
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 rounded-lg transition-colors flex items-center gap-2 text-sm md:text-base">
                  Start Chat
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="space-y-6 md:space-y-10">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Knowledge Base
                </h2>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  Browse our help articles and guides
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 rounded-lg transition-colors flex items-center gap-2 text-sm md:text-base">
                  View Articles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* chat */}
        <div>
          <SupportChat height={'h-[570px]'} />
        </div>
      </div>
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                How do I get started as a reseller?
              </h3>
              <p className="text-gray-600">
                Complete your profile, verify your account, and start promoting
                our services. We provide all the necessary tools and resources.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                What are the commission rates?
              </h3>
              <p className="text-gray-600">
                Commission rates vary based on your performance level. Basic
                rates start at 10% and can go up to 30% for top performers.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                How and when do I get paid?
              </h3>
              <p className="text-gray-600">
                Payments are processed monthly for all earnings above the
                minimum threshold. We support multiple payment methods including
                bank transfer and digital wallets.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                What marketing materials are provided?
              </h3>
              <p className="text-gray-600">
                We provide banners, product descriptions, social media
                templates, and customizable marketing materials in your reseller
                dashboard.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">
            Contact Information
          </h2>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">
                  Email Support
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">support@taggrowth.com</p>
                <p className="text-[11px] sm:text-sm text-gray-500">
                  Response within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">
                  Phone Support
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">+1 (555) 123-4567</p>
                <p className="text-[11px] sm:text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">
                  Office Address
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">123 Business Street</p>
                <p className="text-xs sm:text-sm text-gray-600">Suite 100, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
