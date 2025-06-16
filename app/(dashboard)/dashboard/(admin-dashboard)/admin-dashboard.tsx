import React from "react";
import StatsGrid from "./_components/StatCard";
import ChartAndGraph from "./_components/TaskInsightChart";
import ResellerActivity from "./_components/ResellerActivity";
import OrderTable from "./_components/OrderTable";


export default function AdminDashboard() {

  return (
    <section className="max-w-[1400px] mx-auto">
      {/* admin slate section */}
      <StatsGrid />
      <ChartAndGraph />
      <ResellerActivity />
      {/* <OrderManagement /> */}
      <OrderTable />
    </section>
  );
}
