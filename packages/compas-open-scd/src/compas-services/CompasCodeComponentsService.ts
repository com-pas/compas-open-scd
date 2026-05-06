import { get } from 'lit-translate';
import { newLogEvent } from '@compas-oscd/core';

export type IEC61850Edition = 'Edition_1' | 'Edition_2' | 'Edition_2_1';

export interface CodeComponentEntry {
  NSD: string;
  NSDOC: string;
}

export type EditionComponents = Partial<Record<string, CodeComponentEntry>>;

interface CodeComponentsJson {
  IEC61850_code_components: Partial<Record<IEC61850Edition, EditionComponents>>;
}

const CODE_COMPONENTS_PATH = 'public/xml/IEC61850_code_components.json';

let cachedComponents: CodeComponentsJson | null = null;

/**
 * Fetches and caches the IEC61850_code_components.json file.
 *
 * The file is served from `public/xml/`. At deploy time the private repo
 * overwrites the bundled baseline with the latest version — so this is always
 * a single fetch against one location.
 *
 * Dispatches an error log event on the given element if the file cannot be
 * fetched or parsed.
 *
 * @param element - Element used for dispatching error log events.
 * @returns The parsed JSON, or null on failure.
 */
export async function loadCodeComponentsJson(
  element: Element
): Promise<CodeComponentsJson | null> {
  if (cachedComponents !== null) {
    return cachedComponents;
  }

  try {
    const response = await fetch(CODE_COMPONENTS_PATH);
    if (!response.ok) {
      dispatchCodeComponentsError(
        element,
        CODE_COMPONENTS_PATH,
        response.status
      );
      return null;
    }
    const json = (await response.json()) as CodeComponentsJson;
    cachedComponents = json;
    return json;
  } catch (err) {
    console.warn('Failed to fetch IEC61850 code components JSON:', err);
    dispatchCodeComponentsError(element, CODE_COMPONENTS_PATH);
    return null;
  }
}

/**
 * Returns the code component file entries (NSD + NSDOC filenames) for the
 * given IEC 61850 edition, or null if the JSON hasn't been loaded or the
 * edition is not yet populated.
 *
 * @param components - The parsed code components JSON.
 * @param edition    - The edition key to look up.
 */
export function getEditionComponents(
  components: CodeComponentsJson,
  edition: IEC61850Edition
): EditionComponents | null {
  const editionData = components.IEC61850_code_components[edition];
  if (!editionData || Object.keys(editionData).length === 0) {
    return null;
  }
  return editionData;
}

function dispatchCodeComponentsError(
  element: Element,
  path: string,
  status?: number
): void {
  const detail = get('compas.codeComponents.errorDetails', {
    path,
    status: status === undefined ? 'network error' : String(status),
  });

  element.dispatchEvent(
    newLogEvent({
      kind: 'error',
      title: get('compas.codeComponents.error'),
      message: detail,
    })
  );
}
