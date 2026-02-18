import {html} from "../../_snowpack/pkg/lit-element.js";
import {get, translate} from "../../_snowpack/pkg/lit-translate.js";
import {
  getValue
} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {cloneElement} from "../../_snowpack/pkg/@compas-oscd/xml.js";
import "../compas/CompasLabelsField.js";
import {
  COMPAS_SCL_PRIVATE_TYPE,
  createCompasSclName,
  createPrivate,
  getCompasSclName,
  getPrivate
} from "../compas/private.js";
export function updateSCL(sclElement) {
  return (inputs, wizard) => {
    const newValue = getValue(inputs.find((i) => i.label === "filename"));
    const labelsField = wizard.shadowRoot.querySelector("compas-labels-field");
    const privateElement = getPrivate(sclElement, COMPAS_SCL_PRIVATE_TYPE);
    const oldSclNameElement = getCompasSclName(privateElement);
    const complexAction = {
      actions: [],
      title: get("compas.scl.updateAction")
    };
    if (oldSclNameElement) {
      const oldValue = oldSclNameElement.textContent;
      if (newValue !== oldValue) {
        const newSclNameElement = cloneElement(oldSclNameElement, {});
        newSclNameElement.textContent = newValue;
        complexAction.actions.push({
          old: {element: oldSclNameElement},
          new: {element: newSclNameElement}
        });
      }
    } else {
      const newSclNameElement = createCompasSclName(sclElement, newValue);
      complexAction.actions.push({
        new: {parent: privateElement, element: newSclNameElement}
      });
    }
    if (labelsField.originalLabelsElement) {
      complexAction.actions.push({
        old: {
          parent: privateElement,
          element: labelsField.originalLabelsElement
        }
      });
    }
    complexAction.actions.push({
      new: {parent: privateElement, element: labelsField.newLabelsElement}
    });
    return [complexAction];
  };
}
export function renderCompasSCL(sclElement) {
  let privateElement = getPrivate(sclElement, COMPAS_SCL_PRIVATE_TYPE);
  if (!privateElement) {
    privateElement = createPrivate(sclElement, COMPAS_SCL_PRIVATE_TYPE);
    sclElement.prepend(privateElement);
  }
  const privateFilenameElement = getCompasSclName(privateElement);
  const filename = privateFilenameElement?.textContent ?? "";
  return [
    html`<wizard-textfield
      label="filename"
      .maybeValue=${filename}
      helper="${translate("compas.scl.filenameHelper")}"
      required
      validationMessage="${translate("textfield.required")}"
      dialogInitialFocus
    >
    </wizard-textfield>`,
    html`<h3 style="color: var(--mdc-theme-on-surface);">
        ${translate("compas.scl.labelsTitle")}
      </h3>
      <compas-labels-field
        .privateElement="${privateElement}"
      ></compas-labels-field>`
  ];
}
export function editCompasSCLWizard(sclElement) {
  return [
    {
      title: get("compas.scl.wizardTitle"),
      element: sclElement,
      primary: {
        icon: "edit",
        label: get("save"),
        action: updateSCL(sclElement)
      },
      content: renderCompasSCL(sclElement)
    }
  ];
}
