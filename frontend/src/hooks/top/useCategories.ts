import axios from 'axios';
import { useQuery } from 'react-query';

export type CateogoriesResponse = {
  id: number;
  name: string;
};

const getCategories = async () => {
  const url = '/api/top/category/categoryList';

  const { data } = await axios.get(url);

  return data;
};

export const useCategories = () => {
  return useQuery<Array<CateogoriesResponse>>('categories', getCategories);
};
