import { useTranslation } from 'react-i18next';

export const NoMatch = () => {
  const { t } = useTranslation('nomatch');

  return <p>{t('text')}</p>;
};
