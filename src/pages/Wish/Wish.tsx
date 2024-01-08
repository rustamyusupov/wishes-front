import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';

import { Form } from './Form';
import { getOptions, getWish } from './helpers';

export const Wish: FC = (): ReactElement => {
  const data = useRouteLoaderData('user') as Data;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('wish');

  const isEdit = id !== 'new';
  const categories = getOptions(data.categories);
  const currencies = getOptions(data.currencies);
  const wish = getWish(Number(id), data.wishlist);

  return (
    <Form
      autofocus={!isEdit}
      categories={categories}
      currencies={currencies}
      method={isEdit ? 'put' : 'post'}
      submit={t(isEdit ? 'update' : 'add')}
      title={t(isEdit ? 'edit' : 'new')}
      user={data.user.id}
      wish={wish}
    />
  );
};
