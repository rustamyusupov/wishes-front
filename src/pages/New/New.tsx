import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Form, useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';
import { Button } from 'components/Button';
import { Field } from 'components/Field';
import { Select } from 'components/Select';

import { getOptions } from './helpers';
import css from './new.module.css';

export const New = () => {
  const data = useRouteLoaderData('root') as Data;
  const { t } = useTranslation('new');

  const categories = getOptions(data.categories);
  const currencies = getOptions(data.currencies);

  return (
    <Form className={css.new} method="post">
      <h1 className={css.title}>{t('title')}</h1>
      <Field
        className={cn(css.field, css.name)}
        id="name"
        name="name"
        placeholder={t('name')}
        type="text"
        required
      />
      <Field
        className={cn(css.field, css.link)}
        id="link"
        name="link"
        placeholder={t('link')}
        required
        type="url"
      />
      <Field
        className={cn(css.field, css.price)}
        id="price"
        min="0"
        name="price"
        placeholder={t('price')}
        required
        step="any"
        type="number"
      />
      <Field
        className={cn(css.field, css.sort)}
        type="number"
        name="sort"
        id="sort"
        min="0"
        placeholder={t('sort')}
      />
      <Select
        className={cn(css.field, css.currency)}
        name="currencyId"
        id="currency"
        options={currencies}
        placeholder={t('currency')}
        required
      />
      <Select
        className={cn(css.field, css.category)}
        name="categoryId"
        id="category"
        options={categories}
        placeholder={t('category')}
        required
      />
      <div className={css.checkbox}>
        <Field className={cn(css.field, css.archive)} id="archive" type="checkbox" name="archive" />
        <label className={css.label} htmlFor="archive">
          {t('archive')}
        </label>
      </div>
      <div className={css.action}>
        <Button className={css.submit} type="submit">
          {t('submit')}
        </Button>
      </div>
    </Form>
  );
};
