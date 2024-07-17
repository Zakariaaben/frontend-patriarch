import { NextRequest, NextResponse } from "next/server";

import checkAuth from "./checkAuth";

export async function middleware(request: NextRequest) {
  const host = request.headers.get("Host");
  const isAuth = await checkAuth();

  if (!isAuth) return NextResponse.redirect(new URL("/login", request.url));
  NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
