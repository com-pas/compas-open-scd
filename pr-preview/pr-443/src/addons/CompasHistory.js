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
import {html, customElement} from "../../_snowpack/pkg/lit-element.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import "../../_snowpack/pkg/@material/mwc-dialog.js";
import "../../_snowpack/pkg/@material/mwc-icon.js";
import "../../_snowpack/pkg/@material/mwc-icon-button.js";
import "../../_snowpack/pkg/@material/mwc-icon-button-toggle.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import "../../_snowpack/pkg/@material/mwc-snackbar.js";
import {
  OscdHistory
} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/addons/History.js";
import {wizards} from "../../plugins/src/wizards/wizard-library.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {nothing} from "../../_snowpack/pkg/lit-html.js";
export var HistoryUIKind;
(function(HistoryUIKind2) {
  HistoryUIKind2["log"] = "log";
  HistoryUIKind2["history"] = "history";
  HistoryUIKind2["diagnostic"] = "diagnostic";
})(HistoryUIKind || (HistoryUIKind = {}));
export function newHistoryUIEvent(show, kind, eventInitDict) {
  return new CustomEvent("history-dialog-ui", {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: {
      show,
      kind,
      ...eventInitDict?.detail
    }
  });
}
export function newEmptyIssuesEvent(pluginSrc, eventInitDict) {
  return new CustomEvent("empty-issues", {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: {pluginSrc, ...eventInitDict?.detail}
  });
}
export function newUndoEvent() {
  return new CustomEvent("undo", {bubbles: true, composed: true});
}
export function newRedoEvent() {
  return new CustomEvent("redo", {bubbles: true, composed: true});
}
export let CompasHistory = class extends OscdHistory {
  openEditWizard(element) {
    if (element) {
      const wizard = wizards[element.tagName]?.edit(element);
      if (wizard)
        this.dispatchEvent(newWizardEvent(wizard));
    }
  }
  hasEditWizard(element) {
    if (element) {
      return !!wizards[element.tagName]?.edit(element);
    }
    return false;
  }
  renderIssueEntry(issue) {
    return html` <abbr title="${issue.title + "\n" + issue.message}">
      <mwc-list-item
        ?twoline=${!!issue.message}
        ?hasMeta=${this.hasEditWizard(issue.element)}
      >
        <span> ${issue.title}</span>
        <span slot="secondary">${issue.message}</span>
        ${this.hasEditWizard(issue.element) ? html` <span slot="meta">
              <mwc-icon-button
                icon="edit"
                @click=${() => this.openEditWizard(issue.element)}
              ></mwc-icon-button>
            </span>` : nothing}
      </mwc-list-item>
    </abbr>`;
  }
};
CompasHistory = __decorate([
  customElement("compas-history")
], CompasHistory);
