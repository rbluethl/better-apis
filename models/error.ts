export type Error = {
  code: string
  message: string
}

export const notFound: Error = {
  code: 'not_found',
  message: 'The requested resource was not found.'
}

export const methodNotAllowed: Error = {
  code: 'method_not_allowed',
  message: 'The requested method is not allowed.'
}

export const unauthorized: Error = {
  code: 'unauthorized',
  message: 'You are not authorized to access this resource.'
}
