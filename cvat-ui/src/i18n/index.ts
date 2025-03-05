// @see https://www.i18next.com/
import i18n from 'i18next';
// @see https://react.i18next.com/
import { initReactI18next } from 'react-i18next';
// @see https://github.com/i18next/i18next-browser-languageDetector
import languageDetector from 'i18next-browser-languagedetector';
// @see https://github.com/i18next/i18next-resources-to-backend
import resourcesToBackend from 'i18next-resources-to-backend';
// import moment from 'moment';

type I18next = typeof i18n;
type OffFunction = () => void;

export const supportedLanguages: Record<string, string> = {
    en: 'English',
    'zh-CN': '简体中文',
} as const;

// make sure not init again
let firstRun = true;

async function init(): Promise<void> {
    if (!firstRun) {
        return;
    }
    firstRun = false;
    await i18n
        .use(initReactI18next)
        .use(languageDetector)
        .use(
            resourcesToBackend(
                async (language: string, namespace: string) => (
                    // eslint-disable-next-line no-unsanitized/method
                    import(
                        // webpack Magic comments;
                        // @see https://webpack.js.org/api/module-methods/#magic-comments
                        /* webpackInclude: /\.ts$/ */
                        /* webpackChunkName: "locales" */
                        /* webpackMode: "lazy-once" */
                        /* webpackPrefetch: true */
                        /* webpackPreload: true */
                        /* webpackFetchPriority: "low" */
                        `./locales/${language}/${namespace}.ts`
                    )
                ),
            ),
        )
        .init({
            fallbackLng: {
                default: ['en'],
                zh: ['zh-CN', 'en'],
            },
            supportedLngs: Object.keys(supportedLanguages),
            ns: [
                'base',
                'login-form',
                'register-form',
                'header',
            ],
            debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false,
            },
        });

    i18n.services.formatter!.add('upcase', (value: any, lng, options) => {
        const { num } = options;
        const n = num || 1;
        return value.charAt(n - 1).toUpperCase() + value.slice(n);
    });

    if (process.env.NODE_ENV === 'development') {
        console.info('i18next initialized');
        i18n.on('failedLoading', (lng, ns, msg) => console.error(msg));
        // just for debug;
        // @ts-ignore
        window.i18n = i18n;
    }
}
init();

/**
 * when language changed trigger other part
 *   which not in react component or function call
 *
 * 1. const defined string not in function call utils/validation-patterns.ts
 * 2. other lib
 * @param callback
 * @return {OffFunction} stopListenFunction
 */
export function onLanguageChanged(callback: (lng: string, i18n: I18next) => void): OffFunction {
    i18n.on('languageChanged', (lng) => callback(lng, i18n));
    return () => i18n.off('languageChanged', callback);
}

/**
 * when locale Changed
 * load {ns}:{key} as a map
 * replace keys on obj
 *
 * @params {Object} obj targetObject
 * @params {string} key
 * @params {string} ns
 * @return {OffFunction} stopListenFunction
 */
export function onLanguageChangedReplaceKeys<T extends Record<string, any>>(obj: T, key: string, ns = 'base'): OffFunction {
    return onLanguageChanged((lng, i18N) => {
        const resource = i18N.getResource(lng, ns, key);
        Object.keys(obj).forEach((prop) => {
            type K = keyof T;
            if (resource && resource[prop]) {
                const text = resource[prop] as K;
                const k = prop as K;
                obj[text] = obj[k];
                delete obj[k];
            }
        });
    });
}

// @TODO trigger moment change locale
// onLanguageChanged((lng) => {
//     moment.locale(lng);
// });

export default i18n;
