import React from "react";
import AnalyticsInfoCard from "./_components/analytics-info-card";
import RecentPostsPerformance from "./_components/recent-posts-performance";
import AudienceDemographics from "./_components/audience-demographics";
import FollowerActivityMap from "../../analysis/_components/FollowerActivityMap";
import FollowerActivity from "./_components/follower-activity";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <AnalyticsInfoCard />
      <RecentPostsPerformance />
      {/* <FollowerActivityMap /> */}
      <FollowerActivity />
      {/* <AudienceDemographics /> */}
    </div>
  );
}
