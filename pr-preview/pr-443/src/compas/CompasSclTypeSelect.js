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
  css,
  customElement,
  html,
  LitElement,
  property
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import "../../_snowpack/pkg/@material/mwc-select.js";
import {
  CompasSclDataService,
  SDS_NAMESPACE
} from "../compas-services/CompasSclDataService.js";
import {repeat} from "../../_snowpack/pkg/lit-html/directives/repeat.js";
export let CompasSclTypeSelect = class extends LitElement {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    CompasSclDataService().listOrderedSclTypes().then((types) => this.sclTypes = types);
  }
  getSelectedValue() {
    return this.shadowRoot.querySelector("mwc-select")?.selected?.value ?? null;
  }
  valid() {
    const newValue = this.getSelectedValue();
    return !!newValue;
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
    return html` <mwc-select
      fixedMenuPosition
      naturalMenuWidth="true"
      label="${translate("compas.sclType")}"
    >
      ${repeat(this.sclTypes, (type) => type.getElementsByTagNameNS(SDS_NAMESPACE, "Code").item(0).textContent ?? "", (type) => {
      const code = type.getElementsByTagNameNS(SDS_NAMESPACE, "Code").item(0).textContent ?? "";
      const description = type.getElementsByTagNameNS(SDS_NAMESPACE, "Description").item(0).textContent ?? "";
      return html`<mwc-list-item
            value="${code}"
            ?selected="${code === this.value}"
          >
            <span>${description} (${code})</span>
          </mwc-list-item>`;
    })}
    </mwc-select>`;
  }
};
CompasSclTypeSelect.styles = css`
    mwc-select {
      width: 100%;
    }
  `;
__decorate([
  property()
], CompasSclTypeSelect.prototype, "value", 2);
__decorate([
  property()
], CompasSclTypeSelect.prototype, "sclTypes", 2);
CompasSclTypeSelect = __decorate([
  customElement("compas-scltype-select")
], CompasSclTypeSelect);
