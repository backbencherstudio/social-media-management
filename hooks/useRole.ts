import { useState, useEffect } from "react";
import { useGetCurrentUserQuery } from "@/src/redux/features/user/user-auth";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";
import { Role } from "@/lib/constants";

export function useRole() {
  const [token, setToken] = useState("");
  const { data: user, isLoading, error } = useGetCurrentUserQuery(token);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token || "");
    };
    fetchToken();
  }, []);

  const role: Role | null = user?.data?.type || null;

  return {
    role,
    isLoading,
    error,
    user: user?.data
  };
} 