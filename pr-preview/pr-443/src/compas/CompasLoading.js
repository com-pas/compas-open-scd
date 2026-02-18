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
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
export let CompasLoadingElement = class extends LitElement {
  render() {
    return html`
      <mwc-list>
        <mwc-list-item><i>${translate("compas.loading")}</i></mwc-list-item>
      </mwc-list>
    `;
  }
};
CompasLoadingElement = __decorate([
  customElement("compas-loading")
], CompasLoadingElement);
