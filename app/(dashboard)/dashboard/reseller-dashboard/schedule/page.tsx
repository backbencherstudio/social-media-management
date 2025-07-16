import React from "react";
import Calendar from "./_components/calendar";
import UpcomingPost from "./_components/upcoming-post";

export default function Schedule() {
  return (
    <div className="space-y-6">
      <Calendar />

      
      <UpcomingPost />
    </div>
  );
}
