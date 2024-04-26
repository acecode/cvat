export default {
    item: {
        'last-updated': '最近更新于 {{updated}}',
        created_by: '由 {{ownerName}} 创建',
        created: '已创建',
    },
    'empty-list': {
        'no-result': '没有符合搜索条件的结果...',
        'no-projects': '还未创建项目...',
        'to-get-started': '从标注项目开始',
        create: '新建项目',
    },
    'modal-confirm-remove-project': {
        title: '项目 {{id}} 将被删除',
        content: '所有相关数据(图片, 标注) 都会丢失，继续么？',
        okText: '删除',
    },
    'actions-menu': {
        'export-dataset': '导出数据集',
        'import-dataset': '导入数据集',
        'backup-project': '备份项目',
        'view-analytics': '查看分析',
        'setup-webhooks': '配置 WebHooks',
        delete: '删除',
    },
    'filter-config': {
        Annotation: '标注',
        Validation: '验证',
        Completed: '完成',
        'Assigned to me': '分配给我的',
        'Owned by me': '我掌管的',
        'Not completed': '未完成',
    },
    'top-bar': {
        search: '搜索...',
        'create-task': '创建任务',
        'create-tasks': '创建多个任务',
        'create-project': '创建新项目',
        'create-from-backup': '由备份创建',
    },
    // src/components/project-page/details.tsx
    details: {
        'project-created': '项目 #{{id}} 已创建',
        'by-owner': '由 {{username}} 管理',
        time: '于 {{time}}',
    },
    // src/components/project-page/project-page.tsx
    project: {
        'error-msg-not-receive': '无法从服务器获取项目信息',
        'error-msg-desc-not-valid-id': '获取项目 id "{{id}}" 不合法',
        'not-found': {
            title: '获取项目信息中出现问题',
            subTitle: '请确认你要获取的信息存在并有权限访问',
        },
        'no-tasks': '未发现任务',
        'error-msg-update': '无法更新项目',
        'top-bar': {
            'back-to-projects': '返回项目列表',
            Actions: '操作',
        },
    },
};
