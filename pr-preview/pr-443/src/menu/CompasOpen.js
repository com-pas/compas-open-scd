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
import {css, html, LitElement, query} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import "../../_snowpack/pkg/@material/mwc-dialog.js";
import {newLogEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newOpenDocEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {updateDocumentInOpenSCD} from "../compas/foundation.js";
import "../compas/CompasOpen.js";
export default class CompasOpenMenuPlugin extends LitElement {
  async run() {
    this.compasOpenElement.selectedType = void 0;
    await this.compasOpenElement.requestUpdate();
    this.dialog.show();
  }
  async openDoc(event) {
    if (event.detail.localFile) {
      this.dispatchEvent(newLogEvent({kind: "reset"}));
      this.dispatchEvent(newOpenDocEvent(event.detail.doc, event.detail.docName, {
        detail: {docId: void 0}
      }));
    } else {
      updateDocumentInOpenSCD(this, event.detail.doc, event.detail.docName);
    }
    this.dialog.close();
  }
  render() {
    return html`<mwc-dialog
      id="compas-open-dlg"
      heading="${translate("compas.open.title")}"
    >
      <compas-open
        @doc-retrieved=${(event) => {
      this.dispatchEvent(newPendingStateEvent(this.openDoc(event)));
    }}
      >
      </compas-open>
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
CompasOpenMenuPlugin.styles = css`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
__decorate([
  query("mwc-dialog#compas-open-dlg")
], CompasOpenMenuPlugin.prototype, "dialog", 2);
__decorate([
  query("compas-open")
], CompasOpenMenuPlugin.prototype, "compasOpenElement", 2);
