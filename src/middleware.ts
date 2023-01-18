import { NextResponse, NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')
  const { pathname } = req.nextUrl

  if (!token && pathname.startsWith('/my-posts')) {
    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)
  }

  if (
    (token && pathname.startsWith('/login')) ||
    pathname.startsWith('/register')
  ) {
    req.nextUrl.pathname = '/my-posts'
    return NextResponse.redirect(req.nextUrl)
  }

  return NextResponse.next()
}
