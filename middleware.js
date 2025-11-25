import { NextResponse } from "next/server";

export function middleware(req) {

//  const token = localStorage.getItem("token");
// console.error('Middleware triggered', token);
//   if (!token) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

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