import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-router-dom';

import { Button } from 'components/Button';
import { Field } from 'components/Field';

import css from './login.module.css';

export const Login: FC = (): ReactElement => {
  const { t } = useTranslation('login');

  return (
    <div className={css.login}>
      <h1 className={css.title}>{t('title')}</h1>
      <Form className={css.form} method="post">
        <Field
          autofocus={true}
          className={css.field}
          id="email"
          name="email"
          placeholder={t('email')}
          type="email"
          required
        />
        <Field
          className={css.field}
          id="password"
          name="password"
          placeholder={t('password')}
          type="password"
          required
        />
        <Button className={css.button} type="submit">
          {t('button')}
        </Button>
      </Form>
    </div>
  );
};
