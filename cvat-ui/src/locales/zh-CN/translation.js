export default {
    'Open Data Annotation Platform': '开放数据<br/>标记平台',
    'sign-in': '登录',
    '_type has been created': '创建{{type}}成功',
    'Select _type': '选择{{type}}',
    Saving: '保存',
    Save: '保存',
    Submit: '提交',
    'Submit & Open': '提交并打开',
    'Submit & Continue': '提交并继续',
    Search: '搜索',
    Edit: '编辑',
    created: '已创建',

    'created by': '已创建',
    'created by _ownerName': '由 {{ownerName}} 创建',

    'Sort by': '排序',
    'Last updated': '最近更新 {{updated}}',

    app: {
        'modal-cannot-connect-server': {
            title: '无法连接到服务器',
            content: `确定 CVAT 后台服务 和所有必要服务<br />
        (数据库, Redis and 开放策略代理) 运行正常。<br />
        从 2.2.0 或之前版本升级, 可能需要手动配置，<br />
        查看 `,
        },
        'modal-unsupported-platform-warning': {
            title: '未支持平台',
            content: `
            您使用的基于 {{engine}} 核心浏览器 {{name}} v{{version}}<br/>
            CVAT 适配最新版 Chrome 和 Firefox。<br/>
            请使用 Chrome (等基于 Chromium 的浏览器)`,
            secondary: '操作系统 {{os}}',
        },
        'modal-unsupported-features-warning': {
            title: '发现未支持特性',
            content: '{{name}} v{{version}} 未支持 CVAT 需要的 API<br/>' +
                '强烈建议你升级浏览器',
        },
        'Upgrade Guide': '升级指导',
        'Cannot connect to the server.': '无法连接服务器',
    },

    type: {
        Name: '名称',
        Password: '密码',
        Email: '邮箱',
        'First name': '名',
        'Last name': '姓',
        Username: '用户名',

        // header
        Projects: '项目',
        Project: '项目',
        Task: '任务',
        Tasks: '任务',
        Job: '作业',
        Jobs: '作业',
        Model: '模型',
        Models: '模型',
        'Cloud Storage': '云存储',
        'Cloud Storages': '云存储',
        Analytic: '分析',
        Analytics: '分析',
        Subset: '子集',
        Labels: '标签',
        files: '文件',
    },

    // cvat-ui/src/utils/validation-patterns.ts
    'validation-patterns': {
        // DON'T CHANGE THESE KEY
        // keep these keys same with
        // src/utils/validation-patterns.ts validationPatterns
        validatePasswordLength: '密码至少八位',
        passwordContainsNumericCharacters: '密码至少有一位数字',
        passwordContainsUpperCaseCharacter: '密码至少有一位大写字母A-Z',
        passwordContainsLowerCaseCharacter: '密码至少有一位小写字母a-z',
        validateUsernameLength: '用户名至少5位',
        validateUsernameCharacters: '只有这些(a-z), (A-Z), (0-9), -, _, . 字符是可用的',
        validateName: '不合适的名字',
        validateAttributeName: '不合适的名字',
        validateLabelName: '不合适的名字',
        validateAttributeValue: '不合适的属性值',
        validateURL: 'URL不合法',
        validateOrganizationSlug: '只能使用拉丁字母和数字',
        validatePhoneNumber: '输入的手机号不合法',
    },

    // components/switch-locale-button/switch-locale-button.tsx
    'modal-switch-locale-button': {
        title: '切换语言',
    },
    StorageFields: {
        Local: '本地',
        'Cloud storage': '云存储',
    },
    LabelEditor: {
        Raw: '原文',
        Constructor: '构造器',

        'Add label': '添加标签',
        'Setup skeleton': '设置脚手架',
        'From model': '从模型文件',

        'Update attributes': '更新属性',
        'Delete label': '删除标签',
    },
    QbUtils: {
        settings: {
            valueLabel: '值',
            valuePlaceholder: '值',
            fieldLabel: '字段',
            operatorLabel: '运算',
            funcLabel: '函数',
            fieldPlaceholder: '选字段',
            funcPlaceholder: '选函数',
            operatorPlaceholder: '选运算',
            lockLabel: '未锁定',
            lockedLabel: '锁定',
            deleteLabel: '删除',
            addGroupLabel: '添加组',
            addCaseLabel: '加条件',
            addDefaultCaseLabel: '加默认条件',
            defaultCaseLabel: '默认:',
            addRuleLabel: '加条规则',
            addSubRuleLabel: '加子规则',
            delGroupLabel: '删除组',
            notLabel: '非',
            fieldSourcesPopupTitle: '选来源',
            valueSourcesPopupTitle: '选值来源',
        },
        conjunctions: {
            AND: '且',
            OR: '或',
        },
        operators: {
            like: '包含',
            not_like: '不包含',
            starts_with: '开头为',
            ends_with: '结尾为',
            between: '范围',
        },
    },
    deleteModal: {
        title: '{{item}} 将被删除',
        content: '所有相关数据（图片和标注）都会丢失，继续？',
    },
    'Open the issue': '打开问题详情',
    '_type description': '{{type}}描述',
    'Assigned to': '分配给',
    'Select a user': '选择一个用户',

    'Basic configuration': '基本配置',
    'Advanced configuration': '高级配置',

    'Issue Tracker': '问题追踪',
    'Issue Tracker describe': '添加描述项目问题的追踪服务',

    'file-manager': {
        'My computer': '我的电脑',
        'Connected file share': '连接文件存储',
        'Remote sources': '远程来源',
        'Enter one URL per line': '每行输入一个URL',
        'Cloud Storage': '云存储',
    },
};
