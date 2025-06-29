// app/chat/_components/chat-sidebar.tsx
"use client";

interface ChatSidebarProps {
  users: {
    id: string;
    name: string;
    unreadCount?: number;
  }[];
  activeUserId: string | null;
  onUserSelect: (userId: string) => void;
}

export default function ChatSidebar({ users, activeUserId, onUserSelect }: ChatSidebarProps) {
  return (
    <div className="w-64 border-r bg-white overflow-y-auto">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Active Users</h3>
      </div>
      <div className="divide-y">
        {users.length === 0 ? (
          <p className="p-4 text-sm text-gray-500">No active users</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                activeUserId === user.id ? "bg-blue-50" : ""
              }`}
              onClick={() => onUserSelect(user.id)}
            >
              <div className="flex justify-between items-center">
                <span>{user.name}</span>
                {user.unreadCount && user.unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {user.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}