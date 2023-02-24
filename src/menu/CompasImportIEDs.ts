import { html, query, TemplateResult } from 'lit-element';
import { translate } from 'lit-translate';

import { DocRetrievedEvent } from '../compas/CompasOpen.js';
import ImportingIedPlugin from './ImportIEDs.js';

import '../compas/CompasOpen.js';
import { Dialog } from '@material/mwc-dialog';

export default class CompasImportIEDSMenuPlugin extends ImportingIedPlugin {
  doc!: XMLDocument;
  parent!: HTMLElement;

  @query('mwc-dialog#compas-open-dlg')
  compasOpen!: Dialog;

  renderInput(): TemplateResult {
    return html`<mwc-dialog
      id="compas-open-dlg"
      heading="${translate('compas.open.title')}"
    >
      <compas-open
        @doc-retrieved=${(event: DocRetrievedEvent) => {
          this.onLoadCompasFiles(event);
        }}
      >
      </compas-open>
      <mwc-button
        slot="secondaryAction"
        icon=""
        label="${translate('close')}"
        dialogAction="close"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      >
      </mwc-button>
    </mwc-dialog>`;
  }

  protected onLoadCompasFiles(event: DocRetrievedEvent): void {
    this.importDoc = event.detail.doc;
    this.prepareImport();
    this.compasOpen.close();
  }

  async run(): Promise<void> {
    this.compasOpen.show();
  }
}
