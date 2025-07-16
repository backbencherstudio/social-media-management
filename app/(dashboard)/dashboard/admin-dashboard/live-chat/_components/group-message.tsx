import React from "react";

// Types
interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  type: "sent" | "received";
}

interface GroupedMessagesProps {
  messages: Message[];
  isAdmin: boolean;
}

// Helper function to get date group label
const getDateGroupLabel = (date: Date): string => {
  const now = new Date();
  const messageDate = new Date(date);

  // Reset time to compare only dates
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const messageDateOnly = new Date(
    messageDate.getFullYear(),
    messageDate.getMonth(),
    messageDate.getDate()
  );

  // Calculate difference in days
  const diffTime = today.getTime() - messageDateOnly.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays <= 7) {
    // Show day name for messages within a week
    return messageDate.toLocaleDateString("en-US", { weekday: "long" });
  } else {
    // Show full date for older messages
    return messageDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
};

// Helper function to get date key for grouping
const getDateKey = (date: Date): string => {
  const messageDate = new Date(date);
  return messageDate.toDateString(); // This gives us a unique key per day
};

// Format message timestamp (only time since we have date headers)
const formatMessageTimestamp = (timestamp: Date): string => {
  return timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Group messages by date
const groupMessagesByDate = (
  messages: Message[]
): { [key: string]: Message[] } => {
  const grouped: { [key: string]: Message[] } = {};

  messages.forEach((message) => {
    const dateKey = getDateKey(message.timestamp);
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(message);
  });

  return grouped;
};

// Date Header Component
const DateHeader: React.FC<{ date: Date }> = ({ date }) => (
  <div className="flex justify-center mb-3">
    <div className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
      {getDateGroupLabel(date)}
    </div>
  </div>
);

// Individual Message Component
const MessageBubble: React.FC<{ message: Message; isAdmin: boolean }> = ({
  message,
  isAdmin,
}) => {
  if (isAdmin) {
    return (
      <div
        className={`flex ${
          message.sender === "Admin" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`max-w-xs md:max-w-md rounded-lg ${
            message.type === "sent" ? " " : " text-gray-800"
          }`}
        >
          <div
            className={`${
              message?.type === "sent"
                ? " text-white bg-[#070707] rounded-t-[8px] rounded-l-[8px]"
                : "bg-[#F5F5F7] rounded-b-[8px] rounded-r-[8px] font-serotiva"
            } px-2 py-1 text-[#4A4C56] leading-[150%] tracking-[.32px] text-base relative flex ${
              message?.text?.split(" ")?.length > 10
                ? "flex-col "
                : "flex-row gap-4 "
            }`}
          >
            <span className="flex-1">{message.text}</span>
            <p
              className={`${
                message?.type === "sent" ? "text-right " : "text-left "
              } text-[11px] ${
                message?.text?.split(" ")?.length > 10 ? "" : "mt-2.5 "
              } inline-flex justify-end  ml-1  text-[#777980] font-serotiva font-medium leading-[160%] bg-transparent`}
            >
              {formatMessageTimestamp(message.timestamp)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex ${
        message.sender === "Admin" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`${
          message.sender === "Admin"
            ? "  bg-[#F5F5F7] rounded-b-[8px] rounded-r-[8px] font-serotiva"
            : "text-white bg-[#070707] rounded-t-[8px] rounded-l-[8px]"
        } px-2 py-1 text-[#4A4C56] leading-[150%] tracking-[.32px] text-base relative flex ${
          message?.text?.split(" ")?.length > 10
            ? "flex-col "
            : "flex-row gap-4 "
        }`}
      >
        <span className="flex-1">{message.text}</span>
        <p
          className={`${
            message?.type === "sent" ? "text-right " : "text-left "
          } text-[11px] ${
            message?.text?.split(" ")?.length > 10 ? "" : "mt-2.5 "
          } inline-flex justify-end  ml-1  text-[#777980] font-serotiva font-medium leading-[160%] bg-transparent`}
        >
          {formatMessageTimestamp(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

// Main GroupedMessages Component
const GroupedMessages: React.FC<GroupedMessagesProps> = ({
  messages,
  isAdmin,
}) => {
  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(groupedMessages)
        .sort(
          ([dateA], [dateB]) =>
            new Date(dateA).getTime() - new Date(dateB).getTime()
        )
        .map(([dateKey, dateMessages]) => (
          <div key={dateKey} className="flex flex-col">
            {/* Date Header */}
            <DateHeader date={new Date(dateKey)} />

            {/* Messages for this date */}
            <div className="flex flex-col gap-2">
              {dateMessages.map((message) => (
                <div key={message.id} className="font-inter">
                  <MessageBubble message={message} isAdmin={isAdmin} />
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GroupedMessages;
