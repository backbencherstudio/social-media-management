import React from "react";
import { Navbar } from "./_components/navbar";
import Footer from "./_components/footer";
import SupportChatBoart from "./_components/_ai-chatboart/support-chat";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4">
        <SupportChatBoart />
      </div>
      <Footer />
    </div>
  );
}
