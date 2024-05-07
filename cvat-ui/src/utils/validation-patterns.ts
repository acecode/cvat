// Copyright (C) 2021-2022 Intel Corporation
// Copyright (C) 2023 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT
import { initialedPromise } from '../i18n';

const validationPatterns = {
    validatePasswordLength: {
        pattern: /(?=.{8,})/,
        message: 'Password must have at least 8 characters',
    },

    passwordContainsNumericCharacters: {
        pattern: /(?=.*[0-9])/,
        message: 'Password must have at least 1 numeric characters',
    },

    passwordContainsUpperCaseCharacter: {
        pattern: /(?=.*[A-Z])/,
        message: 'Password must have at least 1 uppercase alphabetical character',
    },

    passwordContainsLowerCaseCharacter: {
        pattern: /(?=.*[a-z])/,
        message: 'Password must have at least 1 lowercase alphabetical character',
    },

    validateUsernameLength: {
        pattern: /(?=.{5,})/,
        message: 'Username must have at least 5 characters',
    },

    validateUsernameCharacters: {
        pattern: /^[a-zA-Z0-9_\-.]{5,}$/,
        message: 'Only characters (a-z), (A-Z), (0-9), -, _, . are available',
    },

    /*
        \p{Pd} - dash connectors
        \p{Pc} - connector punctuations
        \p{Cf} - invisible formatting indicator
        \p{L} - any alphabetic character
        Useful links:
        https://stackoverflow.com/questions/4323386/multi-language-input-validation-with-utf-8-encoding
        https://stackoverflow.com/questions/280712/javascript-unicode-regexes
        https://stackoverflow.com/questions/6377407/how-to-validate-both-chinese-unicode-and-english-name
    */
    validateName: {
        // eslint-disable-next-line
        pattern: /^(\p{L}|\p{Pd}|\p{Cf}|\p{Pc}|['\s]){2,}$/gu,
        message: 'Invalid name',
    },

    validateAttributeName: {
        pattern: /\S+/,
        message: 'Invalid name',
    },

    validateLabelName: {
        pattern: /\S+/,
        message: 'Invalid name',
    },

    validateAttributeValue: {
        pattern: /\S+/,
        message: 'Invalid attribute value',
    },

    validateURL: {
        // eslint-disable-next-line
        pattern: /^(https?:\/\/)[^\s$.?#].[^\s]*$/, // url, ip
        message: 'URL is not valid',
    },

    validateOrganizationSlug: {
        pattern: /^[a-zA-Z\d]+$/,
        message: 'Only Latin characters and numbers are allowed',
    },

    validatePhoneNumber: {
        pattern: /^[+]*[-\s0-9]*$/g,
        message: 'Input phone number is not correct',
    },
};

const I18N_KEY = 'validation-patterns';

// update messages from i18n translation:validationPatterns
// when i18n language changed
initialedPromise.then((i18n) => {
    i18n.on('languageChanged', () => {
        if (i18n.exists(I18N_KEY)) {
            console.log('update', I18N_KEY);
            const validationRes: Record<keyof typeof validationPatterns, string> = i18n.getResource(
                i18n.language,
                'translation',
                I18N_KEY,
            );
            console.log('validationRes', validationRes);
            Object.keys(validationRes).forEach((key: string) => {
                const k = key as unknown as keyof typeof validationPatterns;
                if (validationPatterns[k]) {
                    validationPatterns[k].message = validationRes[key as unknown as keyof typeof validationRes];
                }
            });
        }
    });
});
export default validationPatterns;
