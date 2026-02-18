import {LitElement} from "../../_snowpack/pkg/lit-element.js";
import {get} from "../../_snowpack/pkg/lit-translate.js";
import {oscdHtml} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/filtered-list.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import "../compas/CompasImportFromApi.js";
export default class ImportFromApiPlugin extends LitElement {
  importFromApiWizard() {
    return [
      {
        title: get("compas.import.title"),
        content: [oscdHtml`<compas-import-from-api></compas-import-from-api>`]
      }
    ];
  }
  async run() {
    this.dispatchEvent(newWizardEvent(this.importFromApiWizard()));
  }
}
