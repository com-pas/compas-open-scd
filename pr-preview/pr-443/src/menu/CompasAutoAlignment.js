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
import {LitElement, property} from "../../_snowpack/pkg/lit-element.js";
import {get} from "../../_snowpack/pkg/lit-translate.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {oscdHtml} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {
  newWizardEvent
} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import "../compas/CompasAutoAlignment.js";
export default class CompasAutoAlignmentMenuPlugin extends LitElement {
  constructor() {
    super(...arguments);
    this.editCount = -1;
  }
  autoAlignmentCompasWizard(plugin) {
    function execute() {
      return function(inputs, wizard) {
        const compasAutoAlignmentElement = wizard.shadowRoot.querySelector("compas-auto-alignment");
        if (!compasAutoAlignmentElement.valid()) {
          return [];
        }
        plugin.dispatchEvent(newPendingStateEvent(compasAutoAlignmentElement.execute()));
        return [];
      };
    }
    return [
      {
        title: get("compas.autoAlignment.title"),
        primary: {
          icon: "dashboard",
          label: get("compas.autoAlignment.button"),
          action: execute()
        },
        content: [
          oscdHtml`
            <compas-auto-alignment
              .doc="${this.doc}"
              .docName="${this.docName}"
              .docId="${this.docId}"
              .editCount=${this.editCount}
            >
            </compas-auto-alignment>
          `
        ]
      }
    ];
  }
  async run() {
    this.dispatchEvent(newWizardEvent(this.autoAlignmentCompasWizard(this)));
  }
}
__decorate([
  property({type: Number})
], CompasAutoAlignmentMenuPlugin.prototype, "editCount", 2);
