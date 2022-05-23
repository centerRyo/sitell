import axios from 'axios';
import { useQuery } from 'react-query';

type CategoryRonbunCardResponse = {
  id: number;
  thumbnail: string;
  title: string;
  category_id: number;
  category_name: string;
};

const getCategoryRonbuns = async (category_id: number) => {
  const url = `/api/category/${category_id}/ronbunList`;

  const { data } = await axios.get(url);

  return data;
};

export const useCategoryRonbuns = (category_id: number) => {
  return useQuery<Array<CategoryRonbunCardResponse>>('category_ronbun', () =>
    getCategoryRonbuns(category_id)
  );
};
