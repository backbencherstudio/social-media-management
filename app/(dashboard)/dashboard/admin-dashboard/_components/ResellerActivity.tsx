"use client"

import React from "react";
import Image from "next/image";
import { useGetTopResellersQuery } from "@/src/redux/features/admin/dashboard/dashboardApi";

export default function ResellerActivity() {
  const {
    data: resellers,
    isLoading,
    isError,
  } = useGetTopResellersQuery(undefined);

  console.log(resellers?.data?.data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <TopResellers resellers={resellers?.data?.data} />
      <AdminInfoSection />
    </section>
  );
}

function TopResellers({ resellers }: { resellers: any[] }) {
  return (
    <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-md max-w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-5">
        Top Resellers
      </h3>

      <table className="min-w-full table-auto text-sm text-gray-600">
        <tbody>
          {resellers?.map((reseller, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-3 py-3 flex items-center  gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={reseller?.imageUrl || "/path/to/image.jpg"}
                    alt={`${reseller?.full_name} profile`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-1.5">
                  <p className="font-medium">{reseller?.full_name}</p>
                  <p className="text-sm ">{reseller?.completed_tasks}</p>
                </div>
              </td>

              <td className="px-2 py-3 font-semibold">
                ${reseller?.total_earnings?.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// function RecentActivities() {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
//       <ul className="flex flex-col item-center justify-around h-full pb-3">
//         {activities.map((activity, index) => (
//           <li key={index} className="flex items-center space-x-4 mb-4">
//             <div className={`px-3 py-5 rounded-full ${activity.bgColor}`}>
//               {activity.icon}
//             </div>
//             <div>
//               <h3 className="text-lg font-medium">{activity.title}</h3>
//               <p className="text-sm text-gray-600">{activity.description}</p>
//               <p className="text-xs text-gray-400">{activity.timeAgo}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function AdminInfoSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 md:mb-8">Overview</h2>
      <div className="flex flex-col items-start space-y-4 md:space-y-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-100">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Monitor Key Activities</h3>
            <p className="text-sm text-gray-600">
              Track project initiations, reseller onboarding, and payment
              transactions.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-100">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Stay Updated</h3>
            <p className="text-sm text-gray-600">
              View real-time updates on critical admin tasks and system
              activities.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-purple-100">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium">Manage Efficiently</h3>
            <p className="text-sm text-gray-600">
              Access tools to oversee operations and make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
