import { NextRequest, NextResponse } from "next/server";

const LANG_COOKIE = "gba-lang";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (request.cookies.has(LANG_COOKIE)) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  const wantsArabic = preferred.startsWith("ar");

  const isArPath = pathname === "/ar" || pathname.startsWith("/ar/");

  if (wantsArabic && !isArPath) {
    const url = request.nextUrl.clone();
    url.pathname = `/ar${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.redirect(url);
    response.cookies.set(LANG_COOKIE, "ar", { maxAge: 60 * 60 * 24 * 365, path: "/" });
    return response;
  }

  if (!wantsArabic && isArPath) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/ar/, "") || "/";
    const response = NextResponse.redirect(url);
    response.cookies.set(LANG_COOKIE, "fr", { maxAge: 60 * 60 * 24 * 365, path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
