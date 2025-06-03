"use client";
import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

// Define the data structure for our heatmap
type ActivityData = {
  day: number;
  hour: number;
  value: number;
};

export default function FollowerActivityMap() {
  // Sample data - in a real app, you'd fetch this from your API
  const [activityData, setActivityData] = useState<ActivityData[]>(
    generateSampleData()
  );
  const [platform, setPlatform] = useState("Facebook");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(2024, 9, 15),
    new Date(2024, 9, 22),
  ]);
  const [startDate, endDate] = dateRange;
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);

  // Get the maximum value for normalization
  const maxValue = Math.max(...activityData.map((item) => item.value));

  // Days and hours for labels
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // Function to get color based on value
  const getColor = (value: number) => {
    const normalizedValue = value / maxValue;

    if (normalizedValue === 0) return "bg-gray-100";
    if (normalizedValue < 0.2) return "bg-blue-100";
    if (normalizedValue < 0.4) return "bg-blue-200";
    if (normalizedValue < 0.6) return "bg-blue-300";
    if (normalizedValue < 0.8) return "bg-blue-400";
    return "bg-blue-500";
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        {/* info */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[20px]">Follower activity</h3>
          <p className="text-sm text-[#5B5A64]">
            See when your followers are most active
          </p>
        </div>

        {/* dropdown and Date */}
        <div className="flex items-center gap-4">
          {/* Platform dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white"
              onClick={() => setShowPlatformDropdown(!showPlatformDropdown)}
            >
              {platform} <ChevronDown className="h-4 w-4" />
            </button>

            {showPlatformDropdown && (
              <div className="absolute top-full right-0 mt-1 w-40 bg-white border rounded-md shadow-lg z-10">
                {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((p) => (
                  <button
                    key={p}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setPlatform(p);
                      setShowPlatformDropdown(false);
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date picker */}
          <div className="relative">
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              customInput={
                <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white">
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
      </div>

      {/* heatmap */}
      <div className="my-4 overflow-x-auto ">
        <div className="min-w-[700px] px-5 py-2">
          {/* Day labels */}
          <div className="grid grid-cols-[30px_repeat(24,1fr)]">
            <div className=""></div> {/* Empty cell for alignment */}
            {hours.map((hour) => (
              <div
                key={hour}
                className="text-center text-xs text-gray-500 py-1"
              >
                {hour}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          {days.map((day, dayIndex) => (
            <div key={day} className="grid grid-cols-[60px_repeat(24,1fr)]">
              <div className="flex items-center text-sm text-gray-500">
                {day}
              </div>
              {hours.map((hour) => {
                const dataPoint = activityData.find(
                  (d) => d.day === dayIndex && d.hour === hour
                );
                const value = dataPoint ? dataPoint.value : 0;
                return (
                  <div
                    key={hour}
                    className={`${getColor(value)} m-0.5 h-6 rounded-sm`}
                    title={`${day} ${hour}:00 - Activity: ${value}`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">Activity</div>
        <div className="flex-1 mx-4 h-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-500"></div>
        <div className="text-sm text-gray-500">Engagement</div>
      </div>
    </section>
  );
}

// Helper function to generate sample data
function generateSampleData(): ActivityData[] {
  const data: ActivityData[] = [];

  // Generate data for each day and hour
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      // Generate more activity during working hours and less at night
      let baseValue = 0;

      // Working hours (9-17) have higher base values
      if (hour >= 9 && hour <= 17 && day >= 1 && day <= 5) {
        baseValue = 30 + Math.random() * 70;
      }
      // Evening hours (18-22) have medium values
      else if (hour >= 18 && hour <= 22) {
        baseValue = 20 + Math.random() * 50;
      }
      // Weekend days have different patterns
      else if ((day === 0 || day === 6) && hour >= 10 && hour <= 20) {
        baseValue = 25 + Math.random() * 60;
      }
      // Early morning and late night have lower values
      else {
        baseValue = Math.random() * 25;
      }

      // Add some randomness to make the pattern less uniform
      const value = Math.floor(baseValue + (Math.random() * 20 - 10));

      data.push({
        day,
        hour,
        value: Math.max(0, value), // Ensure no negative values
      });
    }
  }

  return data;
}
