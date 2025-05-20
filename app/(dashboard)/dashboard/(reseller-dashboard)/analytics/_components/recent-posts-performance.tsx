import Link from "next/link";
import React from "react";
import DatePicker from "../../freelancer-dashboard/_components/date-picker";
import ActionIcon from "@/public/incons/actions";
import FacebookIcon from "@/public/incons/facebook";
import InstagramIcon from "@/public/incons/instagram";
import LinkedInIcon from "@/public/incons/linkedIn";


const services = [
  {
    id: 1,
    post: "10 Tips for Digital Marketing",
    platform: "Instagram",
    date: 'Mar 15, 2024',
    likes: 25,
    icon: <FacebookIcon className="w-5 h-5 text-[#1877F2]" />,
    comments: 10,
    shares: 15,
    reach: 100,
    engagementRate: 10,
  },
  {
    id: 2,
    post: "10 Tips for Digital Marketing",
    platform: "Facebook",
    date: 'Mar 15, 2024',
    likes: 25,
    icon: <InstagramIcon className="w-5 h-5 text-[#E4405F]" />,
    comments: 10,
    shares: 15,
    reach: 100,
    engagementRate: 10,
  },
  {
    id: 3,
    post: "10 Tips for Digital Marketing",
    platform: "Instagram",
    date: 'Mar 15, 2024',
    likes: 25,
    icon: <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />,
    comments: 10,
    shares: 15,
    reach: 100,
    engagementRate: 10,
  }
];

export default function RecentPostsPerformance() {
  return (
    <div className="overflow-x-auto w-full px-3 md:px-4 py-4 md:py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 md:mb-6 px-1">
        <div className="flex flex-wrap gap-2 md:gap-3">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">All Services</h1>

          <div className="text-xs md:text-sm text-black flex items-center justify-center px-3 md:px-4 py-1 rounded-full bg-[#EBFBF5] gap-1">
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">15</span>&nbsp;Active
          </div>
        </div>
        <DatePicker />
      </div>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg">Post</th>
            <th className="py-3 px-4">Platform</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Likes</th>
            <th className="py-3 px-4">Comments</th>
            <th className="py-3 px-4">Shares</th>
            <th className="py-3 px-4">Reach</th>
            <th className="py-3 px-4">Engagement Rate</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="">
              {/* Service cell with left side text & status */}
              <td className="py-4 px-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h1 className="font-semibold text-gray-900">
                      {service.post}
                    </h1>
                    <span className="text-sm text-gray-500">62A2AA44-2</span>
                  </div>
                </div>
              </td>

              <td className="py-4 text-center">
                <div className="flex items-center pl-4 gap-1 rounded-full border py-1">
                {service.icon} {service.platform}
                </div>
              </td>
              <td className="py-4 px-4 text-center">{service.date}</td>
              <td className="py-4 px-4 text-center">{service.likes}</td>
              <td className="py-4 px-4 text-center">{service.comments}</td>
              <td className="py-4 px-4 text-center">{service.shares}</td>
              <td className="py-4 px-4 text-center">{service.reach}</td>
              <td className="py-4 px-4 text-center">{service.engagementRate}</td>

              <td className="py-4 px-4 flex justify-center">
                <Link
                  href={`/dashboard/service/${service.id}`}
                >
                  <ActionIcon />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
