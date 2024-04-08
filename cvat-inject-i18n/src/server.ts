import { program } from 'commander';
// @ts-ignore
import { version } from '../package.json';

program
    .option(
        '-i-rc, -i18n-resource [keyFile]',
        'i18n resource file',
    )
    .description('start an i18n server for edit i18n resource')
    .version(version);
