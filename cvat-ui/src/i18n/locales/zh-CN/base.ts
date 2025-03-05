/**
 * base translate resources
 * common or deep basic resource
 */
export default {
    Connecting: '连接中...',
    Password: '密码',
    button: {
        Next: '继续',
        OK: '好的',
    },
    'cannot-connect-server-title': '无法连接服务器',
    'cannot-connect-server-content': '请确认 CVAT 后端和所有必要服务<br/>' +
        '(数据库, Redis 和 开放策略代理) 正常运行<br/>' +
        '如果你从 2.2.0 前的版本升级, 可能需要参考 <1>升级指南</1>手动处理',
    'unsupported-platform-title': '检测到不支持的平台',
    'unsupported-platform-content': [
        '你使用的浏览器是 {{name}} {{version}} based on {{engine}}<br/>' +
        'CVAT 在最新版本 Chrome 和 Firefox 上测试<br/>' +
        '推荐使用 Chrome (或其他基于 Chromium 浏览器)',
        '操作系统 {{os}}',
    ],
    'unsupported-features-title': '检测到不支持的特性',
    'unsupported-features-content': '{{name}} v{{version}} 不支持 CVAT 需要的 API<br/>' +
        '强烈建议升级浏览器',
    'open-browser-console': '打开浏览器控制台查看详情',
};
