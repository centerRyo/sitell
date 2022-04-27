import axios from 'axios'

export interface categoryListResponse {
  id: number
  name: string
}

export async function getCategoryList(): Promise<{
  error: any | null
  response: any | null
}> {
  const url = '/api/top/category/categoryList'

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
