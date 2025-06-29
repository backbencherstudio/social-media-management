// types/chat.ts
export interface Message {
    id: string;
    sender: string;
    text: string;
    timestamp: Date;
    type: "sent" | "received";
  }
  
  export interface User {
    id: string;
    name: string;
    unreadCount?: number;
  }
  
  export type ConnectionStatus = "disconnected" | "connecting" | "connected";