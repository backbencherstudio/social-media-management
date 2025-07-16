"use client"

import FacebookIcon from "@/public/incons/facebook";
import InstagramIcon from "@/public/incons/instagram";
import LinkedInIcon from "@/public/incons/linkedIn";
import TwitterIcon from "@/public/incons/twitter";
import React from "react";

const SocialMedia = () => {


  // twitter login
  // const [twitterConnect, {isLoading} ] = useTwitterConnectMutation();

  const handleTwitterConnect = async () => {
    // try {
    //   const res = await twitterConnect({}).unwrap()
    //   console.log("twittrer", res)
    // } catch (error) {
    //   console.log(error)
    // }

    window.location.href = `${process.env.NEXT_PUBLIC_URL}/auth/twitter`
  }


  const connect = "w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors hover:bg-gray-800 cursor-pointer"

  return (
    <div className="w-full">
      <h1 className="text-xl sm:text-2xl font-semibold mb-2">
        Connect Social Media
      </h1>
      <p className="text-[#4A4C56] text-sm sm:text-base mb-6">
        Link and manage your social media accounts
      </p>
      <div className="rounded-lg mt-6 p-4 sm:p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] space-y-4 sm:space-y-6">
        <h1 className="text-lg sm:text-xl font-medium">Connected Accounts</h1>
        {/* Instagram */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 bg-gray-100 p-3 sm:p-4 rounded-md">
          <div className="flex items-center gap-3">
            <InstagramIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <div>
              <h1 className="text-base sm:text-xl">Instagram</h1>
              <p className="text-[#4A4C56] text-xs sm:text-base">
                @yourbusiness
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#DFE1E7] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors hover:bg-gray-200">
              Connected
            </button>
          </div>
        </div>
        {/* Facebook */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 bg-gray-100 p-3 sm:p-4 rounded-md">
          <div className="flex items-center gap-3">
            <FacebookIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <div>
              <h1 className="text-base sm:text-xl">Facebook</h1>
              <p className="text-[#4A4C56] text-xs sm:text-base">
                @yourbusiness
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#DFE1E7] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors hover:bg-gray-200">
              Connected
            </button>
          </div>
        </div>
        {/* Twitter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 bg-gray-100 p-3 sm:p-4 rounded-md">
          <div className="flex items-center gap-3">
            <TwitterIcon  className="w-8 h-8 sm:w-10 sm:h-10" />
            <div>
              <h1 className="text-base sm:text-xl">Twitter</h1>
              <p className="text-[#4A4C56] text-xs sm:text-base">
                @yourbusiness
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <button onClick={handleTwitterConnect} className={connect}>
              Connect
            </button>
          </div>
        </div>
        {/* LinkedIn */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 bg-gray-100 p-3 sm:p-4 rounded-md">
          <div className="flex items-center gap-3">
            <LinkedInIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <div>
              <h1 className="text-base sm:text-xl">LinkedIn</h1>
              <p className="text-[#4A4C56] text-xs sm:text-base">
                @yourbusiness
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors hover:bg-gray-800">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
