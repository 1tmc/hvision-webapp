import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_SITE_LOCK === 'true') {
    return new NextResponse(
      '<h1 style="text-align:center;margin-top:20vh">Site temporarily unavailable</h1>',
      { headers: { 'content-type': 'text/html' } }
    )
  }
}

export const config = {
  matcher: '/:path*',
}
