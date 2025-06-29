import { Message, User } from "./types"


export const mockUsers: User[] = [
  {
    id: "cameron-williamson",
    name: "Cameron Williamson",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    lastMessage: "Hey, how are you doing?",
  },
  {
    id: "cody-fisher",
    name: "Cody Fisher",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    role: "Reseller",
    responseTime: "5 minutes",
    lastMessage: "Social media post management monthly package...",
  },
  {
    id: "bessie-cooper",
    name: "Bessie Cooper",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    lastMessage: "Thanks for the help!",
  },
  {
    id: "jacob-jones",
    name: "Jacob Jones",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    lastMessage: "Can we schedule a call?",
  },
  {
    id: "guy-hawkins",
    name: "Guy Hawkins",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    lastMessage: "Perfect, let me know when you are ready",
  },
  {
    id: "kristin-watson",
    name: "Kristin Watson",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    lastMessage: "I will send you the files tomorrow",
  },
  {
    id: "esther-howard",
    name: "Esther Howard",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    lastMessage: "Great work on the project!",
  },
]

export const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "cody-fisher",
    receiverId: "current-user",
    content: "Hello Sir! How are you sir?",
    timestamp: new Date(Date.now() - 60000), // 1 min ago
    type: "text",
  },
  {
    id: "2",
    senderId: "current-user",
    receiverId: "cody-fisher",
    content: "Fine sir! how are you doing",
    timestamp: new Date(Date.now() - 30000), // 30 sec ago
    type: "text",
  },
  {
    id: "3",
    senderId: "current-user",
    receiverId: "cody-fisher",
    content: "Which package you choose ??",
    timestamp: new Date(Date.now() - 25000), // 25 sec ago
    type: "text",
  },
  {
    id: "4",
    senderId: "cody-fisher",
    receiverId: "current-user",
    content: "Social media post management monthly package, may be i get 10 post per month, am i right ??",
    timestamp: new Date(Date.now() - 20000), // 20 sec ago
    type: "text",
  },
  {
    id: "5",
    senderId: "current-user",
    receiverId: "cody-fisher",
    content: "right",
    timestamp: new Date(Date.now() - 10000), // 10 sec ago
    type: "text",
  },
]
