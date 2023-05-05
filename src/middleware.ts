import { NextResponse, NextRequest } from 'next/server'

import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

export default async function middleware(req: NextRequest) {
  const parsedCookie = req.cookies.get('token')
  const { pathname } = req.nextUrl
  let token

  if (parsedCookie) token = parseJwtFromCookie(parsedCookie)

  if (pathname.startsWith('/account') || pathname.startsWith('/agent/edit')) {
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

  if (pathname.startsWith('/post') && req.nextUrl.searchParams.get('mode')) {
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

  if (
    pathname.startsWith('/admin/dashboard') ||
    pathname.startsWith('/admin/users') ||
    pathname.startsWith('/admin/user') ||
    pathname.startsWith('/admin/posts') ||
    pathname.startsWith('/admin/transactions') ||
    pathname.startsWith('/admin/logs')
  ) {
    if (token) {
      try {
        const { payload } = await verifyJwt(token)
        if (payload.admin_status) return NextResponse.next()
      } catch (err) {
        req.nextUrl.pathname = '/admin/login'
        const response = NextResponse.redirect(req.nextUrl)
        response.headers.append(
          'Set-Cookie',
          `redirectedFrom=${pathname}; Path=/; Max-Age=60`
        )
        return response
      }
    }
    req.nextUrl.pathname = '/admin/login'
    const response = NextResponse.redirect(req.nextUrl)
    response.headers.append(
      'Set-Cookie',
      `redirectedFrom=${pathname}; Path=/; Max-Age=60`
    )
    return response
  }

  if (pathname.startsWith('/admin/login')) {
    if (token) {
      try {
        const { payload } = await verifyJwt(token)
        if (payload.admin_status) {
          if (req.cookies.get('redirectedFrom'))
            req.nextUrl.pathname = `${req.cookies.get('redirectedFrom')}`
          else req.nextUrl.pathname = '/admin/dashboard'
          return NextResponse.redirect(req.nextUrl)
        }
        req.nextUrl.pathname = '/account'
        return NextResponse.redirect(req.nextUrl)
      } catch (err) {
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin/settings')) {
    if (token) {
      try {
        const { payload } = await verifyJwt(token)
        if (payload.admin_status && payload.is_super) return NextResponse.next()
      } catch (err) {
        req.nextUrl.pathname = '/admin/dashboard'
        return NextResponse.redirect(req.nextUrl)
      }
    }
    req.nextUrl.pathname = '/admin/dashboard'
    return NextResponse.redirect(req.nextUrl)
  }

  return NextResponse.next()
}
