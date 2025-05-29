"use client";

import { useParams, useRouter } from "next/navigation";
import RunningTaskTable from "./_components/RunningTaskTable";
import { useState } from "react";
import { tasks } from "./fakeTask";

export default function page() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  //   demo data
  const user = {
    name: "Theresa Webb",
    title: "Digital Marketer",
    email: "info232435@mail.com",
    avatar: "https://i.pravatar.cc/100?img=11",
    tasks: 12,
    earnings: "$222.00",
    skills: ["Copywriting", "Marketing", "SEO Blog", "SEO Backlinks"],
  };



  const [orderstatus, setOrderStatus] = useState("all");

  return (
    <>
      <div className="space-y-6 p-6 bg-[#F9F9FB] rounded-xl">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 flex items-center gap-1 font-medium">
          <button onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
                fill="#1D1F2C"
              />
            </svg>
          </button>
          <p>
            <span className="text-gray-500">Reseller / </span>
            <span className="text-gray-900 font-medium">
              Edit Reseller / {id}
            </span>
          </p>
        </p>

        {/* details */}

        {/* Top Profile Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.title}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            <div className="bg-white rounded-md px-6 py-4 text-center shadow-sm">
              <p className="text-sm text-gray-500">Total Task</p>
              <p className="text-lg font-semibold">{user.tasks}</p>
            </div>
            <div className="bg-white rounded-md px-6 py-4 text-center shadow-sm">
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="text-lg font-semibold">{user.earnings}</p>
            </div>
          </div>
        </div>

        {/* User Skills */}
        <div className="bg-white p-4 rounded-xl">
          <h3 className="text-sm font-medium mb-3">User Skills</h3>
          <div className="flex flex-wrap gap-3">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
            <button className="bg-gray-100 text-sm px-3 py-1 rounded-md hover:bg-gray-200 border border-gray-500">
              + Add Skill
            </button>
          </div>
        </div>
      </div>

      <RunningTaskTable
        tasks={tasks}
        orderStatus={orderstatus}
        setOrderStatus={setOrderStatus}
      />
    </>
  );
}
