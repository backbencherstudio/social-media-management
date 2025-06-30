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
