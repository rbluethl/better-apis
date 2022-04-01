import type { NextApiRequest, NextApiResponse } from 'next'
import { User, UserCreateParams } from 'models/user'
import { createUser, getUsers } from 'services/users'
import { Paged } from 'models/paged'
import { Error, notFound } from 'models/error'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Paged<User> | Error>
) {
  // POST /api/v1/users
  if (req.method === 'POST') {
    const params = req.body as UserCreateParams

    if (!params.name) {
      res.status(400).json({
        code: 'invalid_parameters',
        message: '`name` is required'
      })
    }

    if (!params.email) {
      res.status(400).json({
        code: 'invalid_parameters',
        message: '`name` is required'
      })
    }

    const user = createUser(req.body)
    res.status(201).json(user)
  }

  // GET /api/v1/users
  if (req.method === 'GET') {
    const response = getUsers(req.body)
    res.status(200).json(response)
  }

  console.log(notFound)
  res.status(405).json(notFound)
}
