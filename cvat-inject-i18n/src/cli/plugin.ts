import { types as t } from '@babel/core';

const PLUGIN_NAME = 'cvat-inject-i18n';
export function plugin(options: object) {
    return {
        name: PLUGIN_NAME,
        visitor: {

        }
    }
}
