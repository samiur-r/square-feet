import { NextResponse, NextRequest } from 'next/server'

import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

export default async function middleware(req: NextRequest) {
  const parsedCookie = req.cookies.get('token')
  const { pathname } = req.nextUrl
  let token

  if (parsedCookie) token = parseJwtFromCookie(parsedCookie)

  if (
    pathname.startsWith('/account') ||
    pathname.startsWith('/post?mode=create') ||
    pathname.startsWith('/post?mode=edit') ||
    pathname.startsWith('/agent/edit')
  ) {
    if (token) {
      try {
        await verifyJwt(token)
        return NextResponse.next()
      } catch (err) {
        req.nextUrl.pathname = '/login'
        return NextResponse.redirect(req.nextUrl)
      }
    }
    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)
  }

  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/password/reset')
  ) {
    if (token) {
      try {
        await verifyJwt(token)
        req.nextUrl.pathname = '/account'
        return NextResponse.redirect(req.nextUrl)
      } catch (err) {
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }

  return NextResponse.next()
}
