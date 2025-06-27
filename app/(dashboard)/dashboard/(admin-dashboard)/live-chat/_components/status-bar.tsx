// app/chat/_components/status-bar.tsx
"use client";

interface StatusBarProps {
  status: "disconnected" | "connecting" | "connected";
  userId: string;
  isAdmin: boolean;
}

export default function StatusBar({ status, userId, isAdmin }: StatusBarProps) {
  const statusColors = {
    disconnected: "bg-red-500",
    connecting: "bg-yellow-500",
    connected: "bg-green-500",
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
        <span className="text-sm capitalize">{status}</span>
      </div>
      <div className="text-sm font-medium">
        {isAdmin ? "Admin" : "User"} {userId.slice(0, 6)}...
      </div>
    </div>
  );
}