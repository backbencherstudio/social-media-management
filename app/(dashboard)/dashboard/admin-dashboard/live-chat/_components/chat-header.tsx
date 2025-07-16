import Image from "next/image";
import React from "react";

interface User {
  id: string | number;
  name: string;
  // add other user properties if needed
}

interface ChatHeaderProps {
  isAdmin: boolean;
  activeUserId: string | number | null;
  users: User[];
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isAdmin, activeUserId, users }) => {
  console.log(users,"usersssssssss")
  return (
    <div className="p-4">
      <h3 className="font-semibold">
        {isAdmin ? (
          activeUserId ? (
            <div className="flex gap-4 items-center border-b border-[#E9E9EA] pb-4">
              <span>
                <Image
                  src="/chat-profile.png"
                  width={100}
                  height={100}
                  alt="profile picture"
                  className="w-10 h-10"
                />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[#141416] text-sm font-medium leading-[150%] tracking-[.28px]">
                  {users.find((u) => u.id === activeUserId)?.name || ""}
                </span>
                <span className="font-serotiva text-xs text-[#4A4C56] font-medium leading-[160%]">
                  Response time: 5 minutes
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center text-[#777980] pt-40">
              <p className="text-2xl font-medium">No user selected</p>
              <p className="mt-2 text-lg">
                Please select a user from the left to start chatting.
              </p>
              <div className="flex items-center  justify-center mt-4">
                <Image
                  src="/empty-box.png"
                  width={100}
                  height={100}
                  alt="profile picture"
                  className=""
                  unoptimized
                />
              </div>
            </div>
          )
        ) : (
          <div className="flex gap-4 items-center border-b border-[#E9E9EA] pb-4">
            <span>
              <Image
                src="/Vector.svg"
                width={100}
                height={100}
                alt="profile picture"
                className="w-10 h-10"
              />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#141416] text-sm font-medium leading-[150%] tracking-[.28px]">
                Support Chat
              </span>
              <span className="font-serotiva text-xs text-[#4A4C56] font-medium leading-[160%]">
                Response time: 5 minutes
              </span>
            </div>
          </div>
        )}
      </h3>
    </div>
  );
};

export default ChatHeader;

// "use client"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avator"
// import { Button } from "@/components/ui/button"
// import { MoreHorizontal, Phone, Video } from "lucide-react"
// import { User } from "../types"

// interface ChatHeaderProps {
//   user: User
// }

// export function ChatHeader({ user }: ChatHeaderProps) {
//   console.log(user,"userssssssssssssssssss")
//   return (
//     <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-card ">
//       <div className="flex items-center gap-3">
//         <Avatar className="h-10 w-10">
//           <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
//           <AvatarFallback>
//             {user.name
//               .split(" ")
//               .map((n) => n[0])
//               .join("")}
//           </AvatarFallback>
//         </Avatar>
//         <div>
//           <div className="flex items-center gap-2">
//             <h3 className="font-semibold">{user?.name}</h3>

//           </div>
//           {user.responseTime && <p className="text-xs text-muted-foreground">Response time {user.responseTime}</p>}
//         </div>
//       </div>
//       <div className="flex items-center gap-2">
//         <Button variant="ghost" size="icon">
//           <Phone className="h-4 w-4" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <Video className="h-4 w-4" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <MoreHorizontal className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   )
// }
