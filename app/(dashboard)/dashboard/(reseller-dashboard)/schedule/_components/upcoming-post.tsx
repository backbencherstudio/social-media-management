import FacebookIcon from "@/public/incons/facebook";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiCalendar, FiClock } from "react-icons/fi";

export default function UpcomingPost() {
  const upcomingPosts = [
    {
      id: 1,
      title: "New Product Launch Campaign",
      platform: "Instagram",
      scheduledDate: "2024-02-15",
      scheduledTime: "10:30 AM",
      status: "scheduled",
      content:
        "Exciting news! Our new collection drops tomorrow. Stay tuned for amazing deals! 🎉 #NewLaunch #Fashion",
      media: "/images/product-launch.jpg",
    },
    {
      id: 2,
      title: "Weekly Tips & Tricks",
      platform: "Facebook",
      scheduledDate: "2024-02-16",
      scheduledTime: "2:00 PM",
      status: "scheduled",
      content:
        "Check out our top 5 social media marketing tips for small businesses! 📱 #MarketingTips #SocialMedia",
      media: "/images/tips.jpg",
    },
    {
      id: 3,
      title: "Customer Success Story",
      platform: "LinkedIn",
      scheduledDate: "2024-02-17",
      scheduledTime: "11:00 AM",
      status: "scheduled",
      content:
        "See how our platform helped ABC Corp increase their social media engagement by 300%! 📈 #Success #CaseStudy",
      media: "/images/success-story.jpg",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Posts</h2>

      <div className="space-y-4">
        {upcomingPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-4 items-center">
                <FacebookIcon />
                <span className="">{post.platform}</span>
              </div>
              <span className="text-3xl text-red-800 font-medium">
                <MdDeleteForever />
              </span>
            </div>
            <hr className="my-4 text-gray-300" />
            <p className="text-gray-600 text-sm mb-4">{post.content}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                <span>{post.scheduledDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiClock className="w-4 h-4" />
                <span>{post.scheduledTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
