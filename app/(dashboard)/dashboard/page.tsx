"use client";

import React, { useEffect, useState } from "react";
import { useGetCurrentUserQuery } from "@/src/redux/features/user/user-auth";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";
import AdminDashboard from "./admin-dashboard/page";
import ResellerDashboard from "./reseller-dashboard/page";
import UserDashboard from "./client-dashboard/page";
import UserHome from "./user-dashboard/page";
import { ROLE } from "@/lib/constants";

export default function DashboardHome() {
  const [token, setToken] = useState("");
  const { data: user, isLoading } = useGetCurrentUserQuery(token);
  const role = user?.data?.type;

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token);
    };
    fetchToken();
  }, []);

  // const role = ROLE.ADMIN as Role;

  if (isLoading) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading your dashboard...
      </div>
    );
  }

  if (role === ROLE.ADMIN) {
    return <AdminDashboard />;
  }

  if (role === ROLE.RESELLER) {
    return <ResellerDashboard />;
  }
  if (role === ROLE.CLIENT) {
    return <UserDashboard />;
  }

  if (role === ROLE.USER) {
    return <UserHome />;
  }
}
