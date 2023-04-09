import { tokenCookieName } from 'contants/user'
import { NextResponse } from 'next/server'
import type { NextRequest, NextResponse as INextResponse } from 'next/server'

export function middleware(request: NextRequest): INextResponse {
  const token = request.cookies.get(tokenCookieName)
  const requestedPage = request.nextUrl.pathname
  if (requestedPage === '/login') return NextResponse.next()
  if (token !== undefined) {
    if (requestedPage === '/login') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }
  const url = request.nextUrl.clone()
  url.pathname = '/login'
  url.search = `p=${requestedPage}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/dashboard/:path*', '/login/:path*'],
}
