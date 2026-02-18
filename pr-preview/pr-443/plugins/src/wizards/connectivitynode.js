import {get} from "../../../_snowpack/pkg/lit-translate.js";
import {oscdHtml} from "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {isPublic} from "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
function render(name, pathName, reservedNames) {
  return [
    oscdHtml`<wizard-textfield
      label="name"
      .maybeValue=${name}
      helper="${get("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${get("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${reservedNames}
      readonly
    ></wizard-textfield>`,
    oscdHtml`<wizard-textfield
      label="pathName"
      .maybeValue=${pathName}
      helper="${get("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${get("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
export function editConnectivityNodeWizard(element) {
  const reservedNames = Array.from(element.parentNode.querySelectorAll("ConnectivityNode")).filter(isPublic).map((cNode) => cNode.getAttribute("name") ?? "").filter((name) => name !== element.getAttribute("name"));
  return [
    {
      title: get("connectivitynode.wizard.title.edit"),
      element,
      content: render(element.getAttribute("name"), element.getAttribute("pathName"), reservedNames)
    }
  ];
}
