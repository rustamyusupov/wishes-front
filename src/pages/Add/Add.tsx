import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';
import { Field } from 'components/Field';
import { Select } from 'components/Select';

import css from './add.module.css';

export const Add = () => {
  const { t } = useTranslation('add');

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
        options={[
          { label: 'USD', value: 0 },
          { label: 'EUR', value: 1 },
          { label: 'RUB', value: 2 },
        ]}
        placeholder={t('currency')}
        required
      />
      <Select
        className={cn(css.field, css.category)}
        name="categoryId"
        id="category"
        options={[
          { label: 'Devices', value: 0 },
          { label: 'Equipment', value: 1 },
          { label: 'Clothes', value: 2 },
        ]}
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
