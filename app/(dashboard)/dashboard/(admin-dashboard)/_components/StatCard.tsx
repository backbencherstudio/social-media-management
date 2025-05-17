import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  change: string;
  positive?: boolean;
  neutral?: boolean;
  iconColor: string;
}

const StatCard = ({
  label,
  value,
  change,
  positive,
  neutral,
  iconColor,
}: StatCardProps) => {
  const Icon = positive ? ArrowUpRight : ArrowDownRight;
  const textColor = neutral
    ? "text-yellow-600"
    : positive
    ? "text-emerald-600"
    : "text-red-600";

  const bgColor = neutral
    ? "bg-yellow-100"
    : positive
    ? "bg-emerald-100"
    : "bg-red-100";

  return (
    <div className="bg-white rounded-xl shadow-sm p-5  min-w-[234px] ">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 mb-1">{label}</div>
        <div
          className={`mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium ${bgColor} ${textColor}`}
        >
          <Icon className={`w-4 h-4 ${iconColor} mr-1`} />
          {change}
        </div>
      </div>
      <div className="text-[24px] font-semibold text-gray-900">{value}</div>
    </div>
  );
};

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#F7F7F9] ">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
const statsData: StatCardProps[] = [
  {
    label: "Total Revenue",
    value: "$52,680",
    change: "8.2%",
    positive: true,
    iconColor: "text-emerald-600",
  },
  {
    label: "Active Clients",
    value: "186",
    change: "5.1%",
    iconColor: "text-red-600",
  },
  {
    label: "Active Resellers",
    value: "42",
    change: "7.5%",
    positive: true,
    iconColor: "text-emerald-600",
  },
  {
    label: "Active Projects",
    value: "234",
    change: "0.8%",
    neutral: true,
    iconColor: "text-yellow-600",
  },
];
