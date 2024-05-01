export default {
    'sign-in': '登录',

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
};
