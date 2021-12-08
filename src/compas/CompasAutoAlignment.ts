import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {get, translate} from "lit-translate";

import {newLogEvent, newOpenDocEvent, newWizardEvent} from "../foundation.js";
import {getOpenScdElement} from "./foundation.js";

import {CompasSclAutoAlignmentService} from "../compas-services/CompasSclAutoAlignmentService.js";
import {createLogEvent} from "../compas-services/foundation.js";

@customElement('compas-auto-alignment')
export default class CompasAutoAlignmentElement extends LitElement {
  @property({type: Document})
  doc!: XMLDocument;
  @property({type: String})
  docName!: string;
  @property({type: String})
  docId?: string;

  getSelectedValues() : string[] {
    const selectedItems: string[] = [];
    this.shadowRoot!.querySelectorAll('mwc-check-list-item').forEach((item, key) => {
      if (item.selected) {
        selectedItems[key] = item.value;
      }
    });
    return selectedItems;
  }

  valid(): boolean {
    return this.getSelectedValues().length > 0;
  }

  async execute(): Promise<void> {
    if (this.valid()) {
      await CompasSclAutoAlignmentService().updateSCL(this.doc, this.getSelectedValues())
        .then(sclDocument => {
          const openScd = getOpenScdElement();
          openScd.dispatchEvent(newLogEvent({kind: 'reset'}));
          openScd.dispatchEvent(newOpenDocEvent(sclDocument, this.docName, {detail: {docId: this.docId}}));

          openScd.dispatchEvent(
            newLogEvent({
              kind: 'info',
              title: get('compas.autoAlignment.success')
            }));

          // Close the Save Dialog.
          this.dispatchEvent(newWizardEvent());
        })
        .catch(createLogEvent);

      // Close the Save Dialog.
      this.dispatchEvent(newWizardEvent());
    }
  }

  render(): TemplateResult {
    return html `
      ${this.doc?.querySelector(':root > Substation')
        ? html`
          <section tabindex="0">
            <mwc-list multi required>
              ${Array.from(this.doc.querySelectorAll(':root > Substation') ?? [])
              .map(substation =>
                  html`
                    <mwc-check-list-item left value="${substation.getAttribute('name')}">
                      ${substation.getAttribute('name')}
                      ${substation.hasAttribute('desc') ? html `(${substation.getAttribute('desc')})`: html ``}
                    </mwc-check-list-item>
                  `
              )}
            </mwc-list>
          </section>
        `
        : html`
          <section tabindex="0">
            <span style="color: var(--base1)">${translate('compas.autoAlignment.missing')}</span>
          </section>
        `}
    `;
  }
}
