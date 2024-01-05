import { useTranslation } from 'react-i18next';
import { Form, useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';

import css from './edit.module.css';

export const Edit = () => {
  const data = useRouteLoaderData('root') as Data;
  const { t } = useTranslation('edit');

  console.log(data);

  return (
    <Form className={css.edit} method="put">
      <h1 className={css.title}>{t('title')}</h1>
    </Form>
  );
};
