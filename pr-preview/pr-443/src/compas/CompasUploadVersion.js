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
import {get, translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import {
  newWizardEvent
} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {newLogEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newPendingStateEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js";
import {CompasExistsIn} from "./CompasExistsIn.js";
import {CompasSclDataService} from "../compas-services/CompasSclDataService.js";
import {createLogEvent} from "../compas-services/foundation.js";
import {getTypeFromDocName, updateDocumentInOpenSCD} from "./foundation.js";
import "./CompasChangeSetRadiogroup.js";
import "./CompasComment.js";
import "./CompasLoading.js";
export let CompasUploadVersionElement = class extends CompasExistsIn(LitElement) {
  getSclFileField() {
    return this.shadowRoot.querySelector('input[id="scl-file"]');
  }
  getSclFilenameField() {
    return this.shadowRoot.querySelector('wizard-textfield[id="filename"]');
  }
  getChangeSetRadiogroup() {
    return this.shadowRoot.querySelector("compas-changeset-radiogroup");
  }
  getCommentField() {
    return this.shadowRoot.querySelector("compas-comment");
  }
  valid() {
    return this.getChangeSetRadiogroup().valid() && this.getSclFileField().checkValidity() && this.getSclFilenameField().checkValidity();
  }
  processAddDocument(sclDocument) {
    updateDocumentInOpenSCD(this, sclDocument);
    this.dispatchEvent(newLogEvent({
      kind: "info",
      title: get("compas.uploadVersion.updateSuccess")
    }));
    this.dispatchEvent(newWizardEvent());
  }
  async updateDocumentInCompas() {
    const changeSet = this.getChangeSetRadiogroup().getSelectedValue();
    const comment = this.getCommentField().value;
    const docType = getTypeFromDocName(this.docName);
    const file = this.getSclFileField()?.files?.item(0) ?? false;
    if (!file)
      return;
    const text = await file.text();
    const doc = new DOMParser().parseFromString(text, "application/xml");
    await CompasSclDataService().updateSclDocument(this, docType, this.docId, {
      changeSet,
      comment,
      doc
    }).then((sclDocument) => {
      this.processAddDocument(sclDocument);
    }).catch((reason) => createLogEvent(this, reason));
  }
  render() {
    if (this.existInCompas === void 0) {
      return html` <compas-loading></compas-loading> `;
    }
    if (!this.existInCompas) {
      return html`
        <mwc-list>
          <mwc-list-item>${translate("compas.notExists")}</mwc-list-item>
        </mwc-list>
      `;
    }
    const docType = getTypeFromDocName(this.docName);
    return html`
      <input
        id="scl-file"
        accept=".${docType.toLowerCase()}"
        type="file"
        hidden
        required
        @change=${() => {
      const file = this.getSclFileField()?.files?.item(0);
      const input = this.getSclFilenameField();
      input.value = file?.name ?? "";
    }}
      />
      <wizard-textfield
        id="filename"
        required
        readonly
        label="${translate("compas.uploadVersion.filename")}"
      >
      </wizard-textfield>

      <mwc-button
        label="${translate("compas.uploadVersion.selectButton")}"
        @click=${() => {
      const input = this.shadowRoot.querySelector("#scl-file");
      input?.click();
    }}
      >
      </mwc-button>

      <compas-changeset-radiogroup></compas-changeset-radiogroup>
      <compas-comment></compas-comment>
    `;
  }
};
CompasUploadVersionElement = __decorate([
  customElement("compas-upload-version")
], CompasUploadVersionElement);
export function addVersionToCompasWizard(saveToOptions) {
  function uploadToCompas() {
    return function(inputs, wizard) {
      const compasUploadVersionElement = wizard.shadowRoot.querySelector("compas-upload-version");
      if (!compasUploadVersionElement.valid()) {
        return [];
      }
      compasUploadVersionElement.dispatchEvent(newPendingStateEvent(compasUploadVersionElement.updateDocumentInCompas()));
      return [];
    };
  }
  return [
    {
      title: get("compas.uploadVersion.title"),
      primary: {
        icon: "save",
        label: get("save"),
        action: uploadToCompas()
      },
      content: [
        html`
          <compas-upload-version
            .docName="${saveToOptions.docName}"
            .docId="${saveToOptions.docId}"
          />
        `
      ]
    }
  ];
}
