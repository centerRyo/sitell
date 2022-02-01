import axios from "axios"
import { ronbunResponse } from "./getRonbun"

export async function getLatestRonbunList(): Promise<{
  error: any | null
  response: Array<ronbunResponse> | null
}> {
  const url = '/api/latestList'

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
