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
import { FaPaperPlane } from "react-icons/fa";
import SendIcon from "@/public/incons/sendIcon";
import getTimeAgo from "../getTimeAgo";
import Image from "next/image";

interface ChatInterfaceProps {
  userId: string;
  isAdmin: boolean;
  userName: string;
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

export default function ChatInterface({
  userId,
  isAdmin,
  userName,
}: ChatInterfaceProps) {
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
  const { data: allClient, isLoading } =
    useGetAllClientConversationQuery(undefined);
  const { data: singleUserMessage, refetch } = useGetSingleUserMessageQuery(
    clientIdRef.current
  );
  const { data: allAdmin } = useGetAllAdminsQuery(undefined);

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
      isAdmin
        ? newSocket.emit("register_admin", userId)
        : newSocket.emit("register_user", userId);
    });

    newSocket.on("disconnect", () => setStatus("disconnected"));
    newSocket.on("connect_error", () => setStatus("disconnected"));

    newSocket.on("admin_registered", (data) => {
      if (data.success) console.log("Admin registered successfully");
    });

    // User registration
    newSocket.on("user_registered", (data) => {
      if (data.success && data.conversationId) {
        setActiveUserId(data?.userId);
      }
    });

    // New conversation
    newSocket.on("new_conversation", (data) => {
      setUsers((prev) => {
        if (!prev.some((u) => u.id === data.userId)) {
          return [...prev, { id: data.userId, name: `${data?.username}` }];
        }
        return prev;
      });
    });

    // Emit messages from user to admin
    newSocket.on("message_from_user", (data) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: `${data?.username}`,
        text: data.message,
        timestamp: new Date(),
        type: "received",
      };

      setMessagesByUser((prev) => {
        const existing = prev[data.userId] || [];
        return { ...prev, [data.userId]: [...existing, newMessage] };
      });

      // Update unread count for user if not active
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

    // Emit messages from admin to user
    newSocket.on("message_from_admin", (data) => {
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

    // Listen for messages from other admins
    newSocket.on("admin_message_received", (data) => {
      const newAdminMessage: Message = {
        id: Date.now().toString(),
        sender: `Admin ${data.senderId}`,
        text: data.message,
        timestamp: new Date(data.timestamp),
        type: "received",
      };

      setMessagesByUser((prev) => {
        const existing = prev[data.userId] || [];
        return { ...prev, [data.userId]: [...existing, newAdminMessage] };
      });
    });

    // User disconnected
    newSocket.on("user_disconnected", (userId) => {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, isOnline: false } : user
        )
      );
    });

    return () => {
      newSocket.disconnect();
    };
  }, [userId, isAdmin, activeUserId]); // Dependencies to re-run the effect

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
            sender: isAdmin
              ? "Admin"
              : singleUserMessage?.creator?.name || "You",
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
      const isAdmin = allAdmin?.data?.data?.some(
        (admin: any) => admin?.id === msg?.sender_id
      );
      return {
        id: msg?.id || Date.now().toString(),

        sender: isAdmin ? "Admin" : singleUserMessage?.creator?.name || "You", // If the sender is an admin, set sender to "Admin"
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
  }, [clientIdRef.current, updatedData, loadingMessages]); // Trigger useEffect when clientIdRef.current or updatedData changes

  useEffect(() => {
    if (!isLoading && allClient?.length > 0) {
      const updatedUsers = allClient.map((client: any) => ({
        id: client.creator_id,
        name: `${client?.creator?.name}`,
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
    <div className="flex flex-col h-[calc(100vh-100px)] font-inter">
      {/* <StatusBar status={status} userId={userId} isAdmin={isAdmin} /> */}

      <div className="flex flex-1 overflow-hidden gap-5 ">
        <div className=" flex-1 xl:max-w-[360px] lg:max-w-[35%]">
          {isAdmin && !isLoading && (
            <ChatSidebar
              users={users}
              activeUserId={activeUserId}
              onUserSelect={handleUserSelect}
            />
          )}
        </div>

        <div className="flex-1 flex flex-col bg-white rounded-[12px]">
          {/* <div className="p-4 ">
            <h3 className="font-semibold">
              {isAdmin ? (
                activeUserId ? (
                  <div className="flex gap-4 items-center border-b border-[#E9E9EA] pb-4">
                    <span>
                      <Image
                        src="/chat-profile.png"
                        width={100}
                        height={100}
                        alt="profile picture"
                        className="w-10 h-10"
                      />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#141416] text-sm font-medium leading-[150%] tracking-[.28px]">
                        {users.find((u) => u.id === activeUserId)?.name || ""}
                      </span>
                      <span className="font-serotiva text-xs text-[#4A4C56] font-medium leading-[160%]">
                        Response time: 5 minutes
                      </span>
                    </div>
                  </div>
                ) : (
                  "Select a user to chat"
                )
              ) : (
                "Chat with Admin"
              )}
            </h3>
          </div> */}
          <div className="p-4">
            <h3 className="font-semibold">
              {isAdmin ? (
                activeUserId ? (
                  <div className="flex gap-4 items-center border-b border-[#E9E9EA] pb-4">
                    <span>
                      <Image
                        src="/chat-profile.png"
                        width={100}
                        height={100}
                        alt="profile picture"
                        className="w-10 h-10"
                      />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#141416] text-sm font-medium leading-[150%] tracking-[.28px]">
                        {users.find((u) => u.id === activeUserId)?.name || ""}
                      </span>
                      <span className="font-serotiva text-xs text-[#4A4C56] font-medium leading-[160%]">
                        Response time: 5 minutes
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-[#777980] pt-40">
                    <p className="text-2xl font-medium">No user selected</p>
                    <p className="mt-2 text-lg">
                      Please select a user from the left to start chatting.
                    </p>
                    <div className="flex items-center  justify-center mt-4">
                      <Image
                        src="/empty-box.png"
                        width={100}
                        height={100}
                        alt="profile picture"
                        className=""
                        unoptimized
                      />
                    </div>
                  </div>
                )
              ) : (
                "Chat with Admin"
              )}
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {loadingMessages ? (
              <p className="text-center text-gray-500">Loading messages...</p>
            ) : currentMessages?.length === 0 ? (
              <p className="text-center text-gray-500">No messages yet</p>
            ) : (
              <div className="">
                {" "}
                {/* Initial div wrapping currentMessages */}
                {currentMessages?.map((message) => {
                  return (
                    <div key={message?.id} className="font-inter">
                      {isAdmin ? (
                        <div
                          key={message?.id}
                          className={`flex ${
                            message.sender === "Admin"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs md:max-w-md rounded-lg ${
                              message.type === "sent" ? " " : " text-gray-800"
                            }`}
                          >
                            <p
                              className={`${
                                message?.type === "sent"
                                  ? " text-white bg-[#070707]  rounded-t-[8px] rounded-l-[8px]"
                                  : "bg-[#F5F5F7] rounded-b-[8px] rounded-r-[8px] font-serotiva"
                              } px-2 py-1  text-[#4A4C56] leading-[150%] tracking-[.32px] text-base `}
                            >
                              {message.text}
                            </p>
                            <p
                              className={` ${
                                message?.type === "sent"
                                  ? "text-right"
                                  : "text-left"
                              } text-xs ml-1 mt-1 text-[#777980] font-serotiva font-medium leading-[160%]  bg-transparent`}
                            >
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                              {/* {getTimeAgo(message?.timestamp, message?.sender)} */}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === "Admin"
                              ? "justify-start"
                              : "justify-end"
                          }`}
                        >
                          <div
                            className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                              message.sender === "Admin"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-blue-500 text-white"
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
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4">
            <div className="flex gap-2">
              <input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
                disabled={!activeUserId}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="border border-[#DFE1E7] flex-1 gap-2 rounded-lg text-sm text-[#777980] p-3.5 focus:outline-0 focus:border-gray-500"
              />
              <button
                onClick={sendMessage}
                disabled={!messageInput.trim()}
                className="h-12 w-12 bg-[#070707] text-white rounded-lg text-xs sm:text-sm flex items-center justify-center hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
