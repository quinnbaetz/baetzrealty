import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  //.use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to the react-i18next components.
  // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
  .use(reactI18nextModule)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // special options for react-i18next
    // learn more: https://react.i18next.com/components/i18next-instance
    react: {
      wait: true
    },
    resources: {
      en: {
        translation: {
          Home: 'Home',
          'Find Your Home': 'Find Your Home',
          'coming Soon': 'coming Soon',
          'Keller Williams Description': 'Keller Williams Realty, Inc. is a real estate franchise company. Each Keller Williams office is independently owned and operated. Keller Williams Realty, Inc. is an Equal Opportunity Employer and supports the Fair Housing Act.',
          'copywrite': "©2018 By Natalia Baetz."
        },
      },
      es: {
        translation: {
          Home: 'Inicio',
          'Find Your Home': 'Encuentre su casa',
          'coming soon': 'viene pronto',
          'Buyers': 'Compredores',
          'Sellers': 'Vendedores'
        },
      },
    },
  });


export default i18n;
