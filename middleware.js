import { NextResponse } from "next/server";

export function middleware(req) {

console.error('Middleware triggered');
 const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/student-portal",
    "/student-portal/:path*",
    "/chatbot",
    "/chatbot/:path*",
  ],
};