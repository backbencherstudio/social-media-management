"use client";
import { useState, useEffect } from "react";

// Define the data structure for our heatmap
type ActivityData = {
  day: number;
  hour: number;
  value: number;
};

interface ActivityHeatmapProps {
  data: ActivityData[];
  isLoading?: boolean;
  isError?: boolean;
  className?: string;
}

export default function ActivityHeatmap({ 
  data, 
  isLoading = false, 
  isError = false,
  className = "" 
}: ActivityHeatmapProps) {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);

  console.log("ActivityHeatmap received data:", data);
  console.log("ActivityHeatmap isLoading:", isLoading);
  console.log("ActivityHeatmap isError:", isError);

  // Process the data when it changes
  useEffect(() => {
    console.log("Setting activity data:", data);
    setActivityData(data);
  }, [data]);

  // Get the maximum value for normalization
  const maxValue = Math.max(...activityData.map((item) => item.value));

  // Days and hours for labels
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  // Function to get color based on value
  const getColor = (value: number) => {
    if (maxValue === 0) return "bg-gray-100"; // All zero: show gray
    const normalizedValue = value / maxValue;

    if (normalizedValue === 0) return "bg-gray-100";
    if (normalizedValue < 0.2) return "bg-blue-100";
    if (normalizedValue < 0.4) return "bg-blue-200";
    if (normalizedValue < 0.6) return "bg-blue-300";
    if (normalizedValue < 0.8) return "bg-blue-400";
    return "bg-blue-500";
  };

  // Loading state - only show if we have no data
  if (isLoading && activityData.length === 0) {
    return (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <span className="text-gray-500">Loading activity data...</span>
        </div>
      </div>
    );
  }

  // Error state
//   if (isError) {
//     return (
//       <div className={`p-4 bg-red-50 border border-red-200 rounded-lg ${className}`}>
//         <div className="flex items-center gap-2 text-red-600">
//           <span className="text-sm font-medium">Error loading data</span>
//           <span className="text-xs">(Showing sample data)</span>
//         </div>
//       </div>
//     );
//   }

  console.log("Rendering heatmap with activityData length:", activityData.length);
  console.log("Max value:", maxValue);

  return (
    <div className={`overflow-x-auto ${className}`}>
      <div className="min-w-[700px]  px-5 py-2">
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

      {/* Legend */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">Activity</div>
        <div className="flex-1 mx-4 h-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-500"></div>
        <div className="text-sm text-gray-500">Engagement</div>
      </div>
    </div>
  );
} 