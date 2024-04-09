import fse from 'fs-extra'
import { transform } from '@babel/core'
import * as fs from 'node:fs';
import { baseLog } from '../log';
import path from 'path';
import { plugin } from './plugin';

const log = baseLog.extend('transform');
const logSuc = log.extend('success');

export async function transformFile(cwd: string, file: string, outPath: string, options: object) {
    const srcPath = path.join(cwd, file);
    const content = await fse.readFile(srcPath, { encoding: 'utf8' });
    log('reading', srcPath);
    const result = transform(
        content, {
            filename: file,
            plugins: [
                ['@babel/plugin-syntax-typescript', { isTSX: true }],
                '@babel/plugin-syntax-jsx',
                plugin(options),
            ]
        })
    if (result && result.code) {
        logSuc('writing', outPath);
        await fse.ensureFile(outPath);
        await fse.writeFile(outPath, result.code, {encoding: 'utf8'});
    }
}
