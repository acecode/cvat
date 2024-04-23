// Copyright (C) 2024 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { isDev } from './utils/environment';

i18next
    // @see https://github.com/i18next/i18next-browser-languageDetector?tab=readme-ov-file#getting-started
    .use(LanguageDetector)
    // @see https://react.i18next.com/
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => {
        console.log('load', language, namespace);
        // eslint-disable-next-line no-unsanitized/method
        return import(`./locales/${language}/${namespace}.js`);
    }))
    .on('failedLoading', (lng, ns, msg) => console.error({ lng, ns, msg }));

if (!i18next.isInitialized) {
    i18next.init({
        // @see https://www.i18next.com/overview/configuration-options
        debug: isDev(),
        supportedLngs: [
            'en_US',
            'zh_CN',
        ],
        fallbackLng: {
            zh: ['zh_CN'],
            en: ['en_US'],
            default: ['en'],
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        partialBundledLanguages: true,
        ns: [
            'auth',
            'error',
            'job',
            'projects',
            'task',
            'translation',
        ],
        resources: {},
        // @see https://github.com/i18next/i18next-browser-languageDetector?tab=readme-ov-file#detector-options
        detection: {},
        react: {
            useSuspense: false,
        },
    });
}

// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
window._i18next = i18next;

export default i18next;
