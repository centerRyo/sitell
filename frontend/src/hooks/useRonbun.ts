import axios from 'axios';
import { useQuery } from 'react-query';

export type RonbunResponse = {
  id: number;
  abstract: string;
  author: string;
  category_id: number;
  thumbnail: string;
  title: string;
  url: string;
  user_id: number;
  year: number;
  created_at: string;
  updated_at: string;
  category_name: string;
};

export type RonbunCardResponse = {
  id: number;
  thumbnail: string;
  title: string;
  category_name: string;
};

const getRonbun = async (id: number) => {
  const url = `/api/ronbun/${id}`;

  const { data } = await axios.post(url, { id });

  return data;
};

export const useRonbun = (id: number) => {
  return useQuery<RonbunResponse>(['ronbun', id], () => getRonbun(id));
};
