import { Wish } from 'api';
import { Option } from 'components/Select';

export interface Item {
  id: number;
  name: string;
}

export interface Props {
  autofocus?: boolean;
  categories: Option[];
  currencies: Option[];
  method: 'post' | 'put';
  submit: 'string';
  title: 'string';
  user: string;
  wish?: Wish;
}
