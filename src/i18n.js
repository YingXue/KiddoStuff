import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zh from './locales/zh.json';

const savedLang = localStorage.getItem('lang') || 'en';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        zh: { translation: zh }
    },
    lng: savedLang, // 👈 加载保存的语言
    fallbackLng: 'zh',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;