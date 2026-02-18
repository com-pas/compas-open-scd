import {CompasSettings} from "../compas/CompasSettings.js";
import {websocket} from "./Websocket.js";
import {
  getWebsocketUri,
  handleError,
  handleResponse,
  parseXml
} from "./foundation.js";
export const SVS_NAMESPACE = "https://www.lfenergy.org/compas/SclValidatorService/v1";
export function CompasSclValidatorService() {
  function getSclValidatorServiceUrl() {
    return CompasSettings().compasSettings.sclValidatorServiceUrl;
  }
  function useWebsocket() {
    return CompasSettings().useWebsockets();
  }
  return {
    validateSCL(element, type, doc) {
      if (useWebsocket()) {
        const request2 = `<?xml version="1.0" encoding="UTF-8"?>
            <svs:SclValidateWsRequest xmlns:svs="${SVS_NAMESPACE}">
              <svs:SclData><![CDATA[${new XMLSerializer().serializeToString(doc.documentElement)}]]></svs:SclData>
            </svs:SclValidateWsRequest>`;
        const svsUrl2 = getWebsocketUri(getSclValidatorServiceUrl()) + "/validate-ws/v1/" + type;
        return websocket(element, "CompasValidatorService", svsUrl2, request2);
      }
      const request = `<?xml version="1.0" encoding="UTF-8"?>
            <svs:SclValidateRequest xmlns:svs="${SVS_NAMESPACE}">
              <svs:SclData><![CDATA[${new XMLSerializer().serializeToString(doc.documentElement)}]]></svs:SclData>
            </svs:SclValidateRequest>`;
      const svsUrl = getSclValidatorServiceUrl() + "/validate/v1/" + type;
      return fetch(svsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: request
      }).catch(handleError).then(handleResponse).then(parseXml);
    },
    getNsdocFile(id) {
      const svsUrl = getSclValidatorServiceUrl() + "/nsdoc/v1/" + id;
      return fetch(svsUrl).catch(handleError).then(handleResponse).then(parseXml);
    }
  };
}
