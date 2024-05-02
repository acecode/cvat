export default {
    'Open Data Annotation Platform': 'Open Data Annotation Platform',
    'sign-in': 'Sign in',
    'modal-cannot-connect-server': {
        title: 'Cannot connect to the server',
        content: `Make sure the CVAT backend and all necessary services<br />
        (Database, Redis and Open Policy Agent) are running and available.<br />
        If you upgraded from version 2.2.0 or earlier, manual actions may be needed,<br />
        see the&nbsp;`,
    },

    type: {
        Password: 'Password',
        Email: 'Email',
    },

    // cvat-ui/src/utils/validation-patterns.ts
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
