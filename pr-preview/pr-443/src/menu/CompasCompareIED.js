import {html} from "../../_snowpack/pkg/lit-element.js";
import "../compas/CompasOpen.js";
import CompareIEDPlugin from "../../plugins/src/menu/CompareIED.js";
export default class CompasCompareIEDPlugin extends CompareIEDPlugin {
  renderSelectTemplateFile() {
    return html`<compas-open
        @doc-retrieved=${(evt) => {
      this.templateDoc = evt.detail.doc;
    }}
      ></compas-open>
      ${this.renderCloseButton()}`;
  }
}
