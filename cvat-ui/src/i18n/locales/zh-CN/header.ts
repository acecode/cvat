/**
 * @file src/header/
 * @TODO move account dropdown from base
 */
export default {
    settings: {
        title: '设置',
        Player: {
            label: '播放器',
            step: '播放步长',
            'step-tips': '当使用<1/>或<3/>时跳过的关键帧数',
            speed: '播放速度',
            speeds: {
                Fastest: '最快',
                Fast: '更快',
                Usual: '正常',
                Slow: '慢',
                Slower: '更慢',
                Slowest: '最慢',
            },
            'Select canvas background color': '选择画布背景色',
            'Reset zoom': '重置缩放',
            'Fit image after changing frame': '切换帧后适应图片',
            'Rotate all images': '旋转所有图片',
            'Rotate all images simultaneously': '同时旋转所有图片',
            'Smooth image': '平滑图片',
            'Smooth image when zoom-in it': '放大时平滑图像',
            'Show deleted frames': '显示删除的帧',
            'You will be able to navigate and restore deleted frames': '你可以浏览恢复删除的帧',
        },
        Workspace: {
            label: '工作区',
            'Enable auto save': '开启自动保存',
            'auto-save-tips': [
                '自动保存每 ',
                ' 分钟',
            ],
            'show-interpolated': '显示所有插补轨道',
            'show-interpolated-tips': '在边栏显示隐藏的插补对象',

            'show-text-always': '总显示对象详情',
            'show-text-always-tips': '不止在画布中显示激活对象的文本',

            'text-settings-content': '文本内容',
            'text-settings-contents': {
                ID: 'ID',
                Label: '标记',
                Attributes: '属性',
                Sources: '源代码',
                Descriptions: '描述',
                Dimensions: '维度',
            },
            'text-settings-text-position': '文本位置',
            'text-settings-text-positions': {
                Auto: '自动',
                Center: '居中',
            },
            'text-settings-font-size': '文本字号',

            'auto-borders': '自动边缘',
            'auto-borders-tips': '绘制或编辑多边形和折线时，启用自动边缘',

            'intelligent-polygon-cropping': '智能多边形裁剪',
            'intelligent-polygon-cropping-tips': '尝试在编辑时自动裁剪多边形',

            'show-frame-tags': '在框架上显示标签',

            'aam-zoom-margin': '属性注释模式 (AAM) 缩放余量',

            'control-points-size': '控制点大小',

            'approx-poly-threshold': '多边形近似中的默认点数',
            'approx-poly-threshold-tips': '适用于无服务器工作和 OpenCV 裁剪',
        },
        Shortcuts: {
            label: '快捷键',
            'restore-modal-title': '确认恢复默认设置',
            'search-placeholder': '在这里查快捷键...',
            warning: '快捷键可由任何修饰符(alt, ctrl, or shift)组合, 最后加上非修饰符。某些组合键可能会被浏览器保留，不能在 CVAT 覆盖',
        },
    },
    account: {
    },
};
