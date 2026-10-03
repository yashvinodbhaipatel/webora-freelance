import { stripTypeScriptTypes } from 'node:module';
import { readFile, writeFile, mkdir, copyFile, readdir } from 'node:fs/promises';
await import('./pages.mjs');
await mkdir('dist', { recursive: true });
await writeFile('main.js', stripTypeScriptTypes(await readFile('main.ts', 'utf8')));
for (const file of [...(await readdir('.')).filter(file=>file.endsWith('.html')),'styles.css','main.js','favicon.svg']) await copyFile(file, `dist/${file}`);
console.log('Built static website in dist/');
