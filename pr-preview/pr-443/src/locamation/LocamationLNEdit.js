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
  LitElement,
  property
} from "../../_snowpack/pkg/lit-element.js";
import {get, translate} from "../../_snowpack/pkg/lit-translate.js";
import {patterns} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {
  checkValidity,
  wizardInputSelector
} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {oscdHtml} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js";
import {
  createEditorAction,
  getInputFieldValue,
  getPrivate,
  getPrivateTextValue,
  hasPrivateElement,
  iedHeader,
  inputFieldChanged,
  lDeviceHeader,
  lnHeader
} from "./foundation.js";
export let LocamationVMUEditElement = class extends LitElement {
  get inputs() {
    return Array.from(this.shadowRoot.querySelectorAll(wizardInputSelector));
  }
  save() {
    const locamationPrivate = getPrivate(this.logicalNode);
    if (!this.fieldsChanged(locamationPrivate, this.inputs) || !this.checkValidityInputs(this.inputs)) {
      return [];
    }
    const complexAction = {
      actions: [],
      title: get("locamation.vmu.updateAction", {
        lnName: lnHeader(this.logicalNode, this.nsdoc)
      })
    };
    complexAction.actions.push(...createEditorAction(locamationPrivate, "IDENTIFIER", getInputFieldValue(this.inputs, "identifier")));
    if (hasPrivateElement(this.logicalNode, "SUM")) {
      complexAction.actions.push(...createEditorAction(locamationPrivate, "SUM", getInputFieldValue(this.inputs, "sum")));
    } else {
      complexAction.actions.push(...createEditorAction(locamationPrivate, "CHANNEL", getInputFieldValue(this.inputs, "channel")));
    }
    complexAction.actions.push(...createEditorAction(locamationPrivate, "TRANSFORM-PRIMARY", getInputFieldValue(this.inputs, "transformPrimary")));
    complexAction.actions.push(...createEditorAction(locamationPrivate, "TRANSFORM-SECONDARY", getInputFieldValue(this.inputs, "transformSecondary")));
    return complexAction.actions.length ? [complexAction] : [];
  }
  fieldsChanged(locamationPrivate, inputs) {
    const oldIdentifier = getPrivateTextValue(locamationPrivate, "IDENTIFIER");
    const oldChannel = getPrivateTextValue(locamationPrivate, "CHANNEL");
    const oldSum = getPrivateTextValue(locamationPrivate, "SUM");
    const oldTransformPrimary = getPrivateTextValue(locamationPrivate, "TRANSFORM-PRIMARY");
    const oldTransformSecondary = getPrivateTextValue(locamationPrivate, "TRANSFORM-SECONDARY");
    return inputFieldChanged(inputs, "identifier", oldIdentifier) || (hasPrivateElement(locamationPrivate, "SUM") ? inputFieldChanged(inputs, "sum", oldSum) : false) || (hasPrivateElement(locamationPrivate, "CHANNEL") ? inputFieldChanged(inputs, "channel", oldChannel) : false) || inputFieldChanged(inputs, "transformPrimary", oldTransformPrimary) || inputFieldChanged(inputs, "transformSecondary", oldTransformSecondary);
  }
  checkValidityInputs(inputs) {
    return Array.from(inputs).every(checkValidity);
  }
  render() {
    const lDevice = this.logicalNode.closest("LDevice");
    const ied = lDevice.closest("IED");
    const locamationPrivate = getPrivate(this.logicalNode);
    let channelPattern = "[0-5]";
    let sumPattern = "[0-5],[0-5],[0-5]";
    if (this.logicalNode.getAttribute("lnClass") === "TVTR") {
      channelPattern = "[0-2]";
      sumPattern = "[0-2],[0-2],[0-2]";
    }
    return oscdHtml`
      <wizard-textfield
        label="${translate("locamation.vmu.ied.name")}"
        .maybeValue=${iedHeader(ied)}
        disabled
      >
      </wizard-textfield>
      <wizard-textfield
        label="${translate("locamation.vmu.ldevice.name")}"
        .maybeValue=${lDeviceHeader(lDevice)}
        disabled
      >
      </wizard-textfield>
      <wizard-textfield
        label="${translate("locamation.vmu.ln.name")}"
        .maybeValue=${lnHeader(this.logicalNode, this.nsdoc)}
        disabled
      >
      </wizard-textfield>

      <wizard-textfield
        label="${translate("locamation.vmu.version")}"
        .maybeValue=${getPrivateTextValue(locamationPrivate, "VERSION")}
        disabled
      >
      </wizard-textfield>

      <wizard-textfield
        id="identifier"
        label="${translate("locamation.vmu.identifier")}"
        .maybeValue=${getPrivateTextValue(locamationPrivate, "IDENTIFIER")}
        helper="${translate("locamation.vmu.identifierHelper")}"
        placeholder="134.12.213"
        pattern="^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.(?!$)|$)){3}$"
        required
        dialogInitialFocus
      >
      </wizard-textfield>

      ${hasPrivateElement(locamationPrivate, "SUM") ? oscdHtml`<wizard-textfield
            id="sum"
            label="${translate("locamation.vmu.sum")}"
            .maybeValue=${getPrivateTextValue(locamationPrivate, "SUM")}
            helper="${translate("locamation.vmu.sumHelper")}"
            placeholder="0,1,2"
            pattern="${sumPattern}"
            required
          >
          </wizard-textfield>` : oscdHtml``}
      ${hasPrivateElement(locamationPrivate, "CHANNEL") ? oscdHtml`<wizard-textfield
            id="channel"
            label="${translate("locamation.vmu.channel")}"
            .maybeValue=${getPrivateTextValue(locamationPrivate, "CHANNEL")}
            helper="${translate("locamation.vmu.channelHelper")}"
            pattern="${channelPattern}"
            required
          >
          </wizard-textfield>` : oscdHtml``}

      <wizard-textfield
        id="transformPrimary"
        label="${translate("locamation.vmu.transformPrimary")}"
        .maybeValue=${getPrivateTextValue(locamationPrivate, "TRANSFORM-PRIMARY")}
        helper="${translate("locamation.vmu.transformPrimaryHelper")}"
        pattern="${patterns.unsigned}"
        required
      >
      </wizard-textfield>
      <wizard-textfield
        id="transformSecondary"
        label="${translate("locamation.vmu.transformSecondary")}"
        .maybeValue=${getPrivateTextValue(locamationPrivate, "TRANSFORM-SECONDARY")}
        helper="${translate("locamation.vmu.transformSecondaryHelper")}"
        pattern="${patterns.unsigned}"
        required
      >
      </wizard-textfield>
    `;
  }
};
LocamationVMUEditElement.styles = css`
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
], LocamationVMUEditElement.prototype, "logicalNode", 2);
__decorate([
  property()
], LocamationVMUEditElement.prototype, "nsdoc", 2);
LocamationVMUEditElement = __decorate([
  customElement("locamation-ln-edit")
], LocamationVMUEditElement);
export function locamationLNEditWizard(logicalNode, nsdoc) {
  function save() {
    return function(inputs, wizard) {
      const locamationVMUEditElement = wizard.shadowRoot.querySelector("locamation-ln-edit");
      return locamationVMUEditElement.save();
    };
  }
  return [
    {
      title: get("locamation.vmu.ln.editTitle"),
      primary: {
        icon: "save",
        label: get("save"),
        action: save()
      },
      content: [
        oscdHtml`<locamation-ln-edit
          .logicalNode="${logicalNode}"
          .nsdoc="${nsdoc}"
        ></locamation-ln-edit>`
      ]
    }
  ];
}
