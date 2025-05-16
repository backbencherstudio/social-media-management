import React from "react";
import PostData from "./_components/postData";

export default function Posts() {
  const posts = [
    {
      id: "1",
      name: "Ariana Blake",
      userIcon: "https://randomuser.me/api/portraits/women/44.jpg",
      socialMedia: "@ariblake",
      image: "https://source.unsplash.com/random/800x600?travel",
      description:
        "Woke up to this beautiful view! Nature always knows how to heal the soul. 🌄",
      hashtags: ["#nature", "#travel", "#morningvibes", "#peaceful"],
      status: "active",
      postCreate: "2025-05-15T09:30:00Z",
    },
    {
      id: "2",
      name: "Jason Lee",
      userIcon: "https://randomuser.me/api/portraits/men/33.jpg",
      socialMedia: "@jlee_dev",
      image: "https://source.unsplash.com/random/800x600?coding",
      description:
        "Working on my latest project with Next.js and Tailwind CSS! 🚀 Any feedback?",
      hashtags: ["#developer", "#nextjs", "#codinglife", "#tailwind"],
      status: "active",
      postCreate: "2025-05-14T17:45:00Z",
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      userIcon: "https://randomuser.me/api/portraits/women/55.jpg",
      socialMedia: "@emma_writes",
      image: "https://source.unsplash.com/random/800x600?books",
      description:
        "Just finished reading a powerful book on self-discovery. Highly recommend to everyone!",
      hashtags: ["#books", "#mindfulness", "#reading", "#growth"],
      status: "inactive",
      postCreate: "2025-05-13T14:20:00Z",
    },
    {
      id: "4",
      name: "Liam Johnson",
      userIcon: "https://randomuser.me/api/portraits/men/21.jpg",
      socialMedia: "@liam.photog",
      image: "https://source.unsplash.com/random/800x600?photography",
      description:
        "Captured this during golden hour. Let me know what you think!",
      hashtags: ["#photography", "#sunset", "#goldenhour", "#dslr"],
      status: "active",
      postCreate: "2025-05-12T19:10:00Z",
    },
    {
      id: "5",
      name: "Liam Johnson",
      userIcon: "https://randomuser.me/api/portraits/men/21.jpg",
      socialMedia: "@liam.photog",
      image: "https://source.unsplash.com/random/800x600?photography",
      description:
        "Captured this during golden hour. Let me know what you think!",
      hashtags: ["#photography", "#sunset", "#goldenhour", "#dslr"],
      status: "active",
      postCreate: "2025-05-12T19:10:00Z",
    },
    {
      id: "6",
      name: "Liam Johnson",
      userIcon: "https://randomuser.me/api/portraits/men/21.jpg",
      socialMedia: "@liam.photog",
      image: "https://source.unsplash.com/random/800x600?photography",
      description:
        "Captured this during golden hour. Let me know what you think!",
      hashtags: ["#photography", "#sunset", "#goldenhour", "#dslr"],
      status: "active",
      postCreate: "2025-05-12T19:10:00Z",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black cursor-pointer">
          <option value="this-week">This week</option>
          <option value="last-week">Last week</option>
          <option value="this-month">This month</option>
          <option value="last-month">Last month</option>
          <option value="this-year">This year</option>
        </select>
        <select className="py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black cursor-pointer">
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="scheduled">Scheduled</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {posts.map((post) => (
          <PostData key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
