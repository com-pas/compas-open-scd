import {handleError} from "../../compas-services/foundation.js";
import {CompasSettings} from "../../compas/CompasSettings.js";
function getSitipeServiceBaseUrl() {
  return CompasSettings().compasSettings.sitipeServiceUrl;
}
export function getAssignedBayTypicals() {
  return fetch(`${getSitipeServiceBaseUrl()}/v2/baytypicals`).catch(handleError).then((res) => res.json());
}
export function getBayTypicalComponents(accessId) {
  return fetch(`${getSitipeServiceBaseUrl()}/v2/baytypicals/${accessId}/components`).catch(handleError).then((res) => res.json());
}
export function getImportedBTComponentData(id) {
  return fetch(`${getSitipeServiceBaseUrl()}/v2/btcomponents/imported/${id}`).catch(handleError).then((res) => res.json());
}
export function getImportedBtComponents(accessId) {
  return fetch(`${getSitipeServiceBaseUrl()}/v2/btcomponents/${accessId}/imported`).catch(handleError).then((res) => res.json());
}
