"use client";
import { PurchaseProvider } from "@/app/context/PurchaseContext";
import Navbar from "@/components/UserDashboard/shared/Navbar";
import React, { useEffect, useState } from "react";
import ResellerSidebar from "./_components/reseller-sidebar";
import AdminSidebar from "./_components/admin-sidebar";
import ClientSidebar from "./_components/client-sidebar";
import UserSidebar from "@/app/(dashboard)/dashboard/_components/user-sidebar";
import { Toaster } from "sonner";
import { useGetCurrentUserQuery } from "@/src/redux/features/user/user-auth";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";

export default function ClientLayout({children}: {children: React.ReactNode}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [token, setToken] = useState("");
  const { data: user } = useGetCurrentUserQuery(token);
  const currentRole = user?.data?.type;

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token);
    };
    fetchToken();
  }, []);

  // Function to render appropriate sidebar based on role
  const renderSidebar = () => {
    switch (currentRole) {
      case "admin":
        return (
          <AdminSidebar
            isMobileMenuOpen={isMobileMenuOpen}
            role={currentRole}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        );
      case "reseller":
        return (
          <ResellerSidebar

            isMobileMenuOpen={isMobileMenuOpen}
            role={currentRole}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          />
        );
      case "client":
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
          <Toaster />
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