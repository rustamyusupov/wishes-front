import { LoaderFunction } from 'react-router-dom';

import { Currency } from './types';

export const getCurrencies: LoaderFunction = async (): Promise<Currency[]> => {
  const response = await fetch('/api/currencies');
  const data = await response.json();

  return data;
};
