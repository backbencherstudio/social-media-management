import React from "react";
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
  return (
    <>
      <TaskStatCard taskstate={taskStats}></TaskStatCard>
      <TaskTable tasks={fakeTasks} />
    </>
  );
}
