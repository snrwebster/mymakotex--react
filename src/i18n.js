import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files dynamically
const resources = {
  en: {
    translation: require('./locales/en.json')
  },
  gr: {
    translation: require('./locales/gr.json')
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false // Disable HTML escaping for translated strings
    }
  });

export default i18n;
