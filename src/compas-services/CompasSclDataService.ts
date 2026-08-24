import { formatXml } from '../file.js';

import { CompasSettings } from '../compas/CompasSettings.js';
import {
  assertRequiredSclId,
  assertValidSclType,
  assertValidSclVersion,
} from '../scl-identifiers.js';
import {
  extractSclFromResponse,
  getWebsocketUri,
  handleError,
  handleResponse,
  parseXml,
} from './foundation.js';
import { websocket } from './Websocket.js';

export const SDS_NAMESPACE =
  'https://www.lfenergy.org/compas/SclDataService/v1';

export enum ChangeSet {
  MAJOR = 'MAJOR',
  MINOR = 'MINOR',
  PATCH = 'PATCH',
}

export interface CreateRequestBody {
  sclName: string;
  comment: string | null;
  doc: Document;
}

export interface UpdateRequestBody {
  changeSet: ChangeSet;
  comment: string | null;
  doc: Document;
}

function getSclDataServiceUrl(): string {
  return CompasSettings().compasSettings.sclDataServiceUrl;
}

function assertValidSclParams(parts: {
  type: string;
  id?: string;
  version?: string;
}): void {
  assertValidSclType(parts.type);
  if (parts.id !== undefined) assertRequiredSclId(parts.id);
  if (parts.version !== undefined) assertValidSclVersion(parts.version);
}

function sclPath(parts: {
  type: string;
  id?: string;
  version?: string;
}): string {
  assertValidSclParams(parts);
  return [parts.type, parts.id, parts.version]
    .filter((part): part is string => part !== undefined)
    .map(encodeURIComponent)
    .join('/');
}

function useWebsocket(): boolean {
  return CompasSettings().useWebsockets();
}

function listSclTypes(): Promise<Document> {
  const sclUrl = getSclDataServiceUrl() + '/common/v1/type/list';
  return fetch(sclUrl).catch(handleError).then(handleResponse).then(parseXml);
}

export function CompasSclDataService() {
  return {
    listOrderedSclTypes(): Promise<Element[]> {
      return listSclTypes().then(xmlResponse => {
        return Array.from(xmlResponse.querySelectorAll('*|Type') ?? []).sort(
          (type1, type2) => {
            const description1 =
              type1
                .getElementsByTagNameNS(SDS_NAMESPACE, 'Description')
                .item(0)!.textContent ?? '';
            const description2 =
              type2
                .getElementsByTagNameNS(SDS_NAMESPACE, 'Description')
                .item(0)!.textContent ?? '';
            return description1.localeCompare(description2);
          }
        );
      });
    },

    async listScls(type: string): Promise<Document> {
      const sclUrl =
        getSclDataServiceUrl() + '/scl/v1/' + sclPath({ type }) + '/list';
      return fetch(sclUrl)
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml);
    },

    async listSclVersions(type: string, id: string): Promise<Document> {
      const sclUrl =
        getSclDataServiceUrl() +
        '/scl/v1/' +
        sclPath({ type, id }) +
        '/versions';
      return fetch(sclUrl)
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml);
    },

    async getSclDocument(
      element: Element,
      type: string,
      id: string
    ): Promise<Document> {
      assertValidSclParams({ type, id });

      if (useWebsocket()) {
        const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Id>${id}</sds:Id>
         </sds:GetWsRequest>`;

        const sclUrl =
          getSclDataServiceUrl() + '/scl-ws/v1/' + sclPath({ type }) + '/get';
        return websocket(
          element,
          'CompasSclDataService',
          getWebsocketUri(sclUrl),
          request
        ).then(extractSclFromResponse);
      }

      const sclUrl =
        getSclDataServiceUrl() + '/scl/v1/' + sclPath({ type, id });
      return fetch(sclUrl)
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml)
        .then(extractSclFromResponse);
    },

    async getSclDocumentVersion(
      element: Element,
      type: string,
      id: string,
      version: string
    ): Promise<Document> {
      assertValidSclParams({ type, id, version });

      if (useWebsocket()) {
        const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Id>${id}</sds:Id>
           <sds:Version>${version}</sds:Version>
         </sds:GetVersionWsRequest>`;

        const sclUrl =
          getSclDataServiceUrl() +
          '/scl-ws/v1/' +
          sclPath({ type }) +
          '/get-version';
        return websocket(
          element,
          'CompasSclDataService',
          getWebsocketUri(sclUrl),
          request
        ).then(extractSclFromResponse);
      }

      const sclUrl =
        getSclDataServiceUrl() + '/scl/v1/' + sclPath({ type, id, version });
      return fetch(sclUrl)
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml)
        .then(extractSclFromResponse);
    },

    async deleteSclDocumentVersion(
      type: string,
      id: string,
      version: string
    ): Promise<string> {
      const sclUrl =
        getSclDataServiceUrl() + '/scl/v1/' + sclPath({ type, id, version });
      return fetch(sclUrl, { method: 'DELETE' })
        .catch(handleError)
        .then(handleResponse);
    },

    async deleteSclDocument(type: string, id: string): Promise<string> {
      const sclUrl =
        getSclDataServiceUrl() + '/scl/v1/' + sclPath({ type, id });
      return fetch(sclUrl, { method: 'DELETE' })
        .catch(handleError)
        .then(handleResponse);
    },

    async addSclDocument(
      element: Element,
      type: string,
      body: CreateRequestBody
    ): Promise<Document> {
      if (useWebsocket()) {
        const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Name>${body.sclName}</sds:Name>
           <sds:Comment>${body.comment ?? ''}</sds:Comment>
           <sds:SclData><![CDATA[${formatXml(
             new XMLSerializer().serializeToString(body.doc.documentElement)
           )}]]></sds:SclData>
         </sds:CreateWsRequest>`;

        const sclUrl =
          getSclDataServiceUrl() +
          '/scl-ws/v1/' +
          sclPath({ type }) +
          '/create';
        return websocket(
          element,
          'CompasSclDataService',
          getWebsocketUri(sclUrl),
          request
        ).then(extractSclFromResponse);
      }

      const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${SDS_NAMESPACE}">
            <sds:Name>${body.sclName}</sds:Name>
            <sds:Comment>${body.comment ?? ''}</sds:Comment>
            <sds:SclData><![CDATA[${formatXml(
              new XMLSerializer().serializeToString(body.doc.documentElement)
            )}]]></sds:SclData>
         </sds:CreateRequest>`;

      const sclUrl = getSclDataServiceUrl() + '/scl/v1/' + sclPath({ type });
      return fetch(sclUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: request,
      })
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml)
        .then(extractSclFromResponse);
    },

    async updateSclDocument(
      element: Element,
      type: string,
      id: string,
      body: UpdateRequestBody
    ): Promise<Document> {
      assertValidSclParams({ type, id });

      if (useWebsocket()) {
        const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:Id>${id}</sds:Id>
           <sds:ChangeSet>${body.changeSet}</sds:ChangeSet>
           <sds:Comment>${body.comment ?? ''}</sds:Comment>
           <sds:SclData><![CDATA[${formatXml(
             new XMLSerializer().serializeToString(body.doc.documentElement)
           )}]]></sds:SclData>
         </sds:UpdateWsRequest>`;

        const sclUrl =
          getSclDataServiceUrl() +
          '/scl-ws/v1/' +
          sclPath({ type }) +
          '/update';
        return websocket(
          element,
          'CompasSclDataService',
          getWebsocketUri(sclUrl),
          request
        ).then(extractSclFromResponse);
      }

      const request = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${SDS_NAMESPACE}">
           <sds:ChangeSet>${body.changeSet}</sds:ChangeSet>
           <sds:Comment>${body.comment ?? ''}</sds:Comment>
           <sds:SclData><![CDATA[${formatXml(
             new XMLSerializer().serializeToString(body.doc.documentElement)
           )}]]></sds:SclData>
         </sds:UpdateRequest>`;

      const sclUrl =
        getSclDataServiceUrl() + '/scl/v1/' + sclPath({ type, id });
      return fetch(sclUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: request,
      })
        .catch(handleError)
        .then(handleResponse)
        .then(parseXml)
        .then(extractSclFromResponse);
    },
  };
}
