import { NextResponse, NextRequest } from 'next/server'
import { unauthorized } from 'models/error'

export async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl

  const isApiRoute = pathname.startsWith('/api')
  const isStatusRoute = pathname.endsWith('/status')
  const apiKey = req.headers.get('Api-Key')

  if (isApiRoute && !isStatusRoute && !apiKey) {
    return new Response(JSON.stringify(unauthorized), {
      status: 401, headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return NextResponse.next()
}
