import { CompasSettings } from '../compas/CompasSettings.js';
import {
  handleError,
  handleResponse,
  parseXml,
  extractSclElementFromMapResponse,
  getWebsocketUri,
} from './foundation.js';
import { websocket } from './Websocket.js';

export const CMS_NAMESPACE =
  'https://www.lfenergy.org/compas/CimMappingService/v1';

export interface CimData {
  name: string;
  doc: Document;
}

export interface MapRequestBody {
  cimData: CimData[];
}

function getCompasSettings() {
  return CompasSettings().compasSettings;
}

function useWebsocket() {
  return CompasSettings().useWebsockets();
}

export function CompasCimMappingService() {
  return {
    map(element: Element, body: MapRequestBody): Promise<Document> {
      const request = `<?xml version="1.0" encoding="UTF-8"?>
               <cms:MapRequest xmlns:cms="${CMS_NAMESPACE}">
               ${body.cimData
                 .map(cimData => {
                   return `
                    <cms:CimData>
                        <cms:Name>${cimData.name}</cms:Name>
                        <cms:RdfData><![CDATA[${new XMLSerializer().serializeToString(
                          cimData.doc.documentElement
                        )}]]></cms:RdfData>
                    </cms:CimData>`;
                 })
                 .join('')}
               </cms:MapRequest>`;

      if (useWebsocket()) {
        const wsUrl =
          getCompasSettings().cimMappingServiceUrl + '/cim-ws/v1/map';

        return websocket(
          element,
          'CompasCimMappingService',
          getWebsocketUri(wsUrl),
          request
        ).then(extractSclElementFromMapResponse);
      }

      const cmsUrl = getCompasSettings().cimMappingServiceUrl + '/cim/v1/map';

      return fetch(cmsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: request,
      })
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml);
    },
  };
}
