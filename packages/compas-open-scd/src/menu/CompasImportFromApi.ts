import { LitElement } from 'lit-element';
import { get } from 'lit-translate';

import '@compas-oscd/open-scd/filtered-list.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import {
  newWizardEvent,
  oscdHtml,
  Wizard,
} from '@compas-oscd/open-scd/dist/foundation.js';

import '../compas/CompasImportFromApi.js';

export default class ImportFromApiPlugin extends LitElement {
  private importFromApiWizard(): Wizard {
    return [
      {
        title: get('compas.import.title'),
        content: [oscdHtml`<compas-import-from-api></compas-import-from-api>`],
      },
    ];
  }

  async run(): Promise<void> {
    this.dispatchEvent(newWizardEvent(this.importFromApiWizard()));
  }
}
