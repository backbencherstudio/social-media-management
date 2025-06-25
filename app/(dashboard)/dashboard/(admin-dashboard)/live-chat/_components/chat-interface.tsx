"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import ChatSidebar from "./chat-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StatusBar from "./status-bar";

interface ChatInterfaceProps {
  userId: string;
  isAdmin: boolean;
}

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  type: "sent" | "received";
}

interface User {
  id: string;
  name: string;
  unreadCount?: number;
}

export default function ChatInterface({ userId, isAdmin }: ChatInterfaceProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [status, setStatus] = useState<"disconnected" | "connecting" | "connected">("disconnected");
  const [users, setUsers] = useState<User[]>([]);
  const [activeUserId, setActiveUserId] = useState<string | null>(null);
  const [messagesByUser, setMessagesByUser] = useState<Record<string, Message[]>>({});
  const [messageInput, setMessageInput] = useState("");



  // Connect socket here
  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);
    setStatus("connecting");

    newSocket.on("connect", () => {
      setStatus("connected");
      isAdmin  //admin check
        ? newSocket.emit("register_admin", userId)
        : newSocket.emit("register_user", userId);
    });
   
    newSocket.on("disconnect", () => setStatus("disconnected"));
    newSocket.on("connect_error", () => setStatus("disconnected"));

    newSocket.on("admin_registered", (data: { success: boolean }) => {
      if (data.success) console.log("Admin registered successfully");
    });
//user registration
    newSocket.on("user_registered", (data: { success: boolean; conversationId?: string }) => {
      if (data.success && data.conversationId) {
        setActiveUserId(data.conversationId);
      }
    });
    // Fetch initial users
    newSocket.on("new_conversation", (data: { userId: string }) => {
      setUsers((prev) => {
        if (!prev.some((u) => u.id === data.userId)) {
          return [...prev, { id: data.userId, name: `User ${data.userId.slice(0, 6)}...` }];
        }
        return prev;
      });
    });
//emmit messages from user to admin
    newSocket.on("message_from_user", (data: { userId: string; message: string }) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: `User ${data.userId.slice(0, 6)}...`,
        text: data.message,
        timestamp: new Date(),
        type: "received",
      };

      setMessagesByUser((prev) => {
        const existing = prev[data.userId] || [];
        return { ...prev, [data.userId]: [...existing, newMessage] };
      });

      if (activeUserId !== data.userId) {
        setUsers((prev) =>
          prev.map((user) =>
            user.id === data.userId
              ? { ...user, unreadCount: (user.unreadCount || 0) + 1 }
              : user
          )
        );
      }
    });

    // emit messages from admin to user
    newSocket.on("message_from_admin", (data: { message: string; timestamp?: string }) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "Admin",
        text: data.message,
        timestamp: data.timestamp ? new Date(data.timestamp) : new Date(),
        type: "received",
      };

      if (activeUserId) {
        setMessagesByUser((prev) => {
          const existing = prev[activeUserId] || [];
          return { ...prev, [activeUserId]: [...existing, newMessage] };
        });
      }
    });

    newSocket.on("user_disconnected", (userId: string) => {
      setUsers((prev) =>
        prev.map((user) => (user.id === userId ? { ...user, isOnline: false } : user))
      );
    });

    return () => {
      newSocket.disconnect();
    };
  }, [userId, isAdmin, activeUserId]);

  // Send message function
  const sendMessage = () => {
    if (!messageInput.trim() || !socket || !activeUserId) return;

    const url = isAdmin
      ? "http://localhost:4000/api/messages/message-to-user"
      : "http://localhost:4000/api/messages/message-to-admin";

    const payload = isAdmin
      ? { adminId: userId, userId: activeUserId, message: messageInput }
      : { userId, message: messageInput };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const newMessage: Message = {
            id: Date.now().toString(),
            sender: "You",
            text: messageInput,
            timestamp: new Date(),
            type: "sent",
          };

          setMessagesByUser((prev) => {
            const existing = prev[activeUserId] || [];
            return { ...prev, [activeUserId]: [...existing, newMessage] };
          });

          setMessageInput("");
        }
      });
  };

//user selection handler
  const handleUserSelect = async (userId: string) => {
    setActiveUserId(userId);
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, unreadCount: 0 } : user))
    );

    try { //fetching messages for the selected user
      const res = await fetch(`http://localhost:4000/api/messages/conversation/cmcbkkpu70001remc44qvajna`);
      const data = await res.json();
    console.log(res, data,"ashdhkdhahasdaf");
    
      if (data.success && Array.isArray(data.messages)) {
        const formatted: Message[] = data.messages.map((msg: any) => ({
          id: msg.id || Date.now().toString(),
          sender: msg.sender || "Unknown",
          text: msg.text || msg.message,
          timestamp: new Date(msg.timestamp),
          type: msg.sender === userId ? "received" : "sent",
        }));

        setMessagesByUser((prev) => ({ ...prev, [userId]: formatted }));
      }
    } catch (error) {
      console.error("Error loading messages", error);
    }
  };

  const currentMessages = activeUserId ? messagesByUser[activeUserId] || [] : [];
console.log(currentMessages, "currentMessages");
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <StatusBar status={status} userId={userId} isAdmin={isAdmin} />

      <div className="flex flex-1 overflow-hidden">
        {isAdmin && (
          <ChatSidebar
            users={users}
            activeUserId={activeUserId}
            onUserSelect={handleUserSelect}
          />
        )}

        <div className="flex-1 flex flex-col bg-white">
          <div className="p-4 border-b">
            <h3 className="font-semibold">
              {isAdmin
                ? activeUserId
                  ? `Chat with User ${activeUserId.slice(0, 6)}...`
                  : "Select a user to chat"
                : "Chat with Admin"}
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {currentMessages?.length === 0 ? (
              <p className="text-center text-gray-500">No messages yet</p>
            ) : (
              currentMessages?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                      message.type === "sent"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="font-medium">{message.sender}</p>
                    <p>{message.text}</p>
                    <p className="text-xs text-right mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))
            )
            }
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
                disabled={!activeUserId}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button
                onClick={sendMessage}
                disabled={!messageInput.trim() || !activeUserId}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
