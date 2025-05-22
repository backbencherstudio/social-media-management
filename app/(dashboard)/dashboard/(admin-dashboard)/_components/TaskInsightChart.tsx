import { PieChart, Pie, Cell, Legend } from "recharts";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const data = [
  { name: "Completed", value: 275, color: "#22C55E" },
  { name: "In Progress", value: 150, color: "#3B82F6" },
  { name: "Pending Approval", value: 90, color: "#FACC15" },
  { name: "Overdue", value: 75, color: "#F87171" },
];

const services = [
  {
    name: "Social Media Posts",
    value: 12450,
    color: "bg-blue-600",
    width: "w-[90%]",
  },
  {
    name: "Email Design",
    value: 8920,
    color: "bg-amber-400",
    width: "w-[70%]",
  },
  {
    name: "Review Management",
    value: 6380,
    color: "bg-green-600",
    width: "w-[50%]",
  },
  {
    name: "Short-Form Videos",
    value: 3380,
    color: "bg-fuchsia-500",
    width: "w-[30%]",
  },
];

function TaskInsightChart() {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  return (
    <div className="p-4 rounded-lg shadow bg-white col-span-5 h-full">
      <h3 className="font-semibold text-gray-800">Task Insight</h3>
      <p className="text-2xl font-bold mt-2">
        {total}{" "}
        <span className="text-green-500 text-sm font-medium">
          +125 Increased this month
        </span>
      </p>
      <div className="flex items-center justify-center gap-6 md:gap-12">
        <PieChart width={250} height={200}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={4}
            startAngle={90}
            endAngle={-270}
            cornerRadius={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <ul className="mt-2 text-sm text-gray-600 space-y-1">
          {data.map((item) => (
            <li key={item.name} className="flex justify-between">
              <span className="flex items-center">
                <span
                  className="inline-block w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.name}
              </span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TopPerformingServices() {
  const [period, setPeriod] = useState("week");

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Top Performing Services
        </h3>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="flex items-center text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-md outline-none border-none"
        >
          <option value="week">This week</option>
          <option value="month">This month</option>
          <option value="year">This year</option>
        </select>
      </div>

      <div className="space-y-5">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="w-full mr-4">
              <p className="text-sm font-medium text-gray-700 mb-1">
                {service.name}
              </p>
              <div className="w-full h-2 rounded-full bg-gray-200">
                <div
                  className={`h-full rounded-full ${service.color} ${service.width}`}
                ></div>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              ${service.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ChartAndGraph() {
  return (
    <div className="grid grid-cols-12 gap-4 my-5 ">
      <div className="col-span-5">
        <TaskInsightChart />
      </div>
      <div className="col-span-7 h-full">
        <TopPerformingServices />
      </div>
    </div>
  );
}
