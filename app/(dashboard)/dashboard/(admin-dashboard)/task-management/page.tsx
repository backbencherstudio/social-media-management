"use client";
import React, { useState } from "react";
import { taskStat, TaskStatCard } from "./_components/TaskStatCard";
import { TaskTable } from "./_components/TasksTable";
import { fakeTasks } from "./fakeTask";
import { Pagination } from "../_components/Pagination";
import CustomSelect from "../../_components/custom-select";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
