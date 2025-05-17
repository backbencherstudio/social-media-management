import React from "react";
import StatsGrid from "./_components/StatCard";
import TaskInsightChart from "./_components/TaskInsightChart";
import ChartAndGraph from "./_components/TaskInsightChart";

export default function AdminDashboard() {
  return (
    <section className="max-w-[1400px] mx-auto">
      {/* admin slate section */}
   
        <StatsGrid />
        <ChartAndGraph />
     
      Admin board
    </section>
  );
}
