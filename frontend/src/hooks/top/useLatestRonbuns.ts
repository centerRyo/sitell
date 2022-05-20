import axios from 'axios';
import { useQuery } from 'react-query';
import { RonbunResponse } from '../useRonbun';

const getLatestRonbuns = async () => {
  const url = '/api/top/latestList';

  const { data } = await axios.get(url);
  return data;
};

export const useLatestRonbuns = () => {
  return useQuery<Array<RonbunResponse>>('latest_ronbuns', getLatestRonbuns);
};
