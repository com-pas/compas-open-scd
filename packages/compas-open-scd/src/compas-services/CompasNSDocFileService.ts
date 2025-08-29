import { handleError, handleResponse } from './foundation.js';

interface NsDocFile {
  filename: string;
  id: string;
  name: string;
}

interface NsDocFileInfo {
  id: string;
  version: string;
  revision: string;
  release: string;
  filename: string;
  fullVersion: string;
}

interface NsDocFileResponse {
  id: string;
  nsdocId: string;
  filename: string;
  checksum: string;
}

interface NsDocListResponse {
  files: NsDocFileResponse[];
}

interface NsdocContentResponse {
  content: string;
}

function generateIdFromName(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  const hashStr = Math.abs(hash).toString(16).padStart(8, '0');
  return `${hashStr.slice(0, 8)}-${hashStr.slice(0, 4)}-4${hashStr.slice(
    1,
    4
  )}-${hashStr.slice(0, 4)}-${hashStr}${hashStr.slice(0, 4)}`;
}

function parseVersionNumber(
  version: string,
  revision: string,
  release: string
): number {
  const versionNum = parseInt(version) || 0;
  const revisionNum = revision.charCodeAt(0) - 65;
  const releaseNum = parseInt(release) || 0;

  return versionNum * 1000000 + revisionNum * 1000 + releaseNum;
}

function parseNsDocFilename(filename: string): NsDocFileInfo | null {
  const match = filename.match(
    /^IEC_61850-([0-9]+-[0-9]+)_(\d{4})([A-Z])(\d+)-en\.nsdoc$/
  );
  if (match) {
    const [, standardPart, version, revision, release] = match;
    const id = `IEC 61850-${standardPart}`;
    const fullVersion = `${version}${revision}${release}`;

    return {
      id,
      version,
      revision,
      release,
      filename,
      fullVersion,
    };
  }
  return null;
}

async function isValidNsDocFile(filename: string): Promise<boolean> {
  try {
    const response = await fetch(`/public/nsdoc/${filename}`);
    if (!response.ok) {
      return false;
    }

    const content = await response.text();
    const doc = new DOMParser().parseFromString(content, 'text/xml');
    const nsElement = doc.querySelector('NSDoc');
    const xmlns = nsElement?.getAttribute('xmlns');

    return xmlns === 'http://www.iec.ch/61850/2016/NSD';
  } catch (error) {
    return false;
  }
}

// Get NSDOC files from manifest.json
async function getNsDocFilesFromManifest(): Promise<string[]> {
  try {
    const manifestResponse = await fetch('/public/nsdoc/manifest.json');
    if (!manifestResponse.ok) {
      return [];
    }

    const manifest = await manifestResponse.json();
    if (!Array.isArray(manifest)) {
      return [];
    }

    const nsdocFiles = manifest.filter(
      (filename: unknown) =>
        typeof filename === 'string' && filename.endsWith('-en.nsdoc')
    ) as string[];

    return nsdocFiles;
  } catch (error) {
    return [];
  }
}

// Discover NSDOC files using pattern-based approach (fallback)
async function getNsDocFilesByPattern(): Promise<string[]> {
  const discoveredFiles: string[] = [];

  const standards2007 = ['7-2', '7-3', '7-4'];
  for (const standard of standards2007) {
    for (let release = 5; release <= 9; release++) {
      const filename = `IEC_61850-${standard}_2007B${release}-en.nsdoc`;
      try {
        const response = await fetch(`/public/nsdoc/${filename}`);
        if (response.ok) {
          discoveredFiles.push(filename);
          break;
        }
      } catch (e) {
        // Continue to next version
      }
    }
  }

  for (let release = 2; release <= 9; release++) {
    const filename = `IEC_61850-8-1_2003A${release}-en.nsdoc`;
    try {
      const response = await fetch(`/public/nsdoc/${filename}`);
      if (response.ok) {
        discoveredFiles.push(filename);
        break;
      }
    } catch (e) {
      // Continue to next version
    }
  }

  return discoveredFiles;
}

async function parseAndValidateNsDocFiles(
  filenames: string[]
): Promise<NsDocFileInfo[]> {
  const parsedFiles: NsDocFileInfo[] = [];

  for (const filename of filenames) {
    const fileInfo = parseNsDocFilename(filename);
    if (fileInfo) {
      const isValid = await isValidNsDocFile(filename);
      if (isValid) {
        parsedFiles.push(fileInfo);
      } else {
        console.warn(
          `Skipping invalid NSDOC file: ${filename} (missing or incorrect schema)`
        );
      }
    }
  }

  return parsedFiles;
}

function selectLatestVersions(parsedFiles: NsDocFileInfo[]): NsDocFile[] {
  const standardsMap = new Map<string, NsDocFileInfo>();

  for (const fileInfo of parsedFiles) {
    const currentFileInMap = standardsMap.get(fileInfo.id);

    if (!currentFileInMap) {
      standardsMap.set(fileInfo.id, fileInfo);
    } else {
      const currentVersionNum = parseVersionNumber(
        currentFileInMap.version,
        currentFileInMap.revision,
        currentFileInMap.release
      );
      const newVersionNum = parseVersionNumber(
        fileInfo.version,
        fileInfo.revision,
        fileInfo.release
      );

      if (newVersionNum > currentVersionNum) {
        standardsMap.set(fileInfo.id, fileInfo);
      }
    }
  }

  return Array.from(standardsMap.values()).map(fileInfo => ({
    filename: fileInfo.filename,
    name: fileInfo.id,
    id: generateIdFromName(fileInfo.id + fileInfo.fullVersion),
  }));
}

async function getNsDocFiles(): Promise<NsDocFile[]> {
  try {
    let nsdocFiles = await getNsDocFilesFromManifest();
    if (nsdocFiles.length === 0) {
      nsdocFiles = await getNsDocFilesByPattern();
    }

    if (nsdocFiles.length === 0) {
      console.warn(
        'No NSDOC files found using either manifest or pattern-based discovery'
      );
      return [];
    }

    const parsedFiles = await parseAndValidateNsDocFiles(nsdocFiles);

    return selectLatestVersions(parsedFiles);
  } catch (error) {
    console.error('Failed to load NSDOC files:', error);
    return [];
  }
}

export function CompasNSDocFileService(): {
  listNsdocFiles(): Promise<NsDocListResponse>;
  getNsdocFile(id: string): Promise<NsdocContentResponse>;
} {
  return {
    async listNsdocFiles(): Promise<NsDocListResponse> {
      const nsDocFiles = await getNsDocFiles();

      return {
        files: nsDocFiles.map((nsDocFile: NsDocFile) => ({
          id: nsDocFile.id,
          nsdocId: nsDocFile.name,
          filename: nsDocFile.filename,
          checksum: nsDocFile.id,
        })),
      };
    },

    async getNsdocFile(id: string): Promise<NsdocContentResponse> {
      const nsDocFiles = await getNsDocFiles();
      const nsDocFile: NsDocFile | undefined = nsDocFiles.find(
        (f: NsDocFile) => f.id === id
      );

      if (!nsDocFile) {
        return Promise.reject(`Unable to find nsDoc file with id ${id}`);
      }

      const content = await fetch(`/public/nsdoc/${nsDocFile.filename}`)
        .catch(handleError)
        .then(handleResponse);

      return {
        content,
      };
    },
  };
}
