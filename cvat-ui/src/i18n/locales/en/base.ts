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
    },
    'cannot-connect-server-title': 'Cannot connect to the server',
    'cannot-connect-server-content': 'Make sure the CVAT backend and all necessary services<br/>' +
        '(Database, Redis and Open Policy Agent) are running and available.<br/>' +
        'If you upgraded from version 2.2.0 or earlier, manual actions may be needed,<br/>' +
        'see the <1>Upgrade Guide</1>.',
    'unsupported-platform-title': 'Unsupported platform detected',
    'unsupported-platform-content': [
        'The browser you are using is {{name}} {{version}} based on {{engine}}.<br/>' +
        ' CVAT was tested in the latest versions of Chrome and Firefox.<br/>' +
        ' We recommend to use Chrome (or another Chromium based browser)',
        'The operating system is {{os}}',
    ],
    'unsupported-features-title': 'Unsupported features detected',
    'unsupported-features-content': '{{name}} v{{version}} does not support API, which is used by CVAT.<br/>' +
        'It is strongly recommended to update your browser.',
    'open-browser-console': 'Open the Browser Console to get details',
};
