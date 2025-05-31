import React from "react";

import Image from "next/image"; // Use for Next.js or use standard <img> in React
const icon1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="text-purple-500"
  >
    <path
      d="M18 4l4 4-4 4M6 20l-4-4 4-4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);
const icon2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="text-yellow-500"
  >
    <path
      d="M12 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm0 0c-4.418 0-8 3.582-8 8s3.582 8 8 8h0c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);
const icon3 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="text-green-500"
  >
    <path
      d="M12 2v20m10-10h-4m-12 0h-4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

const resellers = [
  {
    name: "Theresa Webb",
    tasks: 48,
    earnings: 16450,
    imageUrl:
      "https://cdn-cm.freepik.com/previews/9f10d3ad-1597-41a9-872a-676fde36f35a.jpg?token=exp=1747480146~hmac=7a2d9e5f70bc411a4b5e3ea79ad37ac7b864b26fae8188c4ffc9c800c2fdce3e?w=500&h=500",
  },
  {
    name: "Theresa Webb",
    tasks: 36,
    earnings: 12920,
    imageUrl: "/path/to/image.jpg",
  },
  {
    name: "Theresa Webb",
    tasks: 32,
    earnings: 8380,
    imageUrl: "/path/to/image.jpg",
  },
  {
    name: "Theresa Webb",
    tasks: 28,
    earnings: 7380,
    imageUrl: "/path/to/image.jpg",
  },
];

interface Activity {
  title: string;
  description: string;
  timeAgo: string;
  icon: React.ReactNode;
  bgColor: string;
}

const activities: Activity[] = [
  {
    title: "New Project Started",
    description: "Tech Corp - Social Media Management",
    timeAgo: "2 hours ago",
    icon: icon1,
    bgColor: "bg-purple-100",
  },
  {
    title: "New Reseller Joined",
    description: "Michael Brown",
    timeAgo: "5 hours ago",
    icon: icon2,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Payment Received",
    description: "Digital Solutions - $1,200",
    timeAgo: "9 hours ago",
    icon: icon3,
    bgColor: "bg-green-100",
  },
];

function TopResellers() {
  return (
    <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-md max-w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-5">
        Top Resellers
      </h3>

      <table className="min-w-full table-auto text-sm text-gray-600">
        <tbody>
          {resellers.map((reseller, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-3 py-3 flex items-center  gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={reseller.imageUrl}
                    alt={`${reseller.name} profile`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-1.5">
                  <p className="font-medium">{reseller.name}</p>
                  <p className="text-sm ">{reseller.tasks}</p>
                </div>
              </td>

              <td className="px-2 py-3 font-semibold">
                ${reseller.earnings.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RecentActivities() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <ul className="flex flex-col item-center justify-around h-full pb-3">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center space-x-4 mb-4">
            <div className={`px-3 py-5 rounded-full ${activity.bgColor}`}>
              {activity.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-400">{activity.timeAgo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResellerActivity() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <TopResellers />

      <RecentActivities />
    </section>
  );
}
