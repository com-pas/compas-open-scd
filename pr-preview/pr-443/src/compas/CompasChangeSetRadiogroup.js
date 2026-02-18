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
import "../../_snowpack/pkg/@material/mwc-list/mwc-radio-list-item.js";
import {ChangeSet} from "../compas-services/CompasSclDataService.js";
const changeSetDetails = new Map([
  [ChangeSet.MAJOR, {translationKey: "compas.changeset.major"}],
  [ChangeSet.MINOR, {translationKey: "compas.changeset.minor"}],
  [ChangeSet.PATCH, {translationKey: "compas.changeset.patch"}]
]);
export let CompasChangeSetRadiogroup = class extends LitElement {
  getSelectedListItem() {
    return this.shadowRoot.querySelector("mwc-list").selected;
  }
  getSelectedValue() {
    const changeSet = this.getSelectedListItem();
    if (changeSet) {
      return changeSet.value;
    }
    return null;
  }
  valid() {
    return this.getSelectedListItem() !== null;
  }
  render() {
    return html`
      <mwc-list activatable>
        ${Object.values(ChangeSet).map((key) => html`<mwc-radio-list-item value="${key}" left>
                          ${translate(changeSetDetails.get(key).translationKey)}
                        </mwc-radio-list-item>`)}
      </mwc-list>
    `;
  }
};
CompasChangeSetRadiogroup = __decorate([
  customElement("compas-changeset-radiogroup")
], CompasChangeSetRadiogroup);
