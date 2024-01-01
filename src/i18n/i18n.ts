import i18n from 'i18next';
import httpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

void i18n
  .use(httpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/wishes/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    ns: 'common',
    react: {
      useSuspense: false,
    },
  });

export { i18n };
