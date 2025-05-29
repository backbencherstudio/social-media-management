// File: app/dashboard/DashboardHome.tsx
"use client";

import React from "react";

import UserDashboard from "./(user-dashboard)/UserDashboard";
import AdminDashboard from "./(admin-dashboard)/admin-dashboard";


// ✅ Define roles with literal types
const ROLE = {
  USER: "user",
  FREELANCER: "freelancer",
  ADMIN: "admin",
} as const;

// ✅ Dynamically derive Role type
type Role = typeof ROLE[keyof typeof ROLE];

export default function DashboardHome() {
  // This would usually come from auth context:
  const role = ROLE.USER as Role;

  if (!role) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading your dashboard...
      </div>
    );
  }

  // ✅ Compare with ROLE constant to avoid type mismatch
  if (role === ROLE.ADMIN) {
    return <AdminDashboard />;
  }

  if (role === ROLE.FREELANCER) {
    return <h2>Freelance Dashboard</h2>;
  }

  return <UserDashboard />;
}
