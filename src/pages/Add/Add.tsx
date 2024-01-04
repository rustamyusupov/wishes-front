import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';
import { Button } from 'components/Button';
import { Field } from 'components/Field';
import { Select } from 'components/Select';

import css from './add.module.css';
import { getOptions } from './helpers';

export const Add = () => {
  const data = useRouteLoaderData('root') as Data;
  const { t } = useTranslation('add');

  const categories = getOptions(data.categories);
  const currencies = getOptions(data.currencies);

  return (
    <form className={css.add}>
      <Field
        className={cn(css.field, css.name)}
        id="name"
        name="name"
        placeholder={t('name')}
        type="text"
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
      <Field
        className={cn(css.field, css.sort)}
        type="number"
        name="sort"
        id="sort"
        min="0"
        placeholder={t('sort')}
      />
      <label className={css.label}>
        <Field className={cn(css.field, css.archive)} type="checkbox" name="archive" id="archive" />
        {t('archive')}
      </label>
      <div className={css.action}>
        <Button type="submit">{t('submit')}</Button>
      </div>
    </form>
  );
};
