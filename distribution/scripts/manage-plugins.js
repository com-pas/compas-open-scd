#!/usr/bin/env node
// SPDX-FileCopyrightText: 2026 BearingPoint GmbH
//
// SPDX-License-Identifier: Apache-2.0
//
// CLI helper to manage the external plugin registry:
//   * add    - append a new plugin to remote-plugins.json. The plugin is
//              downloaded so sha256 can be generated automatically unless
//              --allow-insecure is used (then sha256 is omitted: snapshot).
//   * update - locate a plugin in remote-plugins.json by name and change its
//              url, dest, and/or authentication, always re-downloading and
//              recomputing sha256 unless --allow-insecure is used
//              (then sha256 is omitted).
//   * update-empty-hashes - download every plugin whose sha256 is "" and
//              fill in the digest. Plugins with no sha256 field are snapshots
//              and are left unchanged.
//   * delete - remove a plugin from remote-plugins.json by its name.
//   * list   - print all current plugin entries from remote-plugins.json.
//   * verify - download every listed plugin and compare content against the
//              stored sha256. Empty sha256 ("") fails unless --allow-insecure.
//              Omitted sha256 is a snapshot: download is checked, hash is skipped.
//   * download - write every plugin JS (and optional sibling style.css) into
//              distribution/external-plugins. Cached when dest exists and
//              pinned sha256 matches. REQUIRE_SHA256=true fails empty/omitted hashes.
//
// This is a plain Node >= 18 script using dotenv for local environment variables.
// Downloads rely on Node built-ins (fs, path, url, crypto) and the global fetch.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { URL, fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

// ---------------------------------------------------------------------------
// Paths (resolved relative to this script so it works from any CWD)
// ---------------------------------------------------------------------------
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..', '..');
const REMOTE_PLUGINS_PATH = path.join(
  REPO_ROOT,
  'distribution',
  'remote-plugins.json',
);
const EXTERNAL_PLUGINS_DIR = path.join(
  REPO_ROOT,
  'distribution',
  'external-plugins',
);
const ACCEPTED_COMMANDS = [
  'add',
  'update',
  'update-empty-hashes',
  'delete',
  'list',
  'verify',
  'download',
];

dotenv.config({
  path: path.join(REPO_ROOT, '.env'),
  quiet: true,
  override: false,
});

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const REGEX_GITHUB_CONTENTS_API =
  /^\/(?<enterprise>api\/v3\/)?repos\/(?<owner>[^/]+)\/(?<repo>[^/]+)\/contents\/(?<path>.+)$/;
const REGEX_AZURE_ITEMS_API =
  /^\/(?:[^/]+\/)+_apis\/git\/repositories\/(?<repo>[^/]+)\/items$/;
const REGEX_ENV_VARIABLES = /^[A-Za-z_][A-Za-z0-9_]*$/;
const ALLOWED_DOWNLOAD_TYPES = ['github', 'azure-devops'];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// Print CLI usage information to stderr.
function usage() {
  const msg = [
    'Usage: node manage-plugins.js <command> [flags]',
    '',
    'Commands:',
    '  add                    Add a plugin to remote-plugins.json',
    '  update                 Change url, dest, and/or authentication of an existing',
    '                         plugin (re-downloads sha256)',
    '  update-empty-hashes    Fill sha256 for entries that currently have ""',
    '  delete                 Remove a plugin from remote-plugins.json by plugin name',
    '  list                   List current entries from remote-plugins.json',
    '  verify                 Download every plugin and compare against stored sha256',
    '  download               Write plugins into distribution/external-plugins',
    '',
    'Flags for "add":',
    '  --name <name>              (required) Plugin display name',
    '  --url <url>                (required) Remote https URL to fetch from',
    '  --dest <path>              (optional) Relative destination (defaults to',
    '                                        repo/file for repository APIs,',
    '                                        otherwise the last URL path segment)',
    '  --download-type <type>     (optional) github or azure-devops',
    '                                        requires --token-env',
    '  --token-env <name>         (optional) Environment variable holding token',
    '                                        requires --download-type',
    '  --allow-insecure           (optional) Omit sha256 (snapshot; always downloaded)',
    '',
    'Flags for "update":',
    '  --name <name>              (required) Existing plugin name',
    '  --url <url>                (optional) New https URL',
    '  --dest <path>              (optional) New destination',
    '  --download-type <type>     (optional) Empty, github or azure-devops',
    '                                        requires --token-env',
    '  --token-env <name>         (optional) Empty or environment variable holding token',
    '                                        requires --download-type',
    '  --allow-insecure           (optional) Omit sha256 (snapshot; always downloaded)',
    '  (the name must match an existing plugin entry)',
    '',
    'Flags for "update-empty-hashes":',
    '  (no flags; only entries with sha256: "" are updated)',
    '',
    'Flags for "delete":',
    '  --name <name>              (required) Existing plugin name',
    '',
    'Flags for "list":',
    '  (no flags)',
    '',
    'Flags for "verify":',
    '  --name <name>              (optional) Verify only the given plugin',
    '  --allow-insecure           (optional) Skip sha256 comparison for all entries',
    '',
    'Flags for "download":',
    '  (no flags; uses remote-plugins.json and distribution/external-plugins)',
  ].join('\n');
  process.stderr.write(msg + '\n');
}

// Print an error message to stderr and exit with a non-zero status.
function fail(msg) {
  process.stderr.write(`Error: ${msg}\n`);
  process.exit(1);
}

// Return true if the value is a well-formed https URL. Plain http is
// rejected so plugin content is always fetched over an authenticated,
// tamper-resistant channel.
function isValidHttpsUrl(value) {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

// Validate and normalize a destination path. Rejects absolute paths, Windows
// drive letters, backslashes, and "." / ".." segments; returns null on rejection.
function normalizeDest(value) {
  if (typeof value !== 'string' || value.length === 0) return null;
  if (value.includes('\\')) return null;
  if (value.startsWith('/')) return null;
  if (/^[a-zA-Z]:/.test(value)) return null;
  const parts = value.split('/');
  for (const p of parts) {
    if (p === '' || p === '.' || p === '..') return null;
  }
  return parts.join('/');
}

// Derive a default destination path from a URL's pathname (everything after
// the domain, without the leading slash).
// GitHub and Azure DevOps API URLs use the repository name followed by the file path.
function destFromUrl(urlStr) {
  const url = new URL(urlStr);

  const github = REGEX_GITHUB_CONTENTS_API.exec(url.pathname);
  if (url.hostname === 'api.github.com' || github?.groups.enterprise) {
    return github ? `${github.groups.repo}/${github.groups.path}` : null;
  }

  const azure = REGEX_AZURE_ITEMS_API.exec(url.pathname);
  if (url.hostname === 'dev.azure.com' || azure) {
    const itemPath = url.searchParams.get('path')?.replace(/^\/+/, '');
    return azure && itemPath ? `${azure.groups.repo}/${itemPath}` : null;
  }

  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  return segments.join('/');
}

// Compute the sha256 hex digest of a buffer.
function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

// sha256 present and non-empty: pinned digest used as cache key.
function hasPinnedSha256(plugin) {
  return typeof plugin.sha256 === 'string' && plugin.sha256.length > 0;
}

// sha256: "" means "pin this, but the digest is not filled in yet".
function hasEmptySha256(plugin) {
  return plugin.sha256 === '';
}

// No sha256 field: SNAPSHOT URL, always downloaded, never hashed.
function isSnapshot(plugin) {
  return !Object.prototype.hasOwnProperty.call(plugin, 'sha256');
}

function formatSha256(plugin) {
  if (isSnapshot(plugin)) return '(omitted / snapshot)';
  if (hasEmptySha256(plugin)) return '(empty)';
  return plugin.sha256;
}

// downloadType present and non-empty: use authenticated download with tokenEnv.
function hasDownloadType(plugin) {
  return typeof plugin.downloadType === 'string' && plugin.downloadType.length > 0;
}

// tokenEnv present and non-empty: use authenticated download with downloadType.
function hasTokenEnv(plugin) {
  return typeof plugin.tokenEnv === 'string' && plugin.tokenEnv.length > 0;
}

// Validate authentication settings and collect errors:
// downloadType and tokenEnv are optional but must be set together.
function authErrors(downloadType, tokenEnv) {
  const hasType = downloadType !== undefined && downloadType !== '';
  const envSet = tokenEnv !== undefined && tokenEnv !== '';
  const errors = [];

  if (hasType !== envSet || (!hasType && downloadType !== tokenEnv)) {
    errors.push('downloadType and tokenEnv must both be set or both be empty/omitted.');
  }
  if (hasType && !ALLOWED_DOWNLOAD_TYPES.includes(downloadType)) {
    errors.push('downloadType must be empty, "github" or "azure-devops".');
  }
  if (
    envSet &&
    (typeof tokenEnv !== 'string' || !REGEX_ENV_VARIABLES.test(tokenEnv))
  ) {
    errors.push('tokenEnv must be empty or a valid environment variable name.');
  }

  return errors;
}

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

// Parse the CLI arguments into a single args object. Fails on unknown flags,
// unknown commands, or missing flag values.
function parseArgs(argv) {
  const args = {
    cmd: undefined,
    name: undefined,
    downloadType: undefined,
    tokenEnv: undefined,
    url: undefined,
    dest: undefined,
    allowInsecure: false,
  };

  if (argv.length < 1) {
    usage();
    fail('No command supplied.');
  }

  args.cmd = argv[0];

  if (!ACCEPTED_COMMANDS.includes(args.cmd)) {
    usage();
    fail(
      `Unknown command "${args.cmd}". Accepted commands: ${ACCEPTED_COMMANDS.join(', ')}.`,
    );
  }

  for (let i = 1; i < argv.length; i++) {
    const flag = argv[i];
    const next = argv[i + 1];
    const needValue = () => {
      if (typeof next !== 'string') {
        usage();
        fail(`Flag ${flag} requires a value.`);
      }
    };

    switch (flag) {
      case '--name':
        needValue();
        args.name = next;
        i++;
        break;
      case '--download-type':
        needValue();
        args.downloadType = next;
        i++;
        break;
      case '--token-env':
        needValue();
        args.tokenEnv = next;
        i++;
        break;
      case '--url':
        needValue();
        args.url = next;
        i++;
        break;
      case '--dest':
        needValue();
        args.dest = next;
        i++;
        break;
      case '--allow-insecure':
        args.allowInsecure = true;
        break;
      case '-h':
      case '--help':
        usage();
        process.exit(0);
        break;
      default:
        usage();
        fail(`Unknown argument "${flag}".`);
    }
  }

  return args;
}

// Enforce the flag requirements for the "add" command and normalize its
// values in place (e.g. defaulting dest, normalizing the path).
function validateAddArgs(args) {
  if (!args.name || !args.url) {
    usage();
    fail('"add" requires both --name and --url.');
  }
  if (!isValidHttpsUrl(args.url)) {
    fail(`Invalid URL: "${args.url}". Must be an https URL.`);
  }

  validateAuthArgs(args);

  if (args.dest !== undefined) {
    const normalized = normalizeDest(args.dest);
    if (normalized === null) {
      fail(
        `Invalid --dest "${args.dest}". Must be a relative path with no ` +
        'leading slash, backslashes, or ".."/"." segments.',
      );
    }
    args.dest = normalized;
  } else {
    const inferred = normalizeDest(destFromUrl(args.url));
    if (!inferred) {
      fail(`Cannot infer --dest from URL "${args.url}". Please specify --dest.`);
    }
    args.dest = inferred;
  }
}

// Enforce the flag requirements for the "update" command and normalize its
// values in place.
function validateUpdateArgs(args) {
  if (!args.name) {
    usage();
    fail('"update" requires --name.');
  }
  if (
    args.url === undefined &&
    args.dest === undefined &&
    args.downloadType === undefined &&
    args.tokenEnv === undefined
  ) {
    usage();
    fail('"update" requires at least one of --url, --dest, or both authentication flags.');
  }

  if (args.url !== undefined && !isValidHttpsUrl(args.url)) {
    fail(`Invalid URL: "${args.url}". Must be an https URL.`);
  }

  validateAuthArgs(args);

  if (args.dest !== undefined) {
    const normalized = normalizeDest(args.dest);
    if (normalized === null) {
      fail(
        `Invalid --dest "${args.dest}". Must be a relative path with no ` +
        'leading slash, backslashes, or ".."/"." segments.',
      );
    }
    args.dest = normalized;
  }
}

// Enforce the flag requirements for the "delete" command.
function validateDeleteArgs(args) {
  if (!args.name) {
    usage();
    fail('"delete" requires --name.');
  }
}

// Enforce the authentication flags requirements for the "add" and "update" commands.
function validateAuthArgs(args) {
  const errors = authErrors(args.downloadType, args.tokenEnv);
  if (errors.length > 0) {
    fail(
      `Invalid configuration for authentication flags --download-type and --token-env:\n${
        errors.map(error => `  - ${error}`).join('\n')
      }`
    );
  }
}

// ---------------------------------------------------------------------------
// File I/O helpers
// ---------------------------------------------------------------------------

// Read and parse remote-plugins.json. Also reports whether the source file
// ended with a trailing newline so writeRemotePlugins can preserve it.
function readRemotePlugins() {
  if (!fs.existsSync(REMOTE_PLUGINS_PATH)) {
    fail(`Configuration file not found: ${REMOTE_PLUGINS_PATH}`);
  }
  let raw;
  try {
    raw = fs.readFileSync(REMOTE_PLUGINS_PATH, 'utf8');
  } catch (e) {
    fail(`Cannot read ${REMOTE_PLUGINS_PATH}: ${e.message}`);
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    fail(`Cannot parse ${REMOTE_PLUGINS_PATH}: ${e.message}`);
  }
  if (!parsed || !Array.isArray(parsed.plugins)) {
    fail(`Invalid ${REMOTE_PLUGINS_PATH}: expected a "plugins" array.`);
  }
  return { data: parsed, rawEndsWithNewline: raw.endsWith('\n') };
}

// Check plugin names, HTTPS URLs, authentication settings, and destination
// paths. Report all configuration errors together before exiting.
function validatePlugins(plugins) {
  const errors = [];
  for (const [index, plugin] of plugins.entries()) {
    if (plugin === null) {
      errors.push(`Plugin #${index + 1}: expected a plugin object.`);
      continue;
    }

    const label = plugin.name
      ? `${plugin.name} (Plugin #${index + 1})`
      : `Plugin #${index + 1}`;
    if (!plugin.name) {
      errors.push(`${label}: name must not be empty.`);
    }
    if (!plugin.url || !isValidHttpsUrl(plugin.url)) {
      errors.push(`${label}: URL must be a valid https URL.`);
    }

    for (const error of authErrors(plugin.downloadType, plugin.tokenEnv)) {
      errors.push(`${label}: ${error}`);
    }

    if (!plugin.dest || normalizeDest(plugin.dest) === null) {
      errors.push(`${label}: dest must be a relative path with no leading ` +
        'slash, backslashes, or ".."/"." segments.');
    }
  }
  if (errors.length > 0) {
    fail(
      `Invalid plugins configuration:\n${errors
        .map(error => `  - ${error}`)
        .join('\n')}`
    );
  }
}

// Serialize the plugin registry back to disk with 2-space indentation.
function writeRemotePlugins(data, endsWithNewline) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(
    REMOTE_PLUGINS_PATH,
    endsWithNewline ? json + '\n' : json,
    'utf8',
  );
}

// Case-insensitive lookup of a plugin's index by name in the plugin array.
function findPluginIndex(plugins, name) {
  const lc = name.toLowerCase();
  return plugins.findIndex(
    p => typeof p.name === 'string' && p.name.toLowerCase() === lc,
  );
}

// Return the index of the first plugin whose url matches exactly.
function findPluginUrlIndex(plugins, url) {
  return plugins.findIndex(p => typeof p.url === 'string' && p.url === url);
}

// Return the index of the first plugin whose dest matches exactly.
function findPluginDestIndex(plugins, dest) {
  return plugins.findIndex(p => typeof p.dest === 'string' && p.dest === dest);
}

// ---------------------------------------------------------------------------
// HTTP download
// ---------------------------------------------------------------------------

// Allow credentials only for the provider's default HTTPS origin or an exact
// origin in the comma-separated environment allowlist.
function isTrustedOrigin(url, defaultOrigin, originsEnv) {
  const extraOrigins = (process.env[originsEnv] ?? '').split(',');
  return (
    url.protocol === 'https:' &&
    (url.origin === defaultOrigin ||
      extraOrigins.some(origin => origin.trim() === url.origin))
  );
}

// Download an HTTPS resource. Authenticated requests require a trusted origin
// and reject redirects so credentials stay on that origin. Unauthenticated
// requests follow redirects. Resolves with the response body as a Buffer;
// throws on rejected requests, non-2xx status, or network error.
async function download(urlStr, auth = {}) {
  let requestUrl = urlStr;
  const headers = { 'User-Agent': 'manage-plugins/1.0' };
  const authenticated = Boolean(hasDownloadType(auth) && hasTokenEnv(auth));
  if (authenticated) {
    const token = process.env[auth.tokenEnv];
    if (!token || !token.trim()) {
      throw new Error(
        `Missing token environment variable "${auth.tokenEnv}".`
      );
    }
    const url = new URL(urlStr);
    if (
      auth.downloadType === 'github' &&
      isTrustedOrigin(url, 'https://api.github.com', 'PLUGIN_GITHUB_ORIGINS')
    ) {
      headers.Authorization = `Bearer ${token}`;
      headers.Accept = 'application/vnd.github.raw+json';
      headers['X-GitHub-Api-Version'] =
        process.env.PLUGIN_GITHUB_API_VERSION || '2026-03-10';
    } else if (
      auth.downloadType === 'azure-devops' &&
      isTrustedOrigin(url, 'https://dev.azure.com', 'PLUGIN_AZURE_DEVOPS_ORIGINS')
    ) {
      headers.Authorization = `Basic ${Buffer.from(`:${token}`).toString('base64')}`;
      headers.Accept = 'application/octet-stream';
      url.searchParams.set('download', 'true');
      requestUrl = url.href;
    } else {
      throw new Error(
        `Untrusted origin "${url.origin}" for auth type "${auth.downloadType}".`,
      );
    }
  }
  const response = await fetch(requestUrl, {
    headers: headers,
    redirect: authenticated ? 'error' : 'follow',
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${urlStr}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

function resolvePluginDest(dest) {
  const destPath = path.resolve(EXTERNAL_PLUGINS_DIR, dest);
  const root = path.resolve(EXTERNAL_PLUGINS_DIR);
  if (
    destPath !== root &&
    !destPath.startsWith(`${root}${path.sep}`)
  ) {
    fail(`Invalid dest path (path traversal): ${dest}`);
  }
  return destPath;
}

// Write JS to dest under distribution/external-plugins and try sibling style.css.
async function writePluginToDisk(plugin, js) {
  const destPath = resolvePluginDest(plugin.dest);
  const destDir = path.dirname(destPath);
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destPath, js);

  const styleUrl = new URL(plugin.url);
  if (
    REGEX_AZURE_ITEMS_API.test(styleUrl.pathname) &&
    styleUrl.searchParams.has('path')
  ) {
    const sourcePath = styleUrl.searchParams.get('path');
    styleUrl.searchParams.set(
      'path',
      path.posix.join(path.posix.dirname(sourcePath), 'style.css'),
    );
  } else {
    styleUrl.pathname = path.posix.join(
      path.posix.dirname(styleUrl.pathname),
      'style.css',
    );
  }
  if (styleUrl) {
    try {
      fs.writeFileSync(
        path.join(destDir, 'style.css'),
        await download(styleUrl.href, {
          downloadType: plugin.downloadType,
          tokenEnv: plugin.tokenEnv,
        }),
      );
      process.stdout.write('  Style: Downloaded\n');
    } catch {
      try {
        fs.unlinkSync(path.join(destDir, 'style.css'));
      } catch {
        /* ignore */
      }
    }
  }
  return destPath;
}

async function downloadBuffer(plugin) {
  process.stdout.write(`Downloading "${plugin.name}" from ${plugin.url}...\n`);
  let buffer;
  try {
    buffer = await download(plugin.url, {
      downloadType: plugin.downloadType,
      tokenEnv: plugin.tokenEnv,
    });
  } catch (e) {
    fail(`Failed to download from ${plugin.url}: ${e.message}`);
  }
  if (!buffer || buffer.length === 0) {
    fail(`Downloaded content from ${plugin.url} is empty.`);
  }
  return buffer;
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

// Append a new plugin to remote-plugins.json. Refuses to overwrite an
// existing entry (case-insensitive name, url and dest match).
async function cmdAdd(args) {
  validateAddArgs(args);

  const { data, rawEndsWithNewline } = readRemotePlugins();
  if (findPluginIndex(data.plugins, args.name) !== -1) {
    fail(
      `A plugin named "${args.name}" (case-insensitive) already exists in ` +
      'remote-plugins.json. Refusing to overwrite.',
    );
  }
  if (findPluginUrlIndex(data.plugins, args.url) !== -1) {
    fail(
      `A plugin with url "${args.url}" already exists in remote-plugins.json. ` +
      'Refusing to overwrite.',
    );
  }
  if (findPluginDestIndex(data.plugins, args.dest) !== -1) {
    fail(
      `A plugin with dest "${args.dest}" already exists in remote-plugins.json. ` +
      'Refusing to overwrite.',
    );
  }

  const newEntry = {
    name: args.name,
    url: args.url,
    downloadType: args.downloadType || undefined,
    tokenEnv: args.tokenEnv || undefined,
    dest: args.dest,
  };

  const buffer = await downloadBuffer(newEntry);
  await writePluginToDisk(newEntry, buffer);

  if (!args.allowInsecure) {
    newEntry.sha256 = sha256(buffer);
  }

  data.plugins.push(newEntry);
  writeRemotePlugins(data, rawEndsWithNewline);

  process.stdout.write(
    `Added plugin "${args.name}"\n` +
    `           url: ${newEntry.url}\n` +
    `  downloadType: ${hasDownloadType(newEntry) ? newEntry.downloadType : '(none)'}\n` +
    `      tokenEnv: ${hasTokenEnv(newEntry) ? newEntry.tokenEnv : '(none)'}\n` +
    `          dest: ${newEntry.dest}\n` +
    `        sha256: ${formatSha256(newEntry)}\n`,
  );
}

// Change the url, dest, and/or authentication of an existing plugin. Always
// re-downloads the content and recomputes its sha256 so the stored hash can
// never drift from what the URL actually serves.
async function cmdUpdate(args) {
  validateUpdateArgs(args);

  const { data, rawEndsWithNewline } = readRemotePlugins();
  const idx = findPluginIndex(data.plugins, args.name);
  if (idx === -1) {
    fail(`No plugin named "${args.name}" found in remote-plugins.json.`);
  }
  const plugin = data.plugins[idx];
  const updatedPlugin = {
    name: plugin.name,
    url: args.url !== undefined ? args.url : plugin.url,
    downloadType: args.downloadType !== undefined ? args.downloadType : plugin.downloadType,
    tokenEnv: args.tokenEnv !== undefined ? args.tokenEnv : plugin.tokenEnv,
    dest: args.dest !== undefined ? args.dest : plugin.dest,
    sha256: plugin.sha256,
  };
  if (updatedPlugin.downloadType === '' && updatedPlugin.tokenEnv === '') {
    delete updatedPlugin.downloadType;
    delete updatedPlugin.tokenEnv;
  }

  if (
    updatedPlugin.url !== plugin.url &&
    findPluginUrlIndex(data.plugins, args.url) !== -1
  ) {
    fail(
      `A plugin with url "${args.url}" already exists in remote-plugins.json. ` +
      'Refusing to overwrite.',
    );
  }
  if (
    updatedPlugin.dest !== plugin.dest &&
    findPluginDestIndex(data.plugins, args.dest) !== -1
  ) {
    fail(
      `A plugin with dest "${args.dest}" already exists in remote-plugins.json. ` +
      'Refusing to overwrite.',
    );
  }

  validatePlugins([updatedPlugin]);
  const buffer = await downloadBuffer(updatedPlugin);
  await writePluginToDisk(updatedPlugin, buffer);

  if (args.allowInsecure) {
    delete updatedPlugin.sha256;
  } else {
    updatedPlugin.sha256 = sha256(buffer);
  }

  data.plugins[idx] = updatedPlugin;
  writeRemotePlugins(data, rawEndsWithNewline);

  process.stdout.write(
    `Updated plugin "${updatedPlugin.name}"\n` +
    `           url: ${updatedPlugin.url}\n` +
    `  downloadType: ${hasDownloadType(updatedPlugin) ? updatedPlugin.downloadType : '(none)'}\n` +
    `      tokenEnv: ${hasTokenEnv(updatedPlugin) ? updatedPlugin.tokenEnv : '(none)'}\n` +
    `          dest: ${updatedPlugin.dest}\n` +
    `        sha256: ${formatSha256(updatedPlugin)}\n`,
  );
}

// Download every plugin that still has sha256: "" and write the digest.
// Plugins without a sha256 field are snapshots and are not touched.
async function cmdUpdateEmptyHashes() {
  const { data, rawEndsWithNewline } = readRemotePlugins();
  validatePlugins(data.plugins);

  let updated = 0;
  let skipped = 0;

  for (const plugin of data.plugins) {
    if (isSnapshot(plugin)) {
      skipped++;
      process.stdout.write(
        `Skipping "${plugin.name}" (no sha256 field; snapshot).\n`,
      );
      continue;
    }
    if (hasPinnedSha256(plugin)) {
      skipped++;
      continue;
    }
    if (!hasEmptySha256(plugin)) {
      skipped++;
      process.stdout.write(
        `Skipping "${plugin.name}" (unexpected sha256 value).\n`,
      );
      continue;
    }

    const buffer = await downloadBuffer(plugin);
    await writePluginToDisk(plugin, buffer);
    plugin.sha256 = sha256(buffer);
    updated++;
    process.stdout.write(`  sha256: ${plugin.sha256}\n`);
  }

  if (updated > 0) {
    writeRemotePlugins(data, rawEndsWithNewline);
  }
  process.stdout.write(
    `\nUpdated ${updated} hash(es), skipped ${skipped} ` +
    `(total ${data.plugins.length}).\n`,
  );
}

// Remove a plugin from remote-plugins.json by case-insensitive plugin name.
function cmdDelete(args) {
  validateDeleteArgs(args);

  const { data, rawEndsWithNewline } = readRemotePlugins();
  const idx = findPluginIndex(data.plugins, args.name);
  if (idx === -1) {
    fail(`No plugin named "${args.name}" found in remote-plugins.json.`);
  }

  const [removed] = data.plugins.splice(idx, 1);
  writeRemotePlugins(data, rawEndsWithNewline);

  process.stdout.write(
    `Deleted plugin "${removed.name}"\n` +
    `           url: ${removed.url}\n` +
    `  downloadType: ${hasDownloadType(removed) ? removed.downloadType : '(none)'}\n` +
    `      tokenEnv: ${hasTokenEnv(removed) ? removed.tokenEnv : '(none)'}\n` +
    `          dest: ${removed.dest}\n` +
    `        sha256: ${formatSha256(removed)}\n`,
  );
}

// Print all current plugin entries from remote-plugins.json.
function cmdList() {
  const { data } = readRemotePlugins();
  const { plugins } = data;

  if (plugins.length === 0) {
    process.stdout.write('No plugins configured in remote-plugins.json.\n');
    return;
  }

  process.stdout.write(`Found ${plugins.length} plugin(s):\n\n`);
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    process.stdout.write(
      `[${i + 1}] ${plugin.name}\n` +
      `           url: ${plugin.url}\n` +
      `  downloadType: ${hasDownloadType(plugin) ? plugin.downloadType : '(none)'}\n` +
      `      tokenEnv: ${hasTokenEnv(plugin) ? plugin.tokenEnv : '(none)'}\n` +
      `          dest: ${plugin.dest}\n` +
      `        sha256: ${
        hasPinnedSha256(plugin)
          ? '(set)'
          : hasEmptySha256(plugin)
            ? '(empty)'
            : '(omitted / snapshot)'
      }\n`,
    );
    if (i < plugins.length - 1) {
      process.stdout.write('\n');
    }
  }
}

// Download every plugin (or a single one when --name is given) and compare
// its content against the stored sha256. Reports OK / SKIP (--allow-insecure) /
// FAIL (empty sha256, mismatch, download error, or empty response) per
// plugin and exits non-zero on any failure.
async function cmdVerify(args) {
  const { data } = readRemotePlugins();
  let { plugins } = data;
  if (args.name) {
    const idx = findPluginIndex(plugins, args.name);
    if (idx === -1) {
      fail(`No plugin named "${args.name}" found in remote-plugins.json.`);
    }
    plugins = [plugins[idx]];
  }
  validatePlugins(plugins);

  let ok = 0;
  let skipped = 0;
  let failed = 0;
  const failures = [];

  for (const plugin of plugins) {
    process.stdout.write(`Verifying "${plugin.name}" (${plugin.url})... `);
    let buffer;
    try {
      buffer = await download(plugin.url, {
        downloadType: plugin.downloadType,
        tokenEnv: plugin.tokenEnv,
      });
    } catch (e) {
      failed++;
      failures.push(`${plugin.name}: download error - ${e.message}`);
      process.stdout.write(`FAIL (${e.message})\n`);
      continue;
    }
    if (!buffer || buffer.length === 0) {
      failed++;
      failures.push(`${plugin.name}: empty response`);
      process.stdout.write('FAIL (empty response)\n');
      continue;
    }
    if (args.allowInsecure) {
      skipped++;
      process.stdout.write('SKIP (--allow-insecure)\n');
      continue;
    }
    if (isSnapshot(plugin)) {
      skipped++;
      process.stdout.write('SKIP (snapshot; no sha256 field)\n');
      continue;
    }
    if (!hasPinnedSha256(plugin)) {
      failed++;
      failures.push(
        `${plugin.name}: empty sha256 (run update-empty-hashes, or use --allow-insecure)`,
      );
      process.stdout.write(
        'FAIL (empty sha256; run update-empty-hashes or use --allow-insecure)\n',
      );
      continue;
    }
    const actual = sha256(buffer);
    if (actual === plugin.sha256) {
      ok++;
      process.stdout.write('OK\n');
    } else {
      failed++;
      failures.push(
        `${plugin.name}: sha256 mismatch (expected ${plugin.sha256}, got ${actual})`,
      );
      process.stdout.write(
        `FAIL (expected ${plugin.sha256}, got ${actual})\n`,
      );
    }
  }

  process.stdout.write(
    `\nSummary: ${ok} ok, ${skipped} skipped, ${failed} failed ` +
    `(total ${plugins.length}).\n`,
  );
  if (failed > 0) {
    process.stderr.write('\nFailures:\n');
    for (const f of failures) process.stderr.write(`  - ${f}\n`);
    process.exit(1);
  }
}

// Write every plugin into distribution/external-plugins. Skip the HTTP fetch
// when dest exists and a pinned sha256 matches the file on disk.
async function cmdDownload() {
  const { data } = readRemotePlugins();
  const { plugins } = data;
  if (plugins.length === 0) {
    fail('No plugins defined.');
  }
  validatePlugins(plugins);

  const requireSha256 = process.env.REQUIRE_SHA256 === 'true';
  process.stdout.write(
    `Downloading ${plugins.length} plugin(s) from '${REMOTE_PLUGINS_PATH}' ` +
    `into '${EXTERNAL_PLUGINS_DIR}'...\n`,
  );

  for (const [i, plugin] of plugins.entries()) {
    const destPath = resolvePluginDest(plugin.dest);
    process.stdout.write(
      `\n[${i + 1}/${plugins.length}] ${plugin.name}\n` +
      `    URL: ${plugin.url}\n` +
      `   Auth: ${hasDownloadType(plugin) ? plugin.downloadType : '(none)'}\n` +
      `   Dest: ${destPath}\n`,
    );

    if (hasPinnedSha256(plugin) && fs.existsSync(destPath)) {
      const existing = fs.readFileSync(destPath);
      if (sha256(existing) === plugin.sha256) {
        process.stdout.write('  Cache: hit (sha256 matches), skipping download\n');
        continue;
      }
      process.stdout.write('  Cache: stale (sha256 mismatch), re-downloading\n');
    }

    const js = await downloadBuffer(plugin);

    if (hasPinnedSha256(plugin)) {
      const actual = sha256(js);
      if (actual !== plugin.sha256) {
        fail(
          `SHA256 mismatch for plugin '${plugin.name}'.\n` +
          `  Expected : ${plugin.sha256}\n` +
          `  Actual   : ${actual}`,
        );
      }
      process.stdout.write('  SHA256 OK\n');
    } else if (hasEmptySha256(plugin)) {
      process.stderr.write(
        `  WARNING: Empty sha256 for plugin '${plugin.name}' (not cached).\n`,
      );
      if (requireSha256) {
        fail(`REQUIRE_SHA256=true but sha256 is empty for '${plugin.name}'.`);
      }
    } else {
      process.stderr.write(
        `  WARNING: No sha256 for plugin '${plugin.name}' (snapshot, always downloaded).\n`,
      );
      if (requireSha256) {
        fail(`REQUIRE_SHA256=true but no sha256 for '${plugin.name}'.`);
      }
    }

    await writePluginToDisk(plugin, js);
  }

  process.stdout.write(
    `\nAll ${plugins.length} plugin(s) downloaded successfully.\n`,
  );
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  switch (args.cmd) {
    case 'add':
      await cmdAdd(args);
      break;
    case 'update':
      await cmdUpdate(args);
      break;
    case 'update-empty-hashes':
      await cmdUpdateEmptyHashes();
      break;
    case 'delete':
      cmdDelete(args);
      break;
    case 'list':
      cmdList();
      break;
    case 'verify':
      await cmdVerify(args);
      break;
    case 'download':
      await cmdDownload();
      break;
    default:
      usage();
      fail(`Unknown command "${args.cmd}".`);
  }
}

main().catch(err => {
  process.stderr.write(`Error: ${err && err.message ? err.message : err}\n`);
  process.exit(1);
});
