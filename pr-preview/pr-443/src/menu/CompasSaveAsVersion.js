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
  html,
  LitElement,
  property,
  query,
  state
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import "../../_snowpack/pkg/@material/mwc-dialog.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import "../compas/CompasOpen.js";
import "../compas/CompasSave.js";
import {
  COMPAS_SCL_PRIVATE_TYPE,
  copyCompasLabels,
  copyCompasSclFileType,
  copyCompasSclName,
  getPrivate
} from "../compas/private.js";
export default class CompasSaveAsVersionMenuPlugin extends LitElement {
  constructor() {
    super(...arguments);
    this.editCount = -1;
  }
  async run() {
    this.saveToDoc = void 0;
    this.saveToDocName = void 0;
    this.saveToDocId = void 0;
    if (this.compasSaveElement) {
      await this.compasSaveElement.requestUpdate();
    }
    if (this.compasOpenElement) {
      await this.compasOpenElement.requestUpdate();
    }
    this.dialog.show();
  }
  copyCompasPrivates() {
    if (this.saveToDoc) {
      const toPrivateElement = getPrivate(this.doc.documentElement, COMPAS_SCL_PRIVATE_TYPE);
      const fromPrivateElement = getPrivate(this.saveToDoc.documentElement, COMPAS_SCL_PRIVATE_TYPE);
      copyCompasSclName(fromPrivateElement, toPrivateElement);
      copyCompasSclFileType(fromPrivateElement, toPrivateElement);
      copyCompasLabels(fromPrivateElement, toPrivateElement);
    }
  }
  render() {
    return html` <mwc-dialog
      id="compas-save-as-version-dlg"
      heading="${translate("compas.save.saveAsVersionTitle")}"
    >
      ${!this.doc || !this.docName ? html` <compas-loading></compas-loading>` : !this.saveToDoc || !this.saveToDocId ? html`
            <compas-open
              .allowLocalFile="${false}"
              @doc-retrieved=${(event) => {
      this.saveToDoc = event.detail.doc;
      this.saveToDocName = event.detail.docName;
      this.saveToDocId = event.detail.docId;
      this.copyCompasPrivates();
    }}
            ></compas-open>
          ` : html` <compas-save
              .doc="${this.doc}"
              .docName="${this.saveToDocName}"
              .docId="${this.saveToDocId}"
              .allowLocalFile="${false}"
              .editCount=${this.editCount}
              @doc-saved=${() => {
      this.dialog.close();
    }}
            ></compas-save>
            <mwc-button
              slot="primaryAction"
              icon="save"
              trailingIcon
              label="${translate("save")}"
              @click=${() => {
      if (this.compasSaveElement && this.compasSaveElement.valid()) {
        this.dispatchEvent(newPendingStateEvent(this.compasSaveElement.saveToCompas()));
      }
    }}
            ></mwc-button>`}
      <mwc-button
        slot="secondaryAction"
        icon=""
        label="${translate("close")}"
        dialogAction="close"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      >
      </mwc-button>
    </mwc-dialog>`;
  }
}
CompasSaveAsVersionMenuPlugin.styles = css`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
__decorate([
  property()
], CompasSaveAsVersionMenuPlugin.prototype, "doc", 2);
__decorate([
  property()
], CompasSaveAsVersionMenuPlugin.prototype, "docName", 2);
__decorate([
  property({type: Number})
], CompasSaveAsVersionMenuPlugin.prototype, "editCount", 2);
__decorate([
  state()
], CompasSaveAsVersionMenuPlugin.prototype, "saveToDoc", 2);
__decorate([
  state()
], CompasSaveAsVersionMenuPlugin.prototype, "saveToDocName", 2);
__decorate([
  state()
], CompasSaveAsVersionMenuPlugin.prototype, "saveToDocId", 2);
__decorate([
  query("mwc-dialog#compas-save-as-version-dlg")
], CompasSaveAsVersionMenuPlugin.prototype, "dialog", 2);
__decorate([
  query("compas-save")
], CompasSaveAsVersionMenuPlugin.prototype, "compasSaveElement", 2);
__decorate([
  query("compas-open")
], CompasSaveAsVersionMenuPlugin.prototype, "compasOpenElement", 2);
