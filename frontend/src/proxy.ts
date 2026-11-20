import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { AUTH_ROUTES, PROTECTED_PREFIXES, ROUTES } from "@/config/routes";

/**
 * Optimistic auth check only (cookie presence). Real authorization happens in
 * the FastAPI backend and in server components that read the session.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasSession = request.cookies.has(
    process.env.SESSION_COOKIE_NAME ?? "access_token",
  );

  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  if (isProtected && !hasSession) {
    const url = new URL(ROUTES.login, request.url);
    url.searchParams.set("next", pathname + search);
    return NextResponse.redirect(url);
  }

  const isAuthRoute = (AUTH_ROUTES as readonly string[]).includes(pathname);
  if (isAuthRoute && hasSession) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
