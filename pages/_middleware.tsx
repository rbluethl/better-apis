import { NextResponse, NextRequest } from 'next/server'
import { unauthorized } from 'models/error'

export async function middleware(req: NextRequest, res: NextResponse) {
  // The "require authenticated user" middleware is disabled for testing purposes
  return NextResponse.next()

  const { pathname } = req.nextUrl

  if (pathname.startsWith('/api') && !req.headers.get('Api-Key')) {
    return new Response(JSON.stringify(unauthorized), {
      status: 401, headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return NextResponse.next()
}
