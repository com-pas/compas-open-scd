import {formatXml} from "../file.js";
import {CompasSettings} from "../compas/CompasSettings.js";
import {
  extractSclFromResponse,
  getWebsocketUri,
  handleError,
  handleResponse,
  parseXml
} from "./foundation.js";
import {websocket} from "./Websocket.js";
export const SDS_NAMESPACE = "https://www.lfenergy.org/compas/SclDataService/v1";
export var ChangeSet;
(function(ChangeSet2) {
  ChangeSet2["MAJOR"] = "MAJOR";
  ChangeSet2["MINOR"] = "MINOR";
  ChangeSet2["PATCH"] = "PATCH";
})(ChangeSet || (ChangeSet = {}));
export function CompasSclDataService() {
  function getSclDataServiceUrl() {
    return CompasSettings().compasSettings.sclDataServiceUrl;
  }
  function useWebsocket() {
    return CompasSettings().useWebsockets();
  }
  function listSclTypes() {
    const sclUrl = getSclDataServiceUrl() + "/common/v1/type/list";
    return fetch(sclUrl).catch(handleError).then(handleResponse).then(parseXml);
  }
  return {
    listOrderedSclTypes() {
      return listSclTypes().then((xmlResponse) => {
        return Array.from(xmlResponse.querySelectorAll("*|Type") ?? []).sort((type1, type2) => {
          const description1 = type1.getElementsByTagNameNS(SDS_NAMESPACE, "Description").item(0).textContent ?? "";
          const description2 = type2.getElementsByTagNameNS(SDS_NAMESPACE, "Description").item(0).textContent ?? "";
          return description1.localeCompare(description2);
        });
      });
    },
    listScls(type) {
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type + "/list";
      return fetch(sclUrl).catch(handleError).then(handleResponse).then(parseXml);
    },
    listSclVersions(type, id) {
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type + "/" + id + "/versions";
      return fetch(sclUrl).catch(handleError).then(handleResponse).then(parseXml);
    },
    getSclDocument(element, type, id) {
      if (useWebsocket()) {
        const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Id>${id}</sds:Id>
         </sds:GetWsRequest>`;
        const sclUrl2 = getSclDataServiceUrl() + "/scl-ws/v1/" + type + "/get";
        return websocket(element, "CompasSclDataService", getWebsocketUri(sclUrl2), request).then(extractSclFromResponse);
      }
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type + "/" + id;
      return fetch(sclUrl).catch(handleError).then(handleResponse).then(parseXml).then(extractSclFromResponse);
    },
    getSclDocumentVersion(element, type, id, version) {
      if (useWebsocket()) {
        const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Id>${id}</sds:Id>
           <sds:Version>${version}</sds:Version>
         </sds:GetVersionWsRequest>`;
        const sclUrl2 = getSclDataServiceUrl() + "/scl-ws/v1/" + type + "/get-version";
        return websocket(element, "CompasSclDataService", getWebsocketUri(sclUrl2), request).then(extractSclFromResponse);
      }
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type + "/" + id + "/" + version;
      return fetch(sclUrl).catch(handleError).then(handleResponse).then(parseXml).then(extractSclFromResponse);
    },
    deleteSclDocumentVersion(type, id, version) {
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type + "/" + id + "/" + version;
      return fetch(sclUrl, {method: "DELETE"}).catch(handleError).then(handleResponse);
    },
    deleteSclDocument(type, id) {
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type + "/" + id;
      return fetch(sclUrl, {method: "DELETE"}).catch(handleError).then(handleResponse);
    },
    addSclDocument(element, type, body) {
      if (useWebsocket()) {
        const request2 = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Name>${body.sclName}</sds:Name>
           <sds:Comment>${body.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${formatXml(new XMLSerializer().serializeToString(body.doc.documentElement))}]]></sds:SclData>
         </sds:CreateWsRequest>`;
        const sclUrl2 = getSclDataServiceUrl() + "/scl-ws/v1/" + type + "/create";
        return websocket(element, "CompasSclDataService", getWebsocketUri(sclUrl2), request2).then(extractSclFromResponse);
      }
      const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${SDS_NAMESPACE}">
            <sds:Name>${body.sclName}</sds:Name>
            <sds:Comment>${body.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${formatXml(new XMLSerializer().serializeToString(body.doc.documentElement))}]]></sds:SclData>
         </sds:CreateRequest>`;
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type;
      return fetch(sclUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: request
      }).catch(handleError).then(handleResponse).then(parseXml).then(extractSclFromResponse);
    },
    updateSclDocument(element, type, id, body) {
      if (useWebsocket()) {
        const request2 = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Id>${id}</sds:Id>
           <sds:ChangeSet>${body.changeSet}</sds:ChangeSet>
           <sds:Comment>${body.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${formatXml(new XMLSerializer().serializeToString(body.doc.documentElement))}]]></sds:SclData>
         </sds:UpdateWsRequest>`;
        const sclUrl2 = getSclDataServiceUrl() + "/scl-ws/v1/" + type + "/update";
        return websocket(element, "CompasSclDataService", getWebsocketUri(sclUrl2), request2).then(extractSclFromResponse);
      }
      const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:ChangeSet>${body.changeSet}</sds:ChangeSet>
           <sds:Comment>${body.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${formatXml(new XMLSerializer().serializeToString(body.doc.documentElement))}]]></sds:SclData>
         </sds:UpdateRequest>`;
      const sclUrl = getSclDataServiceUrl() + "/scl/v1/" + type + "/" + id;
      return fetch(sclUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: request
      }).catch(handleError).then(handleResponse).then(parseXml).then(extractSclFromResponse);
    }
  };
}
