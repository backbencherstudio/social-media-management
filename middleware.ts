import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

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

  // Allow /dashboard/schedule for client and reseller
  // if (pathname.startsWith("/dashboard/schedule")) {
  //   if (role === "client" || role === "reseller") {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }
  // }

  // Match route pattern like /dashboard/admin-dashboard or /dashboard/client-dashboard/...
  // const dashboardMatch = pathname.match(/^\/dashboard\/([a-z-]+)-dashboard/);
  const dashboardMatch = pathname.match(/^\/dashboard\/([a-z-]+)-dashboard/);
  const routeRole = dashboardMatch?.[1]; // e.g., "admin", "client", "user", etc.

  // If no match or mismatch between role and route
  if (!routeRole || routeRole !== role) {
    return NextResponse.redirect(new URL("/", req.url)); // or "/"
  }

  return NextResponse.next(); // Role and route match, allow access
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
