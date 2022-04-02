import type { NextApiRequest, NextApiResponse } from 'next'
import { methodNotAllowed } from 'models/error'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET /api/v2/status
  if (req.method === 'GET') {
    return res.status(200).end()
  }

  return res.status(405).end(methodNotAllowed)
}