// app/chat/page.tsx
"use client";

import { useState } from "react";
import ChatInterface from "./_components/chat-interface";
import LoginPanel from "./_components/login-panel";


export default function ChatPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ userId: "", isAdmin: false });

  const handleLogin = (userId: string, isAdmin: boolean) => {
    setUserInfo({ userId, isAdmin });
    setIsLoggedIn(true);
  };

  return (
    <div className="h-[80%]">
      {!isLoggedIn ? (
        <LoginPanel onLogin={handleLogin} />
      ) : (
        <ChatInterface userId={userInfo.userId} isAdmin={userInfo.isAdmin} />
      )}
    </div>
  );
}