"use client";

import { useEffect, useRef, useState } from "react";
import ChatBotHeaderIcon from "@/public/incons/chat-bot-header";
import SupportChatBoartIcon from "@/public/incons/SupportChat";
import { FaPaperclip, FaPaperPlane, FaSmile, FaTimes } from "react-icons/fa";

function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

type Message = {
  content: string;
  sender: "user" | "bot";
  timestamp: number;
};

function Modal({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!show) return null;

  return (
    <div className="fixed bottom-30 lg:right-30 inset-0 z-50 flex items-end justify-end ">
      <div className="bg-white rounded-xl  max-w-xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-4 text-gray-600 hover:text-gray-800"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default function SupportChat({height}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tick, setTick] = useState(0);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMsg: Message = {
      content: input.trim(),
      sender: "user",
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const loadingMsg: Message = {
      content: "<i>...</i>",
      sender: "bot",
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, loadingMsg]);

    try {
      const res = await fetch(
        "https://5ace-137-59-180-113.ngrok-free.app/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg.content }),
        }
      );

      const data: { response?: string; reply?: string } = await res.json();
      const botMsg: Message = {
        content: data.response || data.reply || "🤖 [No reply]",
        sender: "bot",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev.slice(0, -1), botMsg]);
    } catch (err) {
      const errorMsg: Message = {
        content: "⚠️ Could not contact AI server.",
        sender: "bot",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev.slice(0, -1), errorMsg]);
    }
  };

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col ${height} bg-white w-full rounded-xl shadow-lg`}>
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b">
        <div className="flex items-center gap-2 sm:gap-3">
          <ChatBotHeaderIcon className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-1.5 sm:p-2 border border-black" />
          <div>
            <div className="font-bold text-sm sm:text-base">Support Chat</div>
            <div className="text-[10px] sm:text-xs text-gray-500">
              Response time: 5 minutes
            </div>
          </div>
        </div>
      </div>

      <div
        ref={chatBoxRef}
        className="flex-1 overflow-y-auto px-3 sm:px-5 py-2 sm:py-3 bg-white"
      >
        {messages.map((msg, idx) => (
          <div
            key={`${msg.timestamp}-${idx}-${tick}`}
            className={`flex flex-col mb-2 sm:mb-3 ${msg.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`flex items-start gap-1 sm:gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {msg.sender === "bot" && (
                <ChatBotHeaderIcon className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-1.5 sm:p-2 border border-black" />
              )}
              <div
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm max-w-[200px] sm:max-w-[240px] break-words whitespace-pre-wrap text-black`}
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">
              {timeAgo(msg.timestamp)}
            </span>
          </div>
        ))}
      </div>

      <div className="px-2 sm:px-4 py-2 sm:py-3 border-t">
        <div className="flex gap-1 sm:gap-2 items-center">
          <div className="flex gap-1 sm:gap-2 items-center">
            <button className="p-1 sm:p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors">
              <FaSmile className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button className="p-1 sm:p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors">
              <FaPaperclip className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 min-w-0 px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
          <button
            onClick={sendMessage}
            className="p-1.5 sm:p-2.5 bg-black text-white rounded-lg text-xs sm:text-sm flex items-center justify-center hover:bg-gray-900 active:bg-gray-800 transition-colors"
          >
            <FaPaperPlane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
        {isRecording && (
          <p className="text-center text-[11px] sm:text-sm text-red-500 mt-1 sm:mt-2 font-semibold">
            Recording...
          </p>
        )}
      </div>
    </div>
  );
}
