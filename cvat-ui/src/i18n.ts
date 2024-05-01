// Copyright (C) 2024 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { isDev } from './utils/environment';

let firstRun = true;

if (firstRun) {
    firstRun = false;
    i18next
        // @see https://github.com/i18next/i18next-browser-languageDetector?tab=readme-ov-file#getting-started
        .use(LanguageDetector)
        // @see https://react.i18next.com/
        .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => {
            console.log('load', language, namespace);
            // eslint-disable-next-line no-unsanitized/method
            return import(
                /* webpackMode: "lazy" */
                /* webpackChunkName: "i18n-[id]" */
                /* webpackExports: ["default"] */
                `./locales/${language}/${namespace}.js`
            );
        }));

    if (isDev()) {
        i18next.on('failedLoading', (lng, ns, msg) => console.error('failedLoading', { lng, ns, msg }));
        i18next.on('missingKey', (lng, ns, msg) => console.error('missingKey', { lng, ns, msg }));

        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        window._i18next = i18next;
    }

    if (!i18next.isInitialized) {
        i18next.init({
            // @see https://www.i18next.com/overview/configuration-options
            debug: isDev(),
            supportedLngs: [
                'en',
                'zh',
                'zh-CN',
            ],
            fallbackLng: {
                zh: ['zh-CN'],
                default: ['en'],
            },
            interpolation: {
                escapeValue: false, // not needed for react as it escapes by default
            },
            partialBundledLanguages: true,
            ns: [
                'translation',
            ],
            resources: {
                en: {
                    base: {
                        Connecting: 'connecting',
                    },
                },
                'zh-CN': {
                    base: {
                        Connecting: '连接中',
                    },
                },
            },
            // @see https://github.com/i18next/i18next-browser-languageDetector?tab=readme-ov-file#detector-options
            detection: {
                order: ['querystring', 'cookie', 'localStorage'],
            },
            react: {
                useSuspense: false,
            },
        });
    }
}

export default i18next;
