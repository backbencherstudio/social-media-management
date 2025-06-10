"use client";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Report from "./_components/report";
import Performance from "./_components/performance";
import "../styles/custom-datepicker.css";
import FollowerActivityMap from "./_components/FollowerActivityMap";

export default function Page() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <section className="px-6 py-7">
        {/* Header section */}
        <div className="flex items-center justify-between">
          <div className="mb-8">
            <h2 className="text-[24px] font-semibold">Analytics Overview</h2>
            <p className="text-sm text-[#4A4C56]">
              Plan and schedule your social media content across all platforms
            </p>
          </div>

          {/* date picking */}
          <div className="relative">
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              customInput={
                <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white border-[#E5E5EC]">
                  <Calendar className="h-4 w-4" />
                  {startDate && endDate
                    ? `${format(startDate, "d MMM")} - ${format(
                        endDate,
                        "d MMM yyyy"
                      )}`
                    : "Select date range"}
                </button>
              }
              className="z-10"
            />
          </div>
        </div>

        {/* all numbers */}
        <FollowerActivityMap/>
        <Report />
        <Performance />
      </section>
    </>
  );
}
