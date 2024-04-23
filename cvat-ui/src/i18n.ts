import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { isDev } from './utils/environment';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: isDev(),
        lng: 'zh_CN',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    app: {
                        connecting: 'connecting...',
                    },
                },
            },
            zh_CN: {
                translation: {
                    app: {
                        connecting: '连接中...',
                    },
                    'Upgrade Guide': '升级指南',
                },
            },
        },
    });
