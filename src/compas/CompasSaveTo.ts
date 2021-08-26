import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {get, translate} from "lit-translate";
import {TextFieldBase} from "@material/mwc-textfield/mwc-textfield-base";

import {newLogEvent, newPendingStateEvent, newWizardEvent, Wizard, WizardInput} from "../foundation.js";

import {CompasChangeSetRadiogroup} from "./CompasChangeSet.js";
import {CompasScltypeRadiogroup} from "./CompasScltypeRadiogroup.js";
import {CompasSclDataService} from "../compas-services/CompasSclDataService.js";
import {
  getOpenScdElement,
  getTypeFromDocName,
  stripExtensionFromName,
  updateDocumentInOpenSCD
} from "./foundation.js";

import './CompasChangeSet.js';
import './CompasScltypeRadiogroup.js';

@customElement('compas-save-to')
export class CompasSaveTo extends LitElement {
  @property({type: String})
  docName!: string;
  @property({type: String})
  docId!: string;

  getNameField() : TextFieldBase {
    return <TextFieldBase>this.shadowRoot!.querySelector('mwc-textfield[id="name"]');
  }

  getSclTypeRadioGroup() : CompasScltypeRadiogroup {
    return (<CompasScltypeRadiogroup>this.shadowRoot!
      .querySelector('compas-scltype-radiogroup'))
  }

  getChangeSetRadiogroup(): CompasChangeSetRadiogroup {
    return (<CompasChangeSetRadiogroup>this.shadowRoot!
      .querySelector('compas-changeset-radiogroup'))
  }

  valid(): boolean {
    if (!this.docId) {
      return this.getNameField().checkValidity()
        && this.getSclTypeRadioGroup().valid();
    }
    return this.getChangeSetRadiogroup().valid();
  }

  private async getSclDocument(type: string, id: string): Promise<void>{
    await CompasSclDataService().getSclDocument(type, id)
      .then(response => {
        // Copy the SCL Result from the Response and create a new Document from it.
        const sclElement = response.querySelectorAll("SCL").item(0);
        const sclDocument = document.implementation.createDocument("", "", null);
        sclDocument.getRootNode().appendChild(sclElement.cloneNode(true));

        updateDocumentInOpenSCD(sclDocument);
      });
  }

  private async addSclToCompas(wizard: Element, doc: XMLDocument): Promise<void> {
    const name = stripExtensionFromName(this.getNameField().value);
    const docType = this.getSclTypeRadioGroup().getSelectedValue() ?? '';

    await CompasSclDataService().addSclDocument(docType, {sclName: name, doc: doc})
      .then(xmlResponse => {
        const id = Array.from(xmlResponse.querySelectorAll('*|Id') ?? [])[0]

        // Retrieve the document to fetch server-side updates.
        this.getSclDocument(docType, id.textContent ?? '');

        const openScd = getOpenScdElement();
        openScd.dispatchEvent(
          newLogEvent({
            kind: 'info',
            title: get('compas.saveTo.addSuccess')
          }));

        // Close the Save Dialog.
        openScd.dispatchEvent(newWizardEvent());
      }).catch(() => {
        const openScd = getOpenScdElement();
        openScd.dispatchEvent(
          newLogEvent({
            kind: 'error',
            title: get('compas.saveTo.addError')
          }));
    });
  }

  private async updateSclInCompas(wizard: Element, docId: string, docName: string, doc: XMLDocument): Promise<void> {
    const changeSet = this.getChangeSetRadiogroup().getSelectedValue();
    const docType = getTypeFromDocName(docName);

    await CompasSclDataService().updateSclDocument(docType.toUpperCase(), docId, {changeSet: changeSet!, doc: doc})
      .then(() => {
        // Retrieve the document to fetch server-side updates.
        this.getSclDocument(docType, docId);

        const openScd = getOpenScdElement();
        openScd.dispatchEvent(
          newLogEvent({
            kind: 'info',
            title: get('compas.saveTo.updateSuccess')}));

        // Close the Save Dialog.
        openScd.dispatchEvent(newWizardEvent());
      }).catch(() => {
        const openScd = getOpenScdElement();
        openScd.dispatchEvent(
          newLogEvent({
            kind: 'error',
            title: get('compas.saveTo.updateError')}));
      });
  }

  async saveToCompas(wizard: Element, docId: string, docName: string, doc: XMLDocument): Promise<void> {
    if (!docId) {
      await this.addSclToCompas(wizard, doc);
    } else {
      await this.updateSclInCompas(wizard, docId, docName, doc);
    }
  }

  render(): TemplateResult {
    if (!this.docId) {
      return html`
        <mwc-textfield dialogInitialFocus id="name" label="${translate('scl.name')}"
                       value="${this.docName}" required>
        </mwc-textfield>

        <compas-scltype-radiogroup .value="${getTypeFromDocName(this.docName)}"></compas-scltype-radiogroup>
      `;
    }

    return html `
      <compas-changeset-radiogroup></compas-changeset-radiogroup>
    `;
  }
}

function saveToCompas(docId: string, docName: string, doc: XMLDocument) {
  return function (inputs: WizardInput[], wizard: Element) {
    const compasSaveTo = <CompasSaveTo>wizard.shadowRoot!.querySelector('compas-save-to')
    if (!doc || !compasSaveTo.valid()) {
      return [];
    }

    getOpenScdElement().dispatchEvent(newPendingStateEvent(compasSaveTo.saveToCompas(wizard, docId, docName, doc)));
    return [];
  };
}

export interface SaveToCompasWizardOptions {
  docId: string,
  docName: string
}
export function saveToCompasWizard(doc: XMLDocument, saveToOptions: SaveToCompasWizardOptions): Wizard {
  return [
    {
      title: get('compas.saveTo.title'),
      primary: {
        icon: 'save',
        label: get('save'),
        action: saveToCompas(saveToOptions.docId, saveToOptions.docName, doc),
      },
      content: [
        html `
          <compas-save-to .docName="${saveToOptions.docName}" .docId="${saveToOptions.docId}"/>
        ` ],
    },
  ];
}

