import React from "react";
import AnalyticsInfoCard from "./_components/analytics-info-card";
import FollowerActivityMap from "../../analysis/_components/FollowerActivityMap";
import FollowerActivityHeatmap from "./_components/flower-activity-map";


const fakeData = {
  success: true,
  data: {
    "activity": [
      [1, 2, 1, 0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      [0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0]
    ],
    "labels": {
      "days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      "hours": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
  }
};

export default function Analytics() {
  return (
    <div className="space-y-6">
      <AnalyticsInfoCard />
      {/* <FollowerActivityMap /> */}
      {/* <FlowerActivity activityData={fakeData} /> */}
      <FollowerActivityHeatmap/>
    </div>
  );
}