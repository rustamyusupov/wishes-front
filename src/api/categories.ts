import { LoaderFunction } from 'react-router-dom';

import { Category } from './types';

export const getCategories: LoaderFunction = async (): Promise<Category[]> => {
  const response = await fetch('/api/categories');
  const data = await response.json();

  return data;
};
