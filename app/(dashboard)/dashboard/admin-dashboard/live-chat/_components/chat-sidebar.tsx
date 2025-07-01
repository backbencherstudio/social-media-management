// app/chat/_components/chat-sidebar.tsx
"use client";

import Image from "next/image";

interface ChatSidebarProps {
  users: {
    id: string;
    name: string;
    unreadCount?: number;
  }[];
  activeUserId: string | null;
  onUserSelect: (userId: string) => void;
}

export default function ChatSidebar({
  users,
  activeUserId,
  onUserSelect,
}: ChatSidebarProps) {
  return (
    <div className="p-4 bg-white overflow-y-auto h-full rounded-[12px]">
      <div className="pb-3 border-b border-[#E9E9EA] ">
        <h3 className="font-semibold text-[#070707] font-serotiva leading-[150%] tracking-[.32px]">
          Live Chat
        </h3>
      </div>
      <div className="mt-5">
        {users.length === 0 ? (
          <p className="p-4 text-sm text-gray-500">No active users</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className={`p-3 mt-2 rounded-lg cursor-pointer hover:bg-[#F5F5F7]  ${
                activeUserId === user.id ? "bg-[#F5F5F7]" : ""
              }`}
              onClick={() => onUserSelect(user.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/chat-profile.png"
                    width={100}
                    height={100}
                    alt="profile picture"
                    className="w-10 h-10"
                  />
                  <span>{user.name}</span>
                </div>
                <span
                  className={` ${
                    (user.unreadCount ?? 0) > 0 ? "block" : "hidden"
                  } bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse`}
                >
                  {user.unreadCount ?? 0}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
