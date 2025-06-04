"use client";

import React, { useState } from "react";
import { Message, User } from "../types";
import { mockMessages, mockUsers } from "../mock-data";
import ChatSidebar from "./chat-sidebar";
import { ChatWindow } from "./chat-window";

export default function ChatInterface() {
  const [selectedUser, setSelectedUser] = useState<User>(mockUsers[1]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [role, setRole] = useState<"admin" | "user" | "reseller">("admin");

  const handleSendMessage = (content: string) => {
    const newMesssage: Message = {
      id: Date.now().toString(),
      senderId: "current-user",
      receiverId: selectedUser.id,
      content,
      timestamp: new Date(),
      type: "text",
    };
    setMessages((prevMessages) => [...prevMessages, newMesssage]);
    // Optionally, you can also update the selected user's last message
  };

  const filteredMessages = messages.filter(
    (msg) =>
      (msg.senderId === selectedUser.id && msg.receiverId === "current-user") ||
      (msg.senderId === "current-user" && msg.receiverId === selectedUser.id)
  );
  console.log("Filtered Messages:", filteredMessages);
  return (
    <div className="flex gap-5">
      <ChatSidebar
        role={role}
        setRole={setRole}
        users={mockUsers}
        selectedUser={selectedUser}
        onUserSelect={setSelectedUser}
      />

      <ChatWindow
        selectedUser={selectedUser}
        messages={filteredMessages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}
