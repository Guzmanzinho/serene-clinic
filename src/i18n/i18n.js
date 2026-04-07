import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLocales from './locales/en.json';
import ptLocales from './locales/pt.json';
import esLocales from './locales/es.json';

const resources = {
  en: { translation: enLocales },
  pt: { translation: ptLocales },
  es: { translation: esLocales }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
