import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
const files=(await readdir('.')).filter(f=>f.endsWith('.html'));
const canonicals=new Set();const descriptions=new Set();
for(const file of files){const html=await readFile(file,'utf8');
 assert.match(html,/id="webora-root"/);assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file);
 const canon=[...html.matchAll(/rel="canonical" href="([^"]+)"/g)];assert.equal(canon.length,1,file);canonicals.add(canon[0][1]);
 descriptions.add(html.match(/name="description" content="([^"]+)"/)[1]);
 const json=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];assert.equal(json.length,1,file);assert.ok(JSON.parse(json[0][1])['@graph'].length>=4);
 assert.match(html,/<main id="main">/);assert.match(html,/src="\.\/main.js"/);
 for(const [,link] of html.matchAll(/(?:href|src)="(\.\/[^"?#]+)(?:[?#][^"]*)?"/g))assert.ok((await readFile(link)).length,`${file}: ${link}`);
}
assert.equal(files.length,24);assert.equal(canonicals.size,24);assert.equal(descriptions.size,24);
const sitemap=await readFile('sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,24);for(const url of canonicals)assert.ok(sitemap.includes(`<loc>${url}</loc>`));
console.log('PASS: 24 prerendered React routes, unique canonical URLs and descriptions, valid structured data, sitemap and local links.');
