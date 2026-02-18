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
  query,
  state
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import "../../_snowpack/pkg/@material/mwc-icon.js";
import "../../_snowpack/pkg/@material/mwc-icon-button.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js";
import {
  COMPAS_LABELS_MAXIMUM,
  COMPAS_NAMESPACE,
  createLabel,
  createLabels,
  getLabels
} from "./private.js";
export let CompasLabelsFieldElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.originalLabelsElement = null;
  }
  set privateElement(privateElement) {
    this.originalLabelsElement = getLabels(privateElement);
    if (this.originalLabelsElement) {
      this.newLabelsElement = this.originalLabelsElement.cloneNode(true);
    } else {
      this.newLabelsElement = createLabels(privateElement);
    }
  }
  get labels() {
    return Array.from(this.newLabelsElement?.querySelectorAll(`:scope > Label`) ?? []).filter((element) => element.namespaceURI === COMPAS_NAMESPACE).sort((label1, label2) => (label1.textContent ?? "").localeCompare(label2.textContent ?? ""));
  }
  addLabel() {
    if (this.newLabelField.checkValidity()) {
      const value = this.newLabelField.value;
      createLabel(this.newLabelsElement, value);
      this.newLabelField.value = "";
      this.requestUpdate("labels");
    }
  }
  removeLabel(element) {
    this.newLabelsElement.removeChild(element);
    this.requestUpdate("labels");
  }
  updateLabelsInPrivateElement(privateElement) {
    if (this.originalLabelsElement) {
      privateElement?.removeChild(this.originalLabelsElement);
    }
    privateElement?.append(this.newLabelsElement);
    this.originalLabelsElement = this.newLabelsElement;
  }
  render() {
    const labels = this.labels;
    return html`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <wizard-textfield
            id="newLabel"
            label="${translate("compas.newLabel")}"
            ?disabled="${labels.length >= COMPAS_LABELS_MAXIMUM}"
            .maybeValue=${null}
            pattern="[A-Za-z][0-9A-Za-z_-]*"
            required
          >
          </wizard-textfield>
        </div>
        <div style="display: flex; align-items: center; height: 56px;">
          <mwc-icon-button
            icon="new_label"
            ?disabled="${labels.length >= COMPAS_LABELS_MAXIMUM}"
            @click=${() => {
      this.addLabel();
    }}
          ></mwc-icon-button>
        </div>
      </div>
      <mwc-list>
        ${labels.map((element) => {
      const value = element.textContent;
      return html` <mwc-list-item hasMeta graphic="icon">
            <span>${value}</span>
            <mwc-icon slot="graphic">label</mwc-icon>
            <mwc-icon-button
              icon="delete"
              slot="meta"
              @click=${() => {
        this.removeLabel(element);
      }}
            ></mwc-icon-button>
          </mwc-list-item>`;
    })}
      </mwc-list>
    `;
  }
};
CompasLabelsFieldElement.styles = css`
    wizard-textfield {
      width: 100%;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }
  `;
__decorate([
  property()
], CompasLabelsFieldElement.prototype, "privateElement", 1);
__decorate([
  property()
], CompasLabelsFieldElement.prototype, "originalLabelsElement", 2);
__decorate([
  property()
], CompasLabelsFieldElement.prototype, "newLabelsElement", 2);
__decorate([
  state()
], CompasLabelsFieldElement.prototype, "labels", 1);
__decorate([
  query("wizard-textfield#newLabel")
], CompasLabelsFieldElement.prototype, "newLabelField", 2);
CompasLabelsFieldElement = __decorate([
  customElement("compas-labels-field")
], CompasLabelsFieldElement);
