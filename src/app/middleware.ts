import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // If the user is not authenticated, redirect to the login page
    if (!req.nextauth.token) {
      return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/",
    },
  }
)

export const config = { matcher: ["/dashboard"] }