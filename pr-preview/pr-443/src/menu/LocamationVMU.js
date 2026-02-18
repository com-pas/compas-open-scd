import {LitElement} from "../../_snowpack/pkg/lit-element.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import "../locamation/LocamationIEDList.js";
import {locamationIEDListWizard} from "../locamation/LocamationIEDList.js";
export default class LocamationVMUMenuPlugin extends LitElement {
  async run() {
    this.dispatchEvent(newWizardEvent(locamationIEDListWizard(this.doc, this.nsdoc)));
  }
}
