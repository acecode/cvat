import { program } from 'commander';
import path from 'path';
import { glob } from 'glob';
import { transformFile } from './transform';
import { baseLog } from '../log';
import fse from 'fs-extra'

// @ts-ignore
import { version } from '../../package.json';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = baseLog.extend('cli');

// @see https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B
program
    .option(
        '--src-glob <sourceGlob>',
        'source directory',
        'src/**/*.{ts,tsx}',
    )
    .option(
        '-o, --out <outDir>',
        'i18n resource file',
        'src.i18n',
    )
    .option(
        '--when-func <whenCallExpression...>',
        'condition call',
        ['Modal.confirm'],
    )
    .option(
        '--when-jsx-attr <whenJSXAttr...>',
        'condition call',
        ['Foo[title]'],
    )
    .option(
        '--when-jsx-innerText <whenJSXInnerText...>',
        'condition call',
        ['Text'],
    )
    .option(
        '--i18n-rc <keyFile>',
        'i18n resource file',
        './i18n/en.js',
    )
    .option(
        '--i18n-function <functionName>',
        'i18n function name',
        't',
    )
    .option(
        '--i18n-path <path>',
        'i18n import source path',
        '@root/i18n',
    )
    .description('add i18n translate call in source code')
    .version(version)
    .action(async (options) => {
        const CWD = process.cwd();
        const files = await glob (
            options.srcGlob,
            {
                cwd: CWD,
            },
        );
        log(options, options);
        log('find', files.length, 'files');
        await fse.ensureDir(options.out);
        for (const file of files) {
            const outFile = path.join(CWD, options.out, file);
            await transformFile(CWD, file, outFile, options);
        }
        const keyFile = path.join(CWD, options.out, options.i18nRc);
        log('saving keyFile', keyFile);
    });

program.parseAsync();
