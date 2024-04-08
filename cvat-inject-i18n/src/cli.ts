import { program } from 'commander';
// @ts-ignore
import { version } from '../package.json';

program
    .option(
        '-i-rc, -i18n-resource [keyFile]',
        'i18n resource file',
    )
    .description('add i18n translate call in source code')
    .version(version);

program.parse(process.argv);

console.log(program.opts());
