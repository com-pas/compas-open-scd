import {LitElement} from "../../_snowpack/pkg/lit-element.js";
import {get} from "../../_snowpack/pkg/lit-translate.js";
import {oscdHtml} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {mergeWizard} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizards.js";
import "../compas/CompasOpen.js";
export default class CompasMergeMenuPlugin extends LitElement {
  mergeCompasWizard() {
    return [
      {
        title: get("compas.merge.title"),
        content: [
          oscdHtml`<compas-open
            @doc-retrieved=${(evt) => {
            this.parent.dispatchEvent(newWizardEvent(mergeWizard(this.doc.documentElement, evt.detail.doc.documentElement)));
            this.parent.dispatchEvent(newWizardEvent());
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
    this.dispatchEvent(newWizardEvent(this.mergeCompasWizard()));
  }
}
