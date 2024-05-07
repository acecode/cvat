export default {
    'Clear filters': 'Clear filters',
    Filter: 'Filter',
    Apply: 'Apply',
    Reset: 'Reset',
    Recent: 'Recent',
    'Quick filters': 'Quick filters',
    project: {
        labels: {
            id: 'ID',
            name: 'Name',
            assignee: 'Assignee',
            owner: 'Owner',
            updated_date: 'Last updated',
            status: 'Status',
        },
        listValues: {
            status: {
                annotation: 'Annotation',
                validation: 'Validation',
                completed: 'Completed',
            },
        },
    },
    'cloud-storage': {
        labels: {
            id: 'ID',
            provider_type: 'Provider type',
            credentials_type: 'Credentials type',
            resource: 'Resource name',
            name: 'Name',
            description: 'Description',
            owner: 'Owner',
            updated_date: 'Last updated',
        },
        listValues: {
            provider_type: {
                AWS_S3_BUCKET: 'AWS S3',
                AZURE_CONTAINER: 'Azure',
                GOOGLE_CLOUD_STORAGE: 'Google cloud',
            },
            credentials_type: {
                KEY_SECRET_KEY_PAIR: 'Key & secret key',
                ACCOUNT_NAME_TOKEN_PAIR: 'Account name & token',
                ANONYMOUS_ACCESS: 'Anonymous access',
                KEY_FILE_PATH: 'Key file',
            },
        },
    },
    model: {
        labels: {
            description: 'Description',
            target_url: 'Target URL',
            owner: 'Owner',
            updated_date: 'Last updated',
            type: 'Type',
            id: 'ID',
        },
        listValues: {
            type: {
                organization: 'Organization',
                project: 'Project',
            },
        },
    },
    task: {
        labels: {
            dimension: 'Dimension',
            status: 'Status',
            mode: 'Data',
            subset: 'Subset',
            assignee: 'Assignee',
            owner: 'Owner',
            updated_date: 'Last updated',
            id: 'ID',
            project_id: 'Project ID',
            name: 'Name',
            project_name: 'Project name',
        },
        listValues: {
            dimension: {
                '2d': '2D',
                '3d': '3D',
            },
            status: {
                annotation: 'Annotation',
                validation: 'Validation',
                completed: 'Completed',
            },
            mode: {
                interpolation: 'Video',
                annotation: 'Images',
            },
        },
    },
    'task-job': {
        labels: {
            state: 'State',
            stage: 'Stage',
            dimension: 'Dimension',
            assignee: 'Assignee',
            updatedDate: 'Last updated',
            type: 'Type',
            id: 'ID',
        },
        listValues: {
            state: {
                new: 'new',
                'in progress': 'in progress',
                rejected: 'rejected',
                completed: 'completed',
            },
            stage: {
                annotation: 'annotation',
                validation: 'validation',
                acceptance: 'acceptance',
            },
            dimension: {
                '2d': '2D',
                '3d': '3D',
            },
            type: {
                annotation: 'Annotation',
                ground_truth: 'Ground truth',
            },
        },
    },
    job: {
        labels: {
            state: 'State',
            stage: 'Stage',
            dimension: 'Dimension',
            assignee: 'Assignee',
            updated_date: 'Last updated',
            id: 'ID',
            task_id: 'Task ID',
            project_id: 'Project ID',
            task_name: 'Task name',
            project_name: 'Project name',
        },
        listValues: {
            state: {
                new: 'new',
                'in progress': 'in progress',
                rejected: 'rejected',
                completed: 'completed',
            },
            stage: {
                annotation: 'annotation',
                validation: 'validation',
                acceptance: 'acceptance',
            },
            dimension: {
                '2d': '2D',
                '3d': '3D',
            },
        },
    },
    webhook: {
        labels: {
            description: 'Description',
            target_url: 'Target URL',
            owner: 'Owner',
            updated_date: 'Last updated',
            type: 'Type',
            id: 'ID',
        },
        listValues: {
            type: {
                organization: 'Organization',
                project: 'Project',
            },
        },
    },
    'project-task': {
        labels: {
            dimension: 'Dimension',
            status: 'Status',
            mode: 'Data',
            subset: 'Subset',
            assignee: 'Assignee',
            owner: 'Owner',
            updated_date: 'Last updated',
            id: 'ID',
            name: 'Name',
        },
        listValues: {
            dimension: {
                '2d': '2D',
                '3d': '3D',
            },
            status: {
                annotation: 'Annotation',
                validation: 'Validation',
                completed: 'Completed',
            },
            mode: {
                interpolation: 'Video',
                annotation: 'Images',
            },
        },
    },
};
