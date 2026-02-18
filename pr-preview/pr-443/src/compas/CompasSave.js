var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  css,
  customElement,
  html,
  LitElement,
  property,
  query
} from "../../_snowpack/pkg/lit-element.js";
import {get, translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-textfield.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import {newLogEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {saveDocumentToFile} from "../file.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/WizardDivider.js";
import {CompasExistsIn} from "./CompasExistsIn.js";
import {CompasSclDataService} from "../compas-services/CompasSclDataService.js";
import {createLogEvent} from "../compas-services/foundation.js";
import {
  COMPAS_SCL_PRIVATE_TYPE,
  createPrivate,
  getPrivate
} from "./private.js";
import {
  getTypeFromDocName,
  stripExtensionFromName,
  updateDocumentInOpenSCD
} from "./foundation.js";
import "./CompasChangeSetRadiogroup.js";
import "./CompasComment.js";
import "./CompasLabelsField.js";
import "./CompasLoading.js";
import "./CompasSclTypeSelect.js";
import {nothing} from "../../_snowpack/pkg/lit-html.js";
export function newDocSavedEvent() {
  return new CustomEvent("doc-saved", {
    bubbles: true,
    composed: true
  });
}
let CompasSaveElement = class extends CompasExistsIn(LitElement) {
  constructor() {
    super(...arguments);
    this.allowLocalFile = true;
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (_changedProperties.has("doc")) {
      if (this.commentField) {
        this.commentField.value = null;
      }
    }
  }
  valid() {
    if (!this.existInCompas) {
      return this.nameField.checkValidity() && this.sclTypeRadioGroup.valid();
    }
    return this.changeSetRadiogroup.valid();
  }
  getCleanFileName() {
    return stripExtensionFromName(this.docName);
  }
  updateLabels() {
    const sclElement = this.doc.documentElement;
    const privateElement = getPrivate(sclElement, COMPAS_SCL_PRIVATE_TYPE);
    this.labelsField.updateLabelsInPrivateElement(privateElement);
  }
  processUpdatedDocument(sclDocument, messageKey) {
    updateDocumentInOpenSCD(this, sclDocument);
    this.dispatchEvent(newLogEvent({
      kind: "info",
      title: get(messageKey)
    }));
    this.dispatchEvent(newDocSavedEvent());
  }
  async addSclToCompas(doc) {
    const name = stripExtensionFromName(this.nameField.value);
    const comment = this.commentField.value;
    const docType = this.sclTypeRadioGroup.getSelectedValue() ?? "";
    await CompasSclDataService().addSclDocument(this, docType, {
      sclName: name,
      comment,
      doc
    }).then((sclDocument) => {
      this.processUpdatedDocument(sclDocument, "compas.save.addSuccess");
    }).catch((reason) => createLogEvent(this, reason));
  }
  async updateSclInCompas(docId, docName, doc) {
    const changeSet = this.changeSetRadiogroup.getSelectedValue();
    const comment = this.commentField.value;
    const docType = getTypeFromDocName(docName);
    await CompasSclDataService().updateSclDocument(this, docType, docId, {
      changeSet,
      comment,
      doc
    }).then((sclDocument) => {
      this.processUpdatedDocument(sclDocument, "compas.save.updateSuccess");
    }).catch((reason) => createLogEvent(this, reason));
  }
  async saveToCompas() {
    this.updateLabels();
    if (!this.docId || !this.existInCompas) {
      await this.addSclToCompas(this.doc);
    } else {
      await this.updateSclInCompas(this.docId, this.docName, this.doc);
    }
  }
  renderSaveFilePart() {
    return html`
      <mwc-button
        label="${translate("compas.save.saveFileButton")}"
        @click=${() => {
      this.updateLabels();
      saveDocumentToFile(this.doc, this.docName);
      this.dispatchEvent(newDocSavedEvent());
    }}
      >
      </mwc-button>
    `;
  }
  renderSaveCompasPart() {
    if (this.existInCompas === void 0) {
      return html` <compas-loading></compas-loading> `;
    }
    if (!this.existInCompas) {
      return html`
        <div id="content">
          <mwc-textfield
            dialogInitialFocus
            id="name"
            label="${translate("scl.name")}"
            value="${this.getCleanFileName()}"
            required
          >
          </mwc-textfield>

          <compas-scltype-select
            .value="${getTypeFromDocName(this.docName)}"
          ></compas-scltype-select>
          <compas-comment></compas-comment>
        </div>
      `;
    }
    return html`
      <div id="content">
        <compas-changeset-radiogroup></compas-changeset-radiogroup>
        <compas-comment></compas-comment>
      </div>
    `;
  }
  renderLabelsPart() {
    const sclElement = this.doc.documentElement;
    let privateElement = getPrivate(sclElement, COMPAS_SCL_PRIVATE_TYPE);
    if (!privateElement) {
      privateElement = createPrivate(sclElement, COMPAS_SCL_PRIVATE_TYPE);
      sclElement.prepend(privateElement);
    }
    return html`<compas-labels-field
      .privateElement="${privateElement}"
    ></compas-labels-field>`;
  }
  render() {
    return html`
      ${this.allowLocalFile ? html` <wizard-divider></wizard-divider>
            <section>
              <h3>${translate("compas.save.localTitle")}</h3>
              ${this.renderSaveFilePart()}
            </section>` : nothing}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${translate("compas.save.compasTitle")}</h3>
        ${this.renderSaveCompasPart()}
      </section>
      <wizard-divider></wizard-divider>
      <section>
        <h3>${translate("compas.save.labelsTitle")}</h3>
        ${this.renderLabelsPart()}
      </section>
    `;
  }
};
CompasSaveElement.styles = css`
    #content > * {
      display: block;
      margin-top: 16px;
    }

    h3 {
      color: var(--mdc-theme-on-surface);
    }
  `;
__decorate([
  property()
], CompasSaveElement.prototype, "doc", 2);
__decorate([
  property()
], CompasSaveElement.prototype, "allowLocalFile", 2);
__decorate([
  query("mwc-textfield#name")
], CompasSaveElement.prototype, "nameField", 2);
__decorate([
  query("compas-scltype-select")
], CompasSaveElement.prototype, "sclTypeRadioGroup", 2);
__decorate([
  query("compas-changeset-radiogroup")
], CompasSaveElement.prototype, "changeSetRadiogroup", 2);
__decorate([
  query("compas-comment")
], CompasSaveElement.prototype, "commentField", 2);
__decorate([
  query("compas-labels-field")
], CompasSaveElement.prototype, "labelsField", 2);
CompasSaveElement = __decorate([
  customElement("compas-save")
], CompasSaveElement);
export default CompasSaveElement;
