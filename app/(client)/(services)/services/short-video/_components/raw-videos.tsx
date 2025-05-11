import Heading from "@/app/(client)/_components/heading-text";
import HandShakeIcon from "@/public/incons/handshake";
import LightIcon from "@/public/incons/light";

const RawVideos = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto  py-[60px] md:py-[80px] lg:py-[100px] px-5 2xl:px-0">
      <div className="text-center max-w-full mx-auto  mb-8 md:mb-12 px-5 2xl:px-[0px]">
        <Heading
          text="Turn your raw videos into engaging clips"
          className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/* card 1 */}
        <div className="relative border-0 p-5 rounded-lg shadow-md">
          <div className=" p-0">
            <div className="md:mb-6 flex items-start justify-start">
              <HandShakeIcon
                className={"w-[60px] h-[60px] p-3 rounded-xl bg-[#F6F8FA]"}
              />
            </div>
            <h3 className="md:text-xl text-base font-semibold mb-3 text-[#1D1D1F]">
              We take raw video and/or premium stock footage
            </h3>
            <p className="md:text-base text-sm text-[#4A4C56] leading-[150%] tracking-[.16px]">
              Share your long-form videos or raw clips with us. Our team will
              help you choose the best hooks & content from your video.
            </p>
          </div>
          <p className="bg-black px-4 py-2 rounded-l-xl text-white absolute top-5 right-0">
            Step 1
          </p>
        </div>
        {/* card 2 */}
        <div className="relative border-0 p-5 rounded-lg shadow-md">
          <div className=" p-0">
            <div className="md:mb-6 flex items-start justify-start">
              <LightIcon
                className={"w-[60px] h-[60px] p-3 rounded-xl bg-[#F6F8FA]"}
              />
            </div>
            <h3 className="md:text-xl text-base font-semibold mb-3 text-[#1D1D1F]">
              We structure it for views and watch-time
            </h3>
            <p className="md:text-base text-sm text-[#4A4C56] leading-[150%] tracking-[.16px]">
              Our strategy optimizes your edit to get the maximum views. Shares,
              likes, and view times on our videos are higher than the average.
            </p>
          </div>
          <p className="bg-black px-4 py-2 rounded-l-xl text-white absolute top-5 right-0">
            Step 2
          </p>
        </div>
        {/* card 3 */}
        <div className="relative border-0 p-5 rounded-lg shadow-md">
          <div className=" p-0">
            <div className="md:mb-6 flex items-start justify-start">
              <HandShakeIcon
                className={"w-[60px] h-[60px] p-3 rounded-xl bg-[#F6F8FA]"}
              />
            </div>
            <h3 className="md:text-xl text-base font-semibold mb-3 text-[#1D1D1F]">
              We create your unique style and theme
            </h3>
            <p className="md:text-base text-sm text-[#4A4C56] leading-[150%] tracking-[.16px]">
              Share your long-form videos or raw clips with us. Our team will
              help you choose the best hooks & content from your video.
            </p>
          </div>
          <p className="bg-black px-4 py-2 rounded-l-xl text-white absolute top-5 right-0">
            Step 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default RawVideos;
