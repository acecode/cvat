// @see https://www.i18next.com/
import i18n from 'i18next';
// @see https://react.i18next.com/
import { initReactI18next } from 'react-i18next';
// @see https://github.com/i18next/i18next-browser-languageDetector
import languageDetector from 'i18next-browser-languagedetector';
// @see https://github.com/i18next/i18next-resources-to-backend
import resourcesToBackend from 'i18next-resources-to-backend';

export const supportedLanguages: Record<string, string> = {
    en: 'English',
    'zh-CN': '简体中文',
} as const;

function init(): void {
    i18n
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
            ],
            debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false,
            },
        });

    if (process.env.NODE_ENV === 'development') {
        console.log('i18next init');
        i18n.on('failedLoading', (lng, ns, msg) => console.error(msg));
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

export function onLanguageChanged(callback: (i18n: I18next, lng: string) => void): () => void {
    i18n.on('languageChanged', (lng) => callback(i18n, lng));
    return () => i18n.off('languageChanged', callback);
}

export default i18n;
