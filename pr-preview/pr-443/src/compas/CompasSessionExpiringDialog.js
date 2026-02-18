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
export let CompasSessionExpiringDialogElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.expiringSessionWarning = 10 * 60 * 1e3;
    this.expiredSessionMessage = 15 * 60 * 1e3;
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
  render() {
    return html`
      <mwc-dialog
        id="compasSessionExpiringDialog"
        heading="${translate("compas.session.headingExpiring")}"
        scrimClickAction=""
      >
        <div>
          ${translateUnsafeHTML("compas.session.explainExpiring", {
      timeTillExpire: (this.expiredSessionMessage - this.expiringSessionWarning) / 60 / 1e3,
      expiringSessionWarning: this.expiringSessionWarning / 60 / 1e3
    })}
        </div>
        <mwc-button slot="primaryAction" dialogAction="close">
          ${translate("compas.session.continue")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
CompasSessionExpiringDialogElement.styles = css`
    #compasSessionExpiringDialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
__decorate([
  property({type: Number})
], CompasSessionExpiringDialogElement.prototype, "expiringSessionWarning", 2);
__decorate([
  property({type: Number})
], CompasSessionExpiringDialogElement.prototype, "expiredSessionMessage", 2);
__decorate([
  query('mwc-dialog[id="compasSessionExpiringDialog"]')
], CompasSessionExpiringDialogElement.prototype, "dialog", 2);
CompasSessionExpiringDialogElement = __decorate([
  customElement("compas-session-expiring-dialog")
], CompasSessionExpiringDialogElement);
