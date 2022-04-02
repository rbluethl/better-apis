import { Order } from 'models/order'

export type User = {
  id: string
  name: string
  email: string
  created_at: string
  modified_at: string
  orders?: Order[]
}

export type UserCreateParams = {
  name: string
  email: string
  language: string
}

export type UserListParams = {
  page_number: number
  page_size: number
  expand: string[]
}

export type UserUpdateParams = UserCreateParams
