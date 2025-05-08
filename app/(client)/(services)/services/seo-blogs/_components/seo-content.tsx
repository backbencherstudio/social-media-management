import SeoCard from "./cards/seo-card";

export default function SeoContent() {
  return (
    <section
      className="mx-auto max-w-[1200px] flex flex-col gap-[48px] py-25 
       
       "
    >
      {/* content */}

      <div className="text-center px-20">
        <h2 className="text-[42px] font-bold capitalize bg-gradient-to-b from-[rgba(0,0,0)] via-[#0D0D0D] to-[#7C7C85] bg-clip-text text-transparent mb-2">
          The 4 pillars of excellent SEO content
        </h2>

        <p className="text-center text-[#1D1F2C] max-w-[750px] mx-auto">
          Since 2016, our team of strategists, copywriters, and SEO specialists
          has ranked blogs in competitive niches. Since then, a great deal has
          changed and is still changing. What to anticipate from our SEO blog
          writing service is listed below.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <SeoCard/>
            <SeoCard/>
            <SeoCard/>
            <SeoCard/>
        </div>
      </div>
    </section>
  );
}
