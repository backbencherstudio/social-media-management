// app/chat/page.tsx
"use client";

import { useEffect, useState } from "react";

import LoginPanel from "./_components/login-panel";
import { useGetCurrentUserQuery } from "@/src/redux/features/user/user-auth";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";
import ChatInterface from "./_components/chat-interface";

export default function ChatPage() {

  const [token, setToken] = useState("");
  const { data: user } = useGetCurrentUserQuery(token);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token as string);
    };
    fetchToken();
},[]);
  console.log(user,"user")


  return (
    <div className="h-[80%]">
      <ChatInterface userId={user?.data?.id} isAdmin={user?.data?.type === "admin"} />
    </div>
  );
}
