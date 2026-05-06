import type { IEC61850Edition } from '../compas-services/CompasCodeComponentsService.js';

/**
 * Derives the IEC 61850 edition from the version/revision/release attributes
 * on the SCL root element.
 *
 * Mapping:
 *  - version="" revision="" release=""  → Edition_1
 *  - version="2007" revision="B" release="" → Edition_2
 *  - version="2007" revision="B" release="4" → Edition_2_1
 *
 * Returns undefined when the attributes do not match any known edition.
 *
 * @param doc - The parsed SCL XMLDocument.
 */
export function getIec61850Edition(
  doc: XMLDocument
): IEC61850Edition | undefined {
  const scl = doc.documentElement;
  if (scl?.tagName !== 'SCL') {
    return undefined;
  }

  const version = scl.getAttribute('version') ?? '';
  const revision = scl.getAttribute('revision') ?? '';
  const release = scl.getAttribute('release') ?? '';

  if (version === '' && revision === '' && release === '') {
    return 'Edition_1';
  }
  if (version === '2007' && revision === 'B' && release === '') {
    return 'Edition_2';
  }
  if (version === '2007' && revision === 'B' && release === '4') {
    return 'Edition_2_1';
  }

  return undefined;
}
