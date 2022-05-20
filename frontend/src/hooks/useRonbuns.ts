import axios from 'axios';
import { useQuery } from 'react-query';
import { RonbunResponse } from './useRonbun';

const getRonbuns = async () => {
  const url = '/api/latestList';

  const { data } = await axios.get(url);

  return data;
};

export const useRonbuns = () => {
  return useQuery<Array<RonbunResponse>>('ronbuns', getRonbuns);
};
