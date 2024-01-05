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

  const categories = getOptions(data.categories);
  const currencies = getOptions(data.currencies);
  const wish = getWish({ id: Number(id), ...data });

  return (
    <Form
      categories={categories}
      currencies={currencies}
      method="put"
      submit={t('submit')}
      title={t('title')}
      wish={wish}
    />
  );
};
