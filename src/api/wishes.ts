import { LoaderFunction } from 'react-router-dom';

import { Wish } from './types';

export const getWishes: LoaderFunction = async (): Promise<Wish[]> => {
  const response = await fetch('/api/wishes');
  const data = await response.json();

  return data;
};
