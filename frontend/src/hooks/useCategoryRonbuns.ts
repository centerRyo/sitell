import axios from 'axios';
import { useQuery } from 'react-query';
import { RonbunResponse } from './useRonbun';

const getCategoryRonbuns = async (category_id: number) => {
  const url = `/api/category/${category_id}/ronbunList`;

  const { data } = await axios.post(url, { category_id });

  return data;
};

export const useCategoryRonbuns = (category_id: number) => {
  return useQuery<Array<RonbunResponse>>(['category_ronbun', category_id], () =>
    getCategoryRonbuns(category_id)
  );
};
