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
import {css, html, LitElement, property} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "./sitipe/sitipe-substation.js";
import {isPublic} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
export default class SitipePlugin extends LitElement {
  constructor() {
    super(...arguments);
    this.editCount = -1;
  }
  header() {
    return "Sitipe";
  }
  renderSubstations() {
    return html`${this.doc?.querySelector(":root > Substation") ? html`<section>
          ${Array.from(this.doc.querySelectorAll("Substation") ?? []).filter(isPublic).map((substation) => html`<sitipe-substation
                  .doc=${this.doc}
                  .element=${substation}
                  .editCount=${this.editCount}
                ></sitipe-substation>`)}
        </section>` : html`<h1>
          <span style="color: var(--base1)"
            >${translate("substation.missing")}</span
          >
        </h1>`}`;
  }
  render() {
    return html`<div class="container">${this.renderSubstations()}</div>`;
  }
}
SitipePlugin.styles = css`
    :host {
      width: 100vw;
      padding: 16px;
    }

    .container {
      display: flex;
      padding: 8px 6px 16px;
      height: calc(100vh - 136px);
      box-sizing: border-box;
      width: 100%;
    }
    section {
      flex: 1;
    }
  `;
__decorate([
  property({attribute: false})
], SitipePlugin.prototype, "doc", 2);
__decorate([
  property({
    type: Number
  })
], SitipePlugin.prototype, "editCount", 2);
