import {get} from "../../../_snowpack/pkg/lit-translate.js";
import {oscdHtml} from "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {
  getValue
} from "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {
  cloneElement,
  createElement,
  getChildElementsByTagName
} from "../../../_snowpack/link/packages/xml/dist/index.js";
export function editGeneralEquipmentWizard(element) {
  const name = element.getAttribute("name");
  const desc = element.getAttribute("desc");
  const type = element.getAttribute("type");
  const virtual = element.getAttribute("virtual");
  const reservedNames = getChildElementsByTagName(element.parentElement, "GeneralEquipment").filter((sibling) => sibling !== element).map((sibling) => sibling.getAttribute("name"));
  return [
    {
      title: get("wizard.title.edit", {tagName: "GeneralEquipment"}),
      primary: {
        icon: "save",
        label: get("save"),
        action: updateGeneralEquipmentAction(element)
      },
      content: [
        ...contentGeneralEquipmentWizard({
          name,
          desc,
          type,
          virtual,
          reservedNames
        })
      ]
    }
  ];
}
function updateGeneralEquipmentAction(element) {
  return (inputs) => {
    const generalEquipmentAttrs = {};
    const generalEquipmentKeys = ["name", "desc", "type", "virtual"];
    generalEquipmentKeys.forEach((key) => {
      generalEquipmentAttrs[key] = getValue(inputs.find((i) => i.label === key));
    });
    if (generalEquipmentKeys.some((key) => generalEquipmentAttrs[key] !== element.getAttribute(key))) {
      const newElement = cloneElement(element, generalEquipmentAttrs);
      return [
        {
          old: {element},
          new: {element: newElement}
        }
      ];
    }
    return [];
  };
}
export function contentGeneralEquipmentWizard(content) {
  return [
    oscdHtml`<wizard-textfield
      label="name"
      .maybeValue=${content.name}
      helper="${get("scl.name")}"
      required
      validationMessage="${get("textfield.required")}"
      .reservedValues=${content.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    oscdHtml`<wizard-textfield
      label="desc"
      .maybeValue=${content.desc}
      nullable
      helper="${get("scl.desc")}"
    ></wizard-textfield>`,
    oscdHtml`<wizard-textfield
      label="type"
      .maybeValue=${content.type}
      helper="${get("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    oscdHtml`<wizard-checkbox
      label="virtual"
      .maybeValue=${content.virtual}
      helper="${get("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
export function createGeneralEquipmentWizard(parent) {
  const name = "";
  const desc = null;
  const type = null;
  const virtual = null;
  const reservedNames = Array.from(parent.querySelectorAll("GeneralEquipment")).map((generalEquipment) => generalEquipment.getAttribute("name"));
  return [
    {
      title: get("wizard.title.add", {tagName: "GeneralEquipment"}),
      primary: {
        icon: "save",
        label: get("save"),
        action: createGeneralEquipmentAction(parent)
      },
      content: [
        ...contentGeneralEquipmentWizard({
          name,
          desc,
          type,
          virtual,
          reservedNames
        })
      ]
    }
  ];
}
function createGeneralEquipmentAction(parent) {
  return (inputs) => {
    const generalEquipmentAttrs = {};
    const generalEquipmentKeys = ["name", "desc", "type", "virtual"];
    generalEquipmentKeys.forEach((key) => {
      generalEquipmentAttrs[key] = getValue(inputs.find((i) => i.label === key));
    });
    const generalEquipment = createElement(parent.ownerDocument, "GeneralEquipment", generalEquipmentAttrs);
    return [{new: {parent, element: generalEquipment}}];
  };
}
