import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  const role = req.cookies.get("role")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  const pathname = req.nextUrl.pathname;
  const dashboardMatch = pathname.match(/^\/dashboard\/([a-z-]+)-dashboard/);
  const routeRole = dashboardMatch?.[1];

  if (!routeRole || routeRole !== role) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
