import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useRouteLoaderData } from 'react-router-dom';

import { WishData, Wishlist } from 'api';

import { Form } from './Form';
import { getOptions, getWish } from './helpers';

export const Wish: FC = (): ReactElement => {
  const wishlist = useRouteLoaderData('user') as Wishlist;
  const data = useRouteLoaderData('wish') as WishData;
  const { id, user } = useParams<{ id: string; user: string }>();
  const { t } = useTranslation('wish');

  const isEdit = id !== 'new';
  const categories = getOptions(data.categories);
  const currencies = getOptions(data.currencies);
  const wish = getWish(id, wishlist);

  return (
    <Form
      autofocus={!isEdit}
      categories={categories}
      currencies={currencies}
      method={isEdit ? 'put' : 'post'}
      submit={t(isEdit ? 'update' : 'add')}
      title={t(isEdit ? 'edit' : 'new')}
      user={user ?? ''}
      wish={wish}
    />
  );
};
