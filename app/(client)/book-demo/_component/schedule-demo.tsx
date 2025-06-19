"use client";

import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, LucideGlobe } from "lucide-react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import HashIcons from "@/public/incons/hash-icon";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";
import DemoScheduleData from "./demo-schedule-data";

const timeSlots = [
  "7:20 AM",
  "8:40 AM",
  "9:20 AM",
  "9:40 AM",
  "10:00 AM",
  "10:40 AM",
  "11:00 AM",
  "11:40 AM",
  "12:00 PM",
  "12:20 PM",
  "12:20 PM",
  "12:40 PM",
  "2:20 PM",
  "2:40 PM",
  "6:20 PM",
  "6:40 PM",
];

const ScheduleDemoTime = () => {
  const [selected, setSelected] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openSchedule, setOpenSchedule] = useState(true);

  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  //this function is for match the time with the timezone like if a user select bd then it will +6 hours from the utc time
  const adjustTimeForTimezone = (time: string) => {
    if (!selectedTimezone || typeof selectedTimezone === "string") return time;

    const [inputTime, period] = time.split(" ");
    const [hours, minutes] = inputTime.split(":").map((part) => parseInt(part));
    let baseHours = (hours % 12) + (period === "PM" ? 12 : 0);

    const now = new Date();
    now.setHours(baseHours, minutes, 0);

    const utcDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));

    const converted = new Date(
      utcDate.toLocaleString("en-US", {
        timeZone: selectedTimezone.value,
      })
    );

    let adjustedHours = converted.getHours();
    const adjustedMinutes = converted.getMinutes();

    const suffix = adjustedHours >= 12 ? "PM" : "AM";
    adjustedHours = adjustedHours % 12 || 12;

    return `${adjustedHours}:${adjustedMinutes
      .toString()
      .padStart(2, "0")} ${suffix}`;
  };

  const dateFormat = selected?.toDateString();

  return (
    <div className="bg-[#F7F7F9] mt-9 pb-[120px]">
      {openSchedule ? (
        <>
          <div className="max-w-[1200px] mx-auto bg-white rounded-[18px] lg:p-6 p-3">
            <div className="grid grid-cols-3 lg:grid-cols-11 gap-6 justify-between ">
              <div
                className={`w-full col-span-3 ${
                  selected ? "lg:col-span-4 " : "lg:col-span-6"
                } h-full  block`}
              >
                <BookDemoCard />
              </div>

              <div
                className={`w-full col-span-3 md:col-span-2 ${
                  selected ? "lg:col-span-4 " : "lg:col-span-5"
                }  h-full p-4 border border-[#D2D2D5] rounded-[12px]`}
              >
                <DayPicker
                  animate
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  showOutsideDays
                  disabled={{
                    before: new Date(
                      new Date().setDate(new Date().getDate() + 1)
                    ),
                  }}
                  classNames={{
                    months: "w-full max-w-full", // <- this overrides rdp-months
                    month: "w-full",
                    table: "w-full ",
                    weekdays: "h-[70px]",
                    month_grid: "w-full ",
                    day_button: "rdp-day_button !text-center !mx-auto  ",
                    chevron: "text-red-500",
                    outside: "text-[#E0E0E0]",
                    selected: "bg-[#1D1D1F] text-white rounded-full",
                    today: "text-black font-semibold bg-gray-300  rounded-full",
                    focused: "bg-gray-900 font-medium text-white rounded-full",
                  }}
                  // footer={
                  //     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                  // }
                />

                <div className="mt-5">
                  <p className="text-sm font-medium mb-[10px]">Time zone</p>
                  <div className="flex items-center gap-[10px] ">
                    <span className="">
                      <LucideGlobe className="w-[16px] h-4" />
                    </span>
                    <TimezoneSelect
                      value={selectedTimezone}
                      onChange={(timezone) => setSelectedTimezone(timezone)}
                      labelStyle="original"
                      className="border-0 w-full "
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                          border: "none",
                          boxShadow: "none",
                          "&:hover": {
                            border: "none",
                          },
                        }),
                      }}
                      formatOptionLabel={(
                        option: ITimezone | string,
                        { context }
                      ) => {
                        // Handle case when option is a string
                        if (typeof option === "string") {
                          const now = new Date();
                          const formatter = new Intl.DateTimeFormat("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            timeZone: option,
                            hour12: true,
                          });
                          const time = formatter.format(now);
                          return `${option} (${time})`;
                        }

                        // Handle case when option is ITimezone
                        if (context === "menu") {
                          const now = new Date();
                          const formatter = new Intl.DateTimeFormat("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            timeZone: option.value,
                            hour12: true,
                          });
                          const time = formatter.format(now);
                          return (
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm w-full">
                                {option.label}
                              </span>
                              <div className="flex justify-end w-[25%]">
                                <span className="text-sm ">{time}</span>
                              </div>
                            </div>
                          ); // This shows the default "GMT+6:00 Astana, Dhaka" format
                        } else {
                          const now = new Date();
                          const formatter = new Intl.DateTimeFormat("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            timeZone: option.value,
                            hour12: true,
                          });
                          const time = formatter.format(now);
                          return `${option.value} (${time})`;
                        }
                      }}

                      // formatOptionLabel={(option: ITimezone | string, { context }) => {
                      //     // In the dropdown menu
                      //     if (context === 'menu') {
                      //         // Return the default format with GMT offset
                      //         return option?.label; // This shows the default "GMT+6:00 Astana, Dhaka" format
                      //     }
                      //     // For the selected value display
                      //     else {
                      //         const now = new Date();
                      //         const formatter = new Intl.DateTimeFormat('en-US', {
                      //             hour: 'numeric',
                      //             minute: 'numeric',
                      //             timeZone: option?.value,
                      //             hour12: true
                      //         });
                      //         const time = formatter.format(now);
                      //         return `${option?.value} (${time})`;
                      //     }
                      // }} ///this is the code that is easy but typescript error

                      // formatOptionLabel={(option) => {
                      //     const now = new Date();
                      //     const formatter = new Intl.DateTimeFormat('en-US', {
                      //       hour: 'numeric',
                      //       minute: 'numeric',
                      //       timeZone: option.value,
                      //       hour12: true
                      //     });
                      //     const time = formatter.format(now);
                      //     return `${option.value} (${time})`;
                      //   }}
                    />
                  </div>
                </div>
              </div>

              {/* <div className='flex col-span-2  gap-2 mt-5'>
                        <span>{selected ? selected.toDateString() : "No date selected"}</span>
              </div> */}
              {selected && (
                <div className="w-full col-span-3 md:col-span-1 lg:col-span-3 max-h-[434px] overflow-y-auto custom-scrollbar pr-2">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold">
                      {selected.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      times you're available
                    </p>
                  </div>

                  <div className="space-y-2">
                    {timeSlots.map((time, index) => {
                      const isSelected = selectedTime === time;

                      return (
                        <div
                          key={`${time}-${index}`}
                          className="relative h-[50px] overflow-hidden"
                        >
                          {/* This div is used to create the sliding effect */}
                          <div
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                              isSelected ? "-translate-x-full" : "translate-x-0"
                            }`}
                          >
                            {/* Single button view */}
                            <button
                              className="w-full cursor-pointer  px-4 py-3  flex items-center justify-center border rounded-md bg-white border-gray-200 hover:border-gray-300"
                              onClick={() => setSelectedTime(time)}
                            >
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                              <span className="font-medium ">
                                {adjustTimeForTimezone(time)}
                              </span>
                            </button>
                          </div>

                          <div
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                              isSelected ? "translate-x-0" : "translate-x-full"
                            } flex gap-2`}
                          >
                            {/* Two button view */}
                            <div className="w-full  px-4 py-3 text-center bg-[#1D1D1F] text-white border border-[#1D1D1F] rounded-md">
                              {adjustTimeForTimezone(time)}
                            </div>
                            <button
                              className="bg-blue-600 cursor-pointer w-full hover:bg-blue-700 text-white rounded-md px-4 py-3"
                              onClick={() => {
                                // Handle next action
                                // console.log(`Selected time: ${time}  for date: ${selected?.toDateString()} in timezone: ${selectedTimezone} `);
                                // handleScheduleDemo(time, selected?.toDateString(), selectedTimezone);

                                setOpenSchedule(false);
                              }}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="max-h-[700px] overflow-y-auto custom-scrollbar2 mr-1">
          <div className="max-w-[996px]  relative mx-auto bg-white rounded-[18px] lg:p-6 p-3">
            <button
              className="absolute top-[24px] left-[24px] cursor-pointer"
              onClick={() => setOpenSchedule(true)}
            >
              {" "}
              <div className="w-9 h-9 hover:bg-gray-200 flex justify-center items-center border border-[#A5A5AB] rounded-full">
                {" "}
                <ArrowLeft />{" "}
              </div>{" "}
            </button>
            <DemoScheduleData
              dateFormat={dateFormat}
              selectedTime={selectedTime}
              selectedTimezone={selectedTimezone}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleDemoTime;

const BookDemoCard = () => {
  return (
    <>
      <Card className="shadow-none h-full border-0 p-2">
        <CardContent className=" h-full p-0">
          <div className="flex flex-col   h-full">
            <div className="flex flex-col gap-4 ">
              <div className="  flex items-center justify-start">
                <div className="flex gap-4 items-center">
                  <span className=" bg-[#F5F5F780] p-3  rounded-md">
                    <HashIcons className="lg:w-6 lg:h-6 w-4 h-4" />
                  </span>
                  <h2 className="xk:text-[26px] text-lg text-[#1D1D1F] font-semibold leading-[126%] capitalize">
                    TagGrowth Intro
                  </h2>
                </div>
                <div className="flex items-center gap-2 ml-auto bg-[#F6F8FA] px-2 py-1 rounded-[99px]">
                  <span>
                    {" "}
                    <Clock className="w-5 h-5" />{" "}
                  </span>
                  <span className="text-base text-[#070707] leading-[150%] tracking-[.16px]">
                    20 min
                  </span>
                </div>
              </div>
              <div>
                <p className="text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                  Book a{" "}
                  <span className="text-[#1D1F2C] font-medium">
                    free 20-min Google Meet call
                  </span>{" "}
                  to learn more about TagGrowth and get any of your questions
                  answered.
                </p>
              </div>
              <div>
                <p className="text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                  <span className="text-[#1D1F2C] font-medium">Important:</span>{" "}
                  Ensure select the correct AM/PM time to avoid mistakes, like
                  3am instead of 3pm.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3  lg:mt-auto mt-6 justify-end">
              <div className="flex">
                <span className="flex border-b items-center gap-2 flex-start">
                  <Link
                    href=""
                    className="text-base leading-[150%] tracking-[.16px] font-medium "
                  >
                    Client Reviews
                  </Link>
                  <FiArrowUpRight />
                </span>
              </div>
              <div className="flex">
                <span className="flex border-b items-center gap-2 flex-start">
                  <Link
                    href=""
                    className="text-base leading-[150%] tracking-[.16px] font-medium "
                  >
                    Pricing & Plans
                  </Link>
                  <FiArrowUpRight />
                </span>
              </div>
              <div className="flex">
                <span className="flex border-b items-center gap-2 flex-start">
                  <Link
                    href=""
                    className="text-base leading-[150%] tracking-[.16px] font-medium "
                  >
                    Examples of our work
                  </Link>
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
