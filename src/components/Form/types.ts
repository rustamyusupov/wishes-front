import { Data, Wish } from 'api';

export interface Item {
  id: number;
  name: string;
}

export interface Props {
  id?: number;
  isEdit?: boolean;
  method: 'post' | 'put';
  submit: 'string';
  title: 'string';
}

export interface DataWithId extends Data {
  id: number;
}

export interface WishWithPrice extends Wish {
  currency: string | undefined;
  price: number | undefined;
}
