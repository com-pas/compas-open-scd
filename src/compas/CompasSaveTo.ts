import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {InfoDetail, newLogEvent, newWizardEvent, Wizard, WizardInput} from "../foundation.js";
import {get, translate} from "lit-translate";

import {TextFieldBase} from "@material/mwc-textfield/mwc-textfield-base";
import {OpenSCD} from "../open-scd.js";
import {CompasChangeSetRadiogroup} from "./CompasChangeSet.js";
import {CompasScltypeRadiogroup} from "./CompasScltypeRadiogroup.js";
import {addSclDocument, updateSclDocument} from "./CompasService.js";

import '../compas/CompasChangeSet.js';
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
      .querySelector("compas-scltype-radiogroup"))
  }

  getChangeSetRadiogroup(): CompasChangeSetRadiogroup {
    return (<CompasChangeSetRadiogroup>this.shadowRoot!
      .querySelector("compas-changeset-radiogroup"))
  }

  checkValidity(): boolean {
    if (!this.docId) {
      return this.getNameField().checkValidity()
        && this.getSclTypeRadioGroup().checkValidity();
    }
    return this.getChangeSetRadiogroup().checkValidity();
  }

  render(): TemplateResult {
    return this.renderWizardPage();
  }

  renderWizardPage(): TemplateResult {
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

function getTypeFromDocName(docName: string) {
  if (docName!.lastIndexOf(".") == docName!.length - 4) {
    return docName.substring(docName.lastIndexOf(".") + 1);
  }
  throw "Unable to determine type from document name!";
}

function addSclToCompass(wizard: Element, compasSaveTo: CompasSaveTo, doc: XMLDocument) {
  const openScd = <OpenSCD>document.querySelector('open-scd');
  let name = compasSaveTo.getNameField()!.value;
  if (name!.lastIndexOf(".") == name!.length - 4) {
    name = name.substring(0, name.lastIndexOf("."));
  }
  const docType = compasSaveTo.getSclTypeRadioGroup().getSelectedValue();
  if (docType === null) {
    return;
  }

  openScd!.docName = name + "." + docType!.toLowerCase()
  addSclDocument(docType, {sclName: name, doc: doc})
    .then(xmlResponse => {
      const id = Array.from(xmlResponse.querySelectorAll('Id') ?? [])[0];
      openScd!.docId = id.textContent ?? "";
      openScd!.docName = (id.textContent ?? "") + "." + docType.toLowerCase()

      document
        .querySelector('open-scd')!
        .dispatchEvent(
          newLogEvent({
            kind: 'info',
            title: get('compas.saveTo.addSuccess')}));

      // Close the Save Dialog.
      openScd!.dispatchEvent(newWizardEvent());
    })
    .catch(() => {
      document
        .querySelector('open-scd')!
        .dispatchEvent(
          newLogEvent({
            kind: 'error',
            title: get('compas.saveTo.addError')}));
    });
}

function updateSclInCompas(wizard: Element, compasSaveTo: CompasSaveTo, docId: string, docName: string, doc: XMLDocument) {
  const openScd = <OpenSCD>document.querySelector('open-scd');
  const changeSet = compasSaveTo.getChangeSetRadiogroup().getSelectedValue();
  if (changeSet === null) {
    return;
  }
  const docType = getTypeFromDocName(docName);

  updateSclDocument(docType.toUpperCase(), docId, {changeSet: changeSet, doc: doc})
    .then(() => {
      document
        .querySelector('open-scd')!
        .dispatchEvent(
          newLogEvent({
            kind: 'info',
            title: get('compas.saveTo.updateSuccess')}));

      // Close the Save Dialog.
      openScd!.dispatchEvent(newWizardEvent());
    })
    .catch(() => {
      document
        .querySelector('open-scd')!
        .dispatchEvent(
          newLogEvent({
            kind: 'error',
            title: get('compas.saveTo.updateError')}));
    });
}

function saveToCompass(docId: string, docName: string, doc: XMLDocument) {
  return function (inputs: WizardInput[], wizard: Element) {
    const compasSaveTo = <CompasSaveTo>wizard.shadowRoot!.querySelector('compas-save-to')
    if (!doc || !compasSaveTo.checkValidity()) {
      return [];
    }

    if (!docId) {
      addSclToCompass(wizard, compasSaveTo, doc);
    } else {
      updateSclInCompas(wizard, compasSaveTo, docId, docName, doc);
    }
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
        action: saveToCompass(saveToOptions.docId, saveToOptions.docName, doc),
      },
      content: [
        html `
          <compas-save-to .docName="${saveToOptions.docName}" .docId="${saveToOptions.docId}"/>
        ` ],
    },
  ];
}
