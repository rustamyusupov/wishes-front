import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useRouteLoaderData } from 'react-router-dom';

import { Data, Wish, fetchJSON } from 'api';
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetchJSON<Wish>('/api/wishes', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        archive: Boolean(data.archive) ?? false,
        categoryId: Number(data.categoryId),
        currencyId: Number(data.currencyId),
        sort: Number(data.sort) ?? 0,
      }),
    });

    await fetchJSON('/api/prices', {
      method: 'POST',
      body: JSON.stringify({
        wishId: response.id,
        value: Number(data.price),
        date: new Date().toLocaleDateString('ru-RU'),
      }),
    });
  };

  return (
    <form className={css.add} onSubmit={handleSubmit}>
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
