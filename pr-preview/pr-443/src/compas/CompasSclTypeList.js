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
  customElement,
  html,
  LitElement,
  property
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import {
  CompasSclDataService,
  SDS_NAMESPACE
} from "../compas-services/CompasSclDataService.js";
export function newTypeSelectedEvent(type) {
  return new CustomEvent("typeSelected", {
    bubbles: true,
    composed: true,
    detail: {type}
  });
}
export let CompasSclTypeList = class extends LitElement {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    CompasSclDataService().listOrderedSclTypes().then((types) => this.sclTypes = types);
  }
  render() {
    if (!this.sclTypes) {
      return html` <compas-loading></compas-loading> `;
    }
    if (this.sclTypes.length <= 0) {
      return html` <mwc-list>
        <mwc-list-item><i>${translate("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>`;
    }
    return html` <mwc-list>
      ${this.sclTypes.map((type) => {
      const code = type.getElementsByTagNameNS(SDS_NAMESPACE, "Code").item(0).textContent ?? "";
      const description = type.getElementsByTagNameNS(SDS_NAMESPACE, "Description").item(0).textContent ?? "";
      return html`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(newTypeSelectedEvent(code))}
        >
          <span>${description} (${code})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>`;
  }
};
__decorate([
  property()
], CompasSclTypeList.prototype, "sclTypes", 2);
CompasSclTypeList = __decorate([
  customElement("compas-scltype-list")
], CompasSclTypeList);
