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
  query
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import "../../_snowpack/pkg/@material/mwc-dialog.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import "../compas/CompasSave.js";
export default class CompasSaveAsMenuPlugin extends LitElement {
  constructor() {
    super(...arguments);
    this.editCount = -1;
  }
  async run() {
    await this.compasSaveElement.requestUpdate();
    this.dialog.show();
  }
  render() {
    return html`<mwc-dialog
      id="compas-save-as-dlg"
      heading="${translate("compas.save.saveAsTitle")}"
    >
      ${!this.doc || !this.docName ? html`<compas-loading></compas-loading>` : html`
            <compas-save
              .doc="${this.doc}"
              .docName="${this.docName}"
              .editCount=${this.editCount}
              @doc-saved=${() => {
      this.dialog.close();
    }}
            >
            </compas-save>
            <mwc-button
              slot="primaryAction"
              icon="save"
              trailingIcon
              label="${translate("save")}"
              @click=${() => {
      if (this.compasSaveElement.valid()) {
        this.dispatchEvent(newPendingStateEvent(this.compasSaveElement.saveToCompas()));
      }
    }}
            ></mwc-button>
            <mwc-button
              slot="secondaryAction"
              icon=""
              label="${translate("close")}"
              dialogAction="close"
              style="--mdc-theme-primary: var(--mdc-theme-error)"
            >
            </mwc-button>
          `}
    </mwc-dialog>`;
  }
}
CompasSaveAsMenuPlugin.styles = css`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
__decorate([
  property()
], CompasSaveAsMenuPlugin.prototype, "doc", 2);
__decorate([
  property()
], CompasSaveAsMenuPlugin.prototype, "docName", 2);
__decorate([
  property({type: Number})
], CompasSaveAsMenuPlugin.prototype, "editCount", 2);
__decorate([
  query("mwc-dialog#compas-save-as-dlg")
], CompasSaveAsMenuPlugin.prototype, "dialog", 2);
__decorate([
  query("compas-save")
], CompasSaveAsMenuPlugin.prototype, "compasSaveElement", 2);
