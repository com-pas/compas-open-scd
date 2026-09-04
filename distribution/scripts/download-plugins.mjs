#!/usr/bin/env node
// SPDX-FileCopyrightText: 2026 BearingPoint GmbH
//
// SPDX-License-Identifier: Apache-2.0
//
// Downloads external plugins defined in a JSON configuration file.
// Each plugin entry may include a sha256 hash for build-time integrity validation.
// If a sha256 is provided and does not match the downloaded file, the script exits
// with a non-zero status, causing the Docker build to fail.
//
// Usage: download-plugins.js <config-file> <output-dir>
//   config-file  Path to the JSON configuration file (default: remote-plugins.json)
//   output-dir   Directory where downloaded plugins are placed (default: ./external-plugins)

import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
} from 'node:fs';
import path from 'node:path';

const [configFile = 'remote-plugins.json', outputDir = './external-plugins'] =
  process.argv.slice(2).filter((a) => a !== '-h' && a !== '--help');

if (process.argv.includes('-h') || process.argv.includes('--help')) {
  console.log('Usage: node download-plugins.js [config-file] [output-dir]');
  process.exit(0);
}

if (!existsSync(configFile)) {
  console.error(`Error: Configuration file '${configFile}' not found.`);
  process.exit(1);
}

const plugins = JSON.parse(readFileSync(configFile, 'utf8')).plugins;
if (!Array.isArray(plugins) || plugins.length === 0) {
  console.error('Error: No plugins defined.');
  process.exit(1);
}

const requireSha256 = process.env.REQUIRE_SHA256 === 'true';
const resolvedOut = path.resolve(outputDir);

console.log(
  `Downloading ${plugins.length} plugin(s) from '${configFile}' into '${outputDir}'...`,
);

for (const [i, plugin] of plugins.entries()) {
  const { name, url, dest, sha256 = '' } = plugin;
  const destPath = path.resolve(outputDir, dest);

  if (!destPath.startsWith(`${resolvedOut}${path.sep}`)) {
    console.error(`Error: Invalid dest path (path traversal): ${dest}`);
    process.exit(1);
  }

  const destDir = path.dirname(destPath);
  mkdirSync(destDir, { recursive: true });

  console.log(`\n[${i + 1}/${plugins.length}] ${name}`);
  console.log(`  URL : ${url}`);
  console.log(`  Dest: ${destPath}`);

  const js = await download(url);
  writeFileSync(destPath, js);

  const styleUrl = `${url.slice(0, url.lastIndexOf('/'))}/style.css`;
  try {
    writeFileSync(path.join(destDir, 'style.css'), await download(styleUrl));
    console.log(`  Style: Downloaded`);
  } catch {
    try { unlinkSync(path.join(destDir, 'style.css')); } catch {}
    console.log('  Style: Not found or unavailable (optional), skipping.');
  }

  if (sha256) {
    const actual = createHash('sha256').update(js).digest('hex');
    if (actual !== sha256) {
      console.error(`Error: SHA256 mismatch for plugin '${name}'.`);
      console.error(`  Expected : ${sha256}`);
      console.error(`  Actual   : ${actual}`);
      process.exit(1);
    }
    console.log('  SHA256 OK');
  } else {
    console.warn(`  WARNING: No SHA256 provided for plugin '${name}'.`);
    if (requireSha256) {
      console.error(`Error: REQUIRE_SHA256=true but no sha256 for '${name}'.`);
      process.exit(1);
    }
  }
}

console.log(`\nAll ${plugins.length} plugin(s) downloaded successfully.`);

async function download(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}
