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
import {iedHeader, lDeviceHeader, LOCAMATION_MANUFACTURER, LOCAMATION_PRIVATE} from "./foundation.js";
import {locamationLNListWizard} from "./LocamationLNList.js";
export let LocamationIEDListElement = class extends LitElement {
  get logicaDevices() {
    return Array.from(this.doc.querySelectorAll(`IED[manufacturer="${LOCAMATION_MANUFACTURER}"] LDevice`)).filter(isSCLNamespace).filter((element) => element.querySelector(`LN > Private[type="${LOCAMATION_PRIVATE}"]`) !== null);
  }
  close() {
    this.dispatchEvent(newWizardEvent());
  }
  render() {
    const lDevices = this.logicaDevices;
    if (lDevices.length > 0) {
      return html`
        <mwc-list>
          ${lDevices.map((lDevice) => {
        const ied = lDevice.closest("IED");
        return html`
                  <mwc-list-item
                    twoline
                    @click="${(e) => {
          e.target?.dispatchEvent(newSubWizardEvent(() => locamationLNListWizard(lDevice, this.nsdoc)));
        }}"
                  >
                    <span>${iedHeader(ied)}</span>
                    <span slot="secondary">${lDeviceHeader(lDevice)}</span>
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
LocamationIEDListElement.styles = css`
    :host {
      width: 20vw;
    }
  `;
__decorate([
  property({type: Document})
], LocamationIEDListElement.prototype, "doc", 2);
__decorate([
  property()
], LocamationIEDListElement.prototype, "nsdoc", 2);
LocamationIEDListElement = __decorate([
  customElement("locamation-ied-list")
], LocamationIEDListElement);
export function locamationIEDListWizard(doc, nsdoc) {
  function close() {
    return function(inputs, wizard) {
      const locamationIEDListElement = wizard.shadowRoot.querySelector("locamation-ied-list");
      locamationIEDListElement.close();
      return [];
    };
  }
  return [
    {
      title: get("locamation.vmu.ied.title"),
      secondary: {
        icon: "close",
        label: get("close"),
        action: close()
      },
      content: [
        html`<locamation-ied-list .doc="${doc}" .nsdoc="${nsdoc}"></locamation-ied-list>`
      ]
    }
  ];
}
