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
import {newLogEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newOpenDocEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {stripExtensionFromName} from "../compas/foundation.js";
import {
  CompasCimMappingService
} from "../compas-services/CompasCimMappingService.js";
import {createLogEvent} from "../compas-services/foundation.js";
export default class OpenProjectPlugin extends LitElement {
  async convertCimFile(event) {
    const files = event.target?.files ?? false;
    if (!files)
      return;
    const cimData = [];
    for (const file of Array.from(files)) {
      const text = await file.text();
      const cimName = file.name;
      const cimDocument = new DOMParser().parseFromString(text, "application/xml");
      cimData.push({name: cimName, doc: cimDocument});
    }
    await CompasCimMappingService().map({cimData}).then((response) => {
      const sclName = stripExtensionFromName(cimData[0].name) + ".ssd";
      const sclElement = response.querySelectorAll("SCL").item(0);
      const sclDocument = document.implementation.createDocument("", "", null);
      sclDocument.getRootNode().appendChild(sclElement.cloneNode(true));
      this.dispatchEvent(newLogEvent({kind: "reset"}));
      this.dispatchEvent(newOpenDocEvent(sclDocument, sclName));
    }).catch((reason) => createLogEvent(this, reason));
    this.pluginFileUI.onchange = null;
  }
  async run() {
    this.pluginFileUI.click();
  }
  render() {
    return html`<input
      @click=${(event) => event.target.value = ""}
      @change=${(event) => this.dispatchEvent(newPendingStateEvent(this.convertCimFile(event)))}
      id="cim-mapping-input"
      accept=".xml"
      type="file"
      multiple
    /> `;
  }
}
OpenProjectPlugin.styles = css`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
__decorate([
  query("#cim-mapping-input")
], OpenProjectPlugin.prototype, "pluginFileUI", 2);
