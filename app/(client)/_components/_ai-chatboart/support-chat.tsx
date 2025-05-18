"use client";

import { useEffect, useRef, useState } from "react";
import ChatBotHeaderIcon from "@/public/incons/chat-bot-header";
import SupportChatBoartIcon from "@/public/incons/SupportChat";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

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

export default function SupportChatBoart() {
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
    <div className="font-sans">
      <div className="flex items-center justify-end">
        <button
          onClick={() => setIsModalOpen((prev) => !prev)}
          style={{
            marginTop: 10,
            padding: "10px 20px",
            color: "#fff",
            border: "none",
            borderRadius: 8,
          }}
        >
          <SupportChatBoartIcon />
        </button>
      </div>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col h-[520px] w-[440px] rounded-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-3">
              <ChatBotHeaderIcon className="w-10 h-10 rounded-full p-2 border border-black" />
              <div>
                <div className="font-bold">Support Chat</div>
                <div className="text-xs text-gray-500">
                  Response time: 5 minutes
                </div>
              </div>
            </div>
          </div>

          <div
            ref={chatBoxRef}
            className="flex-1 overflow-y-auto px-5 py-3 bg-white"
          >
            {messages.map((msg, idx) => (
              <div
                key={`${msg.timestamp}-${idx}-${tick}`}
                className={`flex flex-col mb-3 ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`flex items-start ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <ChatBotHeaderIcon className="w-10 h-10 rounded-full p-2 border border-black mr-1" />
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg text-sm max-w-[240px] break-words whitespace-pre-wrap text-black`}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1">
                  {timeAgo(msg.timestamp)}
                </span>
              </div>
            ))}
          </div>

          <div className="px-4 py-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-black text-white rounded-lg text-sm flex items-center justify-center"
              >
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </div>
            {isRecording && (
              <p className="text-center text-sm text-red-500 mt-2 font-semibold">
                Recording...
              </p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
