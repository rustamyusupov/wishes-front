import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';
import { Form } from 'components/Form';

import { getOptions, getWish } from './helpers';

export const Wish: FC = (): ReactElement => {
  const data = useRouteLoaderData('root') as Data;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('wish');

  const isEdit = Boolean(id);
  const categories = getOptions(data.categories);
  const currencies = getOptions(data.currencies);
  const wish = getWish({ id: Number(id), ...data });

  return (
    <Form
      categories={categories}
      currencies={currencies}
      method={isEdit ? 'put' : 'post'}
      submit={t(isEdit ? 'update' : 'add')}
      title={t(isEdit ? 'edit' : 'new')}
      wish={wish}
    />
  );
};
