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
import {translate, translateUnsafeHTML} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-dialog.js";
import {saveDocumentToFile} from "../file.js";
export let CompasSessionExpiredDialogElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.expiredSessionMessage = 15 * 60 * 1e3;
    this.doc = null;
    this.docName = "";
  }
  show() {
    if (!this.dialog.open) {
      this.dialog.show();
    }
  }
  close() {
    if (this.dialog.open) {
      this.dialog.close();
    }
  }
  save() {
    saveDocumentToFile(this.doc, this.docName);
  }
  render() {
    const expiredSessionMessage = this.expiredSessionMessage / 60 / 1e3;
    return html`
      <mwc-dialog id="compasSessionExpiredDialog"
                  heading="${translate("compas.session.headingExpired")}"
                  scrimClickAction=""
                  escapeKeyAction=""">
        <div>${this.doc == null ? translateUnsafeHTML("compas.session.explainExpiredWithoutProject", {expiredSessionMessage}) : translateUnsafeHTML("compas.session.explainExpiredWithProject", {
      expiredSessionMessage
    })}
        </div>
        ${this.doc !== null ? html`<mwc-button
                slot="primaryAction"
                @click=${() => this.save()}
                ?disabled=${this.doc == null}
              >
                ${translate("compas.session.saveProject")}
              </mwc-button>` : html``}
      </mwc-dialog>
    `;
  }
};
CompasSessionExpiredDialogElement.styles = css`
    #compasSessionExpiredDialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
__decorate([
  property({type: Number})
], CompasSessionExpiredDialogElement.prototype, "expiredSessionMessage", 2);
__decorate([
  property({type: Document})
], CompasSessionExpiredDialogElement.prototype, "doc", 2);
__decorate([
  property({type: String})
], CompasSessionExpiredDialogElement.prototype, "docName", 2);
__decorate([
  query('mwc-dialog[id="compasSessionExpiredDialog"]')
], CompasSessionExpiredDialogElement.prototype, "dialog", 2);
CompasSessionExpiredDialogElement = __decorate([
  customElement("compas-session-expired-dialog")
], CompasSessionExpiredDialogElement);
