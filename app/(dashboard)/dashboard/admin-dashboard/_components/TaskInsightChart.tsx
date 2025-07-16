"use client"

import { PieChart, Pie, Cell } from "recharts";
import { useState } from "react";
import {
  useGetPieChartDataQuery,
  useGetTopPerformingServicesQuery,
} from "@/src/redux/features/admin/dashboard/dashboardApi";

const data = [
  { name: "Completed", value: 275, color: "#22C55E" },
  { name: "In Progress", value: 150, color: "#3B82F6" },
  { name: "Pending Approval", value: 90, color: "#FACC15" },
  { name: "Overdue", value: 75, color: "#F87171" },
];

const services = [
  {
    package_name: "Review Management",
    total_sold: 2,
    total_amount: 548,
    // color: "bg-blue-600",
  },
  {
    package_name: "Email Design",
    total_sold: 8920,
    total_amount: 748,
    // color: "bg-amber-400",
  },
  {
    package_name: "Review Management",
    total_sold: 6380,
    total_amount: 348,
    // color: "bg-green-600",
  },
  {
    package_name: "Short-Form Videos",
    total_sold: 3380,
    total_amount: 148,
    // color: "bg-fuchsia-500",
  },
];
const serviceColors = [
  "bg-blue-600",
  "bg-amber-400",
  "bg-green-600",
  "bg-fuchsia-500",
];

function TaskInsightChart() {
  const { data: pieChartData } = useGetPieChartDataQuery();

  const rawData = pieChartData?.data?.data;
  const formattedData = [
    {
      name: "Completed",
      value: rawData?.completed_tasks,
      color: "#22C55E",
    },
    {
      name: "In Progress",
      value: rawData?.in_progress_tasks,
      color: "#3B82F6",
    },
    {
      name: "Pending Approval",
      value: rawData?.pending_review,
      color: "#FACC15",
    },
    {
      name: "Overdue",
      value: rawData?.pending_tasks,
      color: "#F87171",
    },
  ];
  const total = formattedData.reduce((sum: number, d: any) => sum + d.value, 0);

  return (
    <div className="p-4 rounded-lg shadow bg-white h-full">
      <h3 className="font-semibold text-gray-800">Task Insight</h3>
      <p className="text-xl sm:text-2xl font-bold mt-2">
        {total}{" "}
        <span className="text-green-500 text-xs sm:text-sm font-medium block sm:inline">
          + Increased this month
        </span>
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
        {/* Make chart responsive */}
        <div className="w-full sm:w-auto mx-auto flex justify-center">
          <PieChart width={200} height={180}>
            <Pie
              data={formattedData}
              dataKey="value"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={4}
              startAngle={90}
              endAngle={-270}
              cornerRadius={5}
            >
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <ul className="w-full sm:w-auto mt-2 text-xs sm:text-sm text-gray-600 space-y-1">
          {formattedData.map((item) => (
            <li key={item.name} className="flex justify-between gap-6">
              <span className="flex items-center">
                <span
                  className="inline-block w-2 sm:w-3 h-2 sm:h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.name}
              </span>
              <span className="ml-2 font-semibold text-gray-900">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TopPerformingServices() {
  const [period, setPeriod] = useState("week");

  const { data: topPerformingServices } =
    useGetTopPerformingServicesQuery(undefined);

  // console.log(topPerformingServices?.data?.data);
  const services = topPerformingServices?.data?.data;

  const maxAmount = services?.reduce((max: number, service: any) => {
    return Math.max(max, service.total_amount) + 50;
  }, 0);

  const totalAmount = services?.reduce((sum: number, service: any) => {
    return sum + service.total_amount;
  }, 0);

  // console.log(totalAmount);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          Top Performing Services
        </h3>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="flex items-center text-xs sm:text-sm bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-md outline-none border-none"
        >
          <option value="week">This week</option>
          <option value="month">This month</option>
          <option value="year">This year</option>
        </select>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {services?.map((service: any, index: number) => {
          const width = (service.total_amount / maxAmount) * 100;
          // console.log(width)
          const widthPercentage = `${width.toFixed(2)}%`;
          // console.log(widthPercentage);
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2 sm:gap-4"
            >
              <div className="w-full">
                <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  {service.package_name}
                </p>
                <div className="w-full h-1.5 sm:h-2 rounded-full bg-gray-200">
                  <div
                    className={`h-full rounded-full ${serviceColors[index]}`}
                    style={{ width: widthPercentage }}
                  ></div>
                  {/* <div
                    className={`h-full rounded-full ${service.color} ${width.toFixed(2)}%`}
                ></div> */}
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
                ${service.total_amount.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ChartAndGraph() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-5">
      <div className="lg:col-span-5">
        <TaskInsightChart />
      </div>
      <div className="lg:col-span-7">
        <TopPerformingServices />
      </div>
    </div>
  );
}
