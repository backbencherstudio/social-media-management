"use server";

import { cookies } from "next/headers";

// Token
export default async function SetCookies(res: any) {
  (await cookies()).set("accessToken", res?.data?.authorization?.token);
}

export const getToken = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  return accessToken;
};

export async function removeToken() {
  (await cookies()).delete("accessToken");
}

// Role
export async function setRole(res: any) {
   (await cookies()).set("role", res?.data?.type);
}

export async function removeRole() {
   (await cookies()).delete("role");
   (await cookies()).delete("role");
}