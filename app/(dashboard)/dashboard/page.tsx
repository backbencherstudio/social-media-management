// File: app/dashboard/DashboardHome.tsx
"use client";

import React from "react";

import UserDashboard from "./(user-dashboard)/UserDashboard";
import AdminDashboard from "./(admin-dashboard)/admin-dashboard";
import UserHome from "./(user-dashboard-before-purchase)/UserHome";
import ResellerDashboard from "./(reseller-dashboard)/ResellerDashboard";


const ROLE = {
  USER: "user",
  CLIENT: "client",
  RESELLER: "reseller",
  ADMIN: "admin",
} as const;

type Role = (typeof ROLE)[keyof typeof ROLE];

export default function DashboardHome() {
  // This would usually come from auth context:
  const role = ROLE.RESELLER as Role;

  if (!role) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading your dashboard...
      </div>
    );
  }

  // Compare with ROLE constant to avoid type mismatch
  if (role === ROLE.ADMIN) {
    return <AdminDashboard />;
  }

  if (role === ROLE.RESELLER) {
    return <ResellerDashboard />;
  }
  if (role === ROLE.CLIENT) {
    return <UserDashboard />;
  }

  return <UserHome />;
}
