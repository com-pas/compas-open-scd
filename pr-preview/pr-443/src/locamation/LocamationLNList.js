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
import {css, customElement, html, LitElement, property} from "../../_snowpack/pkg/lit-element.js";
import {get, translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import {newSubWizardEvent, newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {isSCLNamespace} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/schemas.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js";
import {locamationLNEditWizard} from "./LocamationLNEdit.js";
import {getPrivate, getPrivateTextValue, iedHeader, lDeviceHeader, lnHeader, LOCAMATION_PRIVATE} from "./foundation.js";
export let LocamationLNodeListElement = class extends LitElement {
  get logicaNodes() {
    return Array.from(this.lDevice.querySelectorAll("LN")).filter(isSCLNamespace).filter((element) => element.querySelector(`Private[type="${LOCAMATION_PRIVATE}"]`) !== null);
  }
  close() {
    this.dispatchEvent(newWizardEvent());
  }
  render() {
    const logicalNodes = this.logicaNodes;
    if (logicalNodes.length > 0) {
      const ied = this.lDevice.closest("IED");
      return html`
        <wizard-textfield label="IED"
                          .maybeValue=${iedHeader(ied)}
                          helper="${translate("locamation.vmu.ied.name")}"
                          disabled>
        </wizard-textfield>
        <wizard-textfield label="Logical Device"
                          .maybeValue=${lDeviceHeader(this.lDevice)}
                          helper="${translate("locamation.vmu.ldevice.name")}"
                          disabled>
        </wizard-textfield>
        <mwc-list>
          ${logicalNodes.map((ln) => {
        const locamationPrivate = getPrivate(ln);
        const locamationVersion = getPrivateTextValue(locamationPrivate, "VERSION");
        return html`
                <mwc-list-item
                  .disabled="${locamationVersion !== "1"}"
                  @click="${(e) => {
          e.target?.dispatchEvent(newSubWizardEvent(() => locamationLNEditWizard(ln, this.nsdoc)));
        }}"
                >
                  <span>${lnHeader(ln, this.nsdoc)}</span>
                </mwc-list-item>`;
      })}
        </mwc-list>
      `;
    }
    return html`
      <mwc-list>
        <mwc-list-item><i>${translate("locamation.vmu.ied.missing")}</i></mwc-list-item>
      </mwc-list>
    `;
  }
};
LocamationLNodeListElement.styles = css`
    :host {
      width: 20vw;
    }

    * {
      display: block;
      margin-top: 16px;
    }
  `;
__decorate([
  property({type: Element})
], LocamationLNodeListElement.prototype, "lDevice", 2);
__decorate([
  property()
], LocamationLNodeListElement.prototype, "nsdoc", 2);
LocamationLNodeListElement = __decorate([
  customElement("locamation-ln-list")
], LocamationLNodeListElement);
export function locamationLNListWizard(lDevice, nsdoc) {
  function close() {
    return function(inputs, wizard) {
      const locamationIEDListElement = wizard.shadowRoot.querySelector("locamation-ln-list");
      locamationIEDListElement.close();
      return [];
    };
  }
  return [
    {
      title: get("locamation.vmu.ln.title"),
      secondary: {
        icon: "close",
        label: get("close"),
        action: close()
      },
      content: [
        html`<locamation-ln-list .lDevice="${lDevice}" .nsdoc="${nsdoc}"></locamation-ln-list>`
      ]
    }
  ];
}
