import { stripTypeScriptTypes } from 'node:module';
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await writeFile('main.js', stripTypeScriptTypes(await readFile('main.ts', 'utf8')));
for (const file of ['index.html','styles.css','main.js','favicon.svg']) await copyFile(file, `dist/${file}`);
console.log('Built static website in dist/');
