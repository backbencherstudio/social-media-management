import Performance from "./_components/performance";
import Report from "./_components/report";

export default function page() {
  return (
    <>
      <section className="px-6 py-7">
        {/* Header section */}
        <div className="flex items-center justify-between ">
          <div className="mb-8">
            <h2 className="text-[24px] font-semibold">Analytics Overview</h2>
            <p className="text-sm text-[#4A4C56]">
              Plan and schedule your social media content across all platforms
            </p>
          </div>

          <div>Calender</div>
        </div>

        {/* all numbers */}
        <Report />
        <Performance />
      </section>
    </>
  );
}
