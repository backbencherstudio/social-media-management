"use server";

import { cookies } from "next/headers";

export default async function SetCookies(res: any) {
  (await cookies()).set("accessToken", res?.data?.data?.accessToken)
}
