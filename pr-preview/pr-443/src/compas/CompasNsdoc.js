import {
  createLogEvent,
  createNSDocLogEvent
} from "../compas-services/foundation.js";
import {CompasNSDocFileService} from "../compas-services/CompasNSDocFileService.js";
import {newLoadNsdocEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
async function processNsdocFile(component, id, nsdocId, filename, checksum) {
  const checksumKey = nsdocId + ".checksum";
  const checksumStored = localStorage.getItem(checksumKey);
  if (localStorage.getItem(nsdocId) === null || checksumStored === null || checksumStored !== checksum) {
    console.info(`Loading NSDoc File '${nsdocId}' with ID '${id}'.`);
    await CompasNSDocFileService().getNsdocFile(id).then((response) => {
      component.dispatchEvent(newLoadNsdocEvent(response.content, filename));
      localStorage.setItem(checksumKey, checksum);
    }).catch(() => {
      createNSDocLogEvent(component, filename);
    });
  } else {
    console.debug(`Loading NSDoc File '${nsdocId}' skipped, already loaded.`);
  }
}
export async function loadNsdocFiles(component) {
  await CompasNSDocFileService().listNsdocFiles().then((response) => {
    response.files.forEach((nsdocFile) => {
      const {id, nsdocId, filename, checksum} = nsdocFile;
      processNsdocFile(component, id, nsdocId, filename, checksum);
    });
  }).catch((reason) => {
    createLogEvent(component, reason);
  });
}
