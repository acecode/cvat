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
        Cancel: '取消',
    },
    Upcase: '{{s, upcase}}',
    // i18n
    'switch-locale': '切换语言',
    // rules
    'please-specify-a': '请提供 {{type}}',
    'please-specify-an': '请提供 {{type}}',
    'not-valid': '{{item}}不是合法的{{type}}',
    // cvat-app.tsx
    'cannot-connect-server-title': '无法连接服务器',
    'cannot-connect-server-content': '请确认 CVAT 后端和所有必要服务<br/>' +
        '(数据库, Redis 和 开放策略代理) 正常运行<br/>' +
        '如果你从 2.2.0 前的版本升级, 可能需要参考 <1>升级指南</1>手动处理',
    // cvat-app.tsx
    'unsupported-platform-title': '检测到不支持的平台',
    'unsupported-platform-content': [
        '你使用的浏览器是 {{name}} {{version}} based on {{engine}}<br/>' +
        'CVAT 在最新版本 Chrome 和 Firefox 上测试<br/>' +
        '推荐使用 Chrome (或其他基于 Chromium 浏览器)',
        '操作系统 {{os}}',
    ],
    // cvat-app.tsx
    'unsupported-features-title': '检测到不支持的特性',
    'unsupported-features-content': '{{name}} v{{version}} 不支持 CVAT 需要的 API<br/>' +
        '强烈建议升级浏览器',
    // cvat-app.tsx
    'open-browser-console': '打开浏览器控制台查看详情',
    // 保持相同结构 utils/validation-patterns.ts
    'validation-patterns': {
        validatePasswordLength: '密码至少需要 8 个字符',
        passwordContainsNumericCharacters: '密码必须包含至少 1 个数字',
        passwordContainsUpperCaseCharacter: '密码必须包含至少 1 个大写字母',
        passwordContainsLowerCaseCharacter: '密码必须包含至少 1 个小写字母',
        validateUsernameLength: '用户名至少包含 5 个字符',
        validateUsernameCharacters: '只可以使用 (a-z), (A-Z), (0-9), -, _, 这些字符',
        validateName: '不合法的名字',
        validateAttributeName: '不合法的名字',
        validateLabelName: '不合法的名字',
        validateAttributeValue: '不合法的属性名',
        validateURL: 'URL 不合法',
        validateOrganizationSlug: '只允许拉丁字母和数字',
        validatePhoneNumber: '输入的手机号不正确',
    },
};
