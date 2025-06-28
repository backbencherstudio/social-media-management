"use server";

import { cookies } from "next/headers";

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
