export default {
    'modal-cannot-connect-server': {
        title: 'Cannot connect to the server',
        content0: 'Make sure the CVAT backend and all necessary services',
        content1: '(Database, Redis and Open Policy Agent) are running and available.',
        content2: 'If you upgraded from version 2.2.0 or earlier, manual actions may be needed,',
        content3: 'see the',
        'upgrade-guide': 'Upgrade Guide',
    },
    'modal-unsupported-platform-warning': {
        title: '不支持平台',
        content0: 'The browser you are using is {{name}} v{{version}} based on {{engine}}.',
        content1: 'CVAT was tested in the latest versions of Chrome and Firefox.',
        content2: 'We recommend to use Chrome (or another Chromium based browser)',
        os: 'The operating system is {{os}}',
    },
    'modal-unsupported-features-warning': {
        title: 'Unsupported features detected',
        content0: '{{name}} v{{version}} does not support API, which is used by CVAT. ',
        content1: 'It is strongly recommended to update your browser.',
    },
    connecting: 'Connecting...',
    header: {
        'player-settings': {
            'number-of-skip-frames': 'Number of frames skipped when selecting',
            or: '或',
            speed: 'Player speed',

            Slowest: 'Slowest',
            Slower: 'Slower',
            Slow: 'Slow',
            Usual: 'Usual',
            Fast: 'Fast',
            Fastest: 'Fastest',

            'select-canvas-bg-color': 'Select canvas background color',

            'reset-zoom': 'Reset zoom',
            'reset-zoom-text': 'Fit image after changing frame',

            'rotate-all-images': 'Rotate all images',
            'rotate-all-images-simultaneously': 'Rotate all images simultaneously',

            'smooth-image': 'Smooth image',
            'smooth-images-text': 'Smooth image when zoom-in it',

            'show-deleted-frames': 'Show deleted frames',
            'show-deleted-frames-text': 'You will be able to navigate and restore deleted frames',

        },

        'error-search-organizations': 'Could not receive a list of organizations',
        about: {
            changelog: 'What\'s new?',
            license: 'MIT License',
            discord: 'Find us on Discord',
            version: {
                server: 'Server version:',
                core: 'Core version:',
                ui: 'UI Version:',
                canvas: 'Canvas canvas:',
            },
        },
        menu: {
            admin: 'Admin Page',
            settings: 'Settings',
            invitations: 'Invitations',
            'switch-organization': 'Switch organization',
            'switch-organization-title': 'Switch an organization',
            about: 'About',
            'change-password': 'Change password',
            logout: 'Logout',
            projects: 'Projects',
            tasks: 'Tasks',
            jobs: 'Jobs',
            'cloud-storages': 'Cloud Storages',
            models: 'Models',
            analytics: 'Analytics',
        },
        tooltip: {
            github: 'Click to open repository',
            guide: 'Click to open guide',
        },
    },
};
