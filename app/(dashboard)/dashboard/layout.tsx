"use client";
import { PurchaseProvider } from "@/app/context/PurchaseContext";
import Navbar from "@/components/UserDashboard/shared/Navbar";
import React, { useState } from "react";
import ResellerSidebar from "./_components/reseller-sidebar";
import AdminSidebar from "./_components/admin-sidebar";
import ClientSidebar from "./_components/client-sidebar";
import UserSidebar from "@/app/(dashboard)/dashboard/_components/user-sidebar";

export default function ClientLayout({children}: {children: React.ReactNode}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState("Admin");

  // Function to render appropriate sidebar based on role
  const renderSidebar = () => {
    switch (currentRole) {
      case "Admin":
        return (
          <AdminSidebar
            isMobileMenuOpen={isMobileMenuOpen}
            role={currentRole}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        );
      case "Reseller":
        return (
          <ResellerSidebar

            isMobileMenuOpen={isMobileMenuOpen}
            role={currentRole}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        );
      case "Client":
        return (
          <ClientSidebar
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        );
      default:
        return (
          <UserSidebar
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        );
    }
  };

  return (
    <PurchaseProvider>
      <div className="flex h-screen overflow-hidden bg-[#F7F7F9] font-commissioner">
        {renderSidebar()}

        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            // currentRole={currentRole}
            // onRoleChange={setCurrentRole}
          />
          <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
        </div>
      </div>
    </PurchaseProvider>
  );
}