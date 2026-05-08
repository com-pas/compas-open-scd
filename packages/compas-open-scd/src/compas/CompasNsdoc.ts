import { get } from 'lit-translate';
import { newLoadNsdocEvent, newLogEvent } from '@compas-oscd/core';
import type {
  IEC61850Edition,
  EditionComponents,
  CodeComponentEntry,
} from '../compas-services/CompasCodeComponentsService.js';

const NSDOC_BASE_PATH = '/public/nsdoc/';

/**
 * Loads NSDOC files for the given IEC 61850 edition using filenames from the
 * code components JSON.
 *
 * For each IEC 61850 part (7-2, 7-3, 7-4, 8-1), the NSDOC file is fetched
 * from `/public/nsdoc/`. Missing or unreachable files are reported as warnings.
 *
 * Successfully loaded files are dispatched as `newLoadNsdocEvent` so the
 * upstream Settings addon stores them in localStorage and re-initializes the
 * `Nsdoc` object.
 *
 * @param component         - Element on which events are dispatched.
 * @param edition           - The detected IEC 61850 edition.
 * @param editionComponents - Entry map from code components JSON, or null when
 *                            the edition has no entries yet (reports an error).
 */
export async function loadNsdocFilesForEdition(
  component: Element,
  edition: IEC61850Edition,
  editionComponents: EditionComponents | null
): Promise<void> {
  if (editionComponents === null) {
    component.dispatchEvent(
      newLogEvent({
        kind: 'error',
        title: get('compas.nsdoc.editionNotSupported'),
        message: get('compas.nsdoc.editionNotSupportedDetails', { edition }),
      })
    );
    return;
  }

  const parts = ['7-2', '7-3', '7-4', '8-1'];

  await Promise.all(
    parts.map(async (part) => {
      const entry: CodeComponentEntry | undefined = editionComponents[part];
      if (!entry?.NSDOC) {
        component.dispatchEvent(
          newLogEvent({
            kind: 'warning',
            title: get('compas.nsdoc.fileMissing'),
            message: get('compas.nsdoc.fileMissingDetails', {
              filename: `NSDOC for part ${part} (edition ${edition})`,
            }),
          })
        );
        return;
      }

      const filename = entry.NSDOC;
      const url = `${NSDOC_BASE_PATH}${filename}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          component.dispatchEvent(
            newLogEvent({
              kind: 'warning',
              title: get('compas.nsdoc.fileMissing'),
              message: get('compas.nsdoc.fileMissingDetails', { filename }),
            })
          );
          return;
        }
        const content = await response.text();
        component.dispatchEvent(newLoadNsdocEvent(content, filename));
      } catch {
        component.dispatchEvent(
          newLogEvent({
            kind: 'warning',
            title: get('compas.nsdoc.fileMissing'),
            message: get('compas.nsdoc.fileMissingDetails', { filename }),
          })
        );
      }
    })
  );
}
