import axios from "axios"

export interface topLatestRonbunListResponse {
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
}

export async function getTopLatestRonbunList(): Promise<{
  error: any | null
  response: any | null
}> {
  const url = '/api/ronbun/ronbunList'

  const result = await axios
    .get(url)
    .then((response: any) => {
      const ret = response.data
      return { error: null, response: ret }
    })
    .catch(err => {
      return { error: err, response: null }
    })

  return result
}
