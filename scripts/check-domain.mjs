import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.argv[2] || 'dist';
const forbiddenHost = /https?:\/\/(?:www\.)?techverseai\.tech(?:[/:#?]|$)/i;
const failures = [];

async function walk(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) await walk(path);
    else if (/\.(html|xml|txt|js|css|json|svg)$/i.test(item.name)) {
      const content = await readFile(path, 'utf8');
      for (const [index, line] of content.split(/\r?\n/).entries()) {
        if (forbiddenHost.test(line)) failures.push(`${path}:${index + 1}`);
      }
    }
  }
}

if (process.argv.includes('--simulate-old')) {
  if (!forbiddenHost.test('<link rel="canonical" href="https://www.techverseai.tech/">')) {
    console.error('FAIL: guard did not detect the old canonical.');
    process.exit(1);
  }
  console.log('PASS: simulated old .tech canonical was detected and would fail the build.');
}

await walk(root);
if (failures.length) {
  console.error(`FAIL: non-canonical .tech URL host found:\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`PASS: no absolute .tech URL hosts in ${root}. Email addresses are not treated as URL hosts.`);
