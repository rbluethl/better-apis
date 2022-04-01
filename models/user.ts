export type User = {
  id: string
  name: string
  email: string
  created_at: string
  modified_at: string
}

export type UserCreateParams = {
  name: string
  email: string
  language: string
}


export type UserListParams = {
  page_number: number
  page_size: number  
}

export type UserUpdateParams = UserCreateParams