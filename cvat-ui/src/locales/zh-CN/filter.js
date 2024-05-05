export default {
    project: {
        labels: {
            id: 'ID',
            name: '名称',
            assignee: '分配',
            owner: '主人',
            updated_date: '最近更新',
            status: '状态',
        },
        listValues: {
            status: {
                annotation: '标注',
                validation: '验证',
                completed: '完成',
            },
        },
    },
    'cloud-storage': {
        labels: {
            id: 'ID',
            provider_type: '提供商类型',
            credentials_type: '凭证类型',
            resource: '资源名称',
            name: '名称',
            description: '描述',
            owner: '主人',
            updated_date: '最近更新',
        },
        listValues: {
            provider_type: {
                AWS_S3_BUCKET: 'AWS S3',
                AZURE_CONTAINER: 'Azure',
                GOOGLE_CLOUD_STORAGE: 'Google cloud',
            },
            credentials_type: {
                KEY_SECRET_KEY_PAIR: '秘钥对',
                ACCOUNT_NAME_TOKEN_PAIR: '账户名和token',
                ANONYMOUS_ACCESS: '匿名权限',
                KEY_FILE_PATH: '秘钥文件',
            },
        },
    },
    model: {
        labels: {
            description: '描述',
            target_url: '目标URL',
            owner: '主人',
            updated_date: '最近更新',
            type: '类型',
            id: 'ID',
        },
        listValues: {
            type: {
                organization: '组织',
                project: '项目',
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
            state: '状态',
            stage: '步骤',
            dimension: '维度',
            assignee: '分配',
            updatedDate: '最近更新',
            type: '类型',
            id: 'ID',
        },
        listValues: {
            state: {
                new: '刚新建',
                'in progress': '进行中',
                rejected: '已拒绝',
                completed: '已完成',
            },
            stage: {
                annotation: '标注',
                validation: '验证',
                acceptance: '接受',
            },
            dimension: {
                '2d': '2D',
                '3d': '3D',
            },
            type: {
                annotation: '标注',
                ground_truth: '基准真相',
            },
        },
    },
    job: {
        labels: {
            state: '状态',
            stage: '阶段',
            dimension: '维度',
            assignee: '分配',
            updated_date: '上次更新',
            id: 'ID',
            task_id: '任务 ID',
            project_id: '项目 ID',
            task_name: '任务名',
            project_name: '项目名',
        },
        listValues: {
            state: {
                new: '刚新建',
                'in progress': '进行中',
                rejected: '已拒绝',
                completed: '已完成',
            },
            stage: {
                annotation: '标注',
                validation: '验证',
                acceptance: '接受',
            },
            dimension: {
                '2d': '2D',
                '3d': '3D',
            },
        },
    },
    webhook: {
        labels: {
            description: '描述',
            target_url: '目标地址',
            owner: '主人',
            updated_date: '最近更新',
            type: '类型',
            id: 'ID',
        },
        listValues: {
            type: {
                organization: '组织',
                project: '项目',
            },
        },
    },
    'project-task': {
        labels: {
            dimension: '维度',
            status: '状态',
            mode: '数据类型',
            subset: '子集',
            assignee: '分配',
            owner: '主人',
            updated_date: '最近更新',
            id: 'ID',
            name: '名称',
        },
        listValues: {
            dimension: {
                '2d': '2D',
                '3d': '3D',
            },
            status: {
                annotation: '标注',
                validation: '验证',
                acceptance: '接受',
            },
            mode: {
                interpolation: '视频差值',
                annotation: '图像标注',
            },
        },
    },
};
