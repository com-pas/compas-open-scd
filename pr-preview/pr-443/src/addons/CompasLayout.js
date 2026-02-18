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
  property
} from "../../_snowpack/pkg/lit-element.js";
import {get} from "../../_snowpack/pkg/lit-translate.js";
import {OscdLayout} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/addons/Layout.js";
export let CompasLayout = class extends OscdLayout {
  connectedCallback() {
    super.connectedCallback();
    this.onUserInfo = this.onUserInfo.bind(this);
    this.host.addEventListener("userinfo", this.onUserInfo);
  }
  onUserInfo(event) {
    this.username = event.detail.name;
  }
  renderActionItems() {
    return this.componentHtml`
      ${this.username != void 0 ? this.componentHtml`<span
                    id="userField"
                    slot="actionItems"
                    style="font-family:Roboto"
                    >${get("userinfo.loggedInAs", {
      name: this.username
    })}</span
                  >` : ``}
        ${this.menu.map(this.renderActionItem)}
    `;
  }
};
__decorate([
  property({type: String})
], CompasLayout.prototype, "username", 2);
CompasLayout = __decorate([
  customElement("compas-layout")
], CompasLayout);
