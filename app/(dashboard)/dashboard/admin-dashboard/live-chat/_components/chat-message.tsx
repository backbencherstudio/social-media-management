// app/chat/_components/chat-message.tsx
"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { formatMessageTime } from "@/lib/utils";
import { Message } from "../types";
import { mockUsers } from "../mock-data";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

interface ChatMessagesProps {
  messages: Message[];
  currentUserId: string;
}

export function ChatMessages({ messages, currentUserId }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
 

  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getUserById = (id: string) => {
    return mockUsers.find((user) => user.id === id);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F9F9FB]">
      {messages.map((message) => {
        const isCurrentUser = message.senderId === currentUserId;
        const sender = getUserById(message.senderId);

        return (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              isCurrentUser ? "justify-end" : "justify-start"
            )}
          >
            {!isCurrentUser && sender && (
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={sender.avatar || "/placeholder.svg"}
                  alt={sender.name}
                />
                <AvatarFallback className="bg-gray-100 text-xs">
                  {sender.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                "flex flex-col gap-1",
                isCurrentUser && "items-end"
              )}
            >
              {!isCurrentUser && (
                <span className="text-xs text-gray-500 ml-1">
                  {sender?.name}
                </span>
              )}
              <div
                className={cn(
                  "rounded-[20px] px-4 py-2.5 text-sm max-w-[280px]",
                  isCurrentUser
                    ? "bg-[#18181B] text-white"
                    : "bg-white border border-gray-200"
                )}
              >
                {message.content}
              </div>
              <span className="text-xs text-gray-500 mx-1">
                {formatMessageTime(message.timestamp)}
              </span>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}