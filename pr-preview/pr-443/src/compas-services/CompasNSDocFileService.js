import {handleError, handleResponse} from "./foundation.js";
function generateIdFromName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const hashStr = Math.abs(hash).toString(16).padStart(8, "0");
  return `${hashStr.slice(0, 8)}-${hashStr.slice(0, 4)}-4${hashStr.slice(1, 4)}-${hashStr.slice(0, 4)}-${hashStr}${hashStr.slice(0, 4)}`;
}
function parseVersionNumber(version, revision, release) {
  const versionNum = parseInt(version) || 0;
  const revisionNum = revision.charCodeAt(0) - 65;
  const releaseNum = parseInt(release) || 0;
  return versionNum * 1e6 + revisionNum * 1e3 + releaseNum;
}
function parseNsDocFilename(filename) {
  const match = filename.match(/^IEC_61850-([0-9]+-[0-9]+)_(\d{4})([A-Z])(\d+)-en\.nsdoc$/);
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
      fullVersion
    };
  }
  return null;
}
async function isValidNsDocFile(filename) {
  try {
    const response = await fetch(`/public/nsdoc/${filename}`);
    if (!response.ok) {
      return false;
    }
    const content = await response.text();
    const doc = new DOMParser().parseFromString(content, "text/xml");
    const nsElement = doc.querySelector("NSDoc");
    const xmlns = nsElement?.getAttribute("xmlns");
    return xmlns === "http://www.iec.ch/61850/2016/NSD";
  } catch (error) {
    return false;
  }
}
async function getNsDocFilesFromManifest() {
  try {
    const manifestResponse = await fetch("/public/nsdoc/manifest.json");
    if (!manifestResponse.ok) {
      return [];
    }
    const manifest = await manifestResponse.json();
    if (!Array.isArray(manifest)) {
      return [];
    }
    const nsdocFiles = manifest.filter((filename) => typeof filename === "string" && filename.endsWith("-en.nsdoc"));
    return nsdocFiles;
  } catch (error) {
    return [];
  }
}
async function getNsDocFilesByPattern() {
  const discoveredFiles = [];
  const standards2007 = ["7-2", "7-3", "7-4"];
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
    }
  }
  return discoveredFiles;
}
async function parseAndValidateNsDocFiles(filenames) {
  const parsedFiles = [];
  for (const filename of filenames) {
    const fileInfo = parseNsDocFilename(filename);
    if (fileInfo) {
      const isValid = await isValidNsDocFile(filename);
      if (isValid) {
        parsedFiles.push(fileInfo);
      } else {
        console.warn(`Skipping invalid NSDOC file: ${filename} (missing or incorrect schema)`);
      }
    }
  }
  return parsedFiles;
}
function selectLatestVersions(parsedFiles) {
  const standardsMap = new Map();
  for (const fileInfo of parsedFiles) {
    const currentFileInMap = standardsMap.get(fileInfo.id);
    if (!currentFileInMap) {
      standardsMap.set(fileInfo.id, fileInfo);
    } else {
      const currentVersionNum = parseVersionNumber(currentFileInMap.version, currentFileInMap.revision, currentFileInMap.release);
      const newVersionNum = parseVersionNumber(fileInfo.version, fileInfo.revision, fileInfo.release);
      if (newVersionNum > currentVersionNum) {
        standardsMap.set(fileInfo.id, fileInfo);
      }
    }
  }
  return Array.from(standardsMap.values()).map((fileInfo) => ({
    filename: fileInfo.filename,
    name: fileInfo.id,
    id: generateIdFromName(fileInfo.id + fileInfo.fullVersion)
  }));
}
async function getNsDocFiles() {
  try {
    let nsdocFiles = await getNsDocFilesFromManifest();
    if (nsdocFiles.length === 0) {
      nsdocFiles = await getNsDocFilesByPattern();
    }
    if (nsdocFiles.length === 0) {
      console.warn("No NSDOC files found using either manifest or pattern-based discovery");
      return [];
    }
    const parsedFiles = await parseAndValidateNsDocFiles(nsdocFiles);
    return selectLatestVersions(parsedFiles);
  } catch (error) {
    console.error("Failed to load NSDOC files:", error);
    return [];
  }
}
export function CompasNSDocFileService() {
  return {
    async listNsdocFiles() {
      const nsDocFiles = await getNsDocFiles();
      return {
        files: nsDocFiles.map((nsDocFile) => ({
          id: nsDocFile.id,
          nsdocId: nsDocFile.name,
          filename: nsDocFile.filename,
          checksum: nsDocFile.id
        }))
      };
    },
    async getNsdocFile(id) {
      const nsDocFiles = await getNsDocFiles();
      const nsDocFile = nsDocFiles.find((f) => f.id === id);
      if (!nsDocFile) {
        return Promise.reject(`Unable to find nsDoc file with id ${id}`);
      }
      const content = await fetch(`/public/nsdoc/${nsDocFile.filename}`).catch(handleError).then(handleResponse);
      return {
        content
      };
    }
  };
}
