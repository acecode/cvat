export default {
    'Open Data Annotation Platform': 'Open Data Annotation Platform',
    'sign-in': 'Sign in',
    '_type has been created': 'The {{type}} has been created',
    'Select _type': 'Select {{type}}',
    Saving: 'Saving',
    Save: 'Save',
    Submit: 'Submit',
    'Submit & Open': '提交并打开',
    'Submit & Continue': '提交并继续',
    Edit: 'Edit',
    Search: 'Search',
    created: 'Created',

    'created by _ownerName': 'Created By {{ownerName}}',
    'Last updated': 'Last updated {{updated}}',
    'modal-cannot-connect-server': {
        title: 'Cannot connect to the server',
        content: `Make sure the CVAT backend and all necessary services<br />
        (Database, Redis and Open Policy Agent) are running and available.<br />
        If you upgraded from version 2.2.0 or earlier, manual actions may be needed,<br />
        see the&nbsp;`,
    },

    type: {
        Name: 'Name',
        Password: 'Password',
        Email: 'Email',

        'First name': 'First name',
        'Last name': 'Last name',
        Username: 'Username',

        // header
        Project: 'Project',
        Projects: 'Projects',
        Task: 'Task',
        Tasks: 'Tasks',
        Job: 'Job',
        Jobs: 'Jobs',
        'Cloud Storages': 'Cloud Storages',
        'Cloud Storage': 'Cloud Storage',
        Analytic: 'Analytic',
        Analytics: 'Analytics',
        Subset: 'Subset',
        Labels: 'Labels',
        files: 'files',
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

    // components/switch-locale-button/switch-locale-button.tsx
    'modal-switch-locale-button': {
        title: 'Switch locale',
    },

    SourceStorage: {
        label: 'Source Storage',
        describe: 'Specify source storage for import resources like annotation, backups',
        backDescribe: '',
    },
    LabelEditor: {
        Raw: 'Raw',
        Constructor: 'Constructor',

        'Add label': 'Add label',
        'Setup skeleton': 'Setup skeleton',
        'From model': 'From model',

        'Update attributes': 'Update attributes',
        'Delete label': 'Delete label',
    },
    QbUtils: {
        settings: {
            valueLabel: 'Value',
            valuePlaceholder: 'Value',
            fieldLabel: 'Field',
            operatorLabel: 'Operator',
            funcLabel: 'Function',
            fieldPlaceholder: 'Select field',
            funcPlaceholder: 'Select function',
            operatorPlaceholder: 'Select operator',
            lockLabel: 'Lock',
            lockedLabel: 'Locked',
            deleteLabel: 'Delete',
            addGroupLabel: 'Add group',
            addCaseLabel: 'Add condition',
            addDefaultCaseLabel: 'Add default condition',
            defaultCaseLabel: 'Default:',
            addRuleLabel: 'Add rule',
            addSubRuleLabel: 'Add sub rule',
            delGroupLabel: 'Delete',
            notLabel: 'Not',
            fieldSourcesPopupTitle: 'Select source',
            valueSourcesPopupTitle: 'Select value source',
        },
        conjunctions: {
            AND: 'And',
            OR: 'Or',
        },
        operators: {
            like: 'Contains',
            not_like: 'Not contains',
            starts_with: 'Start with',
            ends_with: 'End with',
            between: 'Between',
        },
    },
    deleteModal: {
        title: 'The {{item}} will be deleted',
        content: 'All related data (images, annotations) will be lost. Continue?',
    },
    'Open the issue': 'Open the issue',
    '_type description': '{{type}} description',
    'Assigned to': 'Assigned to',
    'Select a user': 'Select a user',

    'Basic configuration': 'Basic configuration',
    'Advanced configuration': 'Advanced configuration',

    'Issue Tracker': 'Issue Tracker',
    'Issue Tracker describe': 'Attach issue tracker where the project is described',

    'file-manager': {
        'My computer': 'My computer',
        'Connected file share': 'Connected file share',
        'Remote sources': 'Remote sources',
        'Enter one URL per line': 'Enter one URL per line',
        'Cloud Storage': 'Cloud Storage',
    },
};
