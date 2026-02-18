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
import {html, query} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import ImportingIedPlugin from "../../plugins/src/menu/ImportIEDs.js";
import "../compas/CompasOpen.js";
export default class CompasImportIEDSMenuPlugin extends ImportingIedPlugin {
  renderInput() {
    return html`<mwc-dialog
      id="compas-import-ieds-dlg"
      heading="${translate("compas.open.title")}"
    >
      <compas-open
        @doc-retrieved=${(event) => {
      this.onLoadCompasFiles(event);
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
  onLoadCompasFiles(event) {
    this.prepareImport(event.detail.doc, event.detail.docName);
    this.compasOpen.close();
  }
  async run() {
    this.compasOpen.show();
  }
}
__decorate([
  query("mwc-dialog#compas-import-ieds-dlg")
], CompasImportIEDSMenuPlugin.prototype, "compasOpen", 2);
