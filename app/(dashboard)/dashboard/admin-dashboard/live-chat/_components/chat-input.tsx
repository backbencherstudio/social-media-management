"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Paperclip, Send } from "lucide-react";
import { log } from "node:console";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ChatInput handleSubmit called with message:", message);
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  console.log("ChatInput message:", message);
  return (
    <div className="p-4 border-t border-gray-300 bg-card">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Button type="button" variant="ghost" size="icon">
          <Smile className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="icon">
          <Paperclip className="h-4 w-4" />
        </Button>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 focus:outline-none focus: ring-0 focus:ring-transparent "
        />
        <Button type="submit" size="icon" disabled={!message.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
