export type Paged<T> = {
  page_number: number
  page_size: number  
  count: number
  data: T[]
  total_pages: number
  has_previous_page: boolean
  has_next_page: boolean
}