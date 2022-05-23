import axios from 'axios';
import { useQuery } from 'react-query';
import { RonbunCardResponse } from '../useRonbun';

const getLatestRonbuns = async () => {
  const url = '/api/top/latestList';

  const { data } = await axios.get(url);
  return data;
};

export const useLatestRonbuns = () => {
  return useQuery<Array<RonbunCardResponse>>(
    'latest_ronbuns',
    getLatestRonbuns
  );
};
