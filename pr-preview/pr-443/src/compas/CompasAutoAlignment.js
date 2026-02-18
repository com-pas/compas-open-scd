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
import {get, translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-check-list-item.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {newLogEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newOpenDocEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {CompasSclAutoAlignmentService} from "../compas-services/CompasSclAutoAlignmentService.js";
import {createLogEvent} from "../compas-services/foundation.js";
let CompasAutoAlignmentElement = class extends LitElement {
  getSelectedValues() {
    const selectedItems = [];
    this.shadowRoot.querySelectorAll("mwc-check-list-item").forEach((item, key) => {
      if (item.selected) {
        selectedItems[key] = item.value;
      }
    });
    return selectedItems;
  }
  valid() {
    return this.getSelectedValues().length > 0;
  }
  async execute() {
    if (this.valid()) {
      await CompasSclAutoAlignmentService().updateSCL(this.doc, this.getSelectedValues()).then((sclDocument) => {
        this.dispatchEvent(newLogEvent({kind: "reset"}));
        this.dispatchEvent(newOpenDocEvent(sclDocument, this.docName, {
          detail: {docId: this.docId}
        }));
        this.dispatchEvent(newLogEvent({
          kind: "info",
          title: get("compas.autoAlignment.success")
        }));
        this.dispatchEvent(newWizardEvent());
      }).catch((reason) => createLogEvent(this, reason));
      this.dispatchEvent(newWizardEvent());
    }
  }
  render() {
    return html`
      ${this.doc?.querySelector(":root > Substation") ? html`
            <section id="substationsToAlign" tabindex="0">
              <mwc-list multi required>
                ${Array.from(this.doc.querySelectorAll(":root > Substation") ?? []).map((substation) => html`
                      <mwc-check-list-item
                        left
                        value="${substation.getAttribute("name")}"
                      >
                        ${substation.getAttribute("name")}
                        ${substation.getAttribute("desc") ? html`(${substation.getAttribute("desc")})` : html``}
                      </mwc-check-list-item>
                    `)}
              </mwc-list>
            </section>
          ` : html`
            <section id="noSubstationsToAlign" tabindex="0">
              <span>${translate("compas.autoAlignment.missing")}</span>
            </section>
          `}
    `;
  }
};
CompasAutoAlignmentElement.styles = css`
    #noSubstationsToAlign > span {
      color: var(--base1);
    }
  `;
__decorate([
  property({type: Document})
], CompasAutoAlignmentElement.prototype, "doc", 2);
__decorate([
  property({type: String})
], CompasAutoAlignmentElement.prototype, "docName", 2);
__decorate([
  property({type: String})
], CompasAutoAlignmentElement.prototype, "docId", 2);
CompasAutoAlignmentElement = __decorate([
  customElement("compas-auto-alignment")
], CompasAutoAlignmentElement);
export default CompasAutoAlignmentElement;
