"use server";

import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
// import GetRole from "./app/(auth)/auth/_components/get-role";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Parse cookies
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const token = cookies.accessToken;
  const role = cookies.role;

  // If not logged in, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Check for admin blog routes first
  // if (pathname.startsWith("/dashboard/admin-dashboard/blog")) {
  //   if (role === "admin") {
  //     return NextResponse.next();
  //   }
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // Check for regular dashboard routes
  const dashboardMatch = pathname.match(/^\/dashboard\/([a-z-]+)-dashboard/);
  const routeRole = dashboardMatch?.[1];

  // If no match or mismatch between role and route
  if (!routeRole || routeRole !== role) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
