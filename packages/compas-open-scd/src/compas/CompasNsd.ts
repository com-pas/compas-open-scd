import { get } from 'lit-translate';
import { newLogEvent } from '@compas-oscd/core';
import type {
  IEC61850Edition,
  EditionComponents,
  CodeComponentEntry,
} from '../compas-services/CompasCodeComponentsService.js';

export interface NsdDocuments {
  nsd72?: XMLDocument;
  nsd73?: XMLDocument;
  nsd74?: XMLDocument;
  nsd81?: XMLDocument;
}

/**
 * Fallback NSD filenames used when the code components JSON does not have
 * entries for a given edition (e.g. Edition_1, Edition_2 are not yet populated).
 */
const FALLBACK_NSD_FILENAMES: Record<string, string> = {
  '7-2': 'IEC_61850-7-2_2007B5.nsd',
  '7-3': 'IEC_61850-7-3_2007B5.nsd',
  '7-4': 'IEC_61850-7-4_2007B5.nsd',
  '8-1': 'IEC_61850-8-1_2003A2.nsd',
};

const NSD_BASE_PATH = 'public/xml/';

async function fetchNsdFile(
  element: Element,
  filename: string
): Promise<XMLDocument | undefined> {
  const url = `${NSD_BASE_PATH}${filename}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      element.dispatchEvent(
        newLogEvent({
          kind: 'warning',
          title: get('compas.nsd.fileMissing'),
          message: get('compas.nsd.fileMissingDetails', { filename }),
        })
      );
      return undefined;
    }
    const text = await response.text();
    return new DOMParser().parseFromString(text, 'application/xml');
  } catch {
    element.dispatchEvent(
      newLogEvent({
        kind: 'warning',
        title: get('compas.nsd.fileMissing'),
        message: get('compas.nsd.fileMissingDetails', { filename }),
      })
    );
    return undefined;
  }
}

/**
 * Loads the edition-specific NSD files from `public/xml/`.
 *
 * Uses the filenames from `editionComponents` when available, otherwise falls
 * back to the bundled default filenames (B5/A2).
 *
 * Dispatches warning log events for any file that cannot be fetched.
 *
 * @param element           - Element used for dispatching log events.
 * @param edition           - The detected IEC 61850 edition.
 * @param editionComponents - Entry map from code components JSON, or null when
 *                            the edition has no entries yet.
 * @returns Object with the loaded NSD XMLDocuments (absent keys = load failed).
 */
export async function loadNsdFilesForEdition(
  element: Element,
  edition: IEC61850Edition,
  editionComponents: EditionComponents | null
): Promise<NsdDocuments> {
  const resolve = (part: string): string => {
    const entry: CodeComponentEntry | undefined = editionComponents?.[part];
    if (entry?.NSD) {
      return entry.NSD;
    }
    const fallback = FALLBACK_NSD_FILENAMES[part];
    if (!entry?.NSD && editionComponents !== null) {
      // Edition is known in JSON but part entry is missing — warn.
      element.dispatchEvent(
        newLogEvent({
          kind: 'warning',
          title: get('compas.nsd.fileMissing'),
          message: get('compas.nsd.fileMissingDetails', {
            filename: `NSD for part ${part} (edition ${edition})`,
          }),
        })
      );
    }
    return fallback;
  };

  const [nsd72, nsd73, nsd74, nsd81] = await Promise.all([
    fetchNsdFile(element, resolve('7-2')),
    fetchNsdFile(element, resolve('7-3')),
    fetchNsdFile(element, resolve('7-4')),
    fetchNsdFile(element, resolve('8-1')),
  ]);

  const result: NsdDocuments = {};
  if (nsd72) result.nsd72 = nsd72;
  if (nsd73) result.nsd73 = nsd73;
  if (nsd74) result.nsd74 = nsd74;
  if (nsd81) result.nsd81 = nsd81;
  return result;
}
