"use client";
import { PurchaseProvider } from "@/app/context/PurchaseContext";
import Navbar from "@/components/UserDashboard/shared/Navbar";
import Sidebar from "@/components/UserDashboard/shared/Sidebar";

import React, { useState } from "react";
import AdminAndResellerSidebar from "./_components/admin-and-reseller-sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const role = ["user", "freelancer", "admin", "reseller"];

  const isUser = true;
  return (
    <PurchaseProvider>
      <div className="flex h-screen overflow-hidden bg-[#F7F7F9] font-commissioner">
        {isUser ? (
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <AdminAndResellerSidebar
            // role="freelancer"
            // role="admin"
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
        </div>
      </div>
    </PurchaseProvider>
  );
}
