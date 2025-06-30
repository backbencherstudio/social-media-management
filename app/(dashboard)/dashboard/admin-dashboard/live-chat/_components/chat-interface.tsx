"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import ChatSidebar from "./chat-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StatusBar from "./status-bar";
import {
  useGetAllAdminsQuery,
  useGetAllClientConversationQuery,
  useGetSingleUserMessageQuery,
} from "@/src/redux/features/admin/help-and-support/support";
import { C } from "@fullcalendar/core/internal-common";

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
  const [status, setStatus] = useState<
    "disconnected" | "connecting" | "connected"
  >("disconnected");
  const [users, setUsers] = useState<User[]>([]);
  const [activeUserId, setActiveUserId] = useState<string | null>(null);
  const [messagesByUser, setMessagesByUser] = useState<
    Record<string, Message[]>
  >({});
  const clientIdRef = useRef("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [loadingMessages, setLoadingMessages] = useState(false);
  console.log(users, "users");
  const { data: allClient, isLoading } =
    useGetAllClientConversationQuery(undefined);
  const { data: singleUserMessage, refetch } = useGetSingleUserMessageQuery(
    clientIdRef.current
  )
  const {data:allAdmin} = useGetAllAdminsQuery(undefined);
  


  const { data: singleUserMessageClient, refetch: refetchClient } =
    useGetSingleUserMessageQuery(userId);

  useEffect(() => {
    if (userId) {
      setLoadingMessages(true);
      // Fetch the messages when the component loads
      refetchClient()
        .then(() => {
          const formattedMessages = formatMessages(
            singleUserMessageClient?.messages || []
          );
          setMessagesByUser((prev) => ({
            ...prev,
            [userId]: formattedMessages, // Use userId for client-specific messages
          }));
        })
        .finally(() => setLoadingMessages(false));
    }
  }, [userId, singleUserMessageClient, refetchClient]); // Only refetch when userId changes

  useEffect(() => {
    if (messagesEndRef.current) {
      // This will ensure that the chat scrolls to the bottom whenever the messages change
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messagesByUser]); // This ensures scroll happens whenever messagesByUser is updated

  useEffect(() => {
    const newSocket = io(
      "https://trademarks-removed-examinations-cassette.trycloudflare.com"
    );

    setSocket(newSocket);
    setStatus("connecting");

    newSocket.on("connect", () => {
      setStatus("connected");
      isAdmin //admin check
        ? newSocket.emit("register_admin", userId)
        : newSocket.emit("register_user", userId);
    });

    newSocket.on("disconnect", () => setStatus("disconnected"));
    newSocket.on("connect_error", () => setStatus("disconnected"));

    newSocket.on("admin_registered", (data: { success: boolean }) => {
      if (data.success) console.log("Admin registered successfully");
    });
    //user registration
    newSocket.on(
      "user_registered",
      (data: { success: boolean; conversationId?: string; userId: string }) => {
        if (data.success && data.conversationId) {
          setActiveUserId(data?.userId);
        }
      }
    );
    // Fetch initial users
    newSocket.on("new_conversation", (data: { userId: string }) => {
      setUsers((prev) => {
        if (!prev.some((u) => u.id === data.userId)) {
          return [
            ...prev,
            { id: data.userId, name: `User ${data.userId.slice(0, 6)}...` },
          ];
        }
        return prev;
      });
    });
    //emmit messages from user to admin
    newSocket.on(
      "message_from_user",
      (data: { userId: string; message: string }) => {
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
      }
    );

    // emit messages from admin to user
    newSocket.on(
      "message_from_admin",
      (data: { message: string; timestamp?: string }) => {
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
      }
    );

    newSocket.on("user_disconnected", (userId: string) => {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, isOnline: true } : user
        )
      );
    });

    return () => {
      newSocket.disconnect();
    };
  }, [userId, isAdmin, activeUserId, refetch]);

  // Send message function
  const sendMessage = () => {
    if (!messageInput.trim() || !socket || !activeUserId) return;

    const url = isAdmin
      ? "https://trademarks-removed-examinations-cassette.trycloudflare.com/api/messages/message-to-user"
      : "https://trademarks-removed-examinations-cassette.trycloudflare.com/api/messages/message-to-admin";

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

const formatMessages = (messages: any[]): Message[] => {
  return messages?.map((msg: any) => {
    // Check if the message is sent by an admin
    const isAdmin = allAdmin?.data?.data?.some((admin: any) => admin?.id === msg?.sender_id);
    return {
      id: msg?.id || Date.now().toString(),
      sender: isAdmin ? "Admin" : msg?.sender_id,  // If the sender is an admin, set sender to "Admin"
      text: msg?.message || msg?.text,
      timestamp: new Date(msg?.created_at),
      // Messages from the user or admin will be on the right side (sent)
      // Other messages will be on the left side (received)
      type: isAdmin || msg?.sender_id === userId ? "sent" : "received", // Sent messages from user or admin
    };
  });
};



  const handleUserSelect = async (userId: string) => {
    setLoadingMessages(true); // Start loading messages

    clientIdRef.current = userId;
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, unreadCount: 0 } : user
      )
    );
  };

  const updatedData = useCallback(async () => {
    try {
      // Refetch messages only after the clientId has been fully updated
      await refetch();

      const formattedMessages = formatMessages(
        singleUserMessage?.messages || []
      );

      setMessagesByUser((prev) => {
        const updatedMessages = {
          ...prev,
          [clientIdRef.current]: formattedMessages, // Use clientIdRef.current to update
        };
        return updatedMessages;
      });

      setActiveUserId(clientIdRef.current); // Use clientIdRef.current for active user
    } catch (error) {
      console.error("Error loading messages", error);
    } finally {
      setLoadingMessages(false); // Stop loading messages
    }
  }, [clientIdRef.current, refetch, singleUserMessage]); // Added missing dependencies

  useEffect(() => {
    if (clientIdRef.current) {
      updatedData(); // Trigger updatedData when clientIdRef.current changes
    }
  }, [clientIdRef.current, updatedData]); // Trigger useEffect when clientIdRef.current or updatedData changes

  useEffect(() => {
    if (!isLoading && allClient?.length > 0) {
      const updatedUsers = allClient.map((client: any) => ({
        id: client.creator_id,
        name: `User ${client.creator_id.slice(0, 6)}...`,
        unreadCount: 0,
        isOnline: true,
      }));

      const currentUser = updatedUsers?.filter(
        (user: any) => user?.id === userId
      );
      setUsers(updatedUsers);
      setActiveUserId(currentUser[0]?.id);

      const existingUser = allClient?.filter(
        (client: any) => client?.creator_id === userId
      );
      const formattedMessages = formatMessages(existingUser[0]?.messages);
      setMessagesByUser((prev) => ({ ...prev, [userId]: formattedMessages }));
    }
  }, [allClient, isLoading]);

  if (isLoading) {
    return <p>Loading.............</p>;
  }

  const currentMessages = activeUserId
    ? messagesByUser[activeUserId] || []
    : [];

  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <StatusBar status={status} userId={userId} isAdmin={isAdmin} />

      <div className="flex flex-1 overflow-hidden">
        {isAdmin && !isLoading && (
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
            {loadingMessages ? (
              <p className="text-center text-gray-500">Loading messages...</p>
            ) : currentMessages?.length === 0 ? (
              <p className="text-center text-gray-500">No messages yet</p>
            ) : (
              currentMessages?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "sent" ? "justify-end" : "justify-start"
                  }`}
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
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
                disabled={!activeUserId}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button onClick={sendMessage} disabled={!messageInput.trim()}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
