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
import {customElement, html, LitElement} from "../../_snowpack/pkg/lit-element.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {newOpenDocEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/filtered-list.js";
import {
  createLogEvent,
  handleError,
  handleResponse,
  parseXml
} from "../compas-services/foundation.js";
import {CompasCimMappingService} from "../compas-services/CompasCimMappingService.js";
let CompasImportFromApiElement = class extends LitElement {
  async processCimFile(name) {
    const doc = await fetch("/public/cim/" + name + ".xml").catch(handleError).then(handleResponse).then(parseXml);
    await CompasCimMappingService().map({cimData: [{name: name + ".xml", doc}]}).then((response) => {
      const sclName = name + ".ssd";
      const sclElement = response.querySelectorAll("SCL").item(0);
      const sclDocument = document.implementation.createDocument("", "", null);
      sclDocument.getRootNode().appendChild(sclElement.cloneNode(true));
      this.dispatchEvent(newOpenDocEvent(sclDocument, sclName));
    }).catch((reason) => createLogEvent(this, reason));
    this.dispatchEvent(newWizardEvent());
  }
  render() {
    return html`
      <filtered-list>
        <mwc-list-item
          @click=${() => this.dispatchEvent(newPendingStateEvent(this.processCimFile("cim-eq-hoorn-v3")))}
        >
          cim-eq-hoorn-v3
        </mwc-list-item>
        <mwc-list-item
          @click=${() => this.dispatchEvent(newPendingStateEvent(this.processCimFile("cim-eq-makkum")))}
        >
          cim-eq-makkum
        </mwc-list-item>
        <mwc-list-item
          @click=${() => this.dispatchEvent(newPendingStateEvent(this.processCimFile("cim-eq-winselingseweg-voorbeeld")))}
        >
          cim-eq-winselingseweg-voorbeeld
        </mwc-list-item>
        <mwc-list-item
          @click=${() => this.dispatchEvent(newPendingStateEvent(this.processCimFile("EQ-entsoe-voorbeeld")))}
        >
          EQ-entsoe-voorbeeld
        </mwc-list-item>
      </filtered-list>
    `;
  }
};
CompasImportFromApiElement = __decorate([
  customElement("compas-import-from-api")
], CompasImportFromApiElement);
export default CompasImportFromApiElement;
