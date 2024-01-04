import { LoaderFunction } from 'react-router-dom';

import { CategoryWithWishes } from './types';

export const getList: LoaderFunction = async (): Promise<CategoryWithWishes[]> => {
  const response = await fetch('/api/list');
  const data = await response.json();

  return data;
};
