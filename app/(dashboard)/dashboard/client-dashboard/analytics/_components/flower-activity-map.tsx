"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useGetTwitterFollowerQuery } from "@/src/redux/features/common/follower-activity/getFollowerApi";
import ActivityHeatmap from "./activity-heatmap";

// Define the data structure for our heatmap
type ActivityData = {
  day: number;
  hour: number;
  value: number;
};

export default function FollowerActivityHeatmap() {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const [platform, setPlatform] = useState("Twitter");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(2024, 9, 15),
    new Date(2024, 9, 22),
  ]);
  const [startDate, endDate] = dateRange;
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);

  const id = "cmcaezr200000ws68zs50kn2q";

  const { data, isLoading, isError } = useGetTwitterFollowerQuery(id);

  console.log("API Data:", data);
  console.log("Platform:", platform);

  // Process the real API data or use fake data as fallback
  useEffect(() => {
    // Platform-specific fake data as fallback
    const getFakeDataForPlatform = (platform: string) => {
      const baseData = {
        success: true,
        data: {
          labels: {
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            hours: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ],
          },
        },
      };

      // Different activity patterns for different platforms
      const platformPatterns = {
        Twitter: [
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
          ],
          [
            0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
          ],
          [
            0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
          ],
        ],
        Facebook: [
          [
            2, 1, 0, 0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0,
            0,
          ],
          [
            3, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            0,
          ],
          [
            0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2,
            1,
          ],
          [
            0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            0,
          ],
          [
            0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            0,
          ],
        ],
        Instagram: [
          [
            1, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0,
            0,
          ],
          [
            2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            0,
          ],
          [
            0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            0,
          ],
          [
            0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0,
            0,
          ],
        ],
        LinkedIn: [
          [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0,
            0,
          ],
          [
            1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0,
            0,
          ],
          [
            0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0,
            0,
          ],
        ],
      };

      return {
        ...baseData,
        data: {
          ...baseData.data,
          activity:
            platformPatterns[platform as keyof typeof platformPatterns] ||
            platformPatterns.Twitter,
        },
      };
    };

    // Always process data - use real data if available, otherwise use platform-specific fake data
    const dataToProcess =
      data?.success && data?.data ? data : getFakeDataForPlatform(platform);

    console.log("Data to process:", dataToProcess);

    const processedData: ActivityData[] = [];
    dataToProcess.data.activity.forEach(
      (activityRow: number[], dayIndex: number) => {
        activityRow.forEach((value: number, hourIndex: number) => {
          processedData.push({
            day: dayIndex,
            hour: hourIndex,
            value,
          });
        });
      }
    );

    console.log("Processed data:", processedData);
    setActivityData(processedData);
  }, [data, platform]);

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        {/* info */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[20px]">
            <span className={`${data ? "hidden" : ""}`}>Mock</span> Follower
            activity{" "}
          </h3>
          <p className="text-sm text-[#5B5A64]">
            See when your followers are most active
          </p>
        </div>

        {/* dropdown and Date */}
        <div className="flex items-center gap-4">
          {/* Platform dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white border-[#E5E5EC] hover:bg-gray-50 w-28"
              onClick={() => setShowPlatformDropdown(!showPlatformDropdown)}
            >
              {platform} <ChevronDown className="h-4 w-4" />
            </button>

            {showPlatformDropdown && (
              <div className="absolute top-full right-0 mt-1 w-40 bg-white border rounded-md shadow-lg z-10 border-[#E5E5EC]">
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
      </div>

      {/* Heatmap Component */}
      <ActivityHeatmap
        data={activityData}
        isLoading={isLoading}
        isError={isError}
        className="my-4"
      />
    </section>
  );
}
