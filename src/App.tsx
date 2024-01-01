import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation();

  return <main>{t('title')}</main>;
};
