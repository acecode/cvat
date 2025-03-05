interface Locale {
    code: string;
    name: string;
    hidden: boolean;
}

function genLocale(code: Locale['code'], name: Locale['name'], hidden = false): Locale {
    return { code, name, hidden };
}

export const localeList: Locale[] = [
    genLocale('en', 'English'),
    genLocale('zh', '中文', true),
    genLocale('zh-CN', '简体中文'),
];

export const supportedLanguages: string[] = localeList
    .map((locale) => locale.name);

export const localeOptions = localeList
    .filter((locale) => !locale.hidden);
