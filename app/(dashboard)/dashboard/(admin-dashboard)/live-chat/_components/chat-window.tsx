"use client";

import { Message, User } from "../types";
import { ChatMessages } from "./chat-message";
import { ChatInput } from "./chat-input";
import { ChatHeader } from "./chat-header";


interface ChatWindowProps {
  selectedUser: User;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export function ChatWindow({
  selectedUser,
  messages,
  onSendMessage,
}: ChatWindowProps) {
  return (
    
      <div className="flex-1 flex flex-col rounded-md border-l border-gray-200 overflow-hidden shadow-lg ">
        <ChatHeader user={selectedUser} />
        <ChatMessages messages={messages} currentUserId="current-user" />
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    
  );
}
