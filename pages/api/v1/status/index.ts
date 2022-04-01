import type { NextApiRequest, NextApiResponse } from 'next'
import { notFound } from 'models/error'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET /api/v1/status
  if (req.method === 'GET') {
    res.status(200).end()
  }

  res.status(405).end(notFound)
}
