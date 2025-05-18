import { FaInstagram, FaClock, FaImage } from "react-icons/fa";

const activities = [
  {
    id: 1,
    icon: <FaInstagram className="text-blue-500" />,
    text: "New post published on Instagram",
    time: "2 hours ago",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    icon: <FaClock className="text-purple-500" />,
    text: "New post published on Instagram",
    time: "2 hours ago",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    icon: <FaImage className="text-green-500" />,
    text: "New post published on Instagram",
    time: "2 hours ago",
    bgColor: "bg-green-50",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm mt-8">
      <h2 className="text-[20px] font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center space-x-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full text-black ${activity.bgColor}`}>
              {activity.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{activity.text}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
