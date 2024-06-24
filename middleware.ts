import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/al-quran", req.url))
  }
}
