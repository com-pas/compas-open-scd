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
  property,
  query
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {CompasSclDataService} from "../compas-services/CompasSclDataService.js";
import {createLogEvent} from "../compas-services/foundation.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/WizardDivider.js";
import "./CompasSclTypeList.js";
import "./CompasSclList.js";
import {nothing} from "../../_snowpack/pkg/lit-html.js";
import {buildDocName} from "./foundation.js";
export function newDocRetrievedEvent(localFile, doc, docName, docId) {
  return new CustomEvent("doc-retrieved", {
    bubbles: true,
    composed: true,
    detail: {localFile, doc, docName, docId}
  });
}
let CompasOpenElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.allowLocalFile = true;
  }
  async getSclDocument(docId) {
    const doc = await CompasSclDataService().getSclDocument(this, this.selectedType ?? "", docId ?? "").catch((reason) => createLogEvent(this, reason));
    if (doc instanceof Document) {
      const docName = buildDocName(doc.documentElement);
      this.dispatchEvent(newDocRetrievedEvent(false, doc, docName, docId));
    }
  }
  async getSclFile(evt) {
    const file = evt.target?.files?.item(0) ?? false;
    if (!file)
      return;
    const text = await file.text();
    const docName = file.name;
    const doc = new DOMParser().parseFromString(text, "application/xml");
    this.dispatchEvent(newDocRetrievedEvent(true, doc, docName));
  }
  renderFileSelect() {
    return html`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(evt) => this.dispatchEvent(newPendingStateEvent(this.getSclFile(evt)))}
      />

      <mwc-button
        label="${translate("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "";
      this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return html`
      <p>${translate("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(evt) => this.selectedType = evt.detail.type}
      />
    `;
  }
  renderSclList() {
    return html`
      <p>${translate("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(evt) => this.dispatchEvent(newPendingStateEvent(this.getSclDocument(evt.detail.docId)))}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${translate("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return html`
      ${this.allowLocalFile ? html`<wizard-divider></wizard-divider>
            <section>
              <h3>${translate("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : nothing}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${translate("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
__decorate([
  property()
], CompasOpenElement.prototype, "selectedType", 2);
__decorate([
  property()
], CompasOpenElement.prototype, "allowLocalFile", 2);
__decorate([
  query("#scl-file")
], CompasOpenElement.prototype, "sclFileUI", 2);
CompasOpenElement = __decorate([
  customElement("compas-open")
], CompasOpenElement);
export default CompasOpenElement;
