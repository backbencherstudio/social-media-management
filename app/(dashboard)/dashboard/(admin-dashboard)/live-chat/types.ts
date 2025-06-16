export interface User {
  id: string
  name: string
  avatar: string
  isOnline: boolean
  lastMessage?: string
  role?: string
  responseTime?: string
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: Date
  type: "text" | "image" | "file"
}

export interface ChatRoom {
  id: string
  participants: string[]
  lastMessage?: Message
  updatedAt: Date
}
