import React from "react";

export default function Performance() {
  return (
    <section className="my-4 bg-white flex flex-col md:flex-row gap-4 rounded-lg p-3">
      {/* left side */}
      <div className="p-4  w-full md:w-1/2 border-rounded-xl ">
        <h3 className="text-[20px] font-semibold mb-5">Platform Performance</h3>

        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="mb-2">Engagement Rate</h4>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="flex items-center justify-between px-3 py-1 bg-[#F9F8FA] rounded-md">
              <div className="flex flex-col ">
                <p className="text-[#4A4C56]">Likes</p>
                <h3 className="font-semibold text-xl text-[#070707]">2.4K</h3>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-1 bg-[#F9F8FA] rounded-md">
              <div className="flex flex-col ">
                <p className="text-[#4A4C56]">Likes</p>
                <h3 className="font-semibold text-xl text-[#070707]">2.4K</h3>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-1 bg-[#F9F8FA] rounded-md">
              <div className="flex flex-col ">
                <p className="text-[#4A4C56]">Likes</p>
                <h3 className="font-semibold text-xl text-[#070707]">2.4K</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
