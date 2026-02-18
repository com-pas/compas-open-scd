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
  property,
  state
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-icon.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/filtered-list.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/oscd-filter-button.js";
import {
  CompasSclDataService,
  SDS_NAMESPACE
} from "../compas-services/CompasSclDataService.js";
export function newSclSelectedEvent(docId) {
  return new CustomEvent("scl-selected", {
    bubbles: true,
    composed: true,
    detail: {docId}
  });
}
export let CompasSclList = class extends LitElement {
  constructor() {
    super(...arguments);
    this.labels = [];
    this.selectedLabels = [];
  }
  get filteredItems() {
    if (!this.items) {
      return void 0;
    }
    if (this.labels.length === this.selectedLabels.length) {
      return this.items;
    }
    return this.items.filter((item) => {
      const labels = Array.from(item.querySelectorAll("Label") ?? []).map((element) => element.textContent).filter((value) => !!value);
      return labels.filter((label) => this.selectedLabels.includes(label)).length > 0;
    });
  }
  firstUpdated() {
    this.fetchData();
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (_changedProperties.has("type")) {
      this.items = void 0;
      this.labels = [];
      this.selectedLabels = [];
      this.fetchData();
    }
  }
  fetchData() {
    if (this.type) {
      CompasSclDataService().listScls(this.type).then((xmlResponse) => {
        this.items = Array.from(xmlResponse.querySelectorAll("Item") ?? []);
        this.labels = Array.from(new Set(Array.from(xmlResponse.querySelectorAll("Label") ?? []).map((element) => element.textContent).filter((label) => !!label).sort((label1, label2) => label1.localeCompare(label2))));
        this.selectedLabels = this.labels;
      });
    }
  }
  render() {
    if (!this.items) {
      return html` <compas-loading></compas-loading> `;
    }
    if (this.items?.length <= 0) {
      return html` <mwc-list>
        <mwc-list-item><i>${translate("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    }
    const filteredItems = this.filteredItems;
    return html`
      <div class="filters">
        <span>${translate("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${translate("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems;
      this.requestUpdate("items");
      this.requestUpdate("filteredItems");
      this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((label) => {
      return html` <mwc-check-list-item
              value="${label}"
              ?selected="${this.selectedLabels.includes(label)}"
            >
              ${label}
            </mwc-check-list-item>`;
    })}
        </oscd-filter-button>
      </div>
      ${filteredItems && filteredItems.length > 0 ? html` <filtered-list>
            ${filteredItems.map((item) => {
      const id = item.getElementsByTagNameNS(SDS_NAMESPACE, "Id").item(0).textContent ?? "";
      let name = item.getElementsByTagNameNS(SDS_NAMESPACE, "Name").item(0).textContent ?? "";
      if (name === "") {
        name = id;
      }
      const version = item.getElementsByTagNameNS(SDS_NAMESPACE, "Version").item(0).textContent ?? "";
      return html` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(newSclSelectedEvent(id))}
              >
                ${name} (${version})
              </mwc-list-item>`;
    })}
          </filtered-list>` : html` <mwc-list>
            <mwc-list-item>
              <i>${translate("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
CompasSclList.styles = css`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
__decorate([
  property()
], CompasSclList.prototype, "type", 2);
__decorate([
  state()
], CompasSclList.prototype, "items", 2);
__decorate([
  state()
], CompasSclList.prototype, "labels", 2);
__decorate([
  state()
], CompasSclList.prototype, "selectedLabels", 2);
__decorate([
  state()
], CompasSclList.prototype, "filteredItems", 1);
CompasSclList = __decorate([
  customElement("compas-scl-list")
], CompasSclList);
