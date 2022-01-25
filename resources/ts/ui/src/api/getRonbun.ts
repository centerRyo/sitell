import axios from "axios";

export interface ronbunResponse {
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

export async function getRonbun(id: number): Promise<{
  error: any | null
  response: ronbunResponse | null
}> {
  const url = '/api/ronbun/'

  const postData = {
    id: id
  }

  const result = await axios
    .post(url + postData.id, postData)
    .then((response: any) => {
      const ret = response.data
      return { error: null, response: ret }
    })
    .catch(err => {
      return { error: err, response: null }
    })

  return result
}
