/**
 * base translate resources
 * common or deep basic resource
 */
export default {
    Connecting: 'Connecting...',
    // common item translate
    Password: 'Password',
    // common button text
    button: {
        Next: 'Next',
        OK: 'OK',
        Cancel: 'Cancel',
    },
    Upcase: '{{s, upcase}}',
    // i18n
    'switch-locale': 'Switch locale',
    // rules
    'please-specify-a': 'Please specify a {{type}}',
    'please-specify-an': 'Please specify an {{type}}',
    'not-valid': '{{item}} is not valid {{type}}',
    // cvat-app.tsx
    'cannot-connect-server-title': 'Cannot connect to the server',
    'cannot-connect-server-content': 'Make sure the CVAT backend and all necessary services<br/>' +
        '(Database, Redis and Open Policy Agent) are running and available.<br/>' +
        'If you upgraded from version 2.2.0 or earlier, manual actions may be needed,<br/>' +
        'see the <1>Upgrade Guide</1>.',
    // cvat-app.tsx
    'unsupported-platform-title': 'Unsupported platform detected',
    'unsupported-platform-content': [
        'The browser you are using is {{name}} {{version}} based on {{engine}}.<br/>' +
        ' CVAT was tested in the latest versions of Chrome and Firefox.<br/>' +
        ' We recommend to use Chrome (or another Chromium based browser)',
        'The operating system is {{os}}',
    ],
    // cvat-app.tsx
    'unsupported-features-title': 'Unsupported features detected',
    'unsupported-features-content': '{{name}} v{{version}} does not support API, which is used by CVAT.<br/>' +
        'It is strongly recommended to update your browser.',
    // cvat-app.tsx
    'open-browser-console': 'Open the Browser Console to get details',

    // keep same structure in utils/validation-patterns.ts
    'validation-patterns': {
        validatePasswordLength: 'Password must have at least 8 characters',
        passwordContainsNumericCharacters: 'Password must have at least 1 numeric characters',
        passwordContainsUpperCaseCharacter: 'Password must have at least 1 uppercase alphabetical character',
        passwordContainsLowerCaseCharacter: 'Password must have at least 1 lowercase alphabetical character',
        validateUsernameLength: 'Username must have at least 5 characters',
        validateUsernameCharacters: 'Only characters (a-z), (A-Z), (0-9), -, _, . are available',
        validateName: 'Invalid name',
        validateAttributeName: 'Invalid name',
        validateLabelName: 'Invalid name',
        validateAttributeValue: 'Invalid attribute value',
        validateURL: 'URL is not valid',
        validateOrganizationSlug: 'Only Latin characters and numbers are allowed',
        validatePhoneNumber: 'Input phone number is not correct',
    },
};
