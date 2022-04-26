import axios from "axios"

export interface CategoryRonbunListResponse {
  id: number
  abstract: string
  author: string
  category_id: number
  thumbnail: string
  title: string
  url: string
  user_id: number
  year: number
  created_at: string
  updated_at: string
  category_name: string
}

export async function getCategoryRonbunList(category_id: number): Promise<{
  error: any | null
  response: any | null
}> {
  const url = `/api/category/${category_id}/ronbunList`

  const postData = {
    category_id: category_id
  }

  const result = await axios
    .post(url, postData)
    .then((response: any) => {
      const ret = response.data
      return { error: null, response: ret }
    })
    .catch(err => {
      return { error: err, response: null }
    })

  return result
}
