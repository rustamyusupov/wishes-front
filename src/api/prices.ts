import { LoaderFunction } from 'react-router-dom';

import { Price } from './types';

export const getPrices: LoaderFunction = async (): Promise<Price[]> => {
  const response = await fetch('/api/prices');
  const data = await response.json();

  return data;
};
