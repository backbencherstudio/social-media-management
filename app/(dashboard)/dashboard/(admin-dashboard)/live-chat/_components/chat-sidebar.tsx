"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avator";
import { User } from "../types";
import { cn } from "@/lib/utils";
import { se } from "date-fns/locale";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface ChatSidebarProps {
  users: User[];
  selectedUser: User | null;
  onUserSelect: (user: User) => void;
}

export default function ChatSidebar({
  users,
  selectedUser,
  onUserSelect,
}: ChatSidebarProps) {
  console.log("ChatSidebar :", selectedUser.id);
  if (selectedUser.id === users[0].id) {
    console.log("GOt selectedUser.id :", selectedUser.id);
  }
  return (
    <div className="w-[330px] border-r border-gray-200 bg-card bg-white rounded-l-lg shadow-lg  overflow-hidden">
      <div className="p-4 border-b border-gray-200 ">
        <h2 className="text-lg font-semibold text-gray-800">Live Chats</h2>
      </div>
      {/* users */}
      <ScrollArea>
        <div className="overflow-y-auto h- full h-[calc(100vh-200px)] px-3 space-y-1">
          {users.map((user) => (
            <div
              key={user.id}
              className={cn(
                "flex items-center gap-3 p-2.5 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors",
                selectedUser.id === user.id && "bg-gray-100"
              )}
              onClick={() => onUserSelect(user)}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                {user.lastMessage && (
                  <p className="text-xs text-muted-foreground truncate">
                    {user.lastMessage}
                  </p>
                )}
              </div>
              {user.isOnline && (
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
