import { CompasSettings } from '../compas/CompasSettings.js';
import {
  extractSclFromResponse,
  handleError,
  handleResponse,
  parseXml,
  getWebsocketUri,
} from './foundation.js';
import { websocket } from './Websocket.js';

export const SAA_NAMESPACE =
  'https://www.lfenergy.org/compas/SclAutoAlignmentService/v1';

function getCompasSettings() {
  return CompasSettings().compasSettings;
}

function useWebsocket() {
  return CompasSettings().useWebsockets();
}

export function CompasSclAutoAlignmentService() {
  return {
    updateSCL(
      element: Element,
      doc: Document,
      substationNames: string[]
    ): Promise<Document> {
      const payload = `<?xml version="1.0" encoding="UTF-8"?>
               <saa:SclAutoAlignRequest xmlns:saa="${SAA_NAMESPACE}">
                 ${substationNames.map(substationName => {
                   return `
                        <saa:SubstationName>${substationName}</saa:SubstationName>
                    `;
                 })}
                 <saa:SclData><![CDATA[${new XMLSerializer().serializeToString(
                   doc.documentElement
                 )}]]></saa:SclData>
               </saa:SclAutoAlignRequest>`;

      if (useWebsocket()) {
        const saaWsUrl =
          getCompasSettings().sclAutoAlignmentServiceUrl +
          '/auto-ws/alignment/v1';

        return websocket(
          element,
          'CompasSclAutoAlignmentService',
          getWebsocketUri(saaWsUrl),
          payload
        ).then(extractSclFromResponse);
      }

      const saaUrl =
        getCompasSettings().sclAutoAlignmentServiceUrl + '/auto/alignment/v1';
      return fetch(saaUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: payload,
      })
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml)
        .then(extractSclFromResponse);
    },
  };
}
