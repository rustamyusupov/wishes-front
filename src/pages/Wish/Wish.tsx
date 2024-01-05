import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useParams, useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';

import css from './wish.module.css';

export const Wish: FC = (): ReactElement => {
  const data = useRouteLoaderData('root') as Data;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('wish');

  const wish = data.wishes.find(item => item.id === Number(id));

  console.log(wish);

  return (
    <Form className={css.wish} method="put">
      <h1 className={css.title}>{t('title')}</h1>
    </Form>
  );
};
