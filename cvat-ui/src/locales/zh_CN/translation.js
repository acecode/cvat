export default {
    'modal-cannot-connect-server': {
        title: '服务器未连接',
        content0: '请确认 CVAT 后端及所有必要服务',
        content1: '(数据库, Redis 和 开放策略代理) 运行良好。',
        content2: '从 2.2.0 或之前版本升级, 可能需要手动配置，',
        content3: '请参考',
        'upgrade-guide': '升级指南',
    },
    'modal-unsupported-platform-warning': {
        title: '未支持平台',
        content0: '您使用的基于 {{engine}} 核心浏览器 {{name}} v{{version}}',
        content1: 'CVAT 适配最新版 Chrome 和 Firefox。',
        content2: '请使用 Chrome (等基于 Chromium 的浏览器)',
        os: '当前操作系统 {{os}}',
    },
    'modal-unsupported-features-warning': {
        title: '发现未支持特性',
        content0: '{{name}} v{{version}} 未支持 CVAT 需要的 API',
        content1: '强烈建议你升级浏览器',
    },
    connecting: '连接中...',
    header: {
        'player-settings': {
            'number-of-skip-frames': '选中时跳过帧数',
            or: '或',
            speed: '播放速度',

            Slowest: '最慢',
            Slower: '更慢',
            Slow: '慢速',
            Usual: '正常',
            Fast: '快速',
            Fastest: '最快',

            'select-canvas-bg-color': '选择画布背景色',

            'reset-zoom': '重置缩放',
            'reset-zoom-text': '切换帧后适应画面',

            'rotate-all-images': '旋转全部图片',
            'rotate-all-images-text': '同时旋转全部图片',

            'smooth-image': '平滑图片',
            'smooth-images-text': '缩放时平滑图片',

            'show-deleted-frames': '显示删除帧',
            'show-deleted-frames-text': '你可以查看恢复删除帧',
        },
        'error-search-organizations': '无法获取组织列表',
        about: {
            changelog: '更新日志',
            license: 'MIT协议',
            discord: '我们的Discord',
            version: {
                server: '服务器版本:',
                core: '核心版本:',
                ui: '界面版本:',
                canvas: '画布版本:',
            },
        },
        menu: {
            admin: '管理员',
            settings: '设置',
            invitations: '邀请表',
            'switch-organization': '切换组织',
            'switch-organization-title': '切换组织',
            about: '关于',
            'change-password': '修改密码',
            logout: '登出',
            projects: '项目',
            tasks: '任务',
            jobs: '作业',
            'cloud-storages': '云存储',
            models: '模型',
            analytics: '分析',
        },
        tooltip: {
            github: '点击查看代码仓库',
            guide: '点击打开指南',
        },
    },
};
