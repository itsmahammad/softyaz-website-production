import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const accept = request.headers.get("accept-language")?.toLowerCase() || "";
  const locale = accept.startsWith("ru") ? "ru" : accept.startsWith("en") ? "en" : "az";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/"
};
