// taskStatCard.tsx (Optional reusable card component if you want more control)
import React from "react";

export type taskStat = {
  title: string;
  count: number;
};

interface taskSlateProps {
  taskstate: taskStat[];
}

export const TaskStatCard= ({ taskstate }: taskSlateProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {taskstate.map((task, index) => (
        <div
          className="p-6 rounded-lg shadow-md bg-white space-y-2 "
          key={index}
        >
          <p className="text-gray-500 font-medium">{task.title}</p>
          <h3 className="text-2xl font-bold">{task.count}</h3>
        </div>
      ))}
    </div>
  );
};
