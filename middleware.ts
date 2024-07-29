import { NextRequest, NextResponse } from "next/server";

import checkAuth from "./checkAuth";

export async function middleware(request: NextRequest) {
  try {
    const isAuth = await checkAuth();
    if (isAuth) return NextResponse.next();
  } catch (e) {
    console.log(e);
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/dashboard/:path*",
};
