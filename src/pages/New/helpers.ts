import { Option } from 'components/Select';

import { Item } from './types';

export const getOptions = (list: Item[]): Option[] =>
  list.map(option => ({
    label: option.name,
    value: option.id,
  }));
