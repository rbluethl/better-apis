import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from 'models/user'
import { deleteUser, getUser, updateUser } from 'services/users'
import { Error, notFound } from 'models/error'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  const id = req.query.id as string

  // GET /api/v1/users/:id
  if (req.method === 'GET') {
    const user = getUser(id)
    if (!user) {
      res.status(404).end()
    } else {
      res.status(200).json(user)
    }
  }

  // PATCH /api/v1/users/:id
  if (req.method === 'PATCH') {
    const user = updateUser(id, req.body)
    res.status(200).json(user)
  }

  // DELETE /api/v1/users/:id
  if (req.method === 'DELETE') {
    deleteUser(id)
    res.status(200).end()
  }

  res.status(405).json(notFound)
}
