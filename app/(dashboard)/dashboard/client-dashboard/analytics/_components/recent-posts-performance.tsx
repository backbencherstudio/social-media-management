"use client";

import Link from "next/link";
import React from "react";
import ActionIcon from "@/public/incons/actions";
import FacebookIcon from "@/public/incons/facebook";
import InstagramIcon from "@/public/incons/instagram";
import LinkedInIcon from "@/public/incons/linkedIn";
import { useGetAllAnalyticsAllServicesQuery } from "@/src/redux/features/reseller/analytics/analytics";
import DatePicker from "../../../reseller-dashboard/reseller-dashboard/_components/date-picker";


export default function RecentPostsPerformance() {
  const { data } = useGetAllAnalyticsAllServicesQuery();

  return (
    <div className="overflow-x-auto w-full px-3 md:px-4 py-4 md:py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0 mb-6 px-1">
        <div className="flex flex-wrap w-full sm:w-auto gap-3 justify-start">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
            All Services
          </h1>

          <div className="text-sm text-black flex items-center justify-center px-4 py-1 rounded-full bg-[#EBFBF5] gap-1 whitespace-nowrap">
            <div className="w-2 h-2 rounded-full bg-[#119B70] animate-pulse"></div>
            <span className="font-medium text-gray-900">15</span>&nbsp;Active
          </div>
        </div>
        <div className="w-full sm:w-auto flex justify-end">
          <DatePicker />
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg whitespace-nowrap overflow-hidden text-ellipsis">
              Post
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Platform
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Date
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Likes
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Comments
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Shares
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Reach
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Engagement Rate
            </th>
            <th className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((service, index) => (
            <tr key={service.cucid} className="">
              {/* Service cell with left side text & status */}
              <td className="py-4 px-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="max-w-full overflow-hidden">
                    <h1 className="font-semibold text-gray-900 truncate whitespace-nowrap">
                      {service.post}
                    </h1>
                    <span className="text-sm text-gray-500 block truncate">
                      {service.cucid}
                    </span>
                  </div>
                </div>
              </td>

              <td className="py-4 px-4 text-center">
                <div className="flex items-center pl-2 gap-1.5 rounded-full border py-1 text-sm">
                  {/* {service.icon}  */}
                  {service.platform}
                </div>
              </td>
              <td className="py-4 px-4 text-center whitespace-nowrap">
                {service.date}
              </td>
              <td className="py-4 px-4 text-center">{service.likes || 0}</td>
              <td className="py-4 px-4 text-center">{service.comments || 0}</td>
              <td className="py-4 px-4 text-center">{service.shares || 0}</td>
              <td className="py-4 px-4 text-center">{service.reach || 0}</td>
              <td className="py-4 px-4 text-center">
                {service.engagementRate || 0}%
              </td>

              <td className="py-4 px-4 flex justify-center">
                <Link href={`/dashboard/service/${service.cucid}`}>
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
