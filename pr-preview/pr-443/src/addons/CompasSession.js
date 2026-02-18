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
import {html, query, state, property, customElement, LitElement} from "../../_snowpack/pkg/lit-element.js";
import {CompasUserInfoService} from "../compas-services/CompasUserInfoService.js";
import "../compas/CompasSessionExpiringDialog.js";
import "../compas/CompasSessionExpiredDialog.js";
import {loadNsdocFiles} from "../compas/CompasNsdoc.js";
import {retrieveUserInfo} from "../compas/CompasUserInfo.js";
export function newSetSessionTimeoutsEvent(sessionWarning, sessionExpires, eventInitDict) {
  return new CustomEvent("set-session-timeouts", {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: {sessionWarning, sessionExpires, ...eventInitDict?.detail}
  });
}
export let CompasSession = class extends LitElement {
  constructor() {
    super(...arguments);
    this.expiringSessionWarning = 10 * 60 * 1e3;
    this.expiredSessionMessage = 15 * 60 * 1e3;
    this.doc = null;
    this.docName = "";
    this.editCount = -1;
    this.pingTimer = null;
    this.expiredSessionMessageTimer = null;
    this.expiringSessionWarningTimer = null;
  }
  resetKeepAlivePing() {
    this.pingTimer = null;
  }
  schedulePing() {
    if (this.pingTimer === null) {
      CompasUserInfoService().ping().finally(() => console.debug("Ping executed."));
      this.pingTimer = setTimeout(this.resetKeepAlivePing, 60 * 1e3);
    }
  }
  resetTimer() {
    if (this.expiringSessionWarningTimer) {
      clearTimeout(this.expiringSessionWarningTimer);
    }
    this.expiringSessionWarningTimer = setTimeout(() => {
      this.expiringDialogElement.show();
    }, this.expiringSessionWarning);
    if (this.expiredSessionMessageTimer) {
      clearTimeout(this.expiredSessionMessageTimer);
    }
    this.expiredSessionMessageTimer = setTimeout(() => {
      this.expiringDialogElement.close();
      this.expiredDialogElement.show();
      this.unregisterEvents();
    }, this.expiredSessionMessage);
    this.schedulePing();
  }
  setSessionTimeouts(event) {
    this.expiringSessionWarning = event.detail.sessionWarning * 60 * 1e3;
    this.expiredSessionMessage = event.detail.sessionExpires * 60 * 1e3;
    this.resetTimer();
    this.registerEvents();
  }
  registerEvents() {
    this.addEventListener("click", this.resetTimer);
    this.addEventListener("keydown", this.resetTimer);
  }
  unregisterEvents() {
    this.removeEventListener("click", this.resetTimer);
    this.removeEventListener("keydown", this.resetTimer);
    if (this.pingTimer) {
      clearTimeout(this.pingTimer);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("set-session-timeouts", this.setSessionTimeouts);
    new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
      retrieveUserInfo(this).finally(() => console.info("User info retrieved from CoMPAS"));
      loadNsdocFiles(this).finally(() => console.info("Nsdoc Files loaded from CoMPAS"));
    });
  }
  render() {
    return html`<slot></slot>
        <compas-session-expiring-dialog
            .expiringSessionWarning="${this.expiringSessionWarning}"
            .expiredSessionMessage="${this.expiredSessionMessage}"
        >
        </compas-session-expiring-dialog>
        <compas-session-expired-dialog
            .expiredSessionMessage="${this.expiredSessionMessage}"
            .doc="${this.doc}"
            .editCount=${this.editCount}
            .docName="${this.docName}"
        >
        </compas-session-expired-dialog>
        `;
  }
};
__decorate([
  state()
], CompasSession.prototype, "expiringSessionWarning", 2);
__decorate([
  state()
], CompasSession.prototype, "expiredSessionMessage", 2);
__decorate([
  property({attribute: false})
], CompasSession.prototype, "doc", 2);
__decorate([
  property({type: String})
], CompasSession.prototype, "docName", 2);
__decorate([
  property({type: Number})
], CompasSession.prototype, "editCount", 2);
__decorate([
  query("compas-session-expiring-dialog")
], CompasSession.prototype, "expiringDialogElement", 2);
__decorate([
  query("compas-session-expired-dialog")
], CompasSession.prototype, "expiredDialogElement", 2);
CompasSession = __decorate([
  customElement("compas-session")
], CompasSession);
