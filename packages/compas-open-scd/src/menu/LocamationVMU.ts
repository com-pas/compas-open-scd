import { LitElement } from 'lit-element';

import { newWizardEvent } from '@compas-oscd/open-scd/foundation.js';
import { Nsdoc } from '@compas-oscd/open-scd/foundation/nsdoc.js';

import '../locamation/LocamationIEDList.js';

import { locamationIEDListWizard } from '../locamation/LocamationIEDList.js';

export default class LocamationVMUMenuPlugin extends LitElement {
  doc!: XMLDocument;
  nsdoc!: Nsdoc;

  async run(): Promise<void> {
    this.dispatchEvent(
      newWizardEvent(locamationIEDListWizard(this.doc, this.nsdoc))
    );
  }
}
