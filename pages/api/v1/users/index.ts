import type { NextApiRequest, NextApiResponse } from 'next'
import { User, UserCreateParams } from 'models/user'
import { createUser, getUsers } from 'services/users'
import { Paged } from 'models/paged'
import { Error, methodNotAllowed } from 'models/error'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Paged<User> | Error>
) {
  // POST /api/v1/users
  if (req.method === 'POST') {
    const params = req.body as UserCreateParams

    if (!params.name) {
      return res.status(400).json({
        code: 'invalid_parameters',
        message: '`name` is required'
      })
    }

    if (!params.email) {
      return res.status(400).json({
        code: 'invalid_parameters',
        message: '`name` is required'
      })
    }

    const user = createUser(req.body)
    return res.status(201).json(user)
  }

  // GET /api/v1/users
  if (req.method === 'GET') {
    const response = getUsers({
      page_number: +(req.query.page_number ?? 1),
      page_size: +(req.query.page_size ?? 10),
      expand: (req.query.expand as string)?.split(',')
    })
    return res.status(200).json(response)
  }

  return res.status(405).json(methodNotAllowed)
}
