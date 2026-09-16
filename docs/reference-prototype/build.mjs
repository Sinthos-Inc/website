import { mkdir, cp, copyFile, readFile } from 'node:fs/promises';
import path from 'node:path';
const root=import.meta.dirname;
await mkdir(path.join(root,'dist'),{recursive:true});
for (const file of ['index.html','styles.css','sections.css','app.js']) await copyFile(path.join(root,file),path.join(root,'dist',file));
await cp(path.join(root,'assets'),path.join(root,'dist/assets'),{recursive:true});
const html=await readFile(path.join(root,'dist/index.html'),'utf8');
for(const asset of ['styles.css','sections.css','app.js','assets/favicon.svg']){if(!html.includes(asset)) throw new Error(`Missing ${asset}`)}
console.log('Built Sinthos static site in dist/');
