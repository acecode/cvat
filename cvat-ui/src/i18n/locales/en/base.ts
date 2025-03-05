/**
 * base translate resources
 * common or deep basic resource
 */
export default {
    Connecting: 'Connecting...',
    'Open Data Annotation Platform': 'Open Data Annotation Platform',
    // common item translate
    Password: 'Password',
    projects: 'Projects',
    _task: 'Task',
    tasks: 'Tasks',
    _job: 'Job',
    jobs: 'Jobs',
    'cloud storages': 'Cloud Storages',
    requests: 'Requests',
    models: 'Models',
    analytics: 'Analytics',
    // common button text
    button: {
        Next: 'Next',
        OK: 'OK',
        Cancel: 'Cancel',
        Close: 'Close',
        Yes: 'Yes',
        No: 'No',
        Apply: 'Apply',
        Recent: 'Recent',
        Filter: 'Filter',
        Reset: 'Reset',
    },
    Upcase: '{{s, upcase}}',
    'open-repository': 'Click to open repository',
    'open-guide': 'Click to open guide',
    // i18n
    'switch-locale': 'Switch locale',
    // header dropdown
    'admin-page': 'Admin page',
    Organization: 'Organization',
    Invitations: 'Invitations',
    Create: 'Create',
    'Switch organization': 'Switch organization',
    'Switch organization title': 'Select an organization',
    'Personal workspace': 'Personal workspace',
    Settings: 'Settings',
    'settings tooltip': 'Press {{shortcut}} to switch',
    About: 'About',
    'Change password': 'Change password',
    Logout: 'Logout',
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
    search: {
        placeholder: 'Search...',
        empty: 'No results matched your search...',
        no_created: 'No {{items}} created yet...',
        create: 'create a new one',
        create_new: 'create a new {{item}}',
        create_new_more: 'create multi {{items}}',
        description: 'To get started with your annotation project',
        no_attached: 'No cloud storages attached yet...',
        description_cloud_storage: 'To get started with your cloud storage',
        attach_new: 'attach a new one',
        'or try to': ' or try to ',
        create_from_backup: 'Create from backup',
    },
    sort: {
        label: 'Sort By',
        'Descending sort': 'Descending sort',
        'Ascending sort': 'Ascending sort',
    },
    project: {
        fields: {
            ID: 'ID',
            Assignee: 'Assignee',
            Owner: 'Owner',
            Status: 'Status',
            Name: 'Name',
            'Updated date': 'Updated date',
        },
    },
    task: {
        fields: {
            ID: 'ID',
            Owner: 'Owner',
            Status: 'Status',
            Assignee: 'Assignee',
            'Updated date': 'Updated date',
            Subset: 'Subset',
            Mode: 'Mode',
            Dimension: 'Dimension',
            'Project ID': 'Project ID',
            Name: 'Name',
            'Project name': 'Project name',
        },
    },
    job: {
        fields: {
            ID: 'ID',
            Assignee: 'Assignee',
            'Updated date': 'Updated date',
            Stage: 'Stage',
            State: 'State',
            'Task ID': 'Task ID',
            'Project ID': 'Project ID',
            'Task name': 'Task name',
            'Project name': 'Project name',
        },
    },
    cloudStorage: {
        fields: {
            ID: 'ID',
            'Provider type': 'Provider type',
            'Updated date': 'Updated date',
            'Display name': 'Display name',
            Resource: 'Resource',
            'Credentials type': 'Credentials type',
            Owner: 'Owner',
            Description: 'Description',
        },
    },
    filter: {
        'clear-filters': 'Clear filters',
        'quick-filter': 'Quick filter',
        // for all list filter
        'quick-keys': {
            'Assigned to me': 'Assigned to me',
            'Owned by me': 'Owned by me',
            'Not completed': 'Not completed',
            'AWS storages': 'AWS storages',
            'Azure storages': 'Azure storages',
            'Google cloud storages': 'Google cloud storages',
        },
    },
};
