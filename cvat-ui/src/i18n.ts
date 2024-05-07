// Copyright (C) 2024 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { Config, BaseSimpleField, SelectFieldSettings } from '@react-awesome-query-builder/antd';
import moment from 'moment';
import { isDev } from './utils/environment';

let firstRun = true;
let resolve: (result: any) => void;

export const initialedPromise = new Promise<typeof i18next>((res) => {
    resolve = res;
});

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
    i18next.on('languageChanged', (lng) => {
        console.log('moment', lng.toLowerCase());
        moment.locale(lng.toLowerCase());
        console.log('moment locale', moment.localeData(lng));
    });
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
            debug: true,
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
                'error',
                'auth',
                'header',
                'project',
                'filter',
                'cloud-storage',
            ],
            resources: {},
            // @see https://github.com/i18next/i18next-browser-languageDetector?tab=readme-ov-file#detector-options
            detection: {
                order: ['querystring', 'cookie', 'localStorage'],
            },
            react: {
                useSuspense: false,
                transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'wbr'],
            },
        }, (err, i18n) => {
            if (err) {
                console.error(err);
            } else {
                resolve(i18n);
            }
        });
    }
}

export default i18next;

/**
 * patch { config } fields when lng change
 * data is load from i18n {ns} and {key}
 * @param ns filter
 * @param key
 * @param config
 */
export function onLngChangePatchConfig(ns: string, key: string, config: Partial<Config>): void {
    if (!config.fields) {
        return;
    }
    i18next.on('languageChanged', (lng) => {
        const res = i18next.getResource(lng, ns, key);
        const { fields = {} } = config;
        if (res) {
            if (res.labels) {
                Object.keys(res.labels).forEach((k: string) => {
                    if (k in fields) {
                        fields[k].label = res.labels[k];
                    }
                    const { listValues } = res;
                    if (k in listValues) {
                        const field = fields[k] as BaseSimpleField<SelectFieldSettings>;
                        if (field.fieldSettings?.listValues) {
                            field.fieldSettings.listValues = listValues[k];
                        }
                    }
                });
            }
        }
    });
}
