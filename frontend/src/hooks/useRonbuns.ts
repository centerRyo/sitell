import axios from 'axios';
import { useQuery } from 'react-query';
import { RonbunCardResponse } from './useRonbun';

const getRonbuns = async () => {
  const url = '/api/latestList';

  const { data } = await axios.get(url);

  return data;
};

export const useRonbuns = () => {
  return useQuery<Array<RonbunCardResponse>>('ronbuns', getRonbuns);
};
