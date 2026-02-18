import {LitElement} from "../../_snowpack/pkg/lit-element.js";
import {get} from "../../_snowpack/pkg/lit-translate.js";
import {oscdHtml} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {mergeSubstation} from "../../plugins/src/menu/UpdateSubstation.js";
import "../compas/CompasOpen.js";
export default class CompasUpdateSubstationMenuPlugin extends LitElement {
  substationCompasWizard() {
    return [
      {
        title: get("compas.updateSubstation.title"),
        content: [
          oscdHtml`<compas-open
            @doc-retrieved=${(evt) => {
            mergeSubstation(this, this.doc, evt.detail.doc);
            this.dispatchEvent(newWizardEvent());
          }}
          >
          </compas-open> `
        ]
      }
    ];
  }
  firstUpdated() {
    this.parent = this.parentElement;
  }
  async run() {
    this.dispatchEvent(newWizardEvent(this.substationCompasWizard()));
  }
}
