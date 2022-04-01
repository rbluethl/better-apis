import { nanoid } from 'nanoid'
import {
  User,
  UserCreateParams,
  UserListParams,
  UserUpdateParams
} from 'models/user'
import { Paged } from 'models/paged'
import { Error } from 'models/error'

const createUser = (params: UserCreateParams): User | Error => {
  const now = new Date()

  return {
    id: nanoid(8),
    name: params.name,
    email: params.email,
    created_at: now.toISOString(),
    modified_at: now.toISOString()
  }
}

const getUser = (id: string): User | null => {
  const now = new Date()
  const { name, email } = getNameAndEmail(now.getMilliseconds())

  return {
    id,
    name,
    email,
    created_at: now.toISOString(),
    modified_at: now.toISOString()
  }
}

const getUsers = (params: UserListParams): Paged<User> => {
  const users = [...Array(params.page_size).keys()].map((i) => {
    const created = new Date()
    created.setTime(created.getTime() - Math.random() * 10000000000)

    const modified = new Date()
    modified.setTime(created.getTime() - Math.random() * 10000000000)

    const { name, email } = getNameAndEmail(i)

    return {
      id: nanoid(8),
      name,
      email,
      created_at: created.toISOString(),
      modified_at: modified.toISOString()
    }
  })

  return {
    page_number: params.page_number,
    page_size: params.page_size,
    count: params.page_size * (params.page_number + 10),
    data: users,
    total_pages: params.page_number + 10,
    has_previous_page: params.page_number > 1,
    has_next_page: true
  }
}

const updateUser = (id: string, params: UserUpdateParams): User => {
  const created = new Date()
  created.setTime(created.getTime() - Math.random() * 10000000000)
  const modified = new Date()

  return {
    id,
    name: params.name,
    email: params.email,
    created_at: created.toISOString(),
    modified_at: modified.toISOString()
  }
}

const deleteUser = (id: string): void => {}

const getNameAndEmail = (i: number) => {
  return {
    name: i % 2 === 0 ? 'John Doe' : 'Jane Doe',
    email:
      i % 2 === 0
        ? 'john.doe@average-company.com'
        : 'jane.doe@average-company.com'
  }
}

export { createUser, getUser, getUsers, updateUser, deleteUser }
