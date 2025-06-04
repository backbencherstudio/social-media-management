"use client";
import React, { useState } from "react";
import { taskStat, TaskStatCard } from "./_components/TaskStatCard";
import { TaskTable } from "./_components/TasksTable";
import { fakeTasks } from "./fakeTask";

// taskstates
const taskStats: taskStat[] = [
  {
    title: "Total tasks",
    count: 245,
  },
  {
    title: "Pending Assignment",
    count: 245,
  },
  {
    title: "In Progress",
    count: 245,
  },
  {
    title: "Completed",
    count: 245,
  },
];

export default function page() {
  const [period, setPeriod] = useState("week");
  const [orderStatus, setOrderStatus] = useState("all");
  return (
    <>
      <TaskStatCard taskstate={taskStats}></TaskStatCard>

      <div className="rounded-xl  p-4 shadow-sm bg-white my-5">
        {/* table */}
        <TaskTable
          tasks={fakeTasks}
          period={period}
          setPeriod={setPeriod}
          orderStatus={orderStatus}
          setOrderStatus={setOrderStatus}
        />
      </div>
    </>
  );
}
