import { Data, Wish } from 'api';
import { Option } from 'components/Select';

export interface Item {
  id: number;
  name: string;
}

export interface DataWithId extends Data {
  id: number;
}

export interface WishWithPrice extends Wish {
  currency: string | undefined;
  price: number | undefined;
}

export interface Props {
  autofocus?: boolean;
  categories: Option[];
  currencies: Option[];
  method: 'post' | 'put';
  submit: 'string';
  title: 'string';
  wish?: WishWithPrice;
}
