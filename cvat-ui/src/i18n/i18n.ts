// @see https://www.i18next.com/
import i18n from 'i18next';
// @see https://react.i18next.com/
import { initReactI18next } from 'react-i18next';
// @see https://github.com/i18next/i18next-browser-languageDetector
import languageDetector from 'i18next-browser-languagedetector';
// @see https://github.com/i18next/i18next-resources-to-backend
import resourcesToBackend from 'i18next-resources-to-backend';
// import moment from 'moment';

export const supportedLanguages: Record<string, string> = {
    en: 'English',
    'zh-CN': '简体中文',
} as const;

async function init(): Promise<void> {
    await i18n
        .use(initReactI18next)
        .use(languageDetector)
        .use(
            resourcesToBackend(
                async (language: string, namespace: string) => (
                    // eslint-disable-next-line no-unsanitized/method
                    import(
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
        console.log('i18next init');
        i18n.on('failedLoading', (lng, ns, msg) => console.error(msg));
        // just for debug;
        // @ts-ignore
        window.i18n = i18n;
    }
}

let firstRun = true;

if (firstRun) {
    init();
    firstRun = false;
}

type I18next = typeof i18n;

/**
 * update translation resource when language changed
 * used by
 * 1. const defined string not in function call utils/validation-patterns.ts
 * 2. other lib
 * @param callback
 * @return offListen function
 */
export function onLanguageChanged(callback: (lng: string, i18n: I18next) => void): () => void {
    i18n.on('languageChanged', (lng) => callback(lng, i18n));
    return () => i18n.off('languageChanged', callback);
}

// onLanguageChanged((lng) => {
//     moment.locale(lng);
// });

export default i18n;
