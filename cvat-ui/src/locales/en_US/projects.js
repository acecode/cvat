export default {
    item: {
        'last-updated': 'Last updated {{updated}}',
        created_by: 'Created by {{ownerName}}',
        created: 'Created',
    },
    'empty-list': {
        'no-result': 'No results matched your search...',
        'no-projects': 'No projects created yet ...',
        'to-get-started': 'To get started with your annotation project',
        create: 'create a new one',
    },
    'modal-confirm-remove-project': {
        title: 'The project {{id}} will be deleted',
        content: 'All related data (images, annotations) will be lost. Continue?',
        okText: 'Delete',
    },
    'actions-menu': {
        'export-dataset': 'Export dataset',
        'import-dataset': 'Import dataset',
        'backup-project': 'Backup Project',
        'view-analytics': 'View analytics',
        'setup-webhooks': 'Setup Webhooks',
        delete: 'Delete',
    },
    'filter-config': {
        Annotation: 'Annotation',
        Validation: 'Validation',
        Completed: 'Completed',
        'Assigned to me': 'Assigned to me',
        'Owned by me': 'Owned by me',
        'Not completed': 'Not completed',
    },
    'top-bar': {
        search: 'Search ...',
        'create-task': 'Create a new task',
        'create-tasks': 'Create multi tasks',
        'create-project': 'Create a new project',
        'create-from-backup': 'Create from backup',
    },
    // src/components/project-page/details.tsx
    details: {
        'project-created': 'Project #{{id}} created',
        'by-owner': ' by {{username}}',
        time: ' on {{time}}',
    },
    // src/components/project-page/project-page.tsx
    project: {
        'error-msg-not-receive': 'Could not receive the requested project from the server',
        'error-msg-desc-not-valid-id': 'Requested project id "{{id}}" is not valid',
        'not-found': {
            title: 'There was something wrong during getting the project',
            subTitle: 'Please, be sure, that information you tried to get exist and you are eligible to access it',
        },
        'no-tasks': 'No tasks found',
        'error-msg-update': 'Could not update the project',
        'top-bar': {
            'back-to-projects': 'Back to projects',
            Actions: 'Actions',
        },
    },
};
