import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const NoMatch: FC = (): ReactElement => {
  const { t } = useTranslation('nomatch');

  return <p>{t('text')}</p>;
};
