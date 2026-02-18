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
} from "../../../_snowpack/pkg/lit-element.js";
import "../../../_snowpack/pkg/@material/mwc-menu.js";
import "../../../_snowpack/pkg/@material/mwc-list.js";
import "../../../_snowpack/pkg/@material/mwc-icon.js";
import "../../../_snowpack/pkg/@material/mwc-icon-button.js";
import "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/action-pane.js";
import "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/action-icon.js";
import "./sitipe-bay.js";
import {selectors} from "./foundation.js";
import {getAssignedBayTypicals} from "./sitipe-service.js";
export const defaultNamingStrategy = (bay, index) => {
  const bayName = (bay.getAttribute("name") || "BAY").replace(" ", "");
  const voltageLevel = bay.closest("VoltageLevel");
  const voltageLevelName = (voltageLevel?.getAttribute("name") || "VoltageLevel").replace(" ", "");
  const substation = bay.closest("Substation");
  const substationName = (substation?.getAttribute("name") || "Substation").replace(" ", "");
  const prefix = "A";
  const suffix = typeof index === "number" ? index < 10 ? `0${index}` : `${index}` : "01";
  return `${substationName}_${voltageLevelName}${bayName}${prefix}${suffix}`;
};
export let SitipeSubstation = class extends LitElement {
  constructor() {
    super(...arguments);
    this.editCount = -1;
    this.namingStrategy = defaultNamingStrategy;
    this.bayTypicals = [];
  }
  get substationHeader() {
    const name = this.element.getAttribute("name") ?? "";
    const desc = this.element.getAttribute("desc");
    return `${name} ${desc ? `- ${desc}` : ""}`;
  }
  get voltage() {
    const V = this.element.querySelector(selectors.VoltageLevel + " > Voltage");
    if (V === null)
      return null;
    const v = V.textContent ?? "";
    const m = V.getAttribute("multiplier");
    const u = m === null ? "V" : " " + m + "V";
    return v ? v + u : null;
  }
  voltageLevelHeader(voltageLevel) {
    const name = voltageLevel.getAttribute("name") ?? "";
    const desc = voltageLevel.getAttribute("desc");
    return `${name} ${desc ? `- ${desc}` : ""}
      ${this.voltage === null ? "" : `(${this.voltage})`}`;
  }
  bayHeader(bay) {
    const name = bay.getAttribute("name") ?? "";
    const desc = bay.getAttribute("desc");
    return `${name} ${desc ? `(${desc})` : ""}`;
  }
  renderBay(bay) {
    return html`<sitipe-bay
      .bay=${bay}
      .bayTypicals=${this.bayTypicals}
      .doc=${this.doc}
      .namingStrategy=${this.namingStrategy}
      .editCount=${this.editCount}
    ></sitipe-bay>`;
  }
  renderVoltageLevel(voltageLevel) {
    return html`<action-pane label="${this.voltageLevelHeader(voltageLevel)}">
      <div class="bayContainer">
        ${Array.from(voltageLevel.querySelectorAll(selectors.Bay) ?? []).map(this.renderBay.bind(this))}
      </div>
    </action-pane>`;
  }
  getBayTypicals() {
    getAssignedBayTypicals().then((res) => {
      this.bayTypicals = res;
    });
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.getBayTypicals();
  }
  render() {
    return html`<action-pane label="${this.substationHeader}">
      ${Array.from(this.element.querySelectorAll(selectors.VoltageLevel) ?? []).map(this.renderVoltageLevel.bind(this))}
    </action-pane>`;
  }
};
SitipeSubstation.styles = css`
    .bayContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      .bayContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
__decorate([
  property({attribute: false})
], SitipeSubstation.prototype, "doc", 2);
__decorate([
  property({attribute: false})
], SitipeSubstation.prototype, "element", 2);
__decorate([
  property({
    type: Number
  })
], SitipeSubstation.prototype, "editCount", 2);
__decorate([
  property()
], SitipeSubstation.prototype, "namingStrategy", 2);
__decorate([
  state()
], SitipeSubstation.prototype, "substationHeader", 1);
__decorate([
  state()
], SitipeSubstation.prototype, "voltage", 1);
__decorate([
  state()
], SitipeSubstation.prototype, "voltageLevelHeader", 1);
__decorate([
  state()
], SitipeSubstation.prototype, "bayHeader", 1);
__decorate([
  state()
], SitipeSubstation.prototype, "bayTypicals", 2);
SitipeSubstation = __decorate([
  customElement("sitipe-substation")
], SitipeSubstation);
