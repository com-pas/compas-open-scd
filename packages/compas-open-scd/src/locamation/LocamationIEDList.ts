import {
  css,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';
import { get, translate } from 'lit-translate';

import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';

import {
  newSubWizardEvent,
  newWizardEvent,
  Wizard,
  WizardInputElement,
} from '@compas-oscd/open-scd/dist/foundation.js';
import { isSCLNamespace } from '@compas-oscd/open-scd/dist/schemas.js';
import { Nsdoc } from '@compas-oscd/open-scd/dist/foundation/nsdoc.js';

import {
  iedHeader,
  lDeviceHeader,
  LOCAMATION_MANUFACTURER,
  LOCAMATION_PRIVATE,
} from './foundation.js';
import { locamationLNListWizard } from './LocamationLNList.js';

@customElement('locamation-ied-list')
export class LocamationIEDListElement extends LitElement {
  @property({ type: Document })
  doc!: XMLDocument;
  @property()
  nsdoc!: Nsdoc;

  private get logicaDevices(): Element[] {
    return Array.from(
      this.doc.querySelectorAll(
        `IED[manufacturer="${LOCAMATION_MANUFACTURER}"] LDevice`
      )
    )
      .filter(element => isSCLNamespace(element))
      .filter(
        element =>
          element.querySelector(
            `LN > Private[type="${LOCAMATION_PRIVATE}"]`
          ) !== null
      );
  }

  close(): void {
    // Close the Save Dialog.
    this.dispatchEvent(newWizardEvent());
  }

  render(): TemplateResult {
    const lDevices = this.logicaDevices;
    if (lDevices.length > 0) {
      return html`
        <mwc-list>
          ${lDevices.map(lDevice => {
            const ied = lDevice.closest('IED')!;
            return html` <mwc-list-item
              twoline
              @click="${(e: Event) => {
                e.target?.dispatchEvent(
                  newSubWizardEvent(() =>
                    locamationLNListWizard(lDevice, this.nsdoc)
                  )
                );
              }}"
            >
              <span>${iedHeader(ied)}</span>
              <span slot="secondary">${lDeviceHeader(lDevice)}</span>
            </mwc-list-item>`;
          })}
        </mwc-list>
      `;
    }
    return html`
      <mwc-list>
        <mwc-list-item
          ><i>${translate('locamation.vmu.ied.missing')}</i></mwc-list-item
        >
      </mwc-list>
    `;
  }

  static readonly styles = css`
    :host {
      width: 20vw;
    }
  `;
}

function close() {
  return function (inputs: WizardInputElement[], wizard: Element) {
    const locamationIEDListElement = <LocamationIEDListElement>(
      wizard.shadowRoot!.querySelector('locamation-ied-list')
    );
    locamationIEDListElement.close();
    return [];
  };
}

export function locamationIEDListWizard(
  doc: XMLDocument,
  nsdoc: Nsdoc
): Wizard {
  return [
    {
      title: get('locamation.vmu.ied.title'),
      secondary: {
        icon: 'close',
        label: get('close'),
        action: close(),
      },
      content: [
        html`<locamation-ied-list
          .doc="${doc}"
          .nsdoc="${nsdoc}"
        ></locamation-ied-list>`,
      ],
    },
  ];
}
